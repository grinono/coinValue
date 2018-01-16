require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/dashboard/index.web.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_dashboard__ = __webpack_require__("./src/client/modules/dashboard/containers/dashboard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");





// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/dashboard', component: __WEBPACK_IMPORTED_MODULE_3__containers_dashboard__["a" /* default */] }),
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["l" /* MenuItem */],
    { key: '/dashboard' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/dashboard', className: 'nav-link', activeClassName: 'active' },
      'dashboard'
    )
  )
  // reducer: { post: reducers }
}));

/***/ }),

/***/ "./src/client/modules/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__counter__ = __webpack_require__("./src/client/modules/counter/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__("./src/client/modules/post/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upload__ = __webpack_require__("./src/client/modules/upload/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("./src/client/modules/user/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__subscription__ = __webpack_require__("./src/client/modules/subscription/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact__ = __webpack_require__("./src/client/modules/contact/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard__ = __webpack_require__("./src/client/modules/dashboard/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pageNotFound__ = __webpack_require__("./src/client/modules/pageNotFound/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favicon__ = __webpack_require__("./src/client/modules/favicon/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scss_style_scss__ = __webpack_require__("./src/client/scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__scss_style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");













/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_10__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__counter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__dashboard__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__subscription__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__contact__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__pageNotFound__["a" /* default */]));

/***/ })

};
//# sourceMappingURL=index.12f5274229b3ce51a90c.js.map