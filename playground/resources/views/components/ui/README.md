# UI Components Library (shadcn-inspired for Edge.js)

Design system composé de composants atomiques réutilisables pour Edge.js, inspiré de shadcn/ui.

## 🎨 Philosophie

- **Atomiques** : Petits composants focalisés sur une seule responsabilité
- **Composables** : Se combinent pour créer des interfaces complexes
- **Personnalisables** : Props et classes CSS flexibles
- **Accessibles** : Sémantique HTML correcte
- **Modernes** : Inspirés des meilleures pratiques de shadcn/ui

## 📦 Composants Disponibles

### Button
Bouton avec variants et tailles multiples.

**Props** :
- `variant`: `default` | `destructive` | `outline` | `secondary` | `ghost` | `link` (défaut: `default`)
- `size`: `sm` | `md` | `lg` | `icon` (défaut: `md`)
- `disabled`: boolean
- `loading`: boolean
- `asChild`: boolean - Pour rendre comme élément enfant (ex: lien)
- `type`: `button` | `submit` | `reset` (défaut: `button`)
- `class`: Classes CSS additionnelles

**Exemples** :
```edge
@component('components.ui.button')
  Click me
@end

@component('components.ui.button', { 
  variant: 'destructive',
  size: 'lg'
})
  Delete
@end

@component('components.ui.button', { 
  variant: 'outline',
  loading: true
})
  Loading...
@end

@component('components.ui.button', { 
  variant: 'ghost',
  size: 'icon'
})
  ⚙️
@end
```

{{-- Bouton icon --}}
@component('components.ui.button', {
  variant: 'ghost',
  size: 'icon',
  onclick: 'toggleMenu()'
})
  ☰
@end
```

---

### Card

Container avec header, content et footer optionnels.

**Props** :
- `class`: Classes CSS additionnelles

**Slots** :
- `header`: Contenu du header
- `main`: Contenu principal
- `footer`: Contenu du footer

**Exemples** :

```edge
{{-- Card complète --}}
@component('components.ui.card')
  @slot('header')
    <h3 class="card-title">Card Title</h3>
    <p class="card-description">Card description</p>
  @end

  @slot('main')
    <p>This is the main content of the card.</p>
  @end

  @slot('footer')
    @component('components.ui.button', { variant: 'outline', size: 'sm' })
      Action
    @end
  @end
@end

{{-- Card simple (content seulement) --}}
@component('components.ui.card')
  @slot('main')
    Simple card content without header or footer.
  @end
@end
```

---

### Badge

Petit label pour statuts, tags, compteurs.

**Props** :
- `variant`: `primary` | `secondary` | `success` | `warning` | `destructive` | `outline` (défaut: `primary`)
- `class`: Classes CSS additionnelles

**Exemples** :

```edge
{{-- Badges de statut --}}
@component('components.ui.badge', { variant: 'success' })
  Active
@end

@component('components.ui.badge', { variant: 'warning' })
  Pending
@end

@component('components.ui.badge', { variant: 'destructive' })
  Error
@end

{{-- Badge avec compteur --}}
@component('components.ui.badge', { variant: 'primary' })
  {{ rowCount }} rows
@end
```

---

### Alert

Boîte d'alerte/notification avec variantes.

**Props** :
- `variant`: `info` | `success` | `warning` | `destructive` (défaut: `info`)
- `class`: Classes CSS additionnelles

**Slots** :
- `title`: Titre de l'alerte (optionnel)
- `main`: Description/contenu de l'alerte

**Exemples** :

```edge
{{-- Alert success avec titre --}}
@component('components.ui.alert', { variant: 'success' })
  @slot('title')
    ✓ Success!
  @end
  @slot('main')
    Your changes have been saved successfully.
  @end
@end

{{-- Alert destructive simple --}}
@component('components.ui.alert', { variant: 'destructive' })
  @slot('main')
    An error occurred while processing your request.
  @end
@end

{{-- Alert info avec liste --}}
@component('components.ui.alert', { variant: 'info' })
  @slot('title')
    ℹ Information
  @end
  @slot('main')
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  @end
@end
```

---

### Separator

Ligne de séparation horizontale ou verticale.

**Props** :
- `orientation`: `horizontal` | `vertical` (défaut: `horizontal`)
- `class`: Classes CSS additionnelles

**Exemples** :

```edge
{{-- Separator horizontal --}}
@component('components.ui.separator')
@end

{{-- Separator vertical --}}
@component('components.ui.separator', { orientation: 'vertical' })
@end

{{-- Separator avec marge custom --}}
@component('components.ui.separator', { class: 'my-4' })
@end
```

---

## 🎯 Composition de Composants

Les composants peuvent être combinés pour créer des interfaces complexes :

```edge
@component('components.ui.card')
  @slot('header')
    <div class="flex items-center justify-between">
      <h3 class="card-title">Query Results</h3>
      <div class="flex gap-2">
        @component('components.ui.badge', { variant: 'primary' })
          {{ rowCount }} rows
        @end
        @component('components.ui.badge', { variant: 'secondary' })
          {{ executionTime }}ms
        @end
      </div>
    </div>
  @end

  @slot('main')
    @if(validation.valid)
      @component('components.ui.alert', { variant: 'success' })
        @slot('main')
          Query executed successfully!
        @end
      @end
    @else
      @component('components.ui.alert', { variant: 'destructive' })
        @slot('title')
          Error
        @end
        @slot('main')
          {{ validation.errors[0] }}
        @end
      @end
    @end
  @end

  @slot('footer')
    @component('components.ui.button', { variant: 'primary', size: 'sm' })
      Export
    @end
    @component('components.ui.button', { variant: 'outline', size: 'sm' })
      Clear
    @end
  @end
@end
```

## 🎨 Personnalisation

Tous les composants acceptent une prop `class` pour ajouter des classes CSS personnalisées :

```edge
@component('components.ui.button', { 
  variant: 'primary',
  class: 'w-full mt-4 shadow-lg'
})
  Full Width Button
@end
```

## 🔧 Variables CSS

Les composants utilisent les variables CSS du design system (`design-system.css`) :

- `--primary`, `--secondary`, `--accent`, `--destructive`, `--warning`, `--success`
- `--background`, `--foreground`, `--muted`, `--card`
- `--border`, `--input`, `--ring`
- `--radius`

---

## 📚 Bonnes Pratiques

1. **Utiliser les variants** plutôt que des classes CSS personnalisées pour la cohérence
2. **Composer** les composants plutôt que créer des variantes complexes
3. **Slots nommés** pour une structure claire
4. **Props sémantiques** (`type="submit"` pour les boutons de formulaire)
5. **Accessibilité** : utiliser les attributs ARIA quand nécessaire

---

## 🚀 Prochains Composants à Créer

- [ ] Input (text, email, password, etc.)
- [ ] Textarea
- [ ] Select / Dropdown
- [ ] Checkbox / Radio
- [ ] Switch / Toggle
- [ ] Dialog / Modal
- [ ] Dropdown Menu
- [ ] Toast Notification
- [ ] Progress Bar
- [ ] Skeleton Loader
- [ ] Avatar
- [ ] Tooltip
- [ ] Tabs
- [ ] Accordion

