<template>
  <li class="v-gouv-fr-accordion">
    <section class="fr-accordion">
      <slot></slot>
    </section>
  </li>
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