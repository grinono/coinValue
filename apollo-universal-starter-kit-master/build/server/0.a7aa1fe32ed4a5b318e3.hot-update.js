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

/***/ "./src/client/modules/common/components/Button.jsx":
false,

/***/ "./src/client/modules/common/components/LayoutCenter.jsx":
false,

/***/ "./src/client/modules/common/components/index.jsx":
false,

/***/ "./src/client/modules/common/components/web/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/index.jsx");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__ui_bootstrap__["d"]; });

//export * from './ui-antd';

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Alert.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Alert = function Alert(_ref) {
  var children = _ref.children,
      color = _ref.color,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'color']);

  if (color === 'error') {
    color = 'danger';
  }
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Alert"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { color: color }),
    children
  );
};

Alert.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  color: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (Alert);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Card.jsx":
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





var Card = function Card(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Card"],
    props,
    children
  );
};

Card.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Card);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardGroup.jsx":
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





var CardGroup = function CardGroup(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardBody"],
    props,
    children
  );
};

CardGroup.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardGroup);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardText.jsx":
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





var CardText = function CardText(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardText"],
    props,
    children
  );
};

CardText.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardText);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/CardTitle.jsx":
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





var CardTitle = function CardTitle(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["CardTitle"],
    props,
    children
  );
};

CardTitle.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (CardTitle);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Col.jsx":
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





var Col = function Col(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Col"],
    props,
    children
  );
};

Col.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Col);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Form.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Form = function Form(_ref) {
  var children = _ref.children,
      layout = _ref.layout,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'layout']);

  var inline = false;
  if (layout === 'inline') {
    inline = true;
  }
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Form"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { inline: inline }),
    children
  );
};

Form.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node,
  layout: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (Form);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/FormItem.jsx":
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





var FormItem = function FormItem(_ref) {
  var children = _ref.children,
      label = _ref.label,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children', 'label']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    props,
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      { size: 'md' },
      label,
      ':\xA0'
    ),
    children
  );
};

FormItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};

/* unused harmony default export */ var _unused_webpack_default_export = (FormItem);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Input.jsx":
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





var Input = function Input(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
    props,
    children
  );
};

Input.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Input);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Label.jsx":
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





var Label = function Label(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
    props,
    children
  );
};

Label.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Label);

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

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Option.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);




var Option = function Option(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'option',
    props,
    children
  );
};

Option.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Option);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderCheckBox.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderCheckBox = function RenderCheckBox(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    { color: color, check: true },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      { check: true },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { placeholder: label, type: type })),
      ' ',
      label,
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderCheckBox.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderCheckBox);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderField.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderField = function RenderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error,
      children = _ref.children;

  var valid = null;
  if (touched && error) {
    valid = false;
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    null,
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      null,
      label
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { placeholder: label, type: type, valid: valid }),
        children
      ),
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderField.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderField);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/RenderSelect.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_reactstrap__);





var RenderField = function RenderField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      children = _ref.children,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;

  var color = 'normal';
  if (touched && error) {
    color = 'danger';
  }

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormGroup"],
    { color: color },
    label && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Label"],
      null,
      label
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Input"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, input, { type: type }),
        children
      ),
      touched && error && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_reactstrap__["FormFeedback"],
        null,
        error
      )
    )
  );
};

RenderField.propTypes = {
  input: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  meta: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (RenderField);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Row.jsx":
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





var Row = function Row(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Row"],
    props,
    children
  );
};

Row.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Row);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Select.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_reactstrap__);






var Select = function Select(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_4_reactstrap__["Input"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, { type: 'select' }),
    children
  );
};

Select.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Select);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Table.jsx":
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





var renderHead = function renderHead(columns) {
  return columns.map(function (_ref) {
    var title = _ref.title,
        dataIndex = _ref.dataIndex,
        renderHeader = _ref.renderHeader,
        key = _ref.key;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'th',
      { key: key, className: 'w-' + (columns.length === 2 ? 100 : 100 / columns.length) },
      renderHeader ? renderHeader(title, dataIndex) : title
    );
  });
};

