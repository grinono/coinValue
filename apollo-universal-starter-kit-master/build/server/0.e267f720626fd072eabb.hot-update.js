require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/connector.js":
/***/ (function(module, exports) {

// import { merge, map, union, without, castArray } from 'lodash';
//
// const combine = (features, extractor) => without(union(...map(features, res => castArray(extractor(res)))), undefined);
//
// export const featureCatalog = {};
//
// export default class {
//   // eslint-disable-next-line no-unused-vars
//   constructor({ route, navItem, reducer, catalogInfo }, ...features) {
//     /* eslint-enable no-unused-vars */
//     combine(arguments, arg => arg.catalogInfo).forEach(info =>
//       Object.keys(info).forEach(key => (featureCatalog[key] = info[key]))
//     );
//     this.tabItem = combine(arguments, arg => arg.tabItem);
//     this.reducer = combine(arguments, arg => arg.reducer);
//   }
//
//   get tabItems() {
//     return merge(...this.tabItem);
//   }
//
//   get reducers() {
//     return merge(...this.reducer);
//   }
// }

/***/ }),

/***/ "./src/client/modules/connector.web.jsx":
false,

/***/ "./src/client/modules/contact/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Contact__ = __webpack_require__("./src/client/modules/contact/containers/Contact.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__connector__);







/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector___default.a({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/contact', component: __WEBPACK_IMPORTED_MODULE_3__containers_Contact__["a" /* default */] }),
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["l" /* MenuItem */],
    { key: 'contact' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/contact', className: 'nav-link', activeClassName: 'active' },
      'Contact Us'
    )
  )
}));

/***/ }),

/***/ "./src/client/modules/counter/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Counter__ = __webpack_require__("./src/client/modules/counter/containers/Counter.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__("./src/client/modules/counter/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__connector__);








/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector___default.a({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_2__containers_Counter__["a" /* default */] }),
  reducer: { counter: __WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */] }
}));

/***/ }),

/***/ "./src/client/modules/home/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_home__ = __webpack_require__("./src/client/modules/home/containers/home.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__connector__);





// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector___default.a({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/home', component: __WEBPACK_IMPORTED_MODULE_3__containers_home__["a" /* default */] }),
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["l" /* MenuItem */],
    { key: '/home' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/home', className: 'nav-link', activeClassName: 'active' },
      'Home'
    )
  )
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__("./src/client/modules/home/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pageNotFound__ = __webpack_require__("./src/client/modules/pageNotFound/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favicon__ = __webpack_require__("./src/client/modules/favicon/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__connector__);












/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_9__connector___default.a(__WEBPACK_IMPORTED_MODULE_0__counter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__home__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__subscription__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__contact__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__pageNotFound__["a" /* default */]));

/***/ }),

/***/ "./src/client/modules/pageNotFound/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_PageNotFound__ = __webpack_require__("./src/client/modules/pageNotFound/containers/PageNotFound.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__connector__);






/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector___default.a({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_2__containers_PageNotFound__["a" /* default */] })
}));

/***/ }),

/***/ "./src/client/modules/post/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Post__ = __webpack_require__("./src/client/modules/post/containers/Post.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_PostEdit__ = __webpack_require__("./src/client/modules/post/containers/PostEdit.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("./src/client/modules/post/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__connector__);











/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6__connector___default.a({
  route: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/posts', component: __WEBPACK_IMPORTED_MODULE_3__containers_Post__["b" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/post/:id', component: __WEBPACK_IMPORTED_MODULE_4__containers_PostEdit__["a" /* default */] })],
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["l" /* MenuItem */],
    { key: '/posts' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/posts', className: 'nav-link', activeClassName: 'active' },
      'Posts'
    )
  ),
  reducer: { post: __WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* default */] }
}));

/***/ }),

/***/ "./src/client/modules/subscription/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Subscription__ = __webpack_require__("./src/client/modules/subscription/containers/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_SubscribersOnly__ = __webpack_require__("./src/client/modules/subscription/containers/SubscribersOnly.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_UpdateCard__ = __webpack_require__("./src/client/modules/subscription/containers/UpdateCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_Auth__ = __webpack_require__("./src/client/modules/subscription/containers/Auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers__ = __webpack_require__("./src/client/modules/subscription/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__connector__);












/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_8__connector___default.a({
  route: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/subscription', component: __WEBPACK_IMPORTED_MODULE_3__containers_Subscription__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_Auth__["a" /* SubscriberRoute */], { exact: true, scope: 'user', path: '/subscribers-only', component: __WEBPACK_IMPORTED_MODULE_4__containers_SubscribersOnly__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_Auth__["a" /* SubscriberRoute */], { exact: true, scope: 'user', path: '/update-card', component: __WEBPACK_IMPORTED_MODULE_5__containers_UpdateCard__["a" /* default */] })],
  navItem: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["l" /* MenuItem */],
    { key: '/subscribers-only' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/subscribers-only', className: 'nav-link', activeClassName: 'active' },
      'Subscribers Only'
    )
  )],
  reducer: { subscription: __WEBPACK_IMPORTED_MODULE_7__reducers__["a" /* default */] },
  scriptsInsert: 'https://js.stripe.com/v3/'
}));

