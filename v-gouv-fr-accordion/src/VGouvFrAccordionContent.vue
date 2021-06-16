<template>
  <div :class="`v-gouv-fr-accordion-content fr-collapse`+ ($parent.expanded ? ' fr-collapse--expanded' : '')"
    :style="$parent.expanded ? 'max-height: none;' : 'max-height: 0;'">
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