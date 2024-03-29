import '@gouvfr/dsfr/dist/core/core.min.css';
import '@gouvfr/dsfr/dist/component/form/form.min.css';
import '@gouvfr/dsfr/dist/component/link/link.min.css';
import '@gouvfr/dsfr/dist/component/button/button.min.css';
import '@gouvfr/dsfr/dist/component/input/input.min.css';
import '@gouvfr/dsfr/dist/utility/icons/icons-business/icons-business.min.css';

//
var script = {
  name: 'v-gouv-fr-text-field',
  props: {
    date: {
      type: Boolean,
      default: false
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
      default: 'text-input-text'
    },
    label: {
      type: String,
      default: ''
    },
    minDate: {
      type: String,
      default: ''
    },
    maxDate: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: 'text-input-text'
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
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
  computed: {
    inputType: function inputType() {
      if (this.date) return "date";else if (this.password) return "password";
      return "text";
    }
  },
  methods: {
    valueChanged: function valueChanged(e) {
      this.$emit('input', e.target.value);
      this.$emit('change', e.target.value);
    },
    keydown: function keydown(e) {
      if (e.keyCode === 13) {
        this.$emit('input', e.target.value);
        this.$emit('change', e.target.value);
        this.$emit('enter');
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
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-gouv-fr-text-field"},[_c('div',{class:"fr-input-group " + (_vm.error && !_vm.valid ? 'fr-input-group--error' : '') + (_vm.valid && !_vm.error ? 'fr-input-group--valid' : '')},[_c('label',{staticClass:"fr-label",attrs:{"for":_vm.id}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.help)?_c('p',{staticClass:"fr-hint-text",attrs:{"id":_vm.id+"-hint-desc-hint"}},[_vm._v(_vm._s(_vm.help))]):_vm._e(),_vm._v(" "),(_vm.date)?_c('div',{staticClass:"fr-input-wrap fr-icon-calendar-line"},[_c('input',{class:"fr-input " + (_vm.error && !_vm.valid ? 'fr-input--error' : '') + (_vm.valid && !_vm.error ? 'fr-input--valid' : ''),attrs:{"id":_vm.id,"name":_vm.name,"type":"date","min":_vm.minDate,"max":_vm.maxDate,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"change":_vm.valueChanged,"keydown":_vm.keydown}})]):_c('input',{class:"fr-input " + (_vm.error && !_vm.valid ? 'fr-input--error' : '') + (_vm.valid && !_vm.error ? 'fr-input--valid' : ''),attrs:{"id":_vm.id,"name":_vm.name,"type":_vm.inputType,"placeholder":_vm.placeholder,"disabled":_vm.disabled},domProps:{"value":_vm.value},on:{"change":_vm.valueChanged,"keydown":_vm.keydown}}),_vm._v(" "),(_vm.error && !_vm.valid)?_c('p',{staticClass:"fr-error-text",attrs:{"id":_vm.id+"-error-desc-error"}},[_vm._v("\n          "+_vm._s(_vm.error)+"\n      ")]):(!_vm.error && _vm.valid)?_c('p',{staticClass:"fr-valid-text",attrs:{"id":_vm.id+"-error-desc-valid"}},[_vm._v("\n          "+_vm._s(_vm.valid)+"\n      ")]):_vm._e()])])};
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
  

  
  var VGouvFrTextField = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

export default VGouvFrTextField;
