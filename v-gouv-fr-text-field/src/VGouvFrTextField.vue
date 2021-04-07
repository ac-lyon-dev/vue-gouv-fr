<template>
  <div class="v-gouv-fr-text-field">
    <div :class="`rf-input-group ` + (error && !valid ? 'rf-input-group--error' : '') + (valid && !error ? 'rf-input-group--valid' : '')" :data-rf-theme="theme">
      <label class="rf-label" :for="id" :data-rf-theme="theme">{{ label }}</label>
      <p v-if="help" class="rf-hint-text" :id="id+`-hint-desc-hint`" :data-rf-theme="theme">{{ help }}</p>
      <input 
        :id="id" 
        :name="name"
        :class="`rf-input ` + (error && !valid ? 'rf-input--error' : '') + (valid && !error ? 'rf-input--valid' : '')"
        :type="password ? 'password' : 'text'"
        :placeholder="placeholder" 
        :value="value" 
        @change="valueChanged"
        @keydown="keydown"
        :disabled="disabled"
        :data-rf-theme="theme"
        >
        <p :id="id+`-error-desc-error`" class="rf-error-text" v-if="error && !valid" :data-rf-theme="theme">
            {{ error }}
        </p>
        <p :id="id+`-error-desc-valid`" class="rf-valid-text" v-else-if="!error && valid" :data-rf-theme="theme">
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
      theme: {
        type: String,
        default: 'auto',
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