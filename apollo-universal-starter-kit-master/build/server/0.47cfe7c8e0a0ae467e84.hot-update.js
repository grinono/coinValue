require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/common/components/Button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native__ = __webpack_require__("react-native");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native__);




var Button = function Button(_ref) {
  var children = _ref.children,
      onPress = _ref.onPress,
      disabled = _ref.disabled;
  var buttonStyle = styles.buttonStyle,
      textStyle = styles.textStyle;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_native__["TouchableOpacity"],
    { onPress: onPress, style: buttonStyle, activeOpacity: disabled ? 0.5 : 1 },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_native__["Text"],
      { style: textStyle },
      children
    )
  );
};

var styles = __WEBPACK_IMPORTED_MODULE_2_react_native__["StyleSheet"].create({
  buttonStyle: {
    backgroundColor: '#0275d8',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  onPress: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* unused harmony default export */ var _unused_webpack_default_export = (Button);

/***/ }),

/***/ "./src/client/modules/common/components/LayoutCenter.jsx":
/***/ (function(module, exports) {

// import React from 'react';
// import PropTypes from 'prop-types';
// import { View, StyleSheet } from 'react-native';
//
// const LayoutCenter = ({ children }) => {
//   const { container, layout, offset, content, column } = styles;
//
//   return (
//     <View style={container}>
//       <View style={layout}>
//         <View style={offset} />
//         <View style={content}>
//           <View style={column}>{children}</View>
//         </View>
//         <View style={offset} />
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   layout: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   column: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'stretch'
//   },
//   content: {
//     flexGrow: 3
//   },
//   offset: {
//     flexGrow: 3
//   }
// });
//
// LayoutCenter.propTypes = {
//   children: PropTypes.node
// };
//
// export default LayoutCenter;

/***/ }),

/***/ "./src/client/modules/common/components/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button__ = __webpack_require__("./src/client/modules/common/components/Button.jsx");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayoutCenter__ = __webpack_require__("./src/client/modules/common/components/LayoutCenter.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__LayoutCenter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__LayoutCenter__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__LayoutCenter___default.a; });
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/server/middleware/website.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch__ = __webpack_require__("apollo-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__ = __webpack_require__("apollo-link-batch-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_logger__ = __webpack_require__("apollo-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_apollo_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fs__ = __webpack_require__("fs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_native__ = __webpack_require__("react-native");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_react_native__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__common_createApolloClient__ = __webpack_require__("./src/common/createApolloClient.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__common_createReduxStore__ = __webpack_require__("./src/common/createReduxStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__html__ = __webpack_require__("./src/server/middleware/html.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__client_app_Routes__ = __webpack_require__("./src/client/app/Routes.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__modules__ = __webpack_require__("./src/server/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__spinrc_json__ = __webpack_require__("./.spinrc.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__spinrc_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__spinrc_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__settings__ = __webpack_require__("./settings.js");




var _this = this;












// import { addPersistedQueries } from 'persistgraphql';














var assetMap = void 0;

var _url$parse = __WEBPACK_IMPORTED_MODULE_17_url___default.a.parse("http://localhost:8080/graphql"),
    protocol = _url$parse.protocol,
    hostname = _url$parse.hostname,
    port = _url$parse.port,
    pathname = _url$parse.pathname;

var apiUrl = protocol + '//' + hostname + ':' + (process.env.PORT || port) + pathname;

var renderServerSide = function () {
  var _ref = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
    var fetch, cache, link, client, initialState, store, context, clientModules, App, _AppRegistry$getAppli, element, stylesheets, sheet, html, css, helmet, apolloState, token, refreshToken, page;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // if (__PERSIST_GQL__) {
            //   networkInterface = addPersistedQueries(networkInterface, queryMap);
            // }
            //

            fetch = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_fetch__["createApolloFetch"])({ uri: apiUrl, constructOptions: __WEBPACK_IMPORTED_MODULE_23__modules__["a" /* default */].constructFetchOptions });

            fetch.batchUse(function (_ref2, next) {
              var options = _ref2.options;

              options.credentials = 'include';
              options.headers = req.headers;

              next();
            });
            cache = new __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__["InMemoryCache"]();
            link = new __WEBPACK_IMPORTED_MODULE_7_apollo_link_batch_http__["BatchHttpLink"]({ fetch: fetch });
            client = Object(__WEBPACK_IMPORTED_MODULE_19__common_createApolloClient__["a" /* default */])({
              link: __WEBPACK_IMPORTED_MODULE_6_apollo_link__["ApolloLink"].from((__WEBPACK_IMPORTED_MODULE_25__settings__["a" /* default */].app.logging.apolloLogging ? [new __WEBPACK_IMPORTED_MODULE_13_apollo_logger__["LoggingLink"]()] : []).concat([link])),
              cache: cache
            });
            initialState = {};
            store = Object(__WEBPACK_IMPORTED_MODULE_20__common_createReduxStore__["a" /* default */])(initialState, client);
            context = {};
            clientModules = __webpack_require__("./src/client/modules/index.js").default;

            App = function App() {
              return clientModules.getWrappedRoot(__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
                { store: store },
                __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_9_react_apollo__["ApolloProvider"],
                  { client: client },
                  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_11_react_router__["StaticRouter"],
                    { location: req.url, context: context },
                    __WEBPACK_IMPORTED_MODULE_22__client_app_Routes__["a" /* default */]
                  )
                )
              ), req);
            };

            __WEBPACK_IMPORTED_MODULE_18_react_native__["AppRegistry"].registerComponent('App', function () {
              return App;
            });
            _AppRegistry$getAppli = __WEBPACK_IMPORTED_MODULE_18_react_native__["AppRegistry"].getApplication('App', {}), element = _AppRegistry$getAppli.element, stylesheets = _AppRegistry$getAppli.stylesheets;
            _context.next = 14;
            return Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["getDataFromTree"])(element);

          case 14:

            if (context.pageNotFound === true) {
              res.status(404);
            } else {
              res.status(200);
            }

            sheet = new __WEBPACK_IMPORTED_MODULE_12_styled_components__["ServerStyleSheet"]();
            html = __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToString(sheet.collectStyles(element));
            css = sheet.getStyleElement().concat(stylesheets).map(function (el, idx) {
              return __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(el, { key: idx });
            });
            helmet = __WEBPACK_IMPORTED_MODULE_16_react_helmet___default.a.renderStatic(); // Avoid memory leak while tracking mounted instances

            if (context.url) {
              res.writeHead(301, { Location: context.url });
              res.end();
            } else {
              if (true) {
                assetMap = JSON.parse(__WEBPACK_IMPORTED_MODULE_14_fs___default.a.readFileSync(__WEBPACK_IMPORTED_MODULE_15_path___default.a.join(__WEBPACK_IMPORTED_MODULE_24__spinrc_json__["options"].frontendBuildDir, 'web', 'assets.json')));
              }

              apolloState = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, cache.extract());
              token = req.universalCookies.get('x-token') ? req.universalCookies.get('x-token') : null;
              refreshToken = req.universalCookies.get('x-refresh-token') ? req.universalCookies.get('x-refresh-token') : null;
              page = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_21__html__["a" /* default */], {
                content: html,
                state: apolloState,
                assetMap: assetMap,
                css: css,
                helmet: helmet,
                token: token,
                refreshToken: refreshToken
              });

              res.send('<!doctype html>\n' + __WEBPACK_IMPORTED_MODULE_4_react_dom_server___default.a.renderToStaticMarkup(page));
              res.end();
            }

          case 20:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function renderServerSide(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (function (queryMap) {
  return function () {
    var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(req, res, next) {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!(req.url.indexOf('.') < 0 && true)) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return renderServerSide(req, res, queryMap);

            case 4:
              return _context2.abrupt('return', _context2.sent);

            case 7:
              next();

            case 8:
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2['catch'](0);

              next(_context2.t0);

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[0, 10]]);
    }));

    return function (_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();
});

/***/ }),

/***/ "react-native":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ })

};
//# sourceMappingURL=index.4783ffb2a331a64d42d4.js.map