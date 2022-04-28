import '@gouvfr/dsfr/dist/core/core.min.css';
import '@gouvfr/dsfr/dist/core/core.nomodule.min.js';
import '@gouvfr/dsfr/dist/component/link/link.min.css';
import '@gouvfr/dsfr/dist/component/card/card.min.css';
import '@gouvfr/dsfr/dist/scheme/scheme.min.css';
import '@gouvfr/dsfr/dist/scheme/scheme.module.min.js';

//
var script = {
  name: "v-gouv-fr-card",
  props: {
    horizontal: {
      type: Boolean,
      default: false
    },
    noEnlargeLink: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object,
      default: null
    },
    hideArrow: {
      type: Boolean,
      default: false
    },
    details: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: "Titre"
    },
    description: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:"v-gouv-fr-card fr-card" +
    (!_vm.noEnlargeLink ? ' fr-enlarge-link' : '') +
    (_vm.horizontal ? ' fr-card--horizontal' : '') +
    (_vm.hideArrow ? ' fr-card--no-arrow' : '')},[_c('div',{staticClass:"fr-card__body"},[_c('h4',{staticClass:"fr-card__title"},[(_vm.href !== null)?[_c('a',{staticClass:"fr-card__link",attrs:{"href":_vm.href}},[_vm._v(_vm._s(_vm.title))])]:[_vm._v("\n        "+_vm._s(_vm.title)+"\n      ")]],2),_vm._v(" "),(_vm.description !== null)?_c('p',{staticClass:"fr-card__desc"},[_vm._v("\n      "+_vm._s(_vm.description)+"\n    ")]):_vm._e(),_vm._v(" "),(_vm.details !== null)?_c('p',{staticClass:"fr-card__detail"},[_vm._v(_vm._s(_vm.details))]):_vm._e()]),_vm._v(" "),(_vm.image !== null && _vm.image.src !== null)?_c('div',{staticClass:"fr-card__img"},[_c('img',{staticClass:"fr-responsive-img",attrs:{"src":_vm.image.src,"alt":""}})]):_vm._e()])};
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
  

  
  var VGouvFrCard = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default VGouvFrCard;
