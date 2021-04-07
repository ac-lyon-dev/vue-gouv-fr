# v-gouv-fr-button
Button Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-button`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrButton from "@vue-gouv-fr/v-gouv-fr-button"

    export default {
        name: 'App',
        components: {
            VGouvFrButton
        },
        [...]
    }
---
    <VGouvFrButton 
      primary 
      label="Bouton primaire" 
      icon="checkbox-line" 
      icon-position="left"
      @click="maFonction"
      />

### Attributs 
- **disabled** : *Boolean* — desactive le bouton
- **icon** : *String* icone du bouton
- **icon-position** : *String* position de l'icone du bouton (valeurs `left` ou `right`)
- **icon-only** : *String* affiche seulement l'icone du bouton
- **label** : *String* — label du bouton
- **large** : *Boolean* — gros bouton
- **primary** : *Boolean* — Bouton primaire (défaut: TRUE)
- **secondary** : *Boolean* — Bouton secondaire (défaut: FALSE)
- **small** : *Boolean* — petit bouton