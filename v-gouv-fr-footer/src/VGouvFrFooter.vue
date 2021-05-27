<template>
  <footer class="v-gouv-fr-footer fr-footer" role="contentinfo" id="footer">
    <div class="fr-container">
      <div class="fr-footer__body">
        <div class="fr-footer__brand fr-enlarge-link">
          <a :href="homeLink" title="Retour à l’accueil">
            <p class="fr-logo">
              <template v-for="(val, index) in blocMarque">
                <br :key="`bm-br`+index" v-if="index > 0"/>
                <span :key="`blocmarque`+index">{{val}}</span>
              </template>
            </p>
          </a>
        </div>
        <div class="fr-footer__content">
          <p class="fr-footer__content-desc" v-if="description !== null">{{ description }}</p>
          <ul class="fr-footer__content-list" v-if="links.length > 0">
            <template v-for="(link, index) in links">
              <li class="fr-footer__content-item" :key="`footerlink`+index" v-if="index < 4">
                <a
                  class="fr-footer__content-link"
                  :href="link.href"
                  >{{ link.title }}</a
                >
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="fr-footer__bottom" v-if="bottomLinks.length > 0 || !hideLicense || displaySetting">
        <ul class="fr-footer__bottom-list" v-if="bottomLinks.length > 0 ">
          <template v-for="(link, index) in bottomLinks">
            <li class="fr-footer__bottom-item" :key="`footerbottomlink`+index">
              <a class="fr-footer__bottom-link" :href="link.href">{{ link.title }}</a>
            </li>
          </template>
          <li class="fr-footer__bottom-item" v-if="displaySetting">
            <button class="fr-footer__bottom-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
          </li>
        </ul>
        <div class="fr-footer__bottom-copy" v-if="!hideLicense">
          <p>
            Sauf mention contraire, tous les textes de ce site sont sous
            <a
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              target="_blank"
              >licence etalab-2.0</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import "@gouvfr/dsfr/dist/css/dsfr.min.css"
import "@gouvfr/dsfr/dist/js/dsfr.nomodule.min.js"

export default {
  name: "v-gouv-fr-footer",
  props: {
    blocMarque:{
      type: Array,
      default: () => {
        return ["République", "Française"];
      }
    },
    homeLink: {
      type: String,
      default: "/"
    },
    description:{
      type: String,
      default: null
    },
    links:{
      type: Array,
      default: () => {
        return [];
      }
    },
    bottomLinks:{
      type: Array,
      default: () => {
        return [];
      }
    },
    hideLicense: {
      type: Boolean,
      default: false
    },
    displaySetting: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  methods: {},
};
</script>