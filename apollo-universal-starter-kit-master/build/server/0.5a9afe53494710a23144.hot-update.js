require("source-map-support").install();
exports.id = 0;
exports.modules = {

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
        null,
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
        ),
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





// <Coin />
// <CompanyData />

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
              'div',
              { className: 'container-fluid h-100' },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                'div',
                { className: 'row h-100' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'col-4 py-2' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_coin__["a" /* default */], null)
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'col-sm-6 col-8 bg-dark text-white py-2 d-flex', id: 'left' },
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



/***/ })

};
//# sourceMappingURL=index.50fb25097c83f9b6e958.js.map