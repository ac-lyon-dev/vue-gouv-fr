<template>
  <header role="banner" class="v-gouv-fr-header fr-header">
    <div class="fr-header__body">
      <div class="fr-container">
        <div class="fr-header__body-row">
          <div class="fr-header__brand fr-enlarge-link">
            <div class="fr-header__brand-top">
              <div class="fr-header__logo">
                <p class="fr-logo">
                  <template v-for="(val, index) in blocMarque">
                    <br :key="`bm-br` + index" v-if="index > 0" />
                    <span :key="`blocmarque` + index">{{ val }}</span>
                  </template>
                </p>
              </div>
              <div class="fr-header__operator" v-if="imageOperateur !== null">
                <img
                  :src="imageOperateur.src"
                  class="fr-responsive-img"
                  style="max-width: 9.0625rem"
                  :alt="imageOperateur.alt || `Image opérateur`"
                />
              </div>
              <div
                class="fr-header__navbar"
                v-if="searchEnabled || topLinks.length > 0 || menuLinks > 0"
              >
                <button
                  class="fr-btn--search fr-btn"
                  data-fr-opened="false"
                  aria-controls="modal-866"
                  title="Rechercher"
                  v-if="searchEnabled"
                >
                  Rechercher
                </button>
                <button
                  class="fr-btn--menu fr-btn"
                  data-fr-opened="false"
                  aria-controls="modal-870"
                  aria-haspopup="menu"
                  title="Menu"
                >
                  Menu
                </button>
              </div>
            </div>
            <div class="fr-header__service" v-if="nameSite !== null">
              <a href="/" :title="`Accueil - ` + nameSite">
                <p class="fr-header__service-title">{{ nameSite }}</p>
              </a>
              <p class="fr-header__service-tagline">
                {{ descSite }}
              </p>
            </div>
          </div>
          <div
            class="fr-header__tools"
            v-if="searchEnabled || topLinks.length > 0 || displaySetting"
          >
            <div
              class="fr-header__tools-links"
              v-if="topLinks.length > 0 || displaySetting"
            >
              <ul class="fr-links-group">
                <li v-for="(link, index) in topLinks" :key="`toplinks` + index">
                  <!-- On ne peut afficher que les 3 premiers -->
                  <a
                    v-if="
                      (!displaySetting && index < 3) ||
                      (displaySetting && index < 2)
                    "
                    :class="`fr-link fr-fi-` + link.icon"
                    :href="link.href"
                    >{{ link.label }}</a
                  >
                </li>
                <li v-if="displaySetting">
                  <button
                    class="fr-link fr-fi-theme-fill fr-link--icon-left"
                    aria-controls="fr-theme-modal"
                    data-fr-opened="false"
                  >
                    Paramètres d'affichage
                  </button>
                </li>
              </ul>
            </div>
            <div
              class="fr-header__search fr-modal"
              id="modal-866"
              v-if="searchEnabled"
            >
              <div class="fr-container fr-container-lg--fluid">
                <button
                  class="fr-link--close fr-link"
                  aria-controls="modal-866"
                >
                  Fermer
                </button>
                <div class="fr-search-bar" id="search-865" role="search">
                  <label class="fr-label" for="search-865-input"
                    >Recherche
                  </label>
                  <input
                    class="fr-input"
                    placeholder="Rechercher"
                    type="search"
                    id="search-865-input"
                    name="search-865-input"
                    :value="value"
                    @change="valueChanged"
                    @keydown="keydown"
                  />
                  <button class="fr-btn" title="Rechercher">Rechercher</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="fr-header__menu fr-modal"
      id="modal-870"
      aria-labelledby="button-871"
      v-if="menuLinks.length > 0 || topLinks.length > 0"
    >
      <div class="fr-container">
        <button class="fr-link--close fr-link" aria-controls="modal-870">
          Fermer
        </button>
        <div class="fr-header__menu-links"></div>
        <nav
          class="fr-nav"
          id="navigation-869"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul class="fr-nav__list">
            <li
              v-for="(link, index) in menuLinks"
              :key="`menulinks` + index"
              class="fr-nav__item"
            >
              <a class="fr-nav__link" :href="link.href" target="_self">{{
                link.label
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <dialog
      v-if="displaySetting"
      id="fr-theme-modal"
      class="fr-modal"
      role="dialog"
      aria-labelledby="fr-theme-modal-title"
    >
      <div class="fr-container fr-container--fluid fr-container-md">
        <div class="fr-grid-row fr-grid-row--center">
          <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
            <div class="fr-modal__body">
              <div class="fr-modal__header">
                <button
                  class="fr-link--close fr-link"
                  aria-controls="fr-theme-modal"
                >
                  Fermer
                </button>
              </div>
              <div class="fr-modal__content">
                <h1 id="fr-theme-modal-title" class="fr-modal__title">
                  Paramètres d’affichage
                </h1>
                <div id="fr-switch-theme" class="fr-form-group fr-switch-theme">
                  <fieldset class="fr-fieldset">
                    <legend class="fr-fieldset__legend fr-text--regular">
                      Choisissez un thème pour personnaliser l’apparence du
                      site.
                    </legend>
                    <div class="fr-fieldset__content">
                      <div class="fr-radio-group fr-radio-rich">
                        <input
                          type="radio"
                          id="fr-radios-theme-light"
                          name="fr-radios-theme"
                          value="light"
                        />
                        <label class="fr-label" for="fr-radios-theme-light"
                          >Thème clair
                        </label>
                      </div>
                      <div class="fr-radio-group fr-radio-rich">
                        <input
                          type="radio"
                          id="fr-radios-theme-dark"
                          name="fr-radios-theme"
                          value="dark"
                        />
                        <label class="fr-label" for="fr-radios-theme-dark"
                          >Thème sombre
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  </header>
</template>
<script>
import "@gouvfr/dsfr/dist/css/dsfr.min.css";
import "@gouvfr/dsfr/dist/js/dsfr.nomodule.min.js";

export default {
  name: "v-gouv-fr-header",
  props: {
    blocMarque: {
      type: Array,
      default: () => {
        return ["République", "Française"];
      },
    },
    nameSite: {
      type: String,
      default: null,
    },
    descSite: {
      type: String,
      default: "",
    },
    imageOperateur: {
      type: Object,
      default: null,
    },
    topLinks: {
      type: Array,
      default: () => {
        return [];
      },
    },
    menuLinks: {
      type: Array,
      default: () => {
        return [];
      },
    },
    searchEnabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    displaySetting: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  methods: {
    valueChanged(e) {
      this.$emit("input", e.target.value);
      this.$emit("change", e.target.value);
    },
    keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("input", e.target.value);
        this.$emit("change", e.target.value);
        this.$emit("enter");
      }
    },
  },
};
</script>