<template>
  <div
    :class="
      `v-gouv-fr-card fr-card` +
      (!noEnlargeLink ? ' fr-enlarge-link' : '') +
      (horizontal ? ' fr-card--horizontal' : '') +
      (hideArrow ? ' fr-card--no-arrow' : '')
    "
  >
    <div class="fr-card__body">
      <h4 class="fr-card__title">
        <template v-if="href !== null">
          <a :href="href" class="fr-card__link">{{ title }}</a>
        </template>
        <template v-else>
          {{ title }}
        </template>
      </h4>
      <p class="fr-card__desc" v-if="description !== null">
        {{ description }}
      </p>
      <p class="fr-card__detail" v-if="details !== null">{{ details }}</p>
    </div>
    <div class="fr-card__img" v-if="image !== null && image.src !== null">
      <img :src="image.src" class="fr-responsive-img" alt="" />
    </div>
  </div>
</template>
<script>
import "@gouvfr/dsfr/dist/core/core.min.css"
import "@gouvfr/dsfr/dist/core/core.nomodule.min.js"

import "@gouvfr/dsfr/dist/component/link/link.min.css"

import "@gouvfr/dsfr/dist/component/card/card.min.css"

import "@gouvfr/dsfr/dist/scheme/scheme.min.css"
import "@gouvfr/dsfr/dist/scheme/scheme.module.min.js"
export default {
  name: "v-gouv-fr-card",
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    noEnlargeLink: {
      type: Boolean,
      default: false,
    },
    image: {
      type: Object,
      default: null,
    },
    hideArrow: {
      type: Boolean,
      default: false,
    },
    details: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: "Titre",
    },
    description: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
  methods: {},
};
</script>