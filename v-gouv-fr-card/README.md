# v-gouv-fr-card
Card Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-card`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrCard from "@vue-gouv-fr/v-gouv-fr-card"

    export default {
        name: 'App',
        components: {
            VGouvFrCard
        },
        [...]
    }
---
    <VGouvFrCard 
        title="Je suis un titre"
        details="Détails"
        description="Lorem ipsum dolor, sit amet."
        href="#"
        :image="{
            src: require('../assets/sample.jpg')
            }"
        hide-arrow
        /> 

### Attributs 
- **title** : *String* — titre
- **description** : *String* — description
- **détails** : *String* — détails
- **href** : *String* — lien
- **image** : *Object* — image
- **hide-arrow** : *Boolean* — Permet de cacher la flèche située en bas à droite de la carte
- **horizontal** : *Boolean* - Permet de passer la carte en mode horizontal
- **no-enlarge-link** : *Boolean* - Permet de désactiver l'élargissement du lien sur toute la carte (garde le lien sur le titre seulement)

