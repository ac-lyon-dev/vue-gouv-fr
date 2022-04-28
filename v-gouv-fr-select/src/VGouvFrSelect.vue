<template>
  <div :class="`v-gouv-fr-select fr-select-group ` + (error && !valid ? 'fr-select-group--error' : '') + (valid && !error ? 'fr-select-group--valid' : '')">
    <label class="fr-label" :for="id" v-if="label">
      {{ label }}
      <span class="fr-hint-text" v-if="help">{{ help }}</span>
    </label>
    <select :class="`fr-select ` +  (error && !valid ? 'fr-select--error' : '') + (valid && !error ? 'fr-select--valid' : '')" :disabled="disabled" :id="id" :name="name" @change="change">
      <option value="" :selected="value === null || value === undefined || value === ''" disabled hidden>{{ defaultOption }}</option>
      <template v-for="(item, index) in items">
        <option :value="item.value" :key="id+`-option-`+index" :selected="value === item.value">{{ item.label }}</option>
      </template>
    </select>
    <p v-if="error && !valid" :id="id + `-desc-error`" class="fr-error-text">
      {{ error }}
    </p>
    <p v-if="!error && valid" :id="id + `-desc-valid`" class="fr-valid-text">
      {{ valid }}
    </p>
  </div>
</template>
<script>
  import "@gouvfr/dsfr/dist/core/core.min.css"
  import "@gouvfr/dsfr/dist/component/form/form.min.css"
  import "@gouvfr/dsfr/dist/component/select/select.min.css"

  export default {
    name: 'v-gouv-fr-select',
    props: {
      defaultOption: {
        type: String,
        default: 'Sélectionnez une option'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      error:{
        type: String,
        default: ''
      },
      help:{
        type: String,
        default: ''
      },
      id:{
        type: String,
        default: 'mon-select'
      },
      items: {
        type: Array,
        default: () => {
          return []
        }
      },
      label:{
        type: String,
        default: ''
      },
      name:{
        type: String,
        default: 'mon-select'
      },
      valid:{
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: null
      },
    },
    methods: {
      change(e){
        this.$emit('input', e.target.value);
        this.$emit('change',e.target.value);
      }
    }
  }
</script>