var renderBody = function renderBody(columns, dataSource) {
  return dataSource.map(function (entry) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'tr',
      { key: entry.id },
      renderData(columns, entry)
    );
  });
};

var renderData = function renderData(columns, entry) {
  return columns.map(function (_ref2) {
    var dataIndex = _ref2.dataIndex,
        render = _ref2.render,
        key = _ref2.key;

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'td',
      { key: key },
      render ? render(entry[dataIndex], entry) : entry[dataIndex]
    );
  });
};

var Table = function Table(_ref3) {
  var dataSource = _ref3.dataSource,
      columns = _ref3.columns,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['dataSource', 'columns']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Table"],
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'thead',
      null,
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'tr',
        null,
        renderHead(columns)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'tbody',
      null,
      renderBody(columns, dataSource)
    )
  );
};

Table.propTypes = {
  dataSource: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array,
  columns: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.array
};

/* unused harmony default export */ var _unused_webpack_default_export = (Table);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PageLayout__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/PageLayout.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__PageLayout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Button__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/Button.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MenuItem__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/MenuItem.jsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__MenuItem__["a"]; });
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
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__("./src/client/modules/common/components/web/ui-bootstrap/components/index.js");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components__["c"]; });
// eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/client/modules/contact/components/ContactForm.web.jsx":
false,

/***/ "./src/client/modules/contact/components/ContactView.web.jsx":
false,

/***/ "./src/client/modules/contact/containers/Contact.jsx":
false,

/***/ "./src/client/modules/contact/graphql/Contact.graphql":
false,

/***/ "./src/client/modules/contact/index.web.jsx":
false,

/***/ "./src/client/modules/counter/components/CounterView.web.jsx":
false,

/***/ "./src/client/modules/counter/containers/Counter.jsx":
false,

/***/ "./src/client/modules/counter/graphql/AddCounter.graphql":
false,

/***/ "./src/client/modules/counter/graphql/CounterQuery.graphql":
false,

/***/ "./src/client/modules/counter/graphql/CounterSubscription.graphql":
false,

/***/ "./src/client/modules/counter/index.web.jsx":
false,

/***/ "./src/client/modules/counter/reducers/index.js":
false,

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
    __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__["b" /* MenuItem */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pageNotFound__ = __webpack_require__("./src/client/modules/pageNotFound/index.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favicon__ = __webpack_require__("./src/client/modules/favicon/index.web.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");
// import counter from './counter';
// import post from './post';
// import upload from './upload';
// import user from './user';
// import subscription from './subscription';
// import contact from './contact';






// export default new Feature(counter, home, post, upload, user, subscription, contact, pageNotFound);
/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__pageNotFound__["a" /* default */]));

/***/ }),

/***/ "./src/client/modules/pageNotFound/containers/PageNotFound.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("./settings.js");








var Section = __WEBPACK_IMPORTED_MODULE_4_styled_components___default.a.section.withConfig({
  displayName: 'PageNotFound__Section',
  componentId: 'qx6zry-0'
})(['text-align:center;']);

var PageNotFound = function PageNotFound(_ref) {
  var _ref$staticContext = _ref.staticContext,
      staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

  staticContext.pageNotFound = true;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__common_components_web__["c" /* PageLayout */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Section,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a, {
        title: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Page not found',
        meta: [{
          name: 'description',
          content: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Page not found'
        }]
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'Page not found - 404'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { to: '/' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__common_components_web__["a" /* Button */],
          { className: 'home-link', color: 'primary' },
          'Go to Homepage'
        )
      )
    )
  );
};

PageNotFound.propTypes = {
  staticContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

/* harmony default export */ __webpack_exports__["a"] = (PageNotFound);

/***/ }),

/***/ "./src/client/modules/pageNotFound/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_PageNotFound__ = __webpack_require__("./src/client/modules/pageNotFound/containers/PageNotFound.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");






/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_2__containers_PageNotFound__["a" /* default */] })
}));

/***/ }),

/***/ "./src/client/modules/post/components/PostCommentForm.web.jsx":
false,

/***/ "./src/client/modules/post/components/PostCommentsView.web.jsx":
false,

