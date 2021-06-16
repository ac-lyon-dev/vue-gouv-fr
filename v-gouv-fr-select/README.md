# v-gouv-fr-select
Button Design System État

## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-select`

### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/dsfr`

### Utilisation
    import VGouvFrSelect from "@vue-gouv-fr/v-gouv-fr-select"

    export default {
        name: 'App',
        components: {
            VGouvFrSelect
        },
        [...]
    }
---
    <VGouvFrSelect 
        id="mon-select"
        name="mon-select"
        help="Description"
        label="Ma liste de valeur"
        default-option="Sélectionnez un item dans la liste"
        :items="monTableau.map((val) => {
            return { label: val, value: val }
        })"
        v-model="valeurSelectionnee"
        /> 

### Attributs 
- *v-model* : *String* —  variable en entrée/sortie de la valeur sélectionnée
- **default-option** : *String* — Label de l'option par défaut. Cette valeur est "Sélectionnez une option" par défaut
- **disabled** : *Boolean* — desactive le champ
- **error** : *String* — message d'erreur (si erreur)
- **help** : *String* — message d'aide 
- **id** : *String* — id du champ
- **items** : *Array* — Tableau contenant les items de la liste. Les objets de la liste doivent contenir un attribut `label` et un attribut `value` 
- **label** : *String* — label du champ
- **name** : *String* — nom du champ
- **valid** : *String* — message de validation (si valide)
