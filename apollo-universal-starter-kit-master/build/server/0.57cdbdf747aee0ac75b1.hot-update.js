require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/modules/connector.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export featureCatalog */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__ = __webpack_require__("babel-runtime/core-js/get-iterator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_log__ = __webpack_require__("./src/common/log.js");












var combine = function combine(features, extractor) {
  return Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["without"])(__WEBPACK_IMPORTED_MODULE_7_lodash__["union"].apply(undefined, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default()(Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["map"])(features, function (res) {
    return Object(__WEBPACK_IMPORTED_MODULE_7_lodash__["castArray"])(extractor(res));
  }))), undefined);
};

var featureCatalog = {};

var _default = function () {
  /* eslint-disable no-unused-vars */
  function _default(_ref) {
    for (var _len = arguments.length, features = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      features[_key - 1] = arguments[_key];
    }

    var route = _ref.route,
        reducer = _ref.reducer,
        middleware = _ref.middleware,
        afterware = _ref.afterware,
        connectionParam = _ref.connectionParam,
        createFetchOptions = _ref.createFetchOptions,
        stylesInsert = _ref.stylesInsert,
        scriptsInsert = _ref.scriptsInsert,
        rootComponentFactory = _ref.rootComponentFactory,
        catalogInfo = _ref.catalogInfo;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, _default);

    /* eslint-enable no-unused-vars */
    combine(arguments, function (arg) {
      return arg.catalogInfo;
    }).forEach(function (info) {
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(info).forEach(function (key) {
        return featureCatalog[key] = info[key];
      });
    });
    this.route = combine(arguments, function (arg) {
      return arg.route;
    });
    // this.navItem = combine(arguments, arg => arg.navItem);
    // this.navItemRight = combine(arguments, arg => arg.navItemRight);
    this.reducer = combine(arguments, function (arg) {
      return arg.reducer;
    });
    this.middleware = combine(arguments, function (arg) {
      return arg.middleware;
    });
    this.afterware = combine(arguments, function (arg) {
      return arg.afterware;
    });
    this.connectionParam = combine(arguments, function (arg) {
      return arg.connectionParam;
    });
    this.createFetchOptions = combine(arguments, function (arg) {
      return arg.createFetchOptions;
    });
    this.stylesInsert = combine(arguments, function (arg) {
      return arg.stylesInsert;
    });
    this.scriptsInsert = combine(arguments, function (arg) {
      return arg.scriptsInsert;
    });
    this.rootComponentFactory = combine(arguments, function (arg) {
      return arg.rootComponentFactory;
    });
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(_default, [{
    key: 'getWrappedRoot',
    value: function getWrappedRoot(root, req) {
      var nestedRoot = root;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(this.rootComponentFactory), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var componentFactory = _step.value;

          nestedRoot = __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(componentFactory(req), {}, nestedRoot);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return nestedRoot;
    }
  }, {
    key: 'routes',
    get: function get() {
      var _this = this;

      return this.route.map(function (component, idx) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(component, { key: idx + _this.route.length });
      });
    }

    // get navItems() {
    //   return this.navItem.map((component, idx) =>
    //     React.cloneElement(component, {
    //       key: component.key ? component.key : idx + this.navItem.length
    //     })
    //   );
    // }
    // 
    // get navItemsRight() {
    //   return this.navItemRight.map((component, idx) =>
    //     React.cloneElement(component, {
    //       key: component.key ? component.key : idx + this.navItem.length
    //     })
    //   );
    // }

  }, {
    key: 'reducers',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_7_lodash__["merge"].apply(undefined, __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_toConsumableArray___default()(this.reducer));
    }
  }, {
    key: 'middlewares',
    get: function get() {
      return this.middleware;
    }
  }, {
    key: 'afterwares',
    get: function get() {
      return this.afterware;
    }
  }, {
    key: 'connectionParams',
    get: function get() {
      return this.connectionParam;
    }
  }, {
    key: 'constructFetchOptions',
    get: function get() {
      var _this2 = this;

      return this.createFetchOptions.length ? function () {
        try {
          var result = {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_this2.createFetchOptions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var func = _step2.value;

              result = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, result, func.apply(undefined, arguments));
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return result;
        } catch (e) {
          __WEBPACK_IMPORTED_MODULE_8__common_log__["a" /* default */].error(e.stack);
        }
      } : null;
    }
  }, {
    key: 'stylesInserts',
    get: function get() {
      return this.stylesInsert;
    }
  }, {
    key: 'scriptsInserts',
    get: function get() {
      return this.scriptsInsert;
    }
  }]);

  return _default;
}();



/***/ })

};
//# sourceMappingURL=index.eefa45e1a09c9a71c9be.js.map