/***/ "./src/client/modules/post/components/PostEditView.web.jsx":
false,

/***/ "./src/client/modules/post/components/PostForm.web.jsx":
false,

/***/ "./src/client/modules/post/components/PostList.web.jsx":
false,

/***/ "./src/client/modules/post/containers/Post.jsx":
false,

/***/ "./src/client/modules/post/containers/PostComments.jsx":
false,

/***/ "./src/client/modules/post/containers/PostEdit.jsx":
false,

/***/ "./src/client/modules/post/graphql/AddComment.graphql":
false,

/***/ "./src/client/modules/post/graphql/AddPost.graphql":
false,

/***/ "./src/client/modules/post/graphql/Comment.graphql":
false,

/***/ "./src/client/modules/post/graphql/CommentSubscription.graphql":
false,

/***/ "./src/client/modules/post/graphql/DeleteComment.graphql":
false,

/***/ "./src/client/modules/post/graphql/DeletePost.graphql":
false,

/***/ "./src/client/modules/post/graphql/EditComment.graphql":
false,

/***/ "./src/client/modules/post/graphql/EditPost.graphql":
false,

/***/ "./src/client/modules/post/graphql/Post.graphql":
false,

/***/ "./src/client/modules/post/graphql/PostQuery.graphql":
false,

/***/ "./src/client/modules/post/graphql/PostSubscription.graphql":
false,

/***/ "./src/client/modules/post/graphql/PostsQuery.graphql":
false,

/***/ "./src/client/modules/post/graphql/PostsSubscription.graphql":
false,

/***/ "./src/client/modules/post/index.web.jsx":
false,

/***/ "./src/client/modules/post/reducers/index.js":
false,

/***/ "./src/client/modules/subscription/components/CancelSubscriptionView.web.jsx":
false,

/***/ "./src/client/modules/subscription/components/CardInfoView.jsx":
false,

/***/ "./src/client/modules/subscription/components/SubscribersOnlyView.jsx":
false,

/***/ "./src/client/modules/subscription/components/SubscriptionCardForm.web.jsx":
false,

/***/ "./src/client/modules/subscription/components/SubscriptionView.web.jsx":
false,

/***/ "./src/client/modules/subscription/components/UpdateCardView.web.jsx":
false,

/***/ "./src/client/modules/subscription/containers/Auth.js":
false,

/***/ "./src/client/modules/subscription/containers/CancelSubscription.js":
false,

/***/ "./src/client/modules/subscription/containers/CardInfo.js":
false,

/***/ "./src/client/modules/subscription/containers/SubscribersOnly.js":
false,

/***/ "./src/client/modules/subscription/containers/Subscription.js":
false,

/***/ "./src/client/modules/subscription/containers/SubscriptionProfile.js":
false,

/***/ "./src/client/modules/subscription/containers/UpdateCard.js":
false,

/***/ "./src/client/modules/subscription/graphql/CancelSubscription.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/CardInfoQuery.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/Subscribe.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/SubscribersOnlyNumberQuery.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/Subscription.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/SubscriptionQuery.graphql":
false,

/***/ "./src/client/modules/subscription/graphql/UpdateCard.graphql":
false,

/***/ "./src/client/modules/subscription/index.web.jsx":
false,

/***/ "./src/client/modules/subscription/reducers/index.js":
false,

/***/ "./src/client/modules/upload/components/UploadView.web.jsx":
false,

/***/ "./src/client/modules/upload/containers/Upload.jsx":
false,

/***/ "./src/client/modules/upload/graphql/FilesQuery.graphql":
false,

/***/ "./src/client/modules/upload/graphql/RemoveFile.graphql":
false,

/***/ "./src/client/modules/upload/graphql/UploadFiles.graphql":
false,

/***/ "./src/client/modules/upload/index.web.jsx":
false,

/***/ "./src/client/modules/upload/reducers/index.js":
false,

/***/ "./src/client/modules/user/components/ForgotPasswordForm.web.jsx":
false,

/***/ "./src/client/modules/user/components/ForgotPasswordView.web.jsx":
false,

/***/ "./src/client/modules/user/components/LoginForm.web.jsx":
false,

