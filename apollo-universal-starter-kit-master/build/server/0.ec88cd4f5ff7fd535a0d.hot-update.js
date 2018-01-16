require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/app/Routes.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_Header__ = __webpack_require__("./src/client/components/Header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules__ = __webpack_require__("./src/client/modules/index.js");
// import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { Container } from 'reactstrap';
//

// import Sidebar from '../components/Sidebar/Sidebar';
// // import Breadcrumb from '../components/Breadcrumb/';
// import Aside from '../components/Aside/';
// import Footer from '../components/Footer/';
// import Dashboard from '../views/Dashboard/';
// import Charts from '../views/Charts/';
// import Widgets from '../views/Widgets/';
// import Buttons from '../views/Components/Buttons/';
// import Cards from '../views/Components/Cards/';
// import Forms from '../views/Components/Forms/';
// import Modals from '../views/Components/Modals/';
// import SocialButtons from '../views/Components/SocialButtons/';
// import Switches from '../views/Components/Switches/';
// import Tables from '../views/Components/Tables/';
// import Tabs from '../views/Components/Tabs/';
// import FontAwesome from '../views/Icons/FontAwesome/';
// import SimpleLineIcons from '../views/Icons/SimpleLineIcons/';
// import Home from '../views/Home/main';
// import Project from '../views/Project/main';
// import Rating from '../views/Rating/main';
// // import '../scss/style.scss'
//
// class Full extends Component {
//   render() {
//     // console.log(this.props)
//     return (
//       <div className="app">
//         {/* <Header /> */}
//         <div className="app-body">
//           {/* <Sidebar {...this.props} /> */}
//           <main className="main">
//             <div style={{ marginTop: 40 }} />
//             <Container fluid>
//               <Switch>
//                 <Route path="/rating/" name="rating" component={Rating} />
//                 <Route path="/project/:id" name="project" component={Project} />
//                 <Route path="/main" name="Home" component={Home} />
//                 <Route path="/dashboard" name="Dashboard" component={Dashboard} />
//                 <Route path="/components/buttons" name="Buttons" component={Buttons} />
//                 <Route path="/components/cards" name="Cards" component={Cards} />
//                 <Route path="/components/forms" name="Forms" component={Forms} />
//                 <Route path="/components/modals" name="Modals" component={Modals} />
//                 <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons} />
//                 <Route path="/components/switches" name="Swithces" component={Switches} />
//                 <Route path="/components/tables" name="Tables" component={Tables} />
//                 <Route path="/components/tabs" name="Tabs" component={Tabs} />
//                 <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome} />
//                 <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons} />
//                 <Route path="/widgets" name="Widgets" component={Widgets} />
//                 <Route path="/charts" name="Charts" component={Charts} />
//                 <Redirect from="/" to="/main" />
//               </Switch>
//             </Container>
//           </main>
//           {/* <Aside /> */}
//         </div>
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }
//
// export default Full;






/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Switch"],
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Header_Header__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_3__modules__["default"].routes
  )
));

/***/ }),

/***/ "./src/client/modules/common/components/web/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/index.jsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["b"]; });

//export * from './ui-antd';

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx":
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





var Button = function Button(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Button"],
    props,
    children
  );
};

Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Button);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/NavBar.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules__ = __webpack_require__("./src/client/modules/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings__ = __webpack_require__("./settings.js");







var NavBar = function NavBar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Navbar"],
    { color: 'faded', light: true },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Container"],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["NavLink"],
          { to: '/', className: 'navbar-brand' },
          __WEBPACK_IMPORTED_MODULE_4__settings__["a" /* default */].app.name
        ),
        __WEBPACK_IMPORTED_MODULE_3__modules__["default"].navItems
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_reactstrap__["Nav"],
        { className: 'ustify-content-end' },
        __WEBPACK_IMPORTED_MODULE_3__modules__["default"].navItemsRight,
        (!false || true) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_reactstrap__["NavItem"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            { href: '/graphiql', className: 'nav-link' },
            'GraphiQL'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (NavBar);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__NavBar__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/NavBar.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./settings.js");








var footerHeight = '40px';

var Footer = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.footer.withConfig({
  displayName: 'PageLayout__Footer',
  componentId: 'dtuivq-0'
})(['position:absolute;bottom:0;width:100%;line-height:', ';height:', ';'], footerHeight, footerHeight);

var PageLayout = function PageLayout(_ref) {
  var children = _ref.children,
      navBar = _ref.navBar;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'section',
    null,
    navBar !== false && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__NavBar__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"],
      { id: 'content' },
      children
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Footer,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-center' },
        '\xA9 2017. ',
        __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].app.name,
        '.'
      )
    )
  );
};

PageLayout.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  navBar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* unused harmony default export */ var _unused_webpack_default_export = (PageLayout);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx");
/* unused harmony reexport PageLayout */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx");
/* unused harmony reexport Button */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__MenuItem__["a"]; });
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
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
// eslint-disable-next-line import/prefer-default-export



/***/ }),

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
        navItem = _ref.navItem,
        navItemRight = _ref.navItemRight,
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
    this.navItem = combine(arguments, function (arg) {
      return arg.navItem;
    });
    this.navItemRight = combine(arguments, function (arg) {
      return arg.navItemRight;
    });
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
  }, {
    key: 'navItems',
    get: function get() {
      var _this2 = this;

      return this.navItem.map(function (component, idx) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(component, {
          key: component.key ? component.key : idx + _this2.navItem.length
        });
      });
    }
  }, {
    key: 'navItemsRight',
    get: function get() {
      var _this3 = this;

      return this.navItemRight.map(function (component, idx) {
        return __WEBPACK_IMPORTED_MODULE_6_react___default.a.cloneElement(component, {
          key: component.key ? component.key : idx + _this3.navItem.length
        });
      });
    }
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
      var _this4 = this;

      return this.createFetchOptions.length ? function () {
        try {
          var result = {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_get_iterator___default()(_this4.createFetchOptions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
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
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/home', component: __WEBPACK_IMPORTED_MODULE_3__containers_main__["a" /* default */] }),
  navItem: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["a" /* MenuItem */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__("./src/client/modules/home/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicon__ = __webpack_require__("./src/client/modules/favicon/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");
// import counter from './counter';
// import post from './post';
// import upload from './upload';
// import user from './user';
// import subscription from './subscription';
// import contact from './contact';

// import pageNotFound from './pageNotFound';




// export default new Feature(counter, home, post, upload, user, subscription, contact, pageNotFound);
/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_2__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */]));

/***/ }),

/***/ "./src/client/modules/pageNotFound/containers/PageNotFound.jsx":
false,

/***/ "./src/client/modules/pageNotFound/index.web.jsx":
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
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["b" /* styles */]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
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

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

};
//# sourceMappingURL=index.eb72b7f10ec76d053765.js.map