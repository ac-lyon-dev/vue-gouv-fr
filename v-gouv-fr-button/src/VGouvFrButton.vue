<template>
  <div class="v-gouv-fr-button">
    <button 
      :class="`fr-btn ` + typeClass + sizeClass + iconClass" 
      :disabled="disabled"
      :title="iconOnly ? label : undefined"
      @click="pushClick">
      <span class="sr-only" v-if="iconOnly">{{ label }}</span>
      <template v-else>
        {{ label }}
      </template>
    </button>
  </div>
</template>
<script>
  import "@gouvfr/dsfr/dist/core/core.min.css"
  import "@gouvfr/dsfr/dist/core/core.nomodule.min.js"

  import "@gouvfr/dsfr/dist/component/link/link.min.css"

  import "@gouvfr/dsfr/dist/component/button/button.min.css"
  import "@gouvfr/dsfr/dist/component/button/button.nomodule.min.js"

  import "@gouvfr/dsfr/dist/scheme/scheme.min.css"
  import "@gouvfr/dsfr/dist/scheme/scheme.module.min.js"

  export default {
    name: 'v-gouv-fr-button',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default: 'left'
      },
      iconOnly: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: 'Bouton'
      },
      primary: {
        type: Boolean,
        default: false
      },
      secondary: {
        type: Boolean,
        default: false,
      },
      tertiary: {
        type: Boolean,
        default: false,
      },
      noOutline: {
        type: Boolean,
        default: false,
      },
      small: {
        type: Boolean,
        default: false,
      },
      large: {
        type: Boolean,
        default: false,
      }
    },
    computed: { 
      //gets type class (primary or secondary or tertiary)
      typeClass: function () {
        if(this.tertiary && !this.secondary && !this.primary){
          if(this.noOutline){
            return 'fr-btn--tertiary-no-outline ' //trailing space for next classes
          }
          return 'fr-btn--tertiary ' //trailing space for next classes
        }
        if(this.secondary && !this.primary){
          return 'fr-btn--secondary ' //trailing space for next classes
        }
        return ''
      },

      //gets size class (small, medium or large)
      sizeClass: function () {
        if(this.small)
          return 'fr-btn--sm ';
        else if(this.large)
          return 'fr-btn--lg ';
        return ''
      },

      //gets icon class
      iconClass: function () {
        if(this.icon === '' || (this.iconPosition !== 'left' && this.iconPosition !== 'right'))
          return '';
        
        let computedIconClass = 'fr-icon-' + this.icon;
        if(!this.iconOnly){
          computedIconClass += ' fr-btn--icon-'+this.iconPosition
        }
        return computedIconClass;
      }
    },
    methods: {
      pushClick(e){
        this.$emit('click', e);
      }
    }
  }
</script>