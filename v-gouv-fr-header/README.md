# v-gouv-fr-header
Header design system État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-header`
    
### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrHeader from "@vue-gouv-fr/v-gouv-fr-header"

    export default {
        name: 'App',
        components: {
            VGouvFrHeader
        },
        [...]
    }
---
    <VGouvFrHeader 
      :bloc-marque="['Académie','de Lyon']" 
      name-site="Nom du service" 
      desc-site="Description"      
      :image-operateur="{
        src: require('./assets/imageoperateur.png'),
        alt:'Alt text opérateur'
      }"
      :top-links="[{
        href: '#',
        label: 'Créer un espace',
        icon: 'add-circle-line'
      },
      {
        href: '#',
        label: 'Se connecter',
        icon: 'lock-line'
      },
      {
        href: '#',
        label: 'S\'inscrire',
        icon: 'account-line'
      }]"
      :menu-links="[{
        href: '#',
        label: 'Accès direct'
      },
      {
        href: '#',
        label: 'Accès direct'
      },
      {
        href: '#',
        label: 'Accès direct'
      }]"
      search-enabled
      v-model="searchValue"
      />

### Attributs 
- **home-link** : *String* — Lien vers la page d'accueil, valeur par défaut : "/"
- **bloc-marque** : *Array* — Bloc marque : une valeur par ligne
- **name-site** : *String* — Nom du service/site
- **desc-site** : *String* — Description du service
- **image-operateur** : *Object* — Image opérateur (src: source, alt: alternative texte)
- **top-links** : *Array* — Liens mis en avant
- **menu-links** : *Array* — Liens directs menus
- **search-enabled** : *Boolean* — active/affiche le champ de recherche
- **display-setting** : *Boolean* — active/affiche le bouton paramètre d'affichage
- *v-model* :  variable texte de  recherche en entrée/sortie