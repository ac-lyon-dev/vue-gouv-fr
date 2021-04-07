'use strict';

require('@gouvfr/dsfr/dist/css/core.min.css');
require('@gouvfr/dsfr/dist/js/core.nomodule.min.js');
require('@gouvfr/dsfr/dist/css/links.min.css');
require('@gouvfr/dsfr/dist/css/buttons.min.css');
require('@gouvfr/dsfr/dist/js/buttons.nomodule.min.js');
require('@gouvfr/dsfr/dist/css/schemes.min.css');
require('@gouvfr/dsfr/dist/js/schemes.nomodule.min.js');

//
var script = {
  name: 'v-gouv-fr-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left'
    },
    iconOnly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Bouton'
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'auto'
    }
  },
  computed: {
    //gets type class (primary or secondary)
    typeClass: function typeClass() {
      if (this.secondary && !this.primary) {
        return 'rf-btn--secondary '; //trailing space for next classes
      }

      return '';
    },
    //gets size class (small, medium or large)
    sizeClass: function sizeClass() {
      if (this.small) return 'rf-btn--sm ';else if (this.large) return 'rf-btn--lg ';
      return '';
    },
    //gets icon class
    iconClass: function iconClass() {
      if (this.icon === '' || this.iconPosition !== 'left' && this.iconPosition !== 'right') return '';
      var computedIconClass = 'rf-fi-' + this.icon;

      if (!this.iconOnly) {
        computedIconClass += ' rf-btn--icon-' + this.iconPosition;
      }

      return computedIconClass;
    }
  },
  methods: {
    pushClick: function pushClick(e) {
      this.$emit('click', e);
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-gouv-fr-button"},[_c('button',{class:"rf-btn " + _vm.typeClass + _vm.sizeClass + _vm.iconClass,attrs:{"data-rf-theme":_vm.theme,"disabled":_vm.disabled,"title":_vm.iconOnly ? _vm.label : undefined},on:{"click":_vm.pushClick}},[(_vm.iconOnly)?_c('span',{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.label))]):[_vm._v("\n      "+_vm._s(_vm.label)+"\n    ")]],2)])};
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
  

  
  var VGouvFrButton = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

module.exports = VGouvFrButton;
