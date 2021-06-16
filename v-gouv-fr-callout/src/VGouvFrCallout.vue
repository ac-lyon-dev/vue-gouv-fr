<template>
  <div :class="`v-gouv-fr-callout fr-callout` + (icon !== null ? ' fr-fi-'+icon : '')">
    <h4 class="fr-callout__title">{{ title }}</h4>
    <p class="fr-callout__text">
      {{ description }}
    </p>
    <button v-if="buttonTitle" class="fr-btn" @click="pushClick">{{ buttonTitle }}</button>
  </div>
</template>
<script>
import "@gouvfr/dsfr/dist/css/core.min.css"
import "@gouvfr/dsfr/dist/js/core.nomodule.min.js"

import "@gouvfr/dsfr/dist/css/callouts.min.css"

import "@gouvfr/dsfr/dist/css/buttons.min.css"
import "@gouvfr/dsfr/dist/js/buttons.nomodule.min.js"

import "@gouvfr/dsfr/dist/css/schemes.min.css"
import "@gouvfr/dsfr/dist/js/schemes.nomodule.min.js"

export default {
  name: "v-gouv-fr-callout",
  props: {
    title: {
      type: String,
      default: "Titre"
    },
    description: {
      type: String,
      default: "Description"
    },
    icon: {
      type: String,
      default: null
    },
    buttonTitle: {
      type: String,
      default: null
    }
  },
  data: () => ({}),
  methods: {
    pushClick(e){
      this.$emit('click', e);
    }
  },
};
</script>