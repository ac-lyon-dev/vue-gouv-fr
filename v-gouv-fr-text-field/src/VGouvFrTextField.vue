<template>
  <div class="v-gouv-fr-text-field">
    <div :class="`fr-input-group ` + (error && !valid ? 'fr-input-group--error' : '') + (valid && !error ? 'fr-input-group--valid' : '')">
      <label class="fr-label" :for="id">{{ label }}</label>
      <p v-if="help" class="fr-hint-text" :id="id+`-hint-desc-hint`">{{ help }}</p>
      <input 
        :id="id" 
        :name="name"
        :class="`fr-input ` + (error && !valid ? 'fr-input--error' : '') + (valid && !error ? 'fr-input--valid' : '')"
        :type="inputType"
        :placeholder="placeholder" 
        :value="value" 
        @change="valueChanged"
        @keydown="keydown"
        :disabled="disabled"
        >
        <p :id="id+`-error-desc-error`" class="fr-error-text" v-if="error && !valid">
            {{ error }}
        </p>
        <p :id="id+`-error-desc-valid`" class="fr-valid-text" v-else-if="!error && valid">
            {{ valid }}
        </p>
      </div>

  </div>
</template>
<script>
  import "@gouvfr/dsfr/dist/css/core.min.css"
  import "@gouvfr/dsfr/dist/js/core.nomodule.min.js"

  import "@gouvfr/dsfr/dist/css/forms.min.css"

  import "@gouvfr/dsfr/dist/css/inputs.min.css"

  import "@gouvfr/dsfr/dist/css/schemes.min.css"
  import "@gouvfr/dsfr/dist/js/schemes.nomodule.min.js"

  export default {
    name: 'v-gouv-fr-text-field',
    props: {
      date:{
        type: Boolean,
        default: false,
      },
      disabled:{
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
        default: 'text-input-text'
      },
      label:{
        type: String,
        default: ''
      },
      name:{
        type: String,
        default: 'text-input-text'
      },
      password: {
        type: Boolean,
        default: false,
      },
      placeholder:{
        type: String,
        default: ''
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
    computed:{
      inputType:() => {
        if(this.date)
          return "date";
        else if(this.password)
          return "password";
        
        return "text";
      }
    },
    methods: {
      valueChanged(e){
        this.$emit('input', e.target.value);
        this.$emit('change',e.target.value);
      },
      keydown(e){
        if(e.keyCode === 13){
          this.$emit('input', e.target.value);
          this.$emit('change',e.target.value);
          this.$emit('enter');
        }
      }
    }
  }
</script>