/***/ "./src/client/modules/user/components/LoginView.web.jsx":
false,

/***/ "./src/client/modules/user/components/ProfileView.web.jsx":
false,

/***/ "./src/client/modules/user/components/RegisterForm.web.jsx":
false,

/***/ "./src/client/modules/user/components/RegisterView.web.jsx":
false,

/***/ "./src/client/modules/user/components/ResetPasswordForm.web.jsx":
false,

/***/ "./src/client/modules/user/components/ResetPasswordView.web.jsx":
false,

/***/ "./src/client/modules/user/components/UserEditView.jsx":
false,

/***/ "./src/client/modules/user/components/UserForm.web.jsx":
false,

/***/ "./src/client/modules/user/components/Users.web.jsx":
false,

/***/ "./src/client/modules/user/components/UsersFilterView.web.jsx":
false,

/***/ "./src/client/modules/user/components/UsersListView.web.jsx":
false,

/***/ "./src/client/modules/user/containers/Auth.jsx":
false,

/***/ "./src/client/modules/user/containers/ForgotPassword.jsx":
false,

/***/ "./src/client/modules/user/containers/Login.jsx":
false,

/***/ "./src/client/modules/user/containers/Profile.jsx":
false,

/***/ "./src/client/modules/user/containers/Register.jsx":
false,

/***/ "./src/client/modules/user/containers/ResetPassword.jsx":
false,

/***/ "./src/client/modules/user/containers/UserEdit.jsx":
false,

/***/ "./src/client/modules/user/containers/UsersFilter.jsx":
false,

/***/ "./src/client/modules/user/containers/UsersList.jsx":
false,

/***/ "./src/client/modules/user/graphql/AddUser.graphql":
false,

/***/ "./src/client/modules/user/graphql/CurrentUserQuery.graphql":
false,

/***/ "./src/client/modules/user/graphql/DeleteUser.graphql":
false,

/***/ "./src/client/modules/user/graphql/EditUser.graphql":
false,

/***/ "./src/client/modules/user/graphql/ForgotPassword.graphql":
false,

/***/ "./src/client/modules/user/graphql/Login.graphql":
false,

/***/ "./src/client/modules/user/graphql/Logout.graphql":
false,

/***/ "./src/client/modules/user/graphql/Profile.graphql":
false,

/***/ "./src/client/modules/user/graphql/Register.graphql":
false,

/***/ "./src/client/modules/user/graphql/ResetPassword.graphql":
false,

/***/ "./src/client/modules/user/graphql/User.graphql":
false,

/***/ "./src/client/modules/user/graphql/UserQuery.graphql":
false,

/***/ "./src/client/modules/user/graphql/UsersQuery.graphql":
false,

/***/ "./src/client/modules/user/index.web.jsx":
false,

/***/ "./src/client/modules/user/reducers/index.js":
false,

/***/ "./src/common/createReduxStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export storeReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__("react-router-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__ = __webpack_require__("redux-devtools-extension/developmentOnly");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_modules__ = __webpack_require__("./src/client/modules/index.js");








var storeReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["routerReducer"],
  form: __WEBPACK_IMPORTED_MODULE_3_redux_form__["reducer"]
}, __WEBPACK_IMPORTED_MODULE_5__client_modules__["default"].reducers));

var createReduxStore = function createReduxStore(initialState, client, routerMiddleware) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(storeReducer, initialState, // initial state
  routerMiddleware ? Object(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension_developmentOnly__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(routerMiddleware)) : undefined);
};

/* harmony default export */ __webpack_exports__["a"] = (createReduxStore);

/***/ }),

/***/ "./src/common/validation.js":
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
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["d" /* styles */]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
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

/***/ "filesize":
false,

/***/ "immutability-helper":
false,

/***/ "jwt-decode":
false,

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-cookie":
false,

/***/ "react-debounce-input":
false,

/***/ "react-dropzone":
false,

/***/ "react-native":
/***/ (function(module, exports) {

module.exports = require("react-native-web");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-stripe-elements":
false,

/***/ "redux-form":
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ })

};
//# sourceMappingURL=index.8b57f77f1e14001b26a6.js.map