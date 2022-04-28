'use strict';

require('@gouvfr/dsfr/dist/core/core.min.css');
require('@gouvfr/dsfr/dist/component/link/link.min.css');
require('@gouvfr/dsfr/dist/component/logo/logo.min.css');
require('@gouvfr/dsfr/dist/component/form/form.min.css');
require('@gouvfr/dsfr/dist/component/button/button.min.css');
require('@gouvfr/dsfr/dist/component/badge/badge.min.css');
require('@gouvfr/dsfr/dist/component/navigation/navigation.min.css');
require('@gouvfr/dsfr/dist/component/modal/modal.min.css');
require('@gouvfr/dsfr/dist/component/input/input.min.css');
require('@gouvfr/dsfr/dist/component/search/search.min.css');
require('@gouvfr/dsfr/dist/component/header/header.min.css');
require('@gouvfr/dsfr/dist/core/core.nomodule.min.js');
require('@gouvfr/dsfr/dist/component/navigation/navigation.nomodule.min.js');
require('@gouvfr/dsfr/dist/component/modal/modal.nomodule.min.js');
require('@gouvfr/dsfr/dist/component/header/header.nomodule.min.js');

//
var script = {
  name: "v-gouv-fr-header",
  props: {
    blocMarque: {
      type: Array,
      default: function _default() {
        return ["République", "Française"];
      }
    },
    homeLink: {
      type: String,
      default: "/"
    },
    nameSite: {
      type: String,
      default: null
    },
    descSite: {
      type: String,
      default: ""
    },
    imageOperateur: {
      type: Object,
      default: null
    },
    topLinks: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    menuLinks: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    searchEnabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: null
    },
    displaySetting: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  methods: {
    valueChanged: function valueChanged(e) {
      this.$emit("input", e.target.value);
      this.$emit("change", e.target.value);
    },
    keydown: function keydown(e) {
      if (e.keyCode === 13) {
        this.$emit("input", e.target.value);
        this.$emit("change", e.target.value);
        this.$emit("enter");
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"v-gouv-fr-header fr-header",attrs:{"role":"banner"}},[_c('div',{staticClass:"fr-header__body"},[_c('div',{staticClass:"fr-container"},[_c('div',{staticClass:"fr-header__body-row"},[_c('div',{staticClass:"fr-header__brand fr-enlarge-link"},[_c('div',{staticClass:"fr-header__brand-top"},[_c('div',{staticClass:"fr-header__logo"},[_c('p',{staticClass:"fr-logo"},[_vm._l((_vm.blocMarque),function(val,index){return [(index > 0)?_c('br',{key:"bm-br" + index}):_vm._e(),_vm._v(" "),_c('span',{key:"blocmarque" + index},[_vm._v(_vm._s(val))])]})],2)]),_vm._v(" "),(_vm.imageOperateur !== null)?_c('div',{staticClass:"fr-header__operator"},[_c('img',{staticClass:"fr-responsive-img",staticStyle:{"max-width":"9.0625rem"},attrs:{"src":_vm.imageOperateur.src,"alt":_vm.imageOperateur.alt || "Image opérateur"}})]):_vm._e(),_vm._v(" "),(_vm.searchEnabled || _vm.topLinks.length > 0 || _vm.menuLinks > 0 || _vm.displaySetting)?_c('div',{staticClass:"fr-header__navbar"},[(_vm.searchEnabled)?_c('button',{staticClass:"fr-btn--search fr-btn",attrs:{"data-fr-opened":"false","aria-controls":"modal-866","title":"Rechercher"}},[_vm._v("\n                Rechercher\n              ")]):_vm._e(),_vm._v(" "),_c('button',{staticClass:"fr-btn--menu fr-btn",attrs:{"data-fr-opened":"false","aria-controls":"modal-870","aria-haspopup":"menu","title":"Menu"}},[_vm._v("\n                Menu\n              ")])]):_vm._e()]),_vm._v(" "),(_vm.nameSite !== null)?_c('div',{staticClass:"fr-header__service"},[_c('a',{attrs:{"href":_vm.homeLink,"title":"Accueil - " + _vm.nameSite}},[_c('p',{staticClass:"fr-header__service-title"},[_vm._v(_vm._s(_vm.nameSite))])]),_vm._v(" "),_c('p',{staticClass:"fr-header__service-tagline"},[_vm._v("\n              "+_vm._s(_vm.descSite)+"\n            ")])]):_vm._e()]),_vm._v(" "),(_vm.searchEnabled || _vm.topLinks.length > 0 || _vm.displaySetting)?_c('div',{staticClass:"fr-header__tools"},[(_vm.topLinks.length > 0 || _vm.displaySetting)?_c('div',{staticClass:"fr-header__tools-links"},[_c('ul',{staticClass:"fr-links-group"},[_vm._l((_vm.topLinks),function(link,index){return _c('li',{key:"toplinks" + index},[(
                    (!_vm.displaySetting && index < 3) ||
                    (_vm.displaySetting && index < 2)
                  )?_c('a',{class:"fr-link fr-icon-" + link.icon,attrs:{"href":link.href}},[_vm._v(_vm._s(link.label))]):_vm._e()])}),_vm._v(" "),(_vm.displaySetting)?_c('li',[_c('button',{staticClass:"fr-link fr-icon-theme-fill fr-link--icon-left",attrs:{"aria-controls":"fr-theme-modal","data-fr-opened":"false"}},[_vm._v("\n                  Paramètres d'affichage\n                ")])]):_vm._e()],2)]):_vm._e(),_vm._v(" "),(_vm.searchEnabled)?_c('div',{staticClass:"fr-header__search fr-modal",attrs:{"id":"modal-866"}},[_c('div',{staticClass:"fr-container fr-container-lg--fluid"},[_c('button',{staticClass:"fr-link--close fr-link",attrs:{"aria-controls":"modal-866"}},[_vm._v("\n                Fermer\n              ")]),_vm._v(" "),_c('div',{staticClass:"fr-search-bar",attrs:{"id":"search-865","role":"search"}},[_c('label',{staticClass:"fr-label",attrs:{"for":"search-865-input"}},[_vm._v("Recherche\n                ")]),_vm._v(" "),_c('input',{staticClass:"fr-input",attrs:{"placeholder":"Rechercher","type":"search","id":"search-865-input","name":"search-865-input"},domProps:{"value":_vm.value},on:{"change":_vm.valueChanged,"keydown":_vm.keydown}}),_vm._v(" "),_c('button',{staticClass:"fr-btn",attrs:{"title":"Rechercher"}},[_vm._v("Rechercher")])])])]):_vm._e()]):_vm._e()])])]),_vm._v(" "),(_vm.menuLinks.length > 0 || _vm.topLinks.length > 0 || _vm.displaySetting)?_c('div',{staticClass:"fr-header__menu fr-modal",attrs:{"id":"modal-870","aria-labelledby":"button-871"}},[_c('div',{staticClass:"fr-container"},[_c('button',{staticClass:"fr-link--close fr-link",attrs:{"aria-controls":"modal-870"}},[_vm._v("\n        Fermer\n      ")]),_vm._v(" "),_c('div',{staticClass:"fr-header__menu-links"}),_vm._v(" "),_c('nav',{staticClass:"fr-nav",attrs:{"id":"navigation-869","role":"navigation","aria-label":"Menu principal"}},[_c('ul',{staticClass:"fr-nav__list"},_vm._l((_vm.menuLinks),function(link,index){return _c('li',{key:"menulinks" + index,staticClass:"fr-nav__item"},[_c('a',{staticClass:"fr-nav__link",attrs:{"href":link.href,"target":"_self"}},[_vm._v(_vm._s(link.label))])])}),0)])])]):_vm._e()])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var VGouvFrHeader = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

module.exports = VGouvFrHeader;
