# v-gouv-fr-footer
Footer Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-footer`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrFooter from "@vue-gouv-fr/v-gouv-fr-footer"

    export default {
        name: 'App',
        components: {
            VGouvFrFooter
        },
        [...]
    }
---
    <VGouvFrFooter 
      :bloc-marque="['Académie','de Lyon']" 
      description="Lorem ipsum dolor sit amet."
      :links="[
        {
          title: 'ac-lyon.fr',
          href: 'http://www.ac-lyon.fr'
        },
        {
          title: 'education.gouv.fr',
          href: 'https://education.gouv.fr'
        },
      ]"
      :bottom-links="[
        {
          title: 'Plan du site',
          href: '#'
        },
        {
          title: 'Mentions légales',
          href: '#'
        },
        {
          title: 'Accessibilité : non conforme',
          href: '#'
        }
      ]"/>

### Attributs 
- **bloc-marque** : *Array* — Bloc marque : une valeur par ligne
- **description** : *String* — description
- **links** : *Array* — Liens références
- **bottom-links** : *Array* — Liens obligations légales