<template>
  <div :class="`v-gouv-fr-callout fr-callout` + (icon !== null ? ' fr-icon-'+icon : '')">
    <h4 class="fr-callout__title">{{ title }}</h4>
    <p class="fr-callout__text">
      {{ description }}
    </p>
    <button v-if="buttonTitle" class="fr-btn" @click="pushClick">{{ buttonTitle }}</button>
  </div>
</template>
<script>
import "@gouvfr/dsfr/dist/core/core.min.css"
import "@gouvfr/dsfr/dist/core/core.nomodule.min.js"

import "@gouvfr/dsfr/dist/component/callout/callout.min.css"

import "@gouvfr/dsfr/dist/component/button/button.min.css"
import "@gouvfr/dsfr/dist/component/button/button.nomodule.min.js"

import "@gouvfr/dsfr/dist/scheme/scheme.min.css"
import "@gouvfr/dsfr/dist/scheme/scheme.module.min.js"

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