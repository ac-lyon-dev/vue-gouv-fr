# v-gouv-fr-callout
Callout Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-callout`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrCallout from "@vue-gouv-fr/v-gouv-fr-callout"

    export default {
        name: 'App',
        components: {
            VGouvFrCallout
        },
        [...]
    }
---
    <VGouvFrCallout 
      title="Mon titre" 
      description="Ma description" 
      button-title="Je suis un bouton" 
      icon="information-line"/>

### Attributs 
- **title** : *String* — Titre
- **description** : *String* — Description
- **button-title** : *String* — Titre du bouton (optionnel)
- **icon** : *String* — Icone (optionnelle)