require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/common/components/web/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/index.jsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["a"]; });

//export * from './ui-antd';

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var MenuItem = function MenuItem(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["NavItem"],
    props,
    children
  );
};

MenuItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (MenuItem);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx");
/* unused harmony reexport PageLayout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx");
/* unused harmony reexport MenuItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Form__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Form.jsx");
/* unused harmony reexport Form */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/FormItem.jsx");
/* unused harmony reexport FormItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Input__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Input.jsx");
/* unused harmony reexport Input */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Select__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Select.jsx");
/* unused harmony reexport Select */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Option__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Option.jsx");
/* unused harmony reexport Option */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__RenderField__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderField.jsx");
/* unused harmony reexport RenderField */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__RenderSelect__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderSelect.jsx");
/* unused harmony reexport RenderSelect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__RenderCheckBox__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/RenderCheckBox.jsx");
/* unused harmony reexport RenderCheckBox */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Alert__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Alert.jsx");
/* unused harmony reexport Alert */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Container__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Container.jsx");
/* unused harmony reexport Container */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Row__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Row.jsx");
/* unused harmony reexport Row */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Col__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Col.jsx");
/* unused harmony reexport Col */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Label__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Label.jsx");
/* unused harmony reexport Label */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Card__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Card.jsx");
/* unused harmony reexport Card */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CardGroup__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardGroup.jsx");
/* unused harmony reexport CardGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CardTitle__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardTitle.jsx");
/* unused harmony reexport CardTitle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CardText__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/CardText.jsx");
/* unused harmony reexport CardText */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Table__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Table.jsx");
/* unused harmony reexport Table */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ListGroup__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/ListGroup.jsx");
/* unused harmony reexport ListGroup */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ListItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/ListItem.jsx");
/* unused harmony reexport ListItem */
// eslint-disable-next-line import/prefer-default-export
























/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/index.js");
/* unused harmony namespace reexport */
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/client/modules/home/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_main__ = __webpack_require__("./src/client/modules/home/containers/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");





// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/home', component: __WEBPACK_IMPORTED_MODULE_3__containers_main__["a" /* default */] })
}));

/***/ }),

/***/ "./src/server/middleware/html.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_modules__ = __webpack_require__("./src/client/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");







var Html = function Html(_ref) {
  var content = _ref.content,
      state = _ref.state,
      assetMap = _ref.assetMap,
      css = _ref.css,
      helmet = _ref.helmet,
      token = _ref.token,
      refreshToken = _ref.refreshToken;

  var htmlAttrs = helmet.htmlAttributes.toComponent(); // react-helmet html document tags
  var bodyAttrs = helmet.bodyAttributes.toComponent(); // react-helmet body document tags

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'html',
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/' + assetMap['apple-touch-icon.png'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: '/' + assetMap['favicon-32x32.png'], sizes: '32x32' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: '/' + assetMap['favicon-16x16.png'], sizes: '16x16' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'manifest', href: '/' + assetMap['manifest.json'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'mask-icon', href: '/' + assetMap['safari-pinned-tab.svg'], color: '#5bbad5' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: '/' + assetMap['favicon.ico'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'msapplication-config', content: '/' + assetMap['browserconfig.xml'] }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'theme-color', content: '#ffffff' }),
      !true && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/' + assetMap['index.css'] }),
      !!true && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('style', {
        dangerouslySetInnerHTML: {
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["a" /* styles */]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
            return style._getCss();
          }).join('')
        }
      }),
      !!css && css,
      __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].scriptsInserts.map(function (script, i) {
        if (script) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { key: i, src: script });
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('div', { id: 'content', dangerouslySetInnerHTML: { __html: content || '' } }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', {
        dangerouslySetInnerHTML: {
          __html: 'window.__APOLLO_STATE__=' + __WEBPACK_IMPORTED_MODULE_3_serialize_javascript___default()(state, {
            isJSON: true
          }) + ';window.localStorage.setItem(\'token\',\'' + token + '\');window.localStorage.setItem(\'refreshToken\',\'' + refreshToken + '\');'
        },
        charSet: 'UTF-8'
      }),
      assetMap['vendor.js'] && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/' + assetMap['vendor.js'], charSet: 'utf-8' }),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('script', { src: '/' + assetMap['index.js'], charSet: 'utf-8' })
    )
  );
};

Html.propTypes = {
  content: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  state: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  assetMap: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired,
  css: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  helmet: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  token: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  refreshToken: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ })

};
//# sourceMappingURL=index.c493555156616052b31a.js.map