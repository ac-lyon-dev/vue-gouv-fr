<template>
  <h3 class="v-gouv-fr-accordion-header fr-accordion__title">
    <button
      class="fr-accordion__btn"
      :aria-expanded="$parent.expanded"
      @click="toggle"
    >
      <slot></slot>
    </button>
  </h3>
</template>
<script>
  export default {
    name: 'v-gouv-fr-accordion-header',
    props: {
    },
    data: () => ({
    }),
    methods: {
      toggle(){
        this.$parent.expanded = !this.$parent.expanded;
      }
    }
  }
</script>