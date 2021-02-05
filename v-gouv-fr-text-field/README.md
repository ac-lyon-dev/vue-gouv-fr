# v-gouv-fr-text-field
Textfield design system État


## Installation
**Le composant n'est pas disponible sur le registry NPM public**

`yarn add @vue-gouv-fr/v-gouv-fr-text-field`
    
### Requiert
- le projet hôte doit avoir une dépendance NPM à `@gouvfr/inputs`

### Utilisation
    import VGouvFrTextField from "@vue-gouv-fr/v-gouv-fr-text-field"

    export default {
        name: 'App',
        components: {
            VGouvFrTextField
        },
        [...]
    }
---
    <VGouvFrTextField 
      v-model="maVariableDeTexte"
      help="Aide pour mon champ de saisie"
      id="monchampsaisie"
      label="Mon champ de saisie"
      name="champsaisie
      password
      placeholder="Placeholder"
      />

### Attributs 
- *v-model* :  variable en entrée/sortie
- **disabled** : *Boolean* — desactive le champ
- **error** : *String* — message d'erreur (si erreur)
- **help** : *String* — message d'aide 
- **id** : *String* — id du champ
- **label** : *String* — label du champ
- **name** : *String* — nom du champ
- **password** : *Boolean* — marque le champ comme mot de passe
- **placeholder** : *String* — placeholder du champ
- **valid** : *String* — message de validation (si valide)