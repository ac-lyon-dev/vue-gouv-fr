'use strict';

require('@gouvfr/dsfr/dist/core/core.min.css');
require('@gouvfr/dsfr/dist/component/form/form.min.css');
require('@gouvfr/dsfr/dist/component/select/select.min.css');

//
var script = {
  name: 'v-gouv-fr-select',
  props: {
    defaultOption: {
      type: String,
      default: 'Sélectionnez une option'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    help: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'mon-select'
    },
    items: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'mon-select'
    },
    valid: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: null
    }
  },
  methods: {
    change: function change(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value);
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:"v-gouv-fr-select fr-select-group " + (_vm.error && !_vm.valid ? 'fr-select-group--error' : '') + (_vm.valid && !_vm.error ? 'fr-select-group--valid' : '')},[(_vm.label)?_c('label',{staticClass:"fr-label",attrs:{"for":_vm.id}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n    "),(_vm.help)?_c('span',{staticClass:"fr-hint-text"},[_vm._v(_vm._s(_vm.help))]):_vm._e()]):_vm._e(),_vm._v(" "),_c('select',{class:"fr-select " +  (_vm.error && !_vm.valid ? 'fr-select--error' : '') + (_vm.valid && !_vm.error ? 'fr-select--valid' : ''),attrs:{"disabled":_vm.disabled,"id":_vm.id,"name":_vm.name},on:{"change":_vm.change}},[_c('option',{attrs:{"value":"","disabled":"","hidden":""},domProps:{"selected":_vm.value === null || _vm.value === undefined || _vm.value === ''}},[_vm._v(_vm._s(_vm.defaultOption))]),_vm._v(" "),_vm._l((_vm.items),function(item,index){return [_c('option',{key:_vm.id+"-option-"+index,domProps:{"value":item.value,"selected":_vm.value === item.value}},[_vm._v(_vm._s(item.label))])]})],2),_vm._v(" "),(_vm.error && !_vm.valid)?_c('p',{staticClass:"fr-error-text",attrs:{"id":_vm.id + "-desc-error"}},[_vm._v("\n    "+_vm._s(_vm.error)+"\n  ")]):_vm._e(),_vm._v(" "),(!_vm.error && _vm.valid)?_c('p',{staticClass:"fr-valid-text",attrs:{"id":_vm.id + "-desc-valid"}},[_vm._v("\n    "+_vm._s(_vm.valid)+"\n  ")]):_vm._e()])};
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
  

  
  var VGouvFrSelect = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

module.exports = VGouvFrSelect;
