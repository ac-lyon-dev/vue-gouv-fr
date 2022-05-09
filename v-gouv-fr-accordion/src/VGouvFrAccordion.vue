<template>
  <section class="v-gouv-fr-accordion fr-accordion">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "v-gouv-fr-accordion",
  data: () => ({
    expanded: false
  }),
  methods: {
  },
};
</script>