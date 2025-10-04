"""
Chargeur de menus locaux avec cache
"""
import json
from typing import Dict, List, Optional
from pathlib import Path


class MenuLoader:
    """Charge et met en cache les menus locaux"""
    
    def __init__(self, data_path: str):
        self.data_path = Path(data_path)
        self._menus_cache: Optional[Dict] = None
    
    def load_menus(self) -> Dict:
        """Charge tous les menus depuis menus_locaux.json"""
        if self._menus_cache is not None:
            return self._menus_cache
        
        menus_file = self.data_path / "menus" / "menus_locaux.json"
        
        with open(menus_file, 'r', encoding='utf-8') as f:
            self._menus_cache = json.load(f)
        
        return self._menus_cache
    
    def search_menus(self, query: str) -> List[Dict]:
        """Recherche menus par numéro ou titre"""
        menus = self.load_menus()
        query_lower = query.lower()
        
        results = []
        for menu_num, menu_data in menus.items():
            # Recherche par numéro ou titre
            if (query_lower in menu_num or 
                query_lower in menu_data.get('title', '').lower()):
                results.append({
                    'menu_num': int(menu_num),
                    'title': menu_data.get('title', ''),
                    'value_count': len(menu_data.get('values', {}))
                })
        
        # Trier par numéro de menu
        results.sort(key=lambda x: x['menu_num'])
        return results[:20]  # Limiter à 20 résultats
    
    def get_menu_values(self, menu_number: int) -> Optional[Dict]:
        """Obtenir les valeurs d'un menu local"""
        menus = self.load_menus()
        menu_key = str(menu_number)
        
        if menu_key not in menus:
            return None
        
        menu_data = menus[menu_key]
        return {
            'menu_num': menu_number,
            'title': menu_data.get('title', ''),
            'values': menu_data.get('values', {})
        }