/***/ }),

/***/ "./src/client/modules/upload/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_fetch_upload__ = __webpack_require__("apollo-fetch-upload");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_fetch_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_fetch_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Upload__ = __webpack_require__("./src/client/modules/upload/containers/Upload.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("./src/client/modules/upload/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__connector__);





// Component and helpers





/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6__connector___default.a({
  catalogInfo: { upload: true },
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/upload', component: __WEBPACK_IMPORTED_MODULE_4__containers_Upload__["a" /* default */] }),
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__["l" /* MenuItem */],
    { key: '/upload' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
      { to: '/upload', className: 'nav-link', activeClassName: 'active' },
      'Upload'
    )
  ),
  reducer: { upload: __WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* default */] },
  createFetchOptions: __WEBPACK_IMPORTED_MODULE_2_apollo_fetch_upload__["constructUploadOptions"]
}));

/***/ }),

/***/ "./src/client/modules/user/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_cookie__ = __webpack_require__("react-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_Profile__ = __webpack_require__("./src/client/modules/user/containers/Profile.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Users__ = __webpack_require__("./src/client/modules/user/components/Users.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_UserEdit__ = __webpack_require__("./src/client/modules/user/containers/UserEdit.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers_Register__ = __webpack_require__("./src/client/modules/user/containers/Register.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_Login__ = __webpack_require__("./src/client/modules/user/containers/Login.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_ForgotPassword__ = __webpack_require__("./src/client/modules/user/containers/ForgotPassword.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers_ResetPassword__ = __webpack_require__("./src/client/modules/user/containers/ResetPassword.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducers__ = __webpack_require__("./src/client/modules/user/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_Auth__ = __webpack_require__("./src/client/modules/user/containers/Auth.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__connector__ = __webpack_require__("./src/client/modules/connector.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__connector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__connector__);

















function tokenMiddleware(req, options, next) {
  options.headers['x-token'] = window.localStorage.getItem('token');
  options.headers['x-refresh-token'] = window.localStorage.getItem('refreshToken');
  next();
}

function tokenAfterware(res, options, next) {
  var token = options.headers['x-token'];
  var refreshToken = options.headers['x-refresh-token'];
  if (token) {
    window.localStorage.setItem('token', token);
  }
  if (refreshToken) {
    window.localStorage.setItem('refreshToken', refreshToken);
  }
  next();
}

function connectionParam() {
  return {
    token: window.localStorage.getItem('token'),
    refreshToken: window.localStorage.getItem('refreshToken')
  };
}

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_13__connector___default.a({
  route: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["e" /* AuthRoute */], { exact: true, path: '/profile', scope: 'user', component: __WEBPACK_IMPORTED_MODULE_4__containers_Profile__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["e" /* AuthRoute */], { exact: true, path: '/users', scope: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__components_Users__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["e" /* AuthRoute */], { exact: true, path: '/users/:id', component: __WEBPACK_IMPORTED_MODULE_6__containers_UserEdit__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["a" /* AuthLoggedInRoute */], { exact: true, path: '/register', redirect: '/profile', component: __WEBPACK_IMPORTED_MODULE_7__containers_Register__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["a" /* AuthLoggedInRoute */], { exact: true, path: '/login', redirect: '/profile', component: __WEBPACK_IMPORTED_MODULE_8__containers_Login__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["a" /* AuthLoggedInRoute */], { exact: true, path: '/forgot-password', redirect: '/profile', component: __WEBPACK_IMPORTED_MODULE_9__containers_ForgotPassword__["a" /* default */] }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["a" /* AuthLoggedInRoute */], { exact: true, path: '/reset-password/:token', redirect: '/profile', component: __WEBPACK_IMPORTED_MODULE_10__containers_ResetPassword__["a" /* default */] })],
  navItem: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__["l" /* MenuItem */],
    { key: '/users' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_12__containers_Auth__["c" /* AuthNav */],
      { scope: 'admin' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
        { to: '/users', className: 'nav-link', activeClassName: 'active' },
        'Users'
      )
    )
  )],
  navItemRight: [__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__["l" /* MenuItem */],
    { key: '/profile' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__containers_Auth__["d" /* AuthProfile */], null)
  ), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__modules_common_components_web__["l" /* MenuItem */],
    { key: '/login' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_12__containers_Auth__["b" /* AuthLogin */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["NavLink"],
        { to: '/login', className: 'nav-link', activeClassName: 'active' },
        'Sign In'
      )
    )
  )],
  reducer: { user: __WEBPACK_IMPORTED_MODULE_11__reducers__["a" /* default */] },
  middleware: tokenMiddleware,
  afterware: tokenAfterware,
  connectionParam: connectionParam,
  // eslint-disable-next-line react/display-name
  rootComponentFactory: function rootComponentFactory(req) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_cookie__["CookiesProvider"], { cookies: req ? req.universalCookies : undefined });
  }
}));

/***/ })

};
//# sourceMappingURL=index.711b9a0939a53f0316f5.js.map