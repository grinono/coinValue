require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/Widgets/Widget01.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  smallText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string
};

var defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: ''
};

var Widget01 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget01, _Component);

  function Widget01() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget01);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget01.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget01)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget01, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          smallText = _props.smallText,
          color = _props.color,
          value = _props.value,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'smallText', 'color', 'value', 'children', 'variant']);

      // demo purposes only


      var progress = { style: '', color: color, value: value };
      var card = { style: '', bgColor: '' };

      if (variant === 'inverse') {
        progress.style = 'progress-white';
        progress.color = '';
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, card.bgColor), cssModule);
      progress.style = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('progress-xs my-1', progress.style);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: classes }, attributes),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          { className: 'card-body' },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'h4 m-0' },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            mainText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Progress"], { className: progress.style, color: progress.color, value: progress.value }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'small',
            { className: 'text-muted' },
            smallText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            children
          )
        )
      );
    }
  }]);

  return Widget01;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget01.propTypes = propTypes;
Widget01.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget01);

/***/ }),

/***/ "./src/client/modules/Widgets/Widget02.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  footer: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  link: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object
};

var defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#'
};

var Widget02 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget02, _Component);

  function Widget02() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget02);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget02.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget02)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget02, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          icon = _props.icon,
          color = _props.color,
          footer = _props.footer,
          link = _props.link,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'icon', 'color', 'footer', 'link', 'children', 'variant']);

      // demo purposes only


      var padding = variant === '0' ? { card: 'p-3', icon: 'p-3', lead: 'mt-2' } : variant === '1' ? {
        card: 'p-0',
        icon: 'p-4',
        lead: 'pt-3'
      } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' };

      var card = { style: 'card-body clearfix', color: color, icon: icon, classes: '' };
      card.classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, padding.card), cssModule);

      var lead = { style: 'h5 mb-0', color: color, classes: '' };
      lead.classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: classes });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardFooter"],
            { className: 'px-3 py-2' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { className: 'font-weight-bold font-xs btn-block text-muted', href: link },
              'View More',
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: 'fa fa-angle-right float-right font-lg' })
            )
          );
        }
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: card.classes }, attributes),
          blockIcon(card.icon),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: lead.classes },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'text-muted text-uppercase font-weight-bold font-xs' },
            mainText
          )
        ),
        cardFooter()
      );
    }
  }]);

  return Widget02;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget02);

/***/ })

};
//# sourceMappingURL=index.3882e28c18d310fdd99e.js.map