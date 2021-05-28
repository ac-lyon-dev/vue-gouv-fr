<template>
  <ul class="v-gouv-fr-accordions-group fr-accordions-group">
    <slot></slot>
  </ul>
</template>
<script>
import "@gouvfr/dsfr/dist/css/dsfr.min.css";
import "@gouvfr/dsfr/dist/js/dsfr.nomodule.min.js";
  export default {
    name: 'v-gouv-fr-accordions-group',
    props: {
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>