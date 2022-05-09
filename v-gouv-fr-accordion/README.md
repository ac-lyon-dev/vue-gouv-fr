# v-gouv-fr-accordion
accordion Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-accordion`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import {VGouvFrAccordionsGroup, VGouvFrAccordion, VGouvFrAccordionHeader, VGouvFrAccordionContent} from "@vue-gouv-fr/v-gouv-fr-accordion"
    import "@vue-gouv-fr/v-gouv-fr-accordion/dist/v-gouv-fr-accordion.css"

    export default {
        name: 'App',
        components: {
            VGouvFrAccordionsGroup,
            VGouvFrAccordion,
            VGouvFrAccordionHeader,
            VGouvFrAccordionContent
        },
        [...]
    }
---
    <VGouvFrAccordionsGroup>
        <VGouvFrAccordion id="jesuisunaccordeon">
            <VGouvFrAccordionHeader>Je suis un test</VGouvFrAccordionHeader>
            <VGouvFrAccordionContent>
            Je suis une description
            </VGouvFrAccordionContent>
        </VGouvFrAccordion>
    </VGouvFrAccordionsGroup>
