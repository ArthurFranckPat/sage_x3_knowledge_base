"""
Chargeur CSV avec cache en mémoire pour performance
"""
import csv
import os
from typing import Dict, List, Optional
from pathlib import Path


class CSVLoader:
    """Charge et met en cache les données CSV"""
    
    def __init__(self, data_path: str):
        self.data_path = Path(data_path)
        self._tables_cache: Optional[Dict] = None
        self._fields_cache: Optional[Dict] = None
        
    def load_tables(self) -> Dict[str, Dict]:
        """Charge toutes les tables depuis tables_X3.csv"""
        if self._tables_cache is not None:
            return self._tables_cache
            
        tables = {}
        tables_file = self.data_path / "data" / "tables_X3.csv"
        
        with open(tables_file, 'r', encoding='latin-1') as f:
            reader = csv.DictReader(f, delimiter=';')
            for row in reader:
                table_name = row.get('Code table', '').strip().strip('"')
                if table_name:
                    tables[table_name] = {
                        'name': table_name,
                        'title': row.get('Intitulé de la table', '').strip().strip('"')
                    }
        
        self._tables_cache = tables
        return tables
    
    def load_fields(self) -> Dict[str, List[Dict]]:
        """Charge tous les champs depuis tables_champs_X3.csv"""
        if self._fields_cache is not None:
            return self._fields_cache
            
        fields = {}
        fields_file = self.data_path / "data" / "tables_champs_X3.csv"
        
        with open(fields_file, 'r', encoding='latin-1') as f:
            reader = csv.DictReader(f, delimiter=';')
            for row in reader:
                table = row.get('Code table', '').strip()
                column = row.get('Code champ', '').strip()
                
                if table and column:
                    if table not in fields:
                        fields[table] = []
                    
                    fields[table].append({
                        'column': column,
                        'title': row.get('Texte long', '').strip(),
                        'type': row.get('TYPE', '').strip(),
                        'length': row.get('LONG', '').strip(),
                        'link': row.get('LIEN', '').strip(),
                        'menu': row.get('MENU_LOCAL', '').strip()
                    })
        
        self._fields_cache = fields
        return fields
    
    def search_tables(self, query: str, module: Optional[str] = None) -> List[Dict]:
        """Recherche tables par nom ou description"""
        tables = self.load_tables()
        query_lower = query.lower()
        
        results = []
        for table_name, table_info in tables.items():
            # Recherche dans le nom ou la description
            if (query_lower in table_name.lower() or 
                query_lower in table_info['title'].lower()):
                results.append({
                    'name': table_name,
                    'title': table_info['title']
                })
        
        return results[:50]  # Limiter à 50 résultats
    
    def get_table_fields(self, table_name: str) -> Optional[Dict]:
        """Obtenir tous les champs d'une table"""
        tables = self.load_tables()
        fields = self.load_fields()
        
        table_name_upper = table_name.upper()
        
        if table_name_upper not in tables:
            return None
        
        return {
            'name': table_name_upper,
            'title': tables[table_name_upper]['title'],
            'fields': fields.get(table_name_upper, []),
            'field_count': len(fields.get(table_name_upper, []))
        }
