require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/home/containers/home.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css__ = __webpack_require__("./src/client/modules/home/containers/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyData__ = __webpack_require__("./src/client/modules/home/containers/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__coin__ = __webpack_require__("./src/client/modules/home/containers/coin.js");








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
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__coin__["a" /* default */], null),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'col-8 fixed' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'div',
              { className: 'sticky-top', style: { marginTop: 0 } },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__companyData__["a" /* default */], null)
            )
          )
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/main.js":
false,

/***/ "./src/client/modules/home/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_home__ = __webpack_require__("./src/client/modules/home/containers/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");





// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_3__containers_home__["a" /* default */] })
}));

/***/ })

};
//# sourceMappingURL=index.da5752ead95d264d2828.js.map