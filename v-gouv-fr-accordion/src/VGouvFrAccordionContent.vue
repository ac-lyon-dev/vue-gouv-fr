<template>
  <div :class="`v-gouv-fr-accordion-content fr-collapse`+ ($parent.expanded ? ' fr-collapse--expanded v-gouv-fr-accordion-content--expanded' : '')">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'v-gouv-fr-accordion-content',
    props: {
    },
    data: () => ({
    }),
    methods: {
    }
  }
</script>
<style>
.v-gouv-fr-accordion-content--expanded{
  max-height: 100% !important;
}
</style>