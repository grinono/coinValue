require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss":
false,

/***/ "./src/client/modules/common/components/web/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/index.jsx");
/* unused harmony namespace reexport */

//export * from './ui-antd';

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/index.js");
/* unused harmony namespace reexport */
// eslint-disable-next-line import/prefer-default-export
// export { default as styles } from './styles/styles.scss';


/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/styles/styles.scss":
false,

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
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["styles"]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
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
//# sourceMappingURL=index.641eafd9fa7ace3efd26.js.map