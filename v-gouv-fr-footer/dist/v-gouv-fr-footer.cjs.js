'use strict';

require('@gouvfr/dsfr/dist/css/dsfr.min.css');
require('@gouvfr/dsfr/dist/js/dsfr.nomodule.min.js');

//
var script = {
  name: "v-gouv-fr-footer",
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
    description: {
      type: String,
      default: null
    },
    links: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    bottomLinks: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    hideLicense: {
      type: Boolean,
      default: false
    },
    displaySetting: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  methods: {}
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"v-gouv-fr-footer fr-footer",attrs:{"role":"contentinfo","id":"footer"}},[_c('div',{staticClass:"fr-container"},[_c('div',{staticClass:"fr-footer__body"},[_c('div',{staticClass:"fr-footer__brand fr-enlarge-link"},[_c('a',{attrs:{"href":_vm.homeLink,"title":"Retour à l’accueil"}},[_c('p',{staticClass:"fr-logo"},[_vm._l((_vm.blocMarque),function(val,index){return [(index > 0)?_c('br',{key:"bm-br"+index}):_vm._e(),_vm._v(" "),_c('span',{key:"blocmarque"+index},[_vm._v(_vm._s(val))])]})],2)])]),_vm._v(" "),_c('div',{staticClass:"fr-footer__content"},[(_vm.description !== null)?_c('p',{staticClass:"fr-footer__content-desc"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.links.length > 0)?_c('ul',{staticClass:"fr-footer__content-list"},[_vm._l((_vm.links),function(link,index){return [(index < 4)?_c('li',{key:"footerlink"+index,staticClass:"fr-footer__content-item"},[_c('a',{staticClass:"fr-footer__content-link",attrs:{"href":link.href}},[_vm._v(_vm._s(link.title))])]):_vm._e()]})],2):_vm._e()])]),_vm._v(" "),(_vm.bottomLinks.length > 0 || !_vm.hideLicense || _vm.displaySetting)?_c('div',{staticClass:"fr-footer__bottom"},[(_vm.bottomLinks.length > 0 )?_c('ul',{staticClass:"fr-footer__bottom-list"},[_vm._l((_vm.bottomLinks),function(link,index){return [_c('li',{key:"footerbottomlink"+index,staticClass:"fr-footer__bottom-item"},[_c('a',{staticClass:"fr-footer__bottom-link",attrs:{"href":link.href}},[_vm._v(_vm._s(link.title))])])]}),_vm._v(" "),(_vm.displaySetting)?_c('li',{staticClass:"fr-footer__bottom-item"},[_c('button',{staticClass:"fr-footer__bottom-link fr-fi-theme-fill fr-link--icon-left",attrs:{"aria-controls":"fr-theme-modal","data-fr-opened":"false"}},[_vm._v("Paramètres d'affichage")])]):_vm._e()],2):_vm._e(),_vm._v(" "),(!_vm.hideLicense)?_c('div',{staticClass:"fr-footer__bottom-copy"},[_vm._m(0)]):_vm._e()]):_vm._e()])])};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v("\n          Sauf mention contraire, tous les textes de ce site sont sous\n          "),_c('a',{attrs:{"href":"https://github.com/etalab/licence-ouverte/blob/master/LO.md","target":"_blank"}},[_vm._v("licence etalab-2.0")])])}];

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
  

  
  var VGouvFrFooter = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

module.exports = VGouvFrFooter;
