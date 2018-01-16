require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/dashboard/components/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".fixed { height:500px; overflow:hidden;  }\n.scrollit { height:500px; overflow-y:scroll; }\n", "", {"version":3,"sources":["/Users/bartelverkruijssen/Google Drive/Talqs/Talqs General/development/investCoin/apollo-universal-starter-kit-master/styles.css"],"names":[],"mappings":"AAAA,SAAS,aAAa,CAAC,gBAAgB,GAAG;AAC1C,YAAY,aAAa,CAAC,kBAAkB,EAAE","file":"styles.css","sourcesContent":[".fixed { height:500px; overflow:hidden;  }\n.scrollit { height:500px; overflow-y:scroll; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/dashboard/containers/styles.css":
false,

/***/ "./src/client/modules/dashboard/components/Widget01.js":
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
  value: "25",
  variant: ""
};

var Widget01 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget01, _Component);

  function Widget01() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget01);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget01.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget01)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget01, [{
    key: "render",
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
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["className", "cssModule", "header", "mainText", "smallText", "color", "value", "children", "variant"]);

      // demo purposes only


      var progress = { style: "", color: color, value: value };
      var card = { style: "", bgColor: "" };

      if (variant === "inverse") {
        progress.style = "progress-white";
        progress.color = "";
        card.style = "text-white";
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, card.bgColor), cssModule);
      progress.style = __WEBPACK_IMPORTED_MODULE_10_classnames___default()("progress-xs my-1", progress.style);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: classes }, attributes),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          { className: "card-body" },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "div",
            { className: "h4 m-0" },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "div",
            null,
            mainText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Progress"], { className: progress.style, color: progress.color, value: progress.value }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "small",
            { className: "text-muted" },
            smallText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "div",
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

/***/ "./src/client/modules/dashboard/components/Widget02.js":
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
  icon: "fa fa-cogs",
  color: 'primary',
  variant: "0",
  link: "#"
};

var Widget02 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget02, _Component);

  function Widget02() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget02);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget02.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget02)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget02, [{
    key: "render",
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
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["className", "cssModule", "header", "mainText", "icon", "color", "footer", "link", "children", "variant"]);

      // demo purposes only


      var padding = variant === '0' ? { card: "p-3", icon: "p-3", lead: "mt-2" } : variant === "1" ? {
        card: "p-0", icon: "p-4", lead: "pt-3" } : { card: "p-0", icon: "p-4 px-5", lead: "pt-3" };

      var card = { style: "card-body clearfix", color: color, icon: icon, classes: "" };
      card.classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, padding.card), cssModule);

      var lead = { style: "h5 mb-0", color: color, classes: "" };
      lead.classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(icon, 'bg-' + card.color, padding.icon, "font-2xl mr-3 float-left");
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("i", { className: classes });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardFooter"],
            { className: "px-3 py-2" },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              "a",
              { className: "font-weight-bold font-xs btn-block text-muted", href: link },
              "View More",
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("i", { className: "fa fa-angle-right float-right font-lg" })
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
            "div",
            { className: lead.classes },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            "div",
            { className: "text-muted text-uppercase font-weight-bold font-xs" },
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

/***/ }),

/***/ "./src/client/modules/dashboard/components/chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);









var doughnut = {
  labels: ['Good', 'Bad'],
  datasets: [{
    data: [300, 150],
    backgroundColor: ['#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#36A2EB', '#FFCE56']
  }]
};

var ChartsHome = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ChartsHome, _Component);

  function ChartsHome() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ChartsHome);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChartsHome.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ChartsHome)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ChartsHome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardHeader"],
                null,
                'Overall investment rating'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'chart-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Doughnut"], { data: doughnut })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'ul',
                  { className: 'horizontal-bars type-2' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Technology'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '43%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '43' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Team'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'warning', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Marketing'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'India', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Product'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'danger', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Financials'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Community'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'success', value: '37' })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return ChartsHome;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/dashboard/components/coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widget02__ = __webpack_require__("./src/client/modules/dashboard/components/Widget02.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css__ = __webpack_require__("./src/client/modules/dashboard/components/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyData__ = __webpack_require__("./src/client/modules/dashboard/components/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);











var Coin = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Coin, _Component);

  function Coin() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Coin);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Coin.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Coin)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Coin, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'col-3 scrollit' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: 'Bitcoin', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: 'Litecoin', mainText: 'Income', icon: 'fa fa-laptop', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: 'Etherium', mainText: 'Income', icon: 'fa fa-moon-o', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: 'Ripple', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: 'Dash', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widget02__["a" /* default */], { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        )
      );
    }
  }]);

  return Coin;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/dashboard/components/companyData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCompanyData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_js__ = __webpack_require__("./src/client/modules/dashboard/components/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Widget01__ = __webpack_require__("./src/client/modules/dashboard/components/Widget01.js");










var MainCompanyData = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MainCompanyData, _Component);

  function MainCompanyData() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MainCompanyData);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MainCompanyData.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MainCompanyData)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MainCompanyData, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__chart_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', sm: '12', lg: '12' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Widget01__["a" /* default */], { color: 'primary', variant: 'inverse', header: 'Company phase', mainText: '2 phase', smallText: 'benchmark between same phases' })
          )
        )
      );
    }
  }]);

  return MainCompanyData;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/dashboard/components/styles.css":
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/dashboard/components/styles.css");
    var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/lib/insertCss.js");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (module.hot && typeof window !== 'undefined' && window.document) {
      var removeCss = function() {};
      module.hot.accept("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/dashboard/components/styles.css", function() {
        content = __webpack_require__("./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/modules/dashboard/components/styles.css");

        if (typeof content === 'string') {
          content = [[module.i, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ "./src/client/modules/dashboard/containers/Widget01.js":
false,

/***/ "./src/client/modules/dashboard/containers/Widget02.js":
false,

/***/ "./src/client/modules/dashboard/containers/chart.js":
false,

/***/ "./src/client/modules/dashboard/containers/coin.js":
false,

/***/ "./src/client/modules/dashboard/containers/companyData.js":
false,

/***/ "./src/client/modules/dashboard/containers/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_styles_css__ = __webpack_require__("./src/client/modules/dashboard/components/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_companyData__ = __webpack_require__("./src/client/modules/dashboard/components/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_coin__ = __webpack_require__("./src/client/modules/dashboard/components/coin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_components_web_theme_combine__ = __webpack_require__("./src/client/modules/common/components/web/theme/combine.js");








// import Widget02 from '../Widgets/Widget02'





var Home = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

  function Home() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_10__common_components_web_theme_combine__["a" /* default */],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'animated fadeIn' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_coin__["a" /* default */], null),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'col-8 fixed' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'sticky-top', style: { marginTop: 0 } },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_companyData__["a" /* default */], null)
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/dashboard/containers/styles.css":
false

};
//# sourceMappingURL=index.12f5274229b3ce51a90c.js.map