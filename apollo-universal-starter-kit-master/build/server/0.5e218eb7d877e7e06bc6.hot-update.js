require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/app/Routes.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules__ = __webpack_require__("./src/client/modules/index.js");





/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
  __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
  null,
  __WEBPACK_IMPORTED_MODULE_2__modules__["default"].routes
));

/***/ }),

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native__ = __webpack_require__("react-native");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_native__);




var LayoutCenter = function LayoutCenter(_ref) {
  var children = _ref.children;
  var container = styles.container,
      layout = styles.layout,
      offset = styles.offset,
      content = styles.content,
      column = styles.column;


  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_native__["View"],
    { style: container },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_native__["View"],
      { style: layout },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: offset }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_native__["View"],
        { style: content },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_native__["View"],
          { style: column },
          children
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_native__["View"], { style: offset })
    )
  );
};

var styles = __WEBPACK_IMPORTED_MODULE_2_react_native__["StyleSheet"].create({
  container: {
    flex: 1
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  content: {
    flexGrow: 3
  },
  offset: {
    flexGrow: 3
  }
});

LayoutCenter.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node
};

/* harmony default export */ __webpack_exports__["a"] = (LayoutCenter);

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

/* harmony default export */ __webpack_exports__["a"] = (Alert);

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

/* harmony default export */ __webpack_exports__["a"] = (Button);

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

/* harmony default export */ __webpack_exports__["a"] = (Card);

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

/* harmony default export */ __webpack_exports__["a"] = (CardGroup);

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

/* harmony default export */ __webpack_exports__["a"] = (CardText);

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

/* harmony default export */ __webpack_exports__["a"] = (CardTitle);

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

/* harmony default export */ __webpack_exports__["a"] = (Col);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/Container.jsx":
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





var Container = function Container(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["Container"],
    props,
    children
  );
};

Container.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (Container);

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

/* harmony default export */ __webpack_exports__["a"] = (Form);

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

/* harmony default export */ __webpack_exports__["a"] = (FormItem);

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

/* harmony default export */ __webpack_exports__["a"] = (Input);

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

/* harmony default export */ __webpack_exports__["a"] = (Label);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/ListGroup.jsx":
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





var ListGroup = function ListGroup(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["ListGroup"],
    props,
    children
  );
};

ListGroup.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (ListGroup);

/***/ }),

/***/ "./src/client/modules/common/components/web/ui-bootstrap/components/ListItem.jsx":
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





var ListItem = function ListItem(_ref) {
  var children = _ref.children,
      props = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['children']);

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_reactstrap__["ListGroupItem"],
    props,
    children
  );
};

ListItem.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.node
};

/* unused harmony default export */ var _unused_webpack_default_export = (ListItem);

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

/* harmony default export */ __webpack_exports__["a"] = (MenuItem);

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

/* harmony default export */ __webpack_exports__["a"] = (Option);

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

/* harmony default export */ __webpack_exports__["a"] = (PageLayout);

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

/* harmony default export */ __webpack_exports__["a"] = (RenderCheckBox);

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

/* harmony default export */ __webpack_exports__["a"] = (RenderField);

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

/* harmony default export */ __webpack_exports__["a"] = (RenderField);

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

/* harmony default export */ __webpack_exports__["a"] = (Row);

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

/* harmony default export */ __webpack_exports__["a"] = (Select);

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

/* harmony default export */ __webpack_exports__["a"] = (Table);

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

/***/ "./src/client/modules/contact/components/ContactForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var ContactForm = function ContactForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error,
      sent = _ref.sent;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'contact', onSubmit: handleSubmit(onSubmit) },
    sent && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
      { color: 'success' },
      'Thank you for contacting us!'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'name', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Name', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(3)] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Email', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* email */]] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'content',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'textarea',
      label: 'Content',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(10)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
        { color: 'error' },
        error
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'submit', disabled: submitting },
        'Submit'
      )
    )
  );
};

ContactForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  sent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'contact',
  enableReinitialize: true
})(ContactForm));

/***/ }),

/***/ "./src/client/modules/contact/components/ContactView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ContactForm__ = __webpack_require__("./src/client/modules/contact/components/ContactForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;











var ContactView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ContactView, _React$Component);

  function ContactView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ContactView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ContactView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ContactView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sent: false
    }, _this.onSubmit = function (_ref2) {
      var contact = _ref2.contact,
          onFormSubmitted = _ref2.onFormSubmitted;
      return function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return contact(values);

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Contact request failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

                case 7:

                  _this.setState({ sent: result });
                  onFormSubmitted();

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ContactView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          contact = _props.contact,
          onFormSubmitted = _props.onFormSubmitted;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Contact Us',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Contact us example page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Contact Us'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__ContactForm__["a" /* default */], { onSubmit: this.onSubmit({ contact: contact, onFormSubmitted: onFormSubmitted }), sent: this.state.sent })
        )
      );
    }
  }]);

  return ContactView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  contact: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  onFormSubmitted: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/contact/containers/Contact.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ContactView__ = __webpack_require__("./src/client/modules/contact/components/ContactView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_Contact_graphql__ = __webpack_require__("./src/client/modules/contact/graphql/Contact.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_Contact_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_Contact_graphql__);








var _this2 = this;










var Contact = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Contact, _React$Component);

  function Contact() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Contact);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Contact.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Contact)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Contact, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_ContactView__["a" /* default */], this.props);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var ContactWithApollo = Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_Contact_graphql___default.a, {
  props: function props(_ref) {
    var mutate = _ref.mutate;
    return {
      contact: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var name = _ref3.name,
              email = _ref3.email,
              content = _ref3.content;

          var _ref4, contact;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { name: name, email: email, content: content } }
                  });

                case 3:
                  _ref4 = _context.sent;
                  contact = _ref4.data.contact;

                  if (!contact.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: contact.errors });

                case 7:
                  return _context.abrupt('return', contact);

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 10]]);
        }));

        return function contact(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(null, function (dispatch) {
  return {
    onFormSubmitted: function onFormSubmitted() {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_10_redux_form__["reset"])('contact'));
    }
  };
}))(Contact);

/* harmony default export */ __webpack_exports__["a"] = (ContactWithApollo);

/***/ }),

/***/ "./src/client/modules/contact/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Contact__ = __webpack_require__("./src/client/modules/contact/containers/Contact.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");







/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
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

/***/ "./src/client/modules/counter/components/CounterView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./settings.js");







var Section = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.section.withConfig({
  displayName: 'CounterViewweb__Section',
  componentId: 'xtti2r-0'
})(['margin-bottom:30px;text-align:center;']);

var CounterView = function CounterView(_ref) {
  var loading = _ref.loading,
      counter = _ref.counter,
      addCounter = _ref.addCounter,
      reduxCount = _ref.reduxCount,
      onReduxIncrement = _ref.onReduxIncrement;

  var renderMetaData = function renderMetaData() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a, {
      title: __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].app.name + ' - Counter',
      meta: [{
        name: 'description',
        content: __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].app.name + ' - Counter example page'
      }]
    });
  };

  if (loading) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-center' },
        'Loading...'
      )
    );
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Section,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Current counter, is ',
          counter.amount,
          '. This is being stored server-side in the database and using Apollo subscription for real-time updates.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__common_components_web__["b" /* Button */],
          { id: 'graphql-button', color: 'primary', onClick: addCounter(1) },
          'Click to increase counter'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Section,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          null,
          'Current reduxCount, is ',
          reduxCount,
          '. This is being stored client-side with Redux.'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__common_components_web__["b" /* Button */],
          { id: 'redux-button', color: 'primary', onClick: onReduxIncrement(1) },
          'Click to increase reduxCount'
        )
      )
    );
  }
};

CounterView.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  counter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  addCounter: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  reduxCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  onReduxIncrement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (CounterView);

/***/ }),

/***/ "./src/client/modules/counter/containers/Counter.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper__ = __webpack_require__("immutability-helper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_CounterView__ = __webpack_require__("./src/client/modules/counter/components/CounterView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_CounterQuery_graphql__ = __webpack_require__("./src/client/modules/counter/graphql/CounterQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_CounterQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_CounterQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_AddCounter_graphql__ = __webpack_require__("./src/client/modules/counter/graphql/AddCounter.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_AddCounter_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_AddCounter_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_CounterSubscription_graphql__ = __webpack_require__("./src/client/modules/counter/graphql/CounterSubscription.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_CounterSubscription_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__graphql_CounterSubscription_graphql__);






var _class, _temp;













var Counter = (_temp = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Counter, _React$Component);

  function Counter(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Counter);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Counter.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Counter)).call(this, props));

    _this.subscription = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Counter, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.loading) {
        // Subscribe or re-subscribe
        if (!this.subscription) {
          this.subscribeToCount();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.subscription) {
        this.subscription();
      }
    }
  }, {
    key: 'subscribeToCount',
    value: function subscribeToCount() {
      var subscribeToMore = this.props.subscribeToMore;

      this.subscription = subscribeToMore({
        document: __WEBPACK_IMPORTED_MODULE_13__graphql_CounterSubscription_graphql___default.a,
        variables: {},
        updateQuery: function updateQuery(prev, _ref) {
          var amount = _ref.subscriptionData.data.counterUpdated.amount;

          return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
            counter: {
              amount: {
                $set: amount
              }
            }
          });
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_CounterView__["a" /* default */], this.props);
    }
  }]);

  return Counter;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
}, _temp);


var CounterWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_CounterQuery_graphql___default.a, {
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        loading = _ref2$data.loading,
        error = _ref2$data.error,
        counter = _ref2$data.counter,
        subscribeToMore = _ref2$data.subscribeToMore;

    if (error) throw new Error(error);
    return { loading: loading, counter: counter, subscribeToMore: subscribeToMore };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_AddCounter_graphql___default.a, {
  props: function props(_ref3) {
    var ownProps = _ref3.ownProps,
        mutate = _ref3.mutate;
    return {
      addCounter: function addCounter(amount) {
        return function () {
          return mutate({
            variables: { amount: amount },
            updateQueries: {
              counterQuery: function counterQuery(prev, _ref4) {
                var mutationResult = _ref4.mutationResult;

                var newAmount = mutationResult.data.addCounter.amount;
                return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
                  counter: {
                    amount: {
                      $set: newAmount
                    }
                  }
                });
              }
            },
            optimisticResponse: {
              __typename: 'Mutation',
              addCounter: {
                __typename: 'Counter',
                amount: ownProps.counter.amount + 1
              }
            }
          });
        };
      }
    };
  }
}))(Counter);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(function (state) {
  return { reduxCount: state.counter.reduxCount };
}, function (dispatch) {
  return {
    onReduxIncrement: function onReduxIncrement(value) {
      return function () {
        return dispatch({
          type: 'COUNTER_INCREMENT',
          value: Number(value)
        });
      };
    }
  };
})(CounterWithApollo));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");








/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_4__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_2__containers_Counter__["a" /* default */] }),
  reducer: { counter: __WEBPACK_IMPORTED_MODULE_3__reducers__["a" /* default */] }
}));

/***/ }),

/***/ "./src/client/modules/dashboard/containers/dashboard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__ = __webpack_require__("react-chartjs-2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_chartjs_2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);









var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

// Card Chart 1
var cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
    data: [65, 59, 84, 84, 51, 55, 40]
  }]
};

var cardChartOpts1 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 2
};var cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: brandInfo,
    borderColor: 'rgba(255,255,255,.55)',
    data: [1, 18, 9, 17, 34, 22, 11]
  }]
};

var cardChartOpts2 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        color: 'transparent',
        zeroLineColor: 'transparent'
      },
      ticks: {
        fontSize: 2,
        fontColor: 'transparent'
      }

    }],
    yAxes: [{
      display: false,
      ticks: {
        display: false,
        min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
        max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
      }
    }]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 3
};var cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.2)',
    borderColor: 'rgba(255,255,255,.55)',
    data: [78, 81, 80, 45, 34, 12, 40]
  }]
};

var cardChartOpts3 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4
    }
  }

  // Card Chart 4
};var cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgba(255,255,255,.3)',
    borderColor: 'transparent',
    data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98]
  }]
};

var cardChartOpts4 = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false,
      barPercentage: 0.6
    }],
    yAxes: [{
      display: false
    }]
  }

  // Social Box Chart
};var socialBoxData = [{ data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' }, { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' }, { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' }, { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' }];

var makeSocialBoxData = function makeSocialBoxData(dataSetNo) {
  var dataset = socialBoxData[dataSetNo];
  var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var socialChartOpts = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

// sparkline charts
var sparkLineChartData = [{
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'New Clients'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Recurring Clients'
}, {
  data: [35, 23, 56, 22, 97, 23, 64],
  label: 'Pageviews'
}, {
  data: [65, 59, 84, 84, 51, 55, 40],
  label: 'Organic'
}, {
  data: [78, 81, 80, 45, 34, 12, 40],
  label: 'CTR'
}, {
  data: [1, 13, 9, 17, 34, 41, 38],
  label: 'Bounce Rate'
}];

var makeSparkLineData = function makeSparkLineData(dataSetNo, variant) {
  var dataset = sparkLineChartData[dataSetNo];
  var data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      backgroundColor: 'transparent',
      borderColor: variant ? variant : '#c2cfd6',
      data: dataset.data,
      label: dataset.label
    }]
  };
  return function () {
    return data;
  };
};

var sparklineChartOpts = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    line: {
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  },
  legend: {
    display: false
  }
};

// Main Chart

// convert Hex to RGBA
function convertHex(hex, opacity) {
  hex = hex.replace('#', '');
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  var result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
  return result;
}

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

var mainChart = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [{
    label: 'My First dataset',
    backgroundColor: convertHex(brandInfo, 10),
    borderColor: brandInfo,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data1
  }, {
    label: 'My Second dataset',
    backgroundColor: 'transparent',
    borderColor: brandSuccess,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 2,
    data: data2
  }, {
    label: 'My Third dataset',
    backgroundColor: 'transparent',
    borderColor: brandDanger,
    pointHoverBackgroundColor: '#fff',
    borderWidth: 1,
    borderDash: [8, 5],
    data: data3
  }]
};

var mainChartOpts = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      gridLines: {
        drawOnChartArea: false
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        maxTicksLimit: 5,
        stepSize: Math.ceil(250 / 5),
        max: 250
      }
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  }
};

var Dashboard = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Dashboard, _Component);

  function Dashboard(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Dashboard);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Dashboard.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Dashboard)).call(this, props));

    _this.toggle = _this.toggle.bind(_this);
    _this.state = {
      dropdownOpen: false
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Dashboard, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        "div",
        { className: "animated fadeIn" },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "12", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              { className: "text-white bg-primary" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body pb-0" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonGroup"],
                  { className: "float-right" },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonDropdown"],
                    { id: "card1", isOpen: this.state.card1,
                      toggle: function toggle() {
                        _this2.setState({ card1: !_this2.state.card1 });
                      } },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownToggle"],
                      { caret: true, className: "p-0", color: "transparent" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownMenu"],
                      { className: this.state.card1 ? "show" : "", right: true },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Another action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        { disabled: true },
                        "Disabled action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Something else here"
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "h4",
                  { className: "mb-0" },
                  "9.823"
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "p",
                  null,
                  "Members online"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper px-3", style: { height: '70px' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: cardChartData1, options: cardChartOpts1, height: 70 })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "12", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              { className: "text-white bg-info" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body pb-0" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonGroup"],
                  { className: "float-right" },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Dropdown"],
                    { id: "card2", isOpen: this.state.card2,
                      toggle: function toggle() {
                        _this2.setState({ card2: !_this2.state.card2 });
                      } },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownToggle"],
                      { caret: true, className: "p-0", color: "transparent" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownMenu"],
                      { className: this.state.card2 ? "show" : "", right: true },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Another action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Something else here"
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "h4",
                  { className: "mb-0" },
                  "9.823"
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "p",
                  null,
                  "Members online"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper px-3", style: { height: '70px' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: cardChartData2, options: cardChartOpts2, height: 70 })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "12", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              { className: "text-white bg-warning" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body pb-0" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonGroup"],
                  { className: "float-right" },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Dropdown"],
                    { id: "card3", isOpen: this.state.card3,
                      toggle: function toggle() {
                        _this2.setState({ card3: !_this2.state.card3 });
                      } },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownToggle"],
                      { caret: true, className: "p-0", color: "transparent" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownMenu"],
                      { className: this.state.card3 ? "show" : "", right: true },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Another action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Something else here"
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "h4",
                  { className: "mb-0" },
                  "9.823"
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "p",
                  null,
                  "Members online"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper px-0", style: { height: '70px' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: cardChartData3, options: cardChartOpts3, height: 70 })
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "12", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              { className: "text-white bg-danger" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body pb-0" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonGroup"],
                  { className: "float-right" },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonDropdown"],
                    { id: "card4", isOpen: this.state.card4,
                      toggle: function toggle() {
                        _this2.setState({ card4: !_this2.state.card4 });
                      } },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownToggle"],
                      { caret: true, className: "p-0", color: "transparent" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownMenu"],
                      { className: this.state.card4 ? "show" : "", right: true },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Another action"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["DropdownItem"],
                        null,
                        "Something else here"
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "h4",
                  { className: "mb-0" },
                  "9.823"
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "p",
                  null,
                  "Members online"
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper px-3", style: { height: '70px' } },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Bar"], { data: cardChartData4, options: cardChartOpts4, height: 70 })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                    { sm: "5" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardTitle"],
                      { className: "mb-0" },
                      "Traffic"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "small text-muted" },
                      "November 2015"
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                    { sm: "7", className: "d-none d-sm-inline-block" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                      { color: "primary", className: "float-right" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-cloud-download" })
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonToolbar"],
                      { className: "float-right", "aria-label": "Toolbar with button groups" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["ButtonGroup"],
                        { className: "mr-3", "data-toggle": "buttons", "aria-label": "First group" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Label"],
                          { htmlFor: "option1", className: "btn btn-outline-secondary" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Input"], { type: "radio", name: "options", id: "option1" }),
                          " Day"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Label"],
                          { htmlFor: "option2", className: "btn btn-outline-secondary active" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Input"], { type: "radio", name: "options", id: "option2", defaultChecked: true }),
                          " Month"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Label"],
                          { htmlFor: "option3", className: "btn btn-outline-secondary" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Input"], { type: "radio", name: "options", id: "option3" }),
                          " Year"
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "div",
                  { className: "chart-wrapper", style: { height: 300 + 'px', marginTop: 40 + 'px' } },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: mainChart, options: mainChartOpts, height: 300 })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardFooter"],
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "ul",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "li",
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Visits"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "strong",
                      null,
                      "29.703 Users (40%)"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs mt-2", color: "success", value: "40" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "li",
                    { className: "d-none d-md-table-cell" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Unique"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "strong",
                      null,
                      "24.093 Users (20%)"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs mt-2", color: "info", value: "20" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "li",
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Pageviews"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "strong",
                      null,
                      "78.706 Views (60%)"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs mt-2", color: "warning", value: "60" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "li",
                    { className: "d-none d-md-table-cell" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "New Users"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "strong",
                      null,
                      "22.123 Users (80%)"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs mt-2", color: "danger", value: "80" })
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "li",
                    { className: "d-none d-md-table-cell" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "div",
                      { className: "text-muted" },
                      "Bounce Rate"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "strong",
                      null,
                      "Average 40.15%"
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs mt-2", color: "primary", value: "40" })
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "6", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              "div",
              { className: "social-box facebook" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-facebook" }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSocialBoxData(0), options: socialChartOpts, height: 90 })
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "ul",
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "89k"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "friends"
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "459"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "feeds"
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "6", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              "div",
              { className: "social-box twitter" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-twitter" }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSocialBoxData(1), options: socialChartOpts, height: 90 })
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "ul",
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "973k"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "followers"
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "1.792"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "tweets"
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "6", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              "div",
              { className: "social-box linkedin" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-linkedin" }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSocialBoxData(2), options: socialChartOpts, height: 90 })
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "ul",
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "500+"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "contacts"
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "292"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "feeds"
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: "6", sm: "6", lg: "3" },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              "div",
              { className: "social-box google-plus" },
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-google-plus" }),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "div",
                { className: "chart-wrapper" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSocialBoxData(3), options: socialChartOpts, height: 90 })
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                "ul",
                null,
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "894"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "followers"
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  "li",
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "strong",
                    null,
                    "92"
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "span",
                    null,
                    "circles"
                  )
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardHeader"],
                null,
                "Traffic ",
                '&',
                " Sales"
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: "card-body" },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                    { xs: "12", md: "6", xl: "4" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout callout-info" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "New Clients"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "9,123"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(0, brandPrimary), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout callout-danger" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "Recurring Clients"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "22,643"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(1, brandDanger), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", { className: "mt-0" }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "ul",
                      { className: "horizontal-bars" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Monday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "34" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "78" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Tuesday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "56" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "94" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Wednesday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "12" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "67" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Thursday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "43" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "91" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Friday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "22" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "73" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Saturday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "53" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "82" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "title" },
                          "Sunday"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "9" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "69" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        { className: "legend" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Badge"], { pill: true, color: "info" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "small",
                          null,
                          "New clients"
                        ),
                        "\xA0 ",
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Badge"], { pill: true, color: "danger" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "small",
                          null,
                          "Recurring clients"
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                    { xs: "12", md: "6", xl: "4" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout callout-warning" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "Pageviews"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "78,623"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(2, brandWarning), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout callout-success" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "Organic"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "49,123"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(3, brandSuccess), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", { className: "mt-0" }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "ul",
                      { className: "horizontal-bars type-2" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-user" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "Male"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "43%"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "warning", value: "43" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-user-female" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "Female"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "37%"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "warning", value: "37" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("li", { className: "divider" }),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-globe" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "Organic Search"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "191,235 ",
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            { className: "text-muted small" },
                            "(56%)"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "56" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-social-facebook" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "Facebook"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "51,223 ",
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            { className: "text-muted small" },
                            "(15%)"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "15" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-social-twitter" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "Twitter"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "37,564 ",
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            { className: "text-muted small" },
                            "(11%)"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "11" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-social-linkedin" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "title" },
                          "LinkedIn"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "span",
                          { className: "value" },
                          "27,319 ",
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            { className: "text-muted small" },
                            "(8%)"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "bars" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "8" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        { className: "divider text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                          { color: "link", size: "sm", className: "text-muted", "data-toggle": "tooltip", "data-placement": "top",
                            title: "", "data-original-title": "show more" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-options" })
                        )
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                    { xs: "12", xl: "4" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "CTR"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "23%"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(4), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
                        { sm: "6" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "callout callout-primary" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            { className: "text-muted" },
                            "Bounce Rate"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            { className: "h4" },
                            "5%"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "chart-wrapper" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Line"], { data: makeSparkLineData(5, brandPrimary), options: sparklineChartOpts, width: 100, height: 30 })
                          )
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("hr", { className: "mt-0" }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "ul",
                      { className: "icons-list" },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-screen-desktop bg-primary" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "iMac 4k"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Sold this week"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "1.924"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-screen-smartphone bg-info" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "Samsung Galaxy Edge"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Sold this week"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "1.224"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-screen-smartphone bg-warning" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "iPhone 6S"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Sold this week"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "1.163"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-user bg-danger" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "Premium accounts"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Sold this week"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "928"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-social-spotify bg-success" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "Spotify Subscriptions"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Sold this week"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "893"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-cloud-download bg-danger" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "Ebook"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Downloads"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "121.924"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-camera bg-warning" }),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "desc" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "title" },
                            "Photos"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "small",
                            null,
                            "Lorem ipsum dolor sit amet"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "value" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "small text-muted" },
                            "Uploaded"
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "strong",
                            null,
                            "12.125"
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "actions" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                            { color: "link", className: "text-muted" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-settings" })
                          )
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "li",
                        { className: "divider text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Button"],
                          { color: "link", size: "sm", className: "text-muted", "data-toggle": "tooltip", "data-placement": "top",
                            title: "show more" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-options" })
                        )
                      )
                    )
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("br", null),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Table"],
                  { hover: true, responsive: true, className: "table-outline mb-0 d-none d-sm-table" },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "thead",
                    { className: "thead-default" },
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "icon-people" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        null,
                        "User"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        { className: "text-center" },
                        "Country"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        null,
                        "Usage"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        { className: "text-center" },
                        "Payment Method"
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "th",
                        null,
                        "Activity"
                      )
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    "tbody",
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/1.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-success" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "Yiorgos Avraamu"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "New"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/USA.png', alt: "USA", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "50%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "50" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-cc-mastercard", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "10 sec ago"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/2.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-danger" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "Avram Tarasios"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "Recurring"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/Brazil.png', alt: "Brazil", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "10%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "10" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-cc-visa", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "5 minutes ago"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/3.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-warning" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "Quintin Ed"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "New"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/India.png', alt: "India", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "74%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "warning", value: "74" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-cc-stripe", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "1 hour ago"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/4.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-secondary" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "En\xE9as Kwadwo"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "New"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/France.png', alt: "France", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "98%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "danger", value: "98" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-paypal", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "Last month"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/5.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-success" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "Agapetus Tade\xE1\u0161"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "New"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/Spain.png', alt: "Spain", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "22%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "info", value: "22" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-google-wallet", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "Last week"
                        )
                      )
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      "tr",
                      null,
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "avatar" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/avatars/6.jpg', className: "img-avatar", alt: "admin@bootstrapmaster.com" }),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "avatar-status badge-danger" })
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          null,
                          "Friderik D\xE1vid"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "span",
                            null,
                            "New"
                          ),
                          " | Registered: Jan 1, 2015"
                        )
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("img", { src: 'img/flags/Poland.png', alt: "Poland", style: { height: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "clearfix" },
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-left" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "strong",
                              null,
                              "43%"
                            )
                          ),
                          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                            "div",
                            { className: "float-right" },
                            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                              "small",
                              { className: "text-muted" },
                              "Jun 11, 2015 - Jul 10, 2015"
                            )
                          )
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: "progress-xs", color: "success", value: "43" })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        { className: "text-center" },
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("i", { className: "fa fa-cc-amex", style: { fontSize: 24 + 'px' } })
                      ),
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                        "td",
                        null,
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "div",
                          { className: "small text-muted" },
                          "Last login"
                        ),
                        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                          "strong",
                          null,
                          "Yesterday"
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Dashboard);

/***/ }),

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
      'Posts'
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");












/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_9__connector__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__counter__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__dashboard__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__upload__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__user__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__subscription__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__contact__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__pageNotFound__["a" /* default */]));

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
    __WEBPACK_IMPORTED_MODULE_5__common_components_web__["n" /* PageLayout */],
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
          __WEBPACK_IMPORTED_MODULE_5__common_components_web__["b" /* Button */],
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var PostCommentForm = function PostCommentForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      initialValues = _ref.initialValues,
      onSubmit = _ref.onSubmit;

  var operation = 'Add';
  if (initialValues.id !== null) {
    operation = 'Edit';
  }

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'comment', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["r" /* Row */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["g" /* Col */],
        { xs: 2 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__common_components_web__["k" /* Label */],
          null,
          operation,
          ' comment'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["g" /* Col */],
        { xs: 8 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'content', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(1)] })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["g" /* Col */],
        { xs: 2 },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
          { color: 'primary', type: 'submit', className: 'float-right', disabled: submitting },
          'Save'
        )
      )
    )
  );
};

PostCommentForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  initialValues: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'comment',
  enableReinitialize: true
})(PostCommentForm));

/***/ }),

/***/ "./src/client/modules/post/components/PostCommentsView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostCommentsView; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__PostCommentForm__ = __webpack_require__("./src/client/modules/post/components/PostCommentForm.web.jsx");






var _class, _temp2;






var PostCommentsView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PostCommentsView, _React$PureComponent);

  function PostCommentsView() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PostCommentsView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = PostCommentsView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(PostCommentsView)).call.apply(_ref, [this].concat(args))), _this), _this.hendleEditComment = function (id, content) {
      var onCommentSelect = _this.props.onCommentSelect;

      onCommentSelect({ id: id, content: content });
    }, _this.hendleDeleteComment = function (id) {
      var _this$props = _this.props,
          comment = _this$props.comment,
          onCommentSelect = _this$props.onCommentSelect,
          deleteComment = _this$props.deleteComment;


      if (comment.id === id) {
        onCommentSelect({ id: null, content: '' });
      }

      deleteComment(id);
    }, _this.onSubmit = function () {
      return function (values) {
        var _this$props2 = _this.props,
            comment = _this$props2.comment,
            postId = _this$props2.postId,
            addComment = _this$props2.addComment,
            editComment = _this$props2.editComment,
            onCommentSelect = _this$props2.onCommentSelect,
            onFormSubmitted = _this$props2.onFormSubmitted;


        if (comment.id === null) {
          addComment(values.content, postId);
        } else {
          editComment(comment.id, values.content);
        }

        onCommentSelect({ id: null, content: '' });
        onFormSubmitted();
      };
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PostCommentsView, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          postId = _props.postId,
          comment = _props.comment,
          comments = _props.comments;


      var columns = [{
        title: 'Content',
        dataIndex: 'content',
        key: 'content'
      }, {
        title: 'Actions',
        key: 'actions',
        width: 120,
        render: function render(text, record) {
          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { style: { width: 120 } },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__common_components_web__["b" /* Button */],
              {
                color: 'primary',
                size: 'sm',
                className: 'edit-comment',
                onClick: function onClick() {
                  return _this2.hendleEditComment(record.id, record.content);
                }
              },
              'Edit'
            ),
            ' ',
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7__common_components_web__["b" /* Button */],
              {
                color: 'primary',
                size: 'sm',
                className: 'delete-comment',
                onClick: function onClick() {
                  return _this2.hendleDeleteComment(record.id);
                }
              },
              'Delete'
            )
          );
        }
      }];

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h3',
          null,
          'Comments'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__PostCommentForm__["a" /* default */], { postId: postId, onSubmit: this.onSubmit(), initialValues: comment }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('h1', null),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__common_components_web__["t" /* Table */], { dataSource: comments, columns: columns })
      );
    }
  }]);

  return PostCommentsView;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent), _class.propTypes = {
  postId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number.isRequired,
  comments: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  comment: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  addComment: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  editComment: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  deleteComment: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  onCommentSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  onFormSubmitted: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/post/components/PostEditView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PostForm__ = __webpack_require__("./src/client/modules/post/components/PostForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__containers_PostComments__ = __webpack_require__("./src/client/modules/post/containers/PostComments.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__("./settings.js");










var onSubmit = function onSubmit(post, addPost, editPost) {
  return function (values) {
    if (post) {
      editPost(post.id, values.title, values.content);
    } else {
      addPost(values.title, values.content);
    }
  };
};

var PostEditView = function PostEditView(_ref) {
  var loading = _ref.loading,
      post = _ref.post,
      match = _ref.match,
      location = _ref.location,
      subscribeToMore = _ref.subscribeToMore,
      addPost = _ref.addPost,
      editPost = _ref.editPost;

  var postObj = post;

  // if new post was just added read it from router
  if (!postObj && location.state) {
    postObj = location.state.post;
  }

  var renderMetaData = function renderMetaData() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a, {
      title: __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].app.name + ' - Edit post',
      meta: [{
        name: 'description',
        content: 'Edit post example page'
      }]
    });
  };

  if (loading && !postObj) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-center' },
        'Loading...'
      )
    );
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
        { id: 'back-button', to: '/posts' },
        'Back'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        post ? 'Edit' : 'Create',
        ' Post'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__PostForm__["a" /* default */], { onSubmit: onSubmit(postObj, addPost, editPost), initialValues: postObj }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', null),
      postObj && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__containers_PostComments__["a" /* default */], {
        postId: Number(match.params.id),
        comments: postObj.comments,
        subscribeToMore: subscribeToMore
      })
    );
  }
};

PostEditView.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  post: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  addPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  editPost: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  match: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
};

/* harmony default export */ __webpack_exports__["a"] = (PostEditView);

/***/ }),

/***/ "./src/client/modules/post/components/PostForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var PostForm = function PostForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'post', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'title', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Title', validate: __WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'content', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Content', validate: __WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
      { color: 'primary', type: 'submit', disabled: submitting },
      'Save'
    )
  );
};

PostForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'post',
  enableReinitialize: true
})(PostForm));

/***/ }),

/***/ "./src/client/modules/post/components/PostList.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostList; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__settings__ = __webpack_require__("./settings.js");






var _class, _temp2;








var PostList = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PostList, _React$PureComponent);

  function PostList() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PostList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = PostList.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(PostList)).call.apply(_ref, [this].concat(args))), _this), _this.hendleDeletePost = function (id) {
      var deletePost = _this.props.deletePost;

      deletePost(id);
    }, _this.renderLoadMore = function (posts, loadMoreRows) {
      if (posts.pageInfo.hasNextPage) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__common_components_web__["b" /* Button */],
          { id: 'load-more', color: 'primary', onClick: loadMoreRows },
          'Load more ...'
        );
      }
    }, _this.renderMetaData = function () {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_helmet___default.a, {
        title: __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].app.name + ' - Posts list',
        meta: [{
          name: 'description',
          content: __WEBPACK_IMPORTED_MODULE_10__settings__["a" /* default */].app.name + ' - List of all posts example page'
        }]
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PostList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          loading = _props.loading,
          posts = _props.posts,
          loadMoreRows = _props.loadMoreRows;

      if (loading) {
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__common_components_web__["n" /* PageLayout */],
          null,
          this.renderMetaData(),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            { className: 'text-center' },
            'Loading...'
          )
        );
      } else {
        var columns = [{
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: function render(text, record) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
              { className: 'post-link', to: '/post/' + record.id },
              text
            );
          }
        }, {
          title: 'Actions',
          key: 'actions',
          width: 50,
          render: function render(text, record) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9__common_components_web__["b" /* Button */],
              {
                color: 'primary',
                size: 'sm',
                className: 'delete-button',
                onClick: function onClick() {
                  return _this2.hendleDeletePost(record.id);
                }
              },
              'Delete'
            );
          }
        }];
        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__common_components_web__["n" /* PageLayout */],
          null,
          this.renderMetaData(),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'h2',
            null,
            'Posts'
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
            { to: '/post/0' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_9__common_components_web__["b" /* Button */],
              { color: 'primary' },
              'Add'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('h1', null),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__common_components_web__["t" /* Table */], { dataSource: posts.edges.map(function (_ref2) {
              var node = _ref2.node;
              return node;
            }), columns: columns }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'small',
              null,
              '(',
              posts.edges.length,
              ' / ',
              posts.totalCount,
              ')'
            )
          ),
          this.renderLoadMore(posts, loadMoreRows)
        );
      }
    }
  }]);

  return PostList;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool.isRequired,
  posts: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object,
  deletePost: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  loadMoreRows: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/post/containers/Post.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = AddPost;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper__ = __webpack_require__("immutability-helper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PostList__ = __webpack_require__("./src/client/modules/post/components/PostList.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_PostsQuery_graphql__ = __webpack_require__("./src/client/modules/post/graphql/PostsQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_PostsQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_PostsQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_PostsSubscription_graphql__ = __webpack_require__("./src/client/modules/post/graphql/PostsSubscription.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_PostsSubscription_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_PostsSubscription_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_DeletePost_graphql__ = __webpack_require__("./src/client/modules/post/graphql/DeletePost.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_DeletePost_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__graphql_DeletePost_graphql__);







var _class, _temp;












function AddPost(prev, node) {
  // ignore if duplicate
  if (node.id !== null && prev.posts.edges.some(function (post) {
    return node.id === post.cursor;
  })) {
    return prev;
  }

  var edge = {
    cursor: node.id,
    node: node,
    __typename: 'PostEdges'
  };

  return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
    posts: {
      totalCount: {
        $set: prev.posts.totalCount + 1
      },
      edges: {
        $unshift: [edge]
      }
    }
  });
}

function DeletePost(prev, id) {
  var index = prev.posts.edges.findIndex(function (x) {
    return x.node.id === id;
  });

  // ignore if not found
  if (index < 0) {
    return prev;
  }

  return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
    posts: {
      totalCount: {
        $set: prev.posts.totalCount - 1
      },
      edges: {
        $splice: [[index, 1]]
      }
    }
  });
}

var Post = (_temp = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Post, _React$Component);

  function Post(props) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Post);

    var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Post.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Post)).call(this, props));

    _this.subscribeToPostList = function (endCursor) {
      var subscribeToMore = _this.props.subscribeToMore;


      _this.subscription = subscribeToMore({
        document: __WEBPACK_IMPORTED_MODULE_12__graphql_PostsSubscription_graphql___default.a,
        variables: { endCursor: endCursor },
        updateQuery: function updateQuery(prev, _ref) {
          var _ref$subscriptionData = _ref.subscriptionData.data.postsUpdated,
              mutation = _ref$subscriptionData.mutation,
              node = _ref$subscriptionData.node;

          var newResult = prev;

          if (mutation === 'CREATED') {
            newResult = AddPost(prev, node);
          } else if (mutation === 'DELETED') {
            newResult = DeletePost(prev, node.id);
          }

          return newResult;
        }
      });
    };

    _this.subscription = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Post, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.loading) {
        var endCursor = this.props.posts ? this.props.posts.pageInfo.endCursor : 0;
        var nextEndCursor = nextProps.posts.pageInfo.endCursor;

        // Check if props have changed and, if necessary, stop the subscription
        if (this.subscription && endCursor !== nextEndCursor) {
          this.subscription();
          this.subscription = null;
        }

        // Subscribe or re-subscribe
        if (!this.subscription) {
          this.subscribeToPostList(nextEndCursor);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.subscription) {
        // unsubscribe
        this.subscription();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_PostList__["a" /* default */], this.props);
    }
  }]);

  return Post;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.bool.isRequired,
  posts: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.object,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_7_prop_types___default.a.func.isRequired
}, _temp);


/* harmony default export */ __webpack_exports__["b"] = (Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_PostsQuery_graphql___default.a, {
  options: function options() {
    return {
      variables: { limit: 10, after: 0 }
    };
  },
  props: function props(_ref2) {
    var data = _ref2.data;
    var loading = data.loading,
        error = data.error,
        posts = data.posts,
        fetchMore = data.fetchMore,
        subscribeToMore = data.subscribeToMore;

    var loadMoreRows = function loadMoreRows() {
      return fetchMore({
        variables: {
          after: posts.pageInfo.endCursor
        },
        updateQuery: function updateQuery(previousResult, _ref3) {
          var fetchMoreResult = _ref3.fetchMoreResult;

          var totalCount = fetchMoreResult.posts.totalCount;
          var newEdges = fetchMoreResult.posts.edges;
          var pageInfo = fetchMoreResult.posts.pageInfo;

          return {
            // By returning `cursor` here, we update the `fetchMore` function
            // to the new cursor.
            posts: {
              totalCount: totalCount,
              edges: [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(previousResult.posts.edges), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(newEdges)),
              pageInfo: pageInfo,
              __typename: 'Posts'
            }
          };
        }
      });
    };
    if (error) throw new Error(error);
    return { loading: loading, posts: posts, subscribeToMore: subscribeToMore, loadMoreRows: loadMoreRows };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_13__graphql_DeletePost_graphql___default.a, {
  props: function props(_ref4) {
    var mutate = _ref4.mutate;
    return {
      deletePost: function deletePost(id) {
        mutate({
          variables: { id: id },
          optimisticResponse: {
            __typename: 'Mutation',
            deletePost: {
              id: id,
              __typename: 'Post'
            }
          },
          updateQueries: {
            posts: function posts(prev, _ref5) {
              var deletePost = _ref5.mutationResult.data.deletePost;

              return DeletePost(prev, deletePost.id);
            }
          }
        });
      }
    };
  }
}))(Post));

/***/ }),

/***/ "./src/client/modules/post/containers/PostComments.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper__ = __webpack_require__("immutability-helper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_PostCommentsView__ = __webpack_require__("./src/client/modules/post/components/PostCommentsView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_AddComment_graphql__ = __webpack_require__("./src/client/modules/post/graphql/AddComment.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_AddComment_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_AddComment_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_EditComment_graphql__ = __webpack_require__("./src/client/modules/post/graphql/EditComment.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_EditComment_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__graphql_EditComment_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_DeleteComment_graphql__ = __webpack_require__("./src/client/modules/post/graphql/DeleteComment.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_DeleteComment_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__graphql_DeleteComment_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graphql_CommentSubscription_graphql__ = __webpack_require__("./src/client/modules/post/graphql/CommentSubscription.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graphql_CommentSubscription_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__graphql_CommentSubscription_graphql__);






var _class, _temp;















function AddComment(prev, node) {
  // ignore if duplicate
  if (node.id !== null && prev.post.comments.some(function (comment) {
    return node.id === comment.id;
  })) {
    return prev;
  }

  return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
    post: {
      comments: {
        $push: [node]
      }
    }
  });
}

function DeleteComment(prev, id) {
  var index = prev.post.comments.findIndex(function (x) {
    return x.id === id;
  });

  // ignore if not found
  if (index < 0) {
    return prev;
  }

  return __WEBPACK_IMPORTED_MODULE_9_immutability_helper___default()(prev, {
    post: {
      comments: {
        $splice: [[index, 1]]
      }
    }
  });
}

var PostComments = (_temp = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(PostComments, _React$Component);

  function PostComments(props) {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, PostComments);

    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PostComments.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(PostComments)).call(this, props));

    _this.subscribeToCommentList = function (postId) {
      var subscribeToMore = _this.props.subscribeToMore;


      _this.subscription = subscribeToMore({
        document: __WEBPACK_IMPORTED_MODULE_15__graphql_CommentSubscription_graphql___default.a,
        variables: { postId: postId },
        updateQuery: function updateQuery(prev, _ref) {
          var _ref$subscriptionData = _ref.subscriptionData.data.commentUpdated,
              mutation = _ref$subscriptionData.mutation,
              id = _ref$subscriptionData.id,
              node = _ref$subscriptionData.node;

          var newResult = prev;

          if (mutation === 'CREATED') {
            newResult = AddComment(prev, node);
          } else if (mutation === 'DELETED') {
            newResult = DeleteComment(prev, id);
          }

          return newResult;
        }
      });
    };

    _this.subscription = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(PostComments, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Check if props have changed and, if necessary, stop the subscription
      if (this.subscription && this.props.postId !== nextProps.postId) {
        this.subscription = null;
      }

      // Subscribe or re-subscribe
      if (!this.subscription) {
        this.subscribeToCommentList(nextProps.postId);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onCommentSelect({ id: null, content: '' });

      if (this.subscription) {
        // unsubscribe
        this.subscription();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_PostCommentsView__["a" /* default */], this.props);
    }
  }]);

  return PostComments;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component), _class.propTypes = {
  postId: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.number.isRequired,
  comments: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.array.isRequired,
  comment: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.object.isRequired,
  onCommentSelect: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
}, _temp);


var PostCommentsWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_AddComment_graphql___default.a, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      addComment: function addComment(content, postId) {
        return mutate({
          variables: { input: { content: content, postId: postId } },
          optimisticResponse: {
            __typename: 'Mutation',
            addComment: {
              __typename: 'Comment',
              id: null,
              content: content
            }
          },
          updateQueries: {
            post: function post(prev, _ref3) {
              var addComment = _ref3.mutationResult.data.addComment;

              if (prev.post) {
                return AddComment(prev, addComment);
              }
            }
          }
        });
      }
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_13__graphql_EditComment_graphql___default.a, {
  props: function props(_ref4) {
    var postId = _ref4.ownProps.postId,
        mutate = _ref4.mutate;
    return {
      editComment: function editComment(id, content) {
        return mutate({
          variables: { input: { id: id, postId: postId, content: content } },
          optimisticResponse: {
            __typename: 'Mutation',
            editComment: {
              __typename: 'Comment',
              id: id,
              content: content
            }
          }
        });
      }
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_14__graphql_DeleteComment_graphql___default.a, {
  props: function props(_ref5) {
    var postId = _ref5.ownProps.postId,
        mutate = _ref5.mutate;
    return {
      deleteComment: function deleteComment(id) {
        return mutate({
          variables: { input: { id: id, postId: postId } },
          optimisticResponse: {
            __typename: 'Mutation',
            deleteComment: {
              __typename: 'Comment',
              id: id
            }
          },
          updateQueries: {
            post: function post(prev, _ref6) {
              var deleteComment = _ref6.mutationResult.data.deleteComment;

              if (prev.post) {
                return DeleteComment(prev, deleteComment.id);
              }
            }
          }
        });
      }
    };
  }
}))(PostComments);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(function (state) {
  return { comment: state.post.comment };
}, function (dispatch) {
  return {
    onCommentSelect: function onCommentSelect(comment) {
      dispatch({
        type: 'COMMENT_SELECT',
        value: comment
      });
    },
    onFormSubmitted: function onFormSubmitted() {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_10_redux_form__["reset"])('comment'));
    }
  };
})(PostCommentsWithApollo));

/***/ }),

/***/ "./src/client/modules/post/containers/PostEdit.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_PostEditView__ = __webpack_require__("./src/client/modules/post/components/PostEditView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Post__ = __webpack_require__("./src/client/modules/post/containers/Post.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_PostQuery_graphql__ = __webpack_require__("./src/client/modules/post/graphql/PostQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_PostQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_PostQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_AddPost_graphql__ = __webpack_require__("./src/client/modules/post/graphql/AddPost.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_AddPost_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__graphql_AddPost_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_EditPost_graphql__ = __webpack_require__("./src/client/modules/post/graphql/EditPost.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphql_EditPost_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__graphql_EditPost_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graphql_PostSubscription_graphql__ = __webpack_require__("./src/client/modules/post/graphql/PostSubscription.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__graphql_PostSubscription_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__graphql_PostSubscription_graphql__);








var _class,
    _temp,
    _this2 = this;













var PostEdit = (_temp = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(PostEdit, _React$Component);

  function PostEdit(props) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, PostEdit);

    var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (PostEdit.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(PostEdit)).call(this, props));

    _this.subscribeToPostEdit = function (postId) {
      var subscribeToMore = _this.props.subscribeToMore;


      _this.subscription = subscribeToMore({
        document: __WEBPACK_IMPORTED_MODULE_15__graphql_PostSubscription_graphql___default.a,
        variables: { id: postId }
      });
    };

    _this.subscription = null;
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(PostEdit, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.loading) {
        // Check if props have changed and, if necessary, stop the subscription
        if (this.subscription && this.props.post.id !== nextProps.post.id) {
          this.subscription();
          this.subscription = null;
        }

        // Subscribe or re-subscribe
        if (!this.subscription && nextProps.post) {
          this.subscribeToPostEdit(nextProps.post.id);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.subscription) {
        // unsubscribe
        this.subscription();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_PostEditView__["a" /* default */], this.props);
    }
  }]);

  return PostEdit;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool.isRequired,
  post: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  subscribeToMore: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_PostQuery_graphql___default.a, {
  options: function options(props) {
    var id = 0;
    if (props.match) {
      id = props.match.params.id;
    } else if (props.navigation) {
      id = props.navigation.state.params.id;
    }

    return {
      variables: { id: id }
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        error = _ref$data.error,
        post = _ref$data.post,
        subscribeToMore = _ref$data.subscribeToMore;

    if (error) throw new Error(error);
    return { loading: loading, post: post, subscribeToMore: subscribeToMore };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_13__graphql_AddPost_graphql___default.a, {
  props: function props(_ref2) {
    var _ref2$ownProps = _ref2.ownProps,
        history = _ref2$ownProps.history,
        navigation = _ref2$ownProps.navigation,
        mutate = _ref2.mutate;
    return {
      addPost: function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(title, content) {
          var postData;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return mutate({
                    variables: { input: { title: title, content: content } },
                    optimisticResponse: {
                      __typename: 'Mutation',
                      addPost: {
                        __typename: 'Post',
                        id: null,
                        title: title,
                        content: content,
                        comments: []
                      }
                    },
                    updateQueries: {
                      posts: function posts(prev, _ref4) {
                        var addPost = _ref4.mutationResult.data.addPost;

                        return Object(__WEBPACK_IMPORTED_MODULE_11__Post__["a" /* AddPost */])(prev, addPost);
                      }
                    }
                  });

                case 2:
                  postData = _context.sent;

                  if (!history) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', history.push('/post/' + postData.data.addPost.id, {
                    post: postData.data.addPost
                  }));

                case 7:
                  if (!navigation) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt('return', navigation.setParams({
                    id: postData.data.addPost.id,
                    post: postData.data.addPost
                  }));

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function addPost(_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_14__graphql_EditPost_graphql___default.a, {
  props: function props(_ref5) {
    var _ref5$ownProps = _ref5.ownProps,
        history = _ref5$ownProps.history,
        navigation = _ref5$ownProps.navigation,
        mutate = _ref5.mutate;
    return {
      editPost: function () {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(id, title, content) {
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return mutate({
                    variables: { input: { id: id, title: title, content: content } }
                  });

                case 2:
                  if (!history) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt('return', history.push('/posts'));

                case 4:
                  if (!navigation) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt('return', navigation.goBack());

                case 6:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2);
        }));

        return function editPost(_x3, _x4, _x5) {
          return _ref6.apply(this, arguments);
        };
      }()
    };
  }
}))(PostEdit));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");











/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6__connector__["a" /* default */]({
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

/***/ "./src/client/modules/subscription/components/CancelSubscriptionView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelSubscriptionView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");








var _class, _temp2;





var CancelSubscriptionView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(CancelSubscriptionView, _React$Component);

  function CancelSubscriptionView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, CancelSubscriptionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = CancelSubscriptionView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(CancelSubscriptionView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cancelling: false,
      errors: null
    }, _this.onClick = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var _ref3, errors;

      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({ cancelling: true });
              _context.next = 3;
              return _this.props.cancel();

            case 3:
              _ref3 = _context.sent;
              errors = _ref3.errors;

              if (errors) {
                _this.setState({
                  cancelling: false,
                  errors: errors
                });
              }

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(CancelSubscriptionView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          active = _props.active;
      var errors = this.state.errors;


      if (loading) return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'p',
        null,
        'Loading...'
      );

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9__common_components_web__["d" /* CardGroup */],
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__common_components_web__["f" /* CardTitle */],
          null,
          'Subscription'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9__common_components_web__["e" /* CardText */],
          null,
          active && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__common_components_web__["b" /* Button */],
            { color: 'danger', onClick: this.onClick, disabled: this.state.cancelling },
            'Cancel Subscription'
          ),
          !active && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'span',
            null,
            'You do not have a subscription.'
          ),
          errors && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9__common_components_web__["a" /* Alert */],
            { color: 'error' },
            errors
          )
        )
      );
    }
  }]);

  return CancelSubscriptionView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  cancel: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/subscription/components/CardInfoView.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");





var CardInfoView = function CardInfoView(_ref) {
  var loading = _ref.loading,
      expiryMonth = _ref.expiryMonth,
      expiryYear = _ref.expiryYear,
      last4 = _ref.last4,
      brand = _ref.brand;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    !loading && expiryMonth && expiryYear && last4 && brand && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["d" /* CardGroup */],
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["f" /* CardTitle */],
        null,
        'Card Info'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["e" /* CardText */],
        null,
        'card: ',
        brand,
        ' ************',
        last4
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["e" /* CardText */],
        null,
        'expires: ',
        expiryMonth,
        '/',
        expiryYear
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["e" /* CardText */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
          { to: '/update-card' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
            { color: 'primary' },
            'Update Card'
          )
        )
      )
    )
  );
};

CardInfoView.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  expiryMonth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  expiryYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  last4: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  brand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (CardInfoView);

/***/ }),

/***/ "./src/client/modules/subscription/components/SubscribersOnlyView.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");




var SubscribersOnlyView = function SubscribersOnlyView(_ref) {
  var loading = _ref.loading,
      number = _ref.number;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__common_components_web__["n" /* PageLayout */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      null,
      'Private'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      null,
      'Your magic number is ',
      loading ? 'loading...' : number,
      '.'
    )
  );
};

SubscribersOnlyView.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  number: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

/* harmony default export */ __webpack_exports__["a"] = (SubscribersOnlyView);

/***/ }),

/***/ "./src/client/modules/subscription/components/SubscriptionCardForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_stripe_elements__ = __webpack_require__("react-stripe-elements");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_validation__ = __webpack_require__("./src/common/validation.js");








var _class, _temp2;









var SubscriptionCardForm = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SubscriptionCardForm, _React$Component);

  function SubscriptionCardForm() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SubscriptionCardForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = SubscriptionCardForm.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SubscriptionCardForm)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
        var name = _ref3.name;

        var stripe, _ref4, token, error, id, _token$card, exp_month, exp_year, last4, brand;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                stripe = _this.props.stripe;
                _context.next = 3;
                return stripe.createToken({ name: name });

              case 3:
                _ref4 = _context.sent;
                token = _ref4.token;
                error = _ref4.error;

                if (!error) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt('return');

              case 8:
                id = token.id, _token$card = token.card, exp_month = _token$card.exp_month, exp_year = _token$card.exp_year, last4 = _token$card.last4, brand = _token$card.brand;
                _context.next = 11;
                return _this.props.onSubmit({
                  token: id,
                  expiryMonth: exp_month,
                  expiryYear: exp_year,
                  last4: last4,
                  brand: brand
                });

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(SubscriptionCardForm, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          handleSubmit = _props.handleSubmit,
          submitting = _props.submitting,
          action = _props.action,
          error = _props.error;

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_11__common_components_web__["h" /* Form */],
        { name: 'subscription', onSubmit: handleSubmit(this.onSubmit) },
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_redux_form__["Field"], { name: 'name', component: __WEBPACK_IMPORTED_MODULE_11__common_components_web__["p" /* RenderField */], type: 'text', label: 'Name On Card', validate: __WEBPACK_IMPORTED_MODULE_12__common_validation__["c" /* required */] }),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components_web__["k" /* Label */],
          null,
          'Payment Info'
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_stripe_elements__["CardElement"], { className: 'form-control', style: { base: { lineHeight: '30px' } } }),
        error && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components_web__["a" /* Alert */],
          { color: 'error' },
          error
        ),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components_web__["b" /* Button */],
          { color: 'primary', type: 'submit', disabled: submitting, style: { marginTop: 15 } },
          action
        )
      );
    }
  }]);

  return SubscriptionCardForm;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  submitting: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  action: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string.isRequired,
  error: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  handleSubmit: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func
}, _temp2);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_10_react_stripe_elements__["injectStripe"])(Object(__WEBPACK_IMPORTED_MODULE_9_redux_form__["reduxForm"])({
  form: 'subscription'
})(SubscriptionCardForm)));

/***/ }),

/***/ "./src/client/modules/subscription/components/SubscriptionView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__ = __webpack_require__("react-stripe-elements");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SubscriptionCardForm__ = __webpack_require__("./src/client/modules/subscription/components/SubscriptionCardForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;












var SubscriptionView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(SubscriptionView, _React$Component);

  function SubscriptionView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, SubscriptionView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = SubscriptionView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(SubscriptionView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      client: !true && !false
    }, _this.onSubmit = function (subscribe) {
      return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return subscribe(values);

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Transaction failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(SubscriptionView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ client: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var subscribe = this.props.subscribe;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_15__settings__["a" /* default */].app.name + ' - Subscription',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_15__settings__["a" /* default */].app.name + ' - Subscription page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_13__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Subscription!'
          ),
          this.state.client && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__["Elements"],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SubscriptionCardForm__["a" /* default */], { onSubmit: this.onSubmit(subscribe), action: 'Subscribe' })
          )
        )
      );
    }
  }]);

  return SubscriptionView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  subscribe: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/subscription/components/UpdateCardView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCardView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__ = __webpack_require__("react-stripe-elements");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SubscriptionCardForm__ = __webpack_require__("./src/client/modules/subscription/components/SubscriptionCardForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;












var UpdateCardView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UpdateCardView, _React$Component);

  function UpdateCardView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UpdateCardView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UpdateCardView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UpdateCardView)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (updateCard) {
      return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return updateCard(values);

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Update failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UpdateCardView, [{
    key: 'render',
    value: function render() {
      var updateCard = this.props.updateCard;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_15__settings__["a" /* default */].app.name + ' - Update Card',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_15__settings__["a" /* default */].app.name + ' - Update card page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_13__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_12__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Update card!'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_stripe_elements__["Elements"],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SubscriptionCardForm__["a" /* default */], { onSubmit: this.onSubmit(updateCard), action: 'Update Card' })
          )
        )
      );
    }
  }]);

  return UpdateCardView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  updateCard: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/subscription/containers/Auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubscriberNav */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriberRouteWithApollo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/SubscriptionQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_containers_Auth__ = __webpack_require__("./src/client/modules/user/containers/Auth.jsx");











var SubscriberNav = function SubscriberNav(_ref) {
  var loading = _ref.loading,
      active = _ref.active,
      children = _ref.children,
      rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ['loading', 'active', 'children']);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7__user_containers_Auth__["c" /* AuthNav */],
    rest,
    loading || !active ? null : children
  );
};

SubscriberNav.propTypes = {
  active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  loading: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.object
};

var SubscriberNavWithApollo = Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default.a, {
  props: function props(_ref2) {
    var data = _ref2.data;
    var loading = data.loading,
        subscription = data.subscription;

    return {
      loading: loading,
      active: subscription && subscription.active
    };
  }
}))(SubscriberNav);

var SubscribeRedirect = function SubscribeRedirect() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_router_dom__["Redirect"], { to: '/subscription' });
};

var SubscriberRoute = function SubscriberRoute(_ref3) {
  var loading = _ref3.loading,
      active = _ref3.active,
      component = _ref3.component,
      rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref3, ['loading', 'active', 'component']);

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__user_containers_Auth__["e" /* AuthRoute */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ component: !loading && active ? component : SubscribeRedirect }, rest));
};

SubscriberRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,
  loading: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool.isRequired,
  active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
};

var SubscriberRouteWithApollo = Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default.a, {
  props: function props(_ref4) {
    var data = _ref4.data;
    var loading = data.loading,
        subscription = data.subscription;

    return {
      loading: loading,
      active: subscription && subscription.active
    };
  }
}))(SubscriberRoute);




/***/ }),

/***/ "./src/client/modules/subscription/containers/CancelSubscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_CancelSubscriptionView__ = __webpack_require__("./src/client/modules/subscription/components/CancelSubscriptionView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/SubscriptionQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_CardInfoQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/CardInfoQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphql_CardInfoQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__graphql_CardInfoQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_CancelSubscription_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/CancelSubscription.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_CancelSubscription_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_CancelSubscription_graphql__);



var _this = this;











var CancelSubscription = function CancelSubscription(_ref) {
  var loading = _ref.loading,
      active = _ref.active,
      cancel = _ref.cancel;

  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_CancelSubscriptionView__["a" /* default */], { loading:  true ? true : loading, active: active, cancel: cancel });
};

CancelSubscription.propTypes = {
  cancel: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func.isRequired,
  loading: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,
  active: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool
};

var CancelSubscriptionWithApollo = Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default.a, {
  // i'm not sure why but this query causes SSR to hang. it seems to have
  // to do with the fact that this query exists in other places in the tree.
  // possibly having to do with the query name, as if you duplicate the query
  // file and change the query name to `SubscriptionDataTwo`, then it works.
  // skipping for now on server.
  skip: true,
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        loading = _ref2$data.loading,
        subscription = _ref2$data.subscription;

    return {
      loading: loading,
      active: subscription && subscription.active
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_8__graphql_CancelSubscription_graphql___default.a, {
  props: function props(_ref3) {
    var mutate = _ref3.mutate;
    return {
      cancel: function () {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
          var _ref5, cancel;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    update: function update(store, _ref6) {
                      var cancel = _ref6.data.cancel;

                      var data = store.readQuery({ query: __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default.a });
                      data.subscription = cancel;
                      store.writeQuery({ query: __WEBPACK_IMPORTED_MODULE_6__graphql_SubscriptionQuery_graphql___default.a, data: data });
                    },
                    refetchQueries: [{ query: __WEBPACK_IMPORTED_MODULE_7__graphql_CardInfoQuery_graphql___default.a }]
                  });

                case 3:
                  _ref5 = _context.sent;
                  cancel = _ref5.data.cancel;

                  if (!cancel.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: cancel.errors.map(function (e) {
                      return e.message;
                    }).join('\n') });

                case 7:
                  return _context.abrupt('return', true);

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 10]]);
        }));

        return function cancel() {
          return _ref4.apply(this, arguments);
        };
      }()
    };
  }
}))(CancelSubscription);

/* harmony default export */ __webpack_exports__["a"] = (CancelSubscriptionWithApollo);

/***/ }),

/***/ "./src/client/modules/subscription/containers/CardInfo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CardInfoView__ = __webpack_require__("./src/client/modules/subscription/components/CardInfoView.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_CardInfoQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/CardInfoQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_CardInfoQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__graphql_CardInfoQuery_graphql__);








var CardInfo = function CardInfo(_ref) {
  var loading = _ref.loading,
      expiryMonth = _ref.expiryMonth,
      expiryYear = _ref.expiryYear,
      last4 = _ref.last4,
      brand = _ref.brand;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CardInfoView__["a" /* default */], { loading: loading, expiryMonth: expiryMonth, expiryYear: expiryYear, last4: last4, brand: brand });
};

CardInfo.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  expiryMonth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  expiryYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  last4: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  brand: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

var CardInfoWithApollo = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4__graphql_CardInfoQuery_graphql___default.a, {
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        loading = _ref2$data.loading,
        subscriptionCardInfo = _ref2$data.subscriptionCardInfo;

    return {
      loading: loading,
      expiryMonth: subscriptionCardInfo && subscriptionCardInfo.expiryMonth,
      expiryYear: subscriptionCardInfo && subscriptionCardInfo.expiryYear,
      last4: subscriptionCardInfo && subscriptionCardInfo.last4,
      brand: subscriptionCardInfo && subscriptionCardInfo.brand
    };
  }
}))(CardInfo);

/* harmony default export */ __webpack_exports__["a"] = (CardInfoWithApollo);

/***/ }),

/***/ "./src/client/modules/subscription/containers/SubscribersOnly.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_SubscribersOnlyView__ = __webpack_require__("./src/client/modules/subscription/components/SubscribersOnlyView.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_SubscribersOnlyNumberQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/SubscribersOnlyNumberQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graphql_SubscribersOnlyNumberQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__graphql_SubscribersOnlyNumberQuery_graphql__);








var SubscribersOnly = function SubscribersOnly(_ref) {
  var loading = _ref.loading,
      number = _ref.number;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_SubscribersOnlyView__["a" /* default */], { loading: loading, number: number });
};

SubscribersOnly.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  number: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
};

var SubscribersOnlyWithApollo = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4__graphql_SubscribersOnlyNumberQuery_graphql___default.a, {
  options: { fetchPolicy: 'network-only' },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        loading = _ref2$data.loading,
        subscribersOnlyNumber = _ref2$data.subscribersOnlyNumber;

    return { loading: loading, number: subscribersOnlyNumber && subscribersOnlyNumber.number };
  }
}))(SubscribersOnly);

/* harmony default export */ __webpack_exports__["a"] = (SubscribersOnlyWithApollo);

/***/ }),

/***/ "./src/client/modules/subscription/containers/Subscription.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_stripe_elements__ = __webpack_require__("react-stripe-elements");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_SubscriptionView__ = __webpack_require__("./src/client/modules/subscription/components/SubscriptionView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_Subscribe_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/Subscribe.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_Subscribe_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_Subscribe_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_SubscriptionQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/SubscriptionQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_SubscriptionQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_SubscriptionQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_CardInfoQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/CardInfoQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__graphql_CardInfoQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__graphql_CardInfoQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");








var _this2 = this;













// react-stripe-elements will not render on the server.

var Subscription = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Subscription, _React$Component);

  function Subscription() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Subscription);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Subscription.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Subscription)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Subscription, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        null,
         false ? React.createElement(
          StripeProvider,
          { apiKey: settings.subscription.stripePublishableKey },
          React.createElement(SubscriptionView, this.props)
        ) : __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_SubscriptionView__["a" /* default */], this.props)
      );
    }
  }]);

  return Subscription;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var SubscriptionViewWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_Subscribe_graphql___default.a, {
  props: function props(_ref) {
    var _ref$ownProps = _ref.ownProps,
        history = _ref$ownProps.history,
        navigation = _ref$ownProps.navigation,
        mutate = _ref.mutate;
    return {
      subscribe: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var token = _ref3.token,
              expiryMonth = _ref3.expiryMonth,
              expiryYear = _ref3.expiryYear,
              last4 = _ref3.last4,
              brand = _ref3.brand;

          var _ref4, subscribe;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { token: token, expiryMonth: expiryMonth, expiryYear: expiryYear, last4: last4, brand: brand } },
                    update: function update(store, _ref5) {
                      var subscribe = _ref5.data.subscribe;

                      var data = store.readQuery({ query: __WEBPACK_IMPORTED_MODULE_12__graphql_SubscriptionQuery_graphql___default.a });
                      data.subscription = subscribe;
                      store.writeQuery({ query: __WEBPACK_IMPORTED_MODULE_12__graphql_SubscriptionQuery_graphql___default.a, data: data });
                    },
                    refetchQueries: [{ query: __WEBPACK_IMPORTED_MODULE_13__graphql_CardInfoQuery_graphql___default.a }]
                  });

                case 3:
                  _ref4 = _context.sent;
                  subscribe = _ref4.data.subscribe;

                  if (!subscribe.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: subscribe.errors });

                case 7:

                  if (history) {
                    history.push('/subscribers-only');
                  }
                  if (navigation) {
                    navigation.goBack();
                  }

                  return _context.abrupt('return', subscribe);

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 12]]);
        }));

        return function subscribe(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}))(Subscription);

/* harmony default export */ __webpack_exports__["a"] = (SubscriptionViewWithApollo);

/***/ }),

/***/ "./src/client/modules/subscription/containers/SubscriptionProfile.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CardInfo__ = __webpack_require__("./src/client/modules/subscription/containers/CardInfo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CancelSubscription__ = __webpack_require__("./src/client/modules/subscription/containers/CancelSubscription.js");





var SubscriptionProfile = function SubscriptionProfile() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__CardInfo__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__CancelSubscription__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SubscriptionProfile);

/***/ }),

/***/ "./src/client/modules/subscription/containers/UpdateCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_stripe_elements__ = __webpack_require__("react-stripe-elements");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_stripe_elements___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_stripe_elements__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UpdateCardView__ = __webpack_require__("./src/client/modules/subscription/components/UpdateCardView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UpdateCard_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/UpdateCard.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UpdateCard_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_UpdateCard_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_CardInfoQuery_graphql__ = __webpack_require__("./src/client/modules/subscription/graphql/CardInfoQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_CardInfoQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_CardInfoQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings__ = __webpack_require__("./settings.js");








var _this2 = this;












// react-stripe-elements will not render on the server.

var UpdateCard = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UpdateCard, _React$Component);

  function UpdateCard() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UpdateCard);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UpdateCard.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UpdateCard)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UpdateCard, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        'div',
        null,
         false ? React.createElement(
          StripeProvider,
          { apiKey: settings.subscription.stripePublishableKey },
          React.createElement(UpdateCardView, this.props)
        ) : __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_UpdateCardView__["a" /* default */], this.props)
      );
    }
  }]);

  return UpdateCard;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var UpdateCardWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_UpdateCard_graphql___default.a, {
  props: function props(_ref) {
    var history = _ref.ownProps.history,
        mutate = _ref.mutate;
    return {
      updateCard: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var token = _ref3.token,
              expiryMonth = _ref3.expiryMonth,
              expiryYear = _ref3.expiryYear,
              last4 = _ref3.last4,
              brand = _ref3.brand;

          var _ref4, updateCard;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { token: token, expiryMonth: expiryMonth, expiryYear: expiryYear, last4: last4, brand: brand } },
                    refetchQueries: [{ query: __WEBPACK_IMPORTED_MODULE_12__graphql_CardInfoQuery_graphql___default.a }]
                  });

                case 3:
                  _ref4 = _context.sent;
                  updateCard = _ref4.data.updateCard;

                  if (updateCard) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: ['Error updating card.'] });

                case 7:

                  if (history) {
                    history.push('/profile');
                  }
                  return _context.abrupt('return', updateCard);

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 11]]);
        }));

        return function updateCard(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}))(UpdateCard);

/* harmony default export */ __webpack_exports__["a"] = (UpdateCardWithApollo);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");












/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_8__connector__["a" /* default */]({
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

/***/ "./src/client/modules/upload/components/UploadView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dropzone__ = __webpack_require__("react-dropzone");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_dropzone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_dropzone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_filesize__ = __webpack_require__("filesize");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_filesize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_filesize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;









var UploadView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UploadView, _React$PureComponent);

  function UploadView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UploadView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UploadView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UploadView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null
    }, _this.renderMetaData = function () {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
        title: __WEBPACK_IMPORTED_MODULE_13__settings__["a" /* default */].app.name + ' - Upload',
        meta: [{
          name: 'description',
          content: __WEBPACK_IMPORTED_MODULE_13__settings__["a" /* default */].app.name + ' - Upload page'
        }]
      });
    }, _this.onDrop = function (uploadFiles) {
      return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(files) {
          var result;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return uploadFiles(files);

                case 2:
                  result = _context.sent;

                  if (result && result.error) {
                    _this.setState({ error: result.error });
                  } else {
                    _this.setState({ error: null });
                  }

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    }, _this.hendleRemoveFile = function () {
      var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(id) {
        var removeFile, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                removeFile = _this.props.removeFile;
                _context2.next = 3;
                return removeFile(id);

              case 3:
                result = _context2.sent;

                if (result && result.error) {
                  _this.setState({ error: result.error });
                } else {
                  _this.setState({ error: null });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UploadView, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          files = _props.files,
          uploadFiles = _props.uploadFiles;
      var error = this.state.error;


      var columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: function render(text, record) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'a',
            { href: record.path, download: text },
            text,
            ' (',
            __WEBPACK_IMPORTED_MODULE_11_filesize___default()(record.size),
            ')'
          );
        }
      }, {
        title: 'Actions',
        key: 'actions',
        width: 50,
        render: function render(text, record) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__common_components_web__["b" /* Button */],
            { color: 'primary', size: 'sm', className: 'delete-button', onClick: function onClick() {
                return _this3.hendleRemoveFile(record.id);
              } },
            'Delete'
          );
        }
      }];

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        this.renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'text-center' },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__common_components_web__["r" /* Row */],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__common_components_web__["g" /* Col */],
              { xs: 4 },
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_10_react_dropzone___default.a,
                { onDrop: this.onDrop(uploadFiles) },
                __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                  'p',
                  null,
                  'Try dropping some files here, or click to select files to upload.'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__common_components_web__["g" /* Col */],
              { xs: 8 },
              error && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__common_components_web__["a" /* Alert */],
                { color: 'error' },
                error
              ),
              files && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__common_components_web__["t" /* Table */], { dataSource: files, columns: columns })
            )
          )
        )
      );
    }
  }]);

  return UploadView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent), _class.propTypes = {
  files: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.array,
  uploadFiles: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  removeFile: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/upload/containers/Upload.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_UploadView__ = __webpack_require__("./src/client/modules/upload/components/UploadView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_FilesQuery_graphql__ = __webpack_require__("./src/client/modules/upload/graphql/FilesQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_FilesQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_FilesQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UploadFiles_graphql__ = __webpack_require__("./src/client/modules/upload/graphql/UploadFiles.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UploadFiles_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_UploadFiles_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_RemoveFile_graphql__ = __webpack_require__("./src/client/modules/upload/graphql/RemoveFile.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_RemoveFile_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_RemoveFile_graphql__);








var _this2 = this;









var Upload = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Upload, _React$Component);

  function Upload() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Upload);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Upload.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Upload)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Upload, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_UploadView__["a" /* default */], this.props);
    }
  }]);

  return Upload;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var UploadWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10__graphql_FilesQuery_graphql___default.a, {
  options: function options() {
    return {
      fetchPolicy: 'cache-and-network'
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        error = _ref$data.error,
        files = _ref$data.files,
        refetch = _ref$data.refetch;

    if (error) throw new Error(error);
    return { loading: loading, files: files, refetch: refetch };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_UploadFiles_graphql___default.a, {
  props: function props(_ref2) {
    var refetch = _ref2.ownProps.refetch,
        mutate = _ref2.mutate;
    return {
      uploadFiles: function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(files) {
          var _ref4, uploadFiles;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { files: files }
                  });

                case 3:
                  _ref4 = _context.sent;
                  uploadFiles = _ref4.data.uploadFiles;

                  refetch();
                  return _context.abrupt('return', uploadFiles);

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](0);
                  return _context.abrupt('return', { error: _context.t0.graphQLErrors[0].message });

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 9]]);
        }));

        return function uploadFiles(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_RemoveFile_graphql___default.a, {
  props: function props(_ref5) {
    var refetch = _ref5.ownProps.refetch,
        mutate = _ref5.mutate;
    return {
      removeFile: function () {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(id) {
          var _ref7, removeFile;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { id: id }
                  });

                case 3:
                  _ref7 = _context2.sent;
                  removeFile = _ref7.data.removeFile;

                  refetch();
                  return _context2.abrupt('return', removeFile);

                case 9:
                  _context2.prev = 9;
                  _context2.t0 = _context2['catch'](0);
                  return _context2.abrupt('return', { error: _context2.t0.graphQLErrors[0].message });

                case 12:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 9]]);
        }));

        return function removeFile(_x2) {
          return _ref6.apply(this, arguments);
        };
      }()
    };
  }
}))(Upload);

/* harmony default export */ __webpack_exports__["a"] = (UploadWithApollo);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");





// Component and helpers





/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_6__connector__["a" /* default */]({
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

/***/ "./src/client/modules/user/components/ForgotPasswordForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var ForgotPasswordForm = function ForgotPasswordForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error,
      sent = _ref.sent;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'forgotPassword', onSubmit: handleSubmit(onSubmit) },
    sent && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
      { color: 'success' },
      'Reset password instructions have been emailed to you.'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'email', label: 'Email', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* email */]] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
        { color: 'error' },
        error
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'submit', disabled: submitting },
        'Send Reset Instructions'
      )
    )
  );
};

ForgotPasswordForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  sent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'forgotPassword'
})(ForgotPasswordForm));

/***/ }),

/***/ "./src/client/modules/user/components/ForgotPasswordView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ForgotPasswordForm__ = __webpack_require__("./src/client/modules/user/components/ForgotPasswordForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;











var ForgotPasswordView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ForgotPasswordView, _React$Component);

  function ForgotPasswordView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ForgotPasswordView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ForgotPasswordView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ForgotPasswordView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      sent: false
    }, _this.onSubmit = function (_ref2) {
      var forgotPassword = _ref2.forgotPassword,
          onFormSubmitted = _ref2.onFormSubmitted;
      return function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return forgotPassword(values);

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Reset password failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

                case 7:

                  _this.setState({ sent: result });
                  onFormSubmitted();

                case 9:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ForgotPasswordView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          forgotPassword = _props.forgotPassword,
          onFormSubmitted = _props.onFormSubmitted;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Forgot Password',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Forgot password page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Password Reset'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_ForgotPasswordForm__["a" /* default */], { onSubmit: this.onSubmit({ forgotPassword: forgotPassword, onFormSubmitted: onFormSubmitted }), sent: this.state.sent })
        )
      );
    }
  }]);

  return ForgotPasswordView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component), _class.propTypes = {
  forgotPassword: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  onFormSubmitted: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/LoginForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url__ = __webpack_require__("url");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_validation__ = __webpack_require__("./src/common/validation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings__ = __webpack_require__("./settings.js");










var _url$parse = __WEBPACK_IMPORTED_MODULE_3_url___default.a.parse("http://localhost:8080/graphql"),
    protocol = _url$parse.protocol,
    hostname = _url$parse.hostname,
    port = _url$parse.port;

var serverPort = process.env.PORT || port;
if (true) {
  serverPort = '3000';
}

var facebookLogin = function facebookLogin() {
  window.location = protocol + '//' + hostname + ':' + serverPort + '/auth/facebook';
};

var googleLogin = function googleLogin() {
  window.location = protocol + '//' + hostname + ':' + serverPort + '/auth/google';
};

var LoginForm = function LoginForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_5__common_components_web__["h" /* Form */],
    { name: 'login', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_5__common_components_web__["p" /* RenderField */], type: 'email', label: 'Email', validate: [__WEBPACK_IMPORTED_MODULE_6__common_validation__["c" /* required */], __WEBPACK_IMPORTED_MODULE_6__common_validation__["a" /* email */]] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'password',
      component: __WEBPACK_IMPORTED_MODULE_5__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password',
      validate: [__WEBPACK_IMPORTED_MODULE_6__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_6__common_validation__["b" /* minLength */])(5)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_components_web__["a" /* Alert */],
        { color: 'error' },
        error
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'submit', disabled: submitting },
        'Login'
      ),
      __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].user.auth.facebook.enabled && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'button', onClick: facebookLogin, style: { margin: 10 } },
        'Login with Facebook'
      ),
      __WEBPACK_IMPORTED_MODULE_7__settings__["a" /* default */].user.auth.google.enabled && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'button', onClick: googleLogin, style: { margin: 10 } },
        'Login with Google'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
      { className: 'text-center', to: '/forgot-password' },
      'Forgot your password?'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { style: { marginBottom: 16 } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { style: { lineHeight: '58px' } },
        'Not registered yet?'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["NavLink"],
        { className: 'btn btn-primary', to: '/register', activeClassName: 'active', style: { margin: 10 } },
        'Sign Up'
      )
    )
  );
};

LoginForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'login'
})(LoginForm));

/***/ }),

/***/ "./src/client/modules/user/components/LoginView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_LoginForm__ = __webpack_require__("./src/client/modules/user/components/LoginForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;











var LoginView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(LoginView, _React$PureComponent);

  function LoginView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, LoginView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = LoginView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(LoginView)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (login) {
      return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return login(values);

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Login failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(LoginView, [{
    key: 'render',
    value: function render() {
      var login = this.props.login;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Login',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Login page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Sign In'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_LoginForm__["a" /* default */], { onSubmit: this.onSubmit(login) }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('hr', null),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_12__common_components_web__["c" /* Card */],
            null,
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_12__common_components_web__["d" /* CardGroup */],
              null,
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__common_components_web__["f" /* CardTitle */],
                null,
                'Available logins:'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__common_components_web__["e" /* CardText */],
                null,
                'admin@example.com:admin'
              ),
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__common_components_web__["e" /* CardText */],
                null,
                'user@example.com:user'
              ),
              __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].subscription.enabled && __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_12__common_components_web__["e" /* CardText */],
                null,
                'subscriber@example.com:subscriber'
              )
            )
          )
        )
      );
    }
  }]);

  return LoginView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent), _class.propTypes = {
  error: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  login: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/ProfileView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscription_containers_SubscriptionProfile__ = __webpack_require__("./src/client/modules/subscription/containers/SubscriptionProfile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("./settings.js");









var renderMetaData = function renderMetaData() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a, {
    title: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Profile',
    meta: [{
      name: 'description',
      content: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Profile page'
    }]
  });
};

var ProfileView = function ProfileView(_ref) {
  var loading = _ref.loading,
      currentUser = _ref.currentUser;

  if (loading && !currentUser) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'text-center' },
        'Loading...'
      )
    );
  } else if (currentUser) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components__["a" /* LayoutCenter */],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'text-center' },
          'Profile'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4__common_components_web__["c" /* Card */],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__common_components_web__["d" /* CardGroup */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["f" /* CardTitle */],
              null,
              'User Name:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["e" /* CardText */],
              null,
              currentUser.username
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__common_components_web__["d" /* CardGroup */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["f" /* CardTitle */],
              null,
              'Email:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["e" /* CardText */],
              null,
              currentUser.email
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__common_components_web__["d" /* CardGroup */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["f" /* CardTitle */],
              null,
              'Role:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["e" /* CardText */],
              null,
              currentUser.role
            )
          ),
          currentUser.profile && currentUser.profile.fullName && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4__common_components_web__["d" /* CardGroup */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["f" /* CardTitle */],
              null,
              'Full Name:'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_4__common_components_web__["e" /* CardText */],
              null,
              currentUser.profile.fullName
            )
          ),
          __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].subscription.enabled && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__subscription_containers_SubscriptionProfile__["a" /* default */], null)
        )
      )
    );
  } else {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4__common_components_web__["n" /* PageLayout */],
      null,
      renderMetaData(),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h2',
        null,
        'No current user logged in'
      )
    );
  }
};

ProfileView.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired,
  currentUser: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};

/* harmony default export */ __webpack_exports__["a"] = (ProfileView);

/***/ }),

/***/ "./src/client/modules/user/components/RegisterForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var validate = function validate(values) {
  var errors = {};

  if (values.password && values.passwordConfirmation && values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match';
  }
  return errors;
};

var RegisterForm = function RegisterForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'register', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'username', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Username', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(3)] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'email', label: 'Email', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* email */]] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'password',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'passwordConfirmation',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password Confirmation',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'text-center' },
      error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
        { color: 'error' },
        error
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
        { color: 'primary', type: 'submit', disabled: submitting },
        'Register'
      )
    )
  );
};

RegisterForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'register',
  validate: validate
})(RegisterForm));

/***/ }),

/***/ "./src/client/modules/user/components/RegisterView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_components__ = __webpack_require__("./src/client/modules/common/components/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_RegisterForm__ = __webpack_require__("./src/client/modules/user/components/RegisterForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");








var _class, _temp2;











var RegisterView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(RegisterView, _React$PureComponent);

  function RegisterView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, RegisterView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = RegisterView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(RegisterView)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
        var register, result, submitError;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                register = _this.props.register;
                _context.next = 3;
                return register(values);

              case 3:
                result = _context.sent;

                if (!result.errors) {
                  _context.next = 8;
                  break;
                }

                submitError = {
                  _error: 'Registration failed!'
                };

                result.errors.map(function (error) {
                  return submitError[error.field] = error.message;
                });
                throw new __WEBPACK_IMPORTED_MODULE_10_redux_form__["SubmissionError"](submitError);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderMetaData = function () {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react_helmet___default.a, {
        title: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Register',
        meta: [{
          name: 'description',
          content: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Register page'
        }]
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(RegisterView, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        this.renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_11__common_components__["a" /* LayoutCenter */],
          null,
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'h1',
            { className: 'text-center' },
            'Sign Up'
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_RegisterForm__["a" /* default */], { onSubmit: this.onSubmit })
        )
      );
    }
  }]);

  return RegisterView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent), _class.propTypes = {
  register: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/ResetPasswordForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");






var validate = function validate(values) {
  var errors = {};

  if (values.password && values.passwordConfirmation && values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match';
  }
  return errors;
};

var ResetPasswordForm = function ResetPasswordForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'resetPassword', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'password',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'passwordConfirmation',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password Confirmation',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
      { color: 'error' },
      error
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
      { color: 'primary', type: 'submit', disabled: submitting },
      'Reset Password'
    )
  );
};

ResetPasswordForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'resetPassword',
  validate: validate
})(ResetPasswordForm));

/***/ }),

/***/ "./src/client/modules/user/components/ResetPasswordView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_ResetPasswordForm__ = __webpack_require__("./src/client/modules/user/components/ResetPasswordForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__settings__ = __webpack_require__("./settings.js");









var _class, _temp2;










var ResetPasswordView = (_temp2 = _class = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(ResetPasswordView, _React$Component);

  function ResetPasswordView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, ResetPasswordView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = ResetPasswordView.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(ResetPasswordView)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (resetPassword) {
      return function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
          var result, submitError;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return resetPassword(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, values, {
                    token: _this.props.match.params.token
                  }));

                case 2:
                  result = _context.sent;

                  if (!result.errors) {
                    _context.next = 7;
                    break;
                  }

                  submitError = {
                    _error: 'Reset Password failed!'
                  };

                  result.errors.map(function (error) {
                    return submitError[error.field] = error.message;
                  });
                  throw new __WEBPACK_IMPORTED_MODULE_11_redux_form__["SubmissionError"](submitError);

                case 7:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }();
    }, _temp), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(ResetPasswordView, [{
    key: 'render',
    value: function render() {
      var resetPassword = this.props.resetPassword;


      var renderMetaData = function renderMetaData() {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_helmet___default.a, {
          title: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Reset Password',
          meta: [{
            name: 'description',
            content: __WEBPACK_IMPORTED_MODULE_14__settings__["a" /* default */].app.name + ' - Reset password page'
          }]
        });
      };

      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_12__common_components_web__["n" /* PageLayout */],
        null,
        renderMetaData(),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          'h1',
          null,
          'Reset password!'
        ),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__components_ResetPasswordForm__["a" /* default */], { onSubmit: this.onSubmit(resetPassword) })
      );
    }
  }]);

  return ResetPasswordView;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component), _class.propTypes = {
  resetPassword: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired,
  match: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.shape({
    params: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.shape({
      token: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.string.isRequired
    }).isRequired
  }).isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/UserEditView.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__UserForm__ = __webpack_require__("./src/client/modules/user/components/UserForm.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__settings__ = __webpack_require__("./settings.js");









var _class, _temp2;












var UserEditView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(UserEditView, _React$PureComponent);

  function UserEditView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, UserEditView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UserEditView.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(UserEditView)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(values) {
        var _this$props, user, addUser, editUser, result, insertValues, submitError;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = _this.props, user = _this$props.user, addUser = _this$props.addUser, editUser = _this$props.editUser;
                result = null;
                insertValues = Object(__WEBPACK_IMPORTED_MODULE_13_lodash__["pick"])(values, ['username', 'email', 'role', 'isActive', 'password']);


                insertValues['profile'] = Object(__WEBPACK_IMPORTED_MODULE_13_lodash__["pick"])(values.profile, ['firstName', 'lastName']);

                if (__WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].user.auth.certificate.enabled) {
                  insertValues['auth'] = { certificate: Object(__WEBPACK_IMPORTED_MODULE_13_lodash__["pick"])(values.auth.certificate, 'serial') };
                }

                if (!user) {
                  _context.next = 11;
                  break;
                }

                _context.next = 8;
                return editUser(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ id: user.id }, insertValues));

              case 8:
                result = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.next = 13;
                return addUser(insertValues);

              case 13:
                result = _context.sent;

              case 14:
                if (!result.errors) {
                  _context.next = 18;
                  break;
                }

                submitError = {
                  _error: 'Edit user failed!'
                };

                result.errors.map(function (error) {
                  return submitError[error.field] = error.message;
                });
                throw new __WEBPACK_IMPORTED_MODULE_12_redux_form__["SubmissionError"](submitError);

              case 18:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderMetaData = function () {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_helmet___default.a, {
        title: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].app.name + ' - Edit User',
        meta: [{
          name: 'description',
          content: __WEBPACK_IMPORTED_MODULE_16__settings__["a" /* default */].app.name + ' - Edit user example page'
        }]
      });
    }, _temp), __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(UserEditView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          loading = _props.loading,
          user = _props.user;


      if (loading && !user) {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_14__common_components_web__["n" /* PageLayout */],
          null,
          this.renderMetaData(),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            'div',
            { className: 'text-center' },
            'Loading...'
          )
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_14__common_components_web__["n" /* PageLayout */],
          null,
          this.renderMetaData(),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_11_react_router_dom__["Link"],
            { id: 'back-button', to: '/users' },
            'Back'
          ),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            'h2',
            null,
            user ? 'Edit' : 'Create',
            ' User'
          ),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__UserForm__["a" /* default */], { onSubmit: this.onSubmit, initialValues: user })
        );
      }
    }
  }]);

  return UserEditView;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.PureComponent), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.bool.isRequired,
  user: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.object,
  addUser: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired,
  editUser: __WEBPACK_IMPORTED_MODULE_9_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/UserForm.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__("./src/common/validation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings__ = __webpack_require__("./settings.js");








var validate = function validate(values) {
  var errors = {};

  if (values.password !== values.passwordConfirmation) {
    errors.passwordConfirmation = 'Passwords do not match';
  }
  return errors;
};

var UserForm = function UserForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting,
      onSubmit = _ref.onSubmit,
      error = _ref.error;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["h" /* Form */],
    { name: 'user', onSubmit: handleSubmit(onSubmit) },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'username', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Username', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(3)] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'email', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'email', label: 'Email', validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* email */]] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"],
      { name: 'role', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["q" /* RenderSelect */], type: 'select', label: 'Role' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["m" /* Option */],
        { value: 'user' },
        'user'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["m" /* Option */],
        { value: 'admin' },
        'admin'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'isActive', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["o" /* RenderCheckBox */], type: 'checkbox', label: 'Is Active' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'profile.firstName', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'First Name', validate: __WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'profile.lastName', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Last Name', validate: __WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */] }),
    __WEBPACK_IMPORTED_MODULE_5__settings__["a" /* default */].user.auth.certificate.enabled && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], { name: 'auth.certificate.serial', component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */], type: 'text', label: 'Serial', validate: __WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'password',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_redux_form__["Field"], {
      name: 'passwordConfirmation',
      component: __WEBPACK_IMPORTED_MODULE_3__common_components_web__["p" /* RenderField */],
      type: 'password',
      label: 'Password Confirmation',
      validate: [__WEBPACK_IMPORTED_MODULE_4__common_validation__["c" /* required */], Object(__WEBPACK_IMPORTED_MODULE_4__common_validation__["b" /* minLength */])(5)]
    }),
    error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["a" /* Alert */],
      { color: 'error' },
      error
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
      { color: 'primary', type: 'submit', disabled: submitting },
      'Save'
    )
  );
};

UserForm.propTypes = {
  handleSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onSubmit: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  submitting: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  error: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_redux_form__["reduxForm"])({
  form: 'user',
  validate: validate
})(UserForm));

/***/ }),

/***/ "./src/client/modules/user/components/Users.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_UsersFilter__ = __webpack_require__("./src/client/modules/user/containers/UsersFilter.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_UsersList__ = __webpack_require__("./src/client/modules/user/containers/UsersList.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__settings__ = __webpack_require__("./settings.js");









var Users = function Users() {
  var renderMetaData = function renderMetaData() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
      title: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Users',
      meta: [{
        name: 'description',
        content: __WEBPACK_IMPORTED_MODULE_6__settings__["a" /* default */].app.name + ' - Users page'
      }]
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__common_components_web__["n" /* PageLayout */],
    null,
    renderMetaData(),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h2',
      null,
      'Users'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
      { to: '/users/0' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__common_components_web__["b" /* Button */],
        { color: 'primary' },
        'Add'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__containers_UsersFilter__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__containers_UsersList__["a" /* default */], null)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Users);

/***/ }),

/***/ "./src/client/modules/user/components/UsersFilterView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersFilterView; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_debounce_input__ = __webpack_require__("react-debounce-input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_debounce_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_debounce_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");






var _class, _temp2;






var UsersFilterView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(UsersFilterView, _React$PureComponent);

  function UsersFilterView() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, UsersFilterView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UsersFilterView.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UsersFilterView)).call.apply(_ref, [this].concat(args))), _this), _this.handleSearch = function (e) {
      var onSearchTextChange = _this.props.onSearchTextChange;

      onSearchTextChange(e.target.value);
    }, _this.handleRole = function (e) {
      var onRoleChange = _this.props.onRoleChange;

      onRoleChange(e.target.value);
    }, _this.handleIsActive = function () {
      var _this$props = _this.props,
          onIsActiveChange = _this$props.onIsActiveChange,
          isActive = _this$props.isActive;

      onIsActiveChange(!isActive);
    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(UsersFilterView, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          role = _props.role,
          isActive = _props.isActive;

      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8__common_components_web__["h" /* Form */],
        { layout: 'inline' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__common_components_web__["i" /* FormItem */],
          { label: 'Filter' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_debounce_input__["DebounceInput"], {
            minLength: 2,
            debounceTimeout: 300,
            placeholder: 'Search ...',
            element: __WEBPACK_IMPORTED_MODULE_8__common_components_web__["j" /* Input */],
            onChange: this.handleSearch
          })
        ),
        '\xA0',
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__common_components_web__["i" /* FormItem */],
          { label: 'Role' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__common_components_web__["s" /* Select */],
            { name: 'role', defaultValue: role, onChange: this.handleRole },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__common_components_web__["m" /* Option */],
              { key: 1, value: '' },
              'Select ...'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__common_components_web__["m" /* Option */],
              { key: 2, value: 'user' },
              'user'
            ),
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_8__common_components_web__["m" /* Option */],
              { key: 3, value: 'admin' },
              'admin'
            )
          )
        ),
        '\xA0',
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_8__common_components_web__["i" /* FormItem */],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_8__common_components_web__["k" /* Label */],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__common_components_web__["j" /* Input */], { type: 'checkbox', defaultChecked: isActive, onChange: this.handleIsActive }),
            ' Is Active'
          )
        )
      );
    }
  }]);

  return UsersFilterView;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.PureComponent), _class.propTypes = {
  searchText: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  role: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,
  isActive: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,
  onSearchTextChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  onRoleChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired,
  onIsActiveChange: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/components/UsersListView.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_components_web__ = __webpack_require__("./src/client/modules/common/components/web/index.jsx");








var _class, _temp2;






var UsersView = (_temp2 = _class = function (_React$PureComponent) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UsersView, _React$PureComponent);

  function UsersView() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UsersView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = UsersView.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UsersView)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errors: []
    }, _this.hendleDeleteUser = function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(id) {
        var deleteUser, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                deleteUser = _this.props.deleteUser;
                _context.next = 3;
                return deleteUser(id);

              case 3:
                result = _context.sent;

                if (result && result.errors) {
                  _this.setState({ errors: result.errors });
                } else {
                  _this.setState({ errors: [] });
                }

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.renderOrderByArrow = function (name) {
      var orderBy = _this.props.orderBy;


      if (orderBy && orderBy.column === name) {
        if (orderBy.order === 'desc') {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'span',
            { className: 'badge badge-primary' },
            '\u2193'
          );
        } else {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'span',
            { className: 'badge badge-primary' },
            '\u2191'
          );
        }
      } else {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'span',
          { className: 'badge badge-secondary' },
          '\u21C5'
        );
      }
    }, _this.orderBy = function (e, name) {
      var _this$props = _this.props,
          onOrderBy = _this$props.onOrderBy,
          orderBy = _this$props.orderBy;


      e.preventDefault();

      var order = 'asc';
      if (orderBy && orderBy.column === name) {
        if (orderBy.order === 'asc') {
          order = 'desc';
        } else if (orderBy.order === 'desc') {
          return onOrderBy({});
        }
      }

      return onOrderBy({ column: name, order: order });
    }, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UsersView, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          loading = _props.loading,
          users = _props.users;
      var errors = this.state.errors;


      var columns = [{
        title: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'username');
            }, href: '#' },
          'Username ',
          this.renderOrderByArrow('username')
        ),
        dataIndex: 'username',
        key: 'username',
        render: function render(text, record) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_react_router_dom__["Link"],
            { className: 'user-link', to: '/users/' + record.id },
            text
          );
        }
      }, {
        title: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'email');
            }, href: '#' },
          'Email ',
          this.renderOrderByArrow('email')
        ),
        dataIndex: 'email',
        key: 'email'
      }, {
        title: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'role');
            }, href: '#' },
          'Role ',
          this.renderOrderByArrow('role')
        ),
        dataIndex: 'role',
        key: 'role'
      }, {
        title: __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'a',
          { onClick: function onClick(e) {
              return _this3.orderBy(e, 'isActive');
            }, href: '#' },
          'Is Active ',
          this.renderOrderByArrow('isActive')
        ),
        dataIndex: 'isActive',
        key: 'isActive',
        render: function render(text) {
          return text.toString();
        }
      }, {
        title: 'Actions',
        key: 'actions',
        render: function render(text, record) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_10__common_components_web__["b" /* Button */],
            { color: 'primary', size: 'sm', onClick: function onClick() {
                return _this3.hendleDeleteUser(record.id);
              } },
            'Delete'
          );
        }
      }];

      if (loading && !users) {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          { className: 'text-center' },
          'Loading...'
        );
      } else {
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          'div',
          null,
          errors && errors.map(function (error) {
            return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'div',
              { className: 'alert alert-danger', role: 'alert', key: error.field },
              error.message
            );
          }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__common_components_web__["t" /* Table */], { dataSource: users, columns: columns })
        );
      }
    }
  }]);

  return UsersView;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.PureComponent), _class.propTypes = {
  loading: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool.isRequired,
  users: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.array,
  orderBy: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  onOrderBy: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired,
  deleteUser: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func.isRequired
}, _temp2);


/***/ }),

/***/ "./src/client/modules/user/containers/Auth.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AuthNav; });
/* unused harmony export AuthLoggedIn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AuthLoginWithApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AuthProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AuthRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLoggedInRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_cookie__ = __webpack_require__("react-cookie");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jwt_decode__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_log__ = __webpack_require__("./src/common/log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_CurrentUserQuery_graphql__ = __webpack_require__("./src/client/modules/user/graphql/CurrentUserQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_CurrentUserQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_CurrentUserQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_Logout_graphql__ = __webpack_require__("./src/client/modules/user/graphql/Logout.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_Logout_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_Logout_graphql__);





var _this = this;












var checkAuth = function checkAuth(cookies, scope) {
  var token = null;
  var refreshToken = null;

  if (cookies && cookies.get('r-token')) {
    token = cookies.get('r-token');
    refreshToken = cookies.get('r-refresh-token');
  }
  if (false) {
    token = window.localStorage.getItem('token');
    refreshToken = window.localStorage.getItem('refreshToken');
  }

  if (!token || !refreshToken) {
    return false;
  }

  try {
    var _decode = __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default()(refreshToken),
        exp = _decode.exp;

    if (exp < new Date().getTime() / 1000) {
      return false;
    }

    if (scope === 'admin') {
      var _decode2 = __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default()(token),
          role = _decode2.user.role;

      if (scope !== role) {
        return false;
      }
    }
  } catch (e) {
    return false;
  }

  return true;
};

var profileName = function profileName(cookies) {
  var token = null;

  if (cookies && cookies.get('x-token')) {
    token = cookies.get('x-token');
  }

  if (false) {
    token = window.localStorage.getItem('token');
  }

  if (!token) {
    return '';
  }

  try {
    var _decode3 = __WEBPACK_IMPORTED_MODULE_9_jwt_decode___default()(token),
        _decode3$user = _decode3.user,
        username = _decode3$user.username,
        fullName = _decode3$user.fullName;

    return fullName ? fullName : username;
  } catch (e) {
    return '';
  }
};

var AuthNav = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(function (_ref) {
  var children = _ref.children,
      cookies = _ref.cookies,
      scope = _ref.scope;

  return checkAuth(cookies, scope) ? children : null;
});

AuthNav.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"])
};

var AuthLogin = function AuthLogin(_ref2) {
  var children = _ref2.children,
      cookies = _ref2.cookies,
      logout = _ref2.logout;

  return checkAuth(cookies) ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    'a',
    { href: '#', onClick: function onClick() {
        return logout();
      }, className: 'nav-link' },
    'Logout'
  ) : children;
};

AuthLogin.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.object,
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"]),
  logout: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func.isRequired
};

var AuthLoginWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(Object(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["withApollo"])(Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_CurrentUserQuery_graphql___default.a), Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_Logout_graphql___default.a, {
  // eslint-disable-next-line
  props: function props(_ref3) {
    var _ref3$ownProps = _ref3.ownProps,
        client = _ref3$ownProps.client,
        history = _ref3$ownProps.history,
        navigation = _ref3$ownProps.navigation,
        mutate = _ref3.mutate;
    return {
      logout: function () {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
          var _ref5, logout;

          return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate();

                case 3:
                  _ref5 = _context.sent;
                  logout = _ref5.data.logout;

                  if (!logout.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: logout.errors });

                case 7:

                  // comment out until https://github.com/apollographql/apollo-client/issues/1186 is fixed
                  //await client.resetStore();

                  window.localStorage.setItem('token', null);
                  window.localStorage.setItem('refreshToken', null);

                  if (!history) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt('return', history.push('/'));

                case 11:
                  if (!navigation) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt('return', navigation.goBack());

                case 13:
                  _context.next = 18;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);

                  __WEBPACK_IMPORTED_MODULE_10__common_log__["a" /* default */].error(_context.t0.stack);

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this, [[0, 15]]);
        }));

        return function logout() {
          return _ref4.apply(this, arguments);
        };
      }()
    };
  }
}))(AuthLogin))));

var AuthProfile = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(function (_ref6) {
  var cookies = _ref6.cookies;

  return checkAuth(cookies) ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["NavLink"],
    { to: '/profile', className: 'nav-link', activeClassName: 'active' },
    profileName(cookies)
  ) : null;
});

AuthProfile.propTypes = {
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"])
};

var AuthLoggedIn = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(function (_ref7) {
  var cookies = _ref7.cookies,
      label = _ref7.label,
      to = _ref7.to,
      rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref7, ['cookies', 'label', 'to']);

  return checkAuth(cookies) ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_7_react_router_dom__["NavLink"],
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ to: to }, rest),
    label
  ) : null;
});

AuthLoggedIn.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"]),
  label: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  to: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};

var AuthRoute = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(function (_ref8) {
  var Component = _ref8.component,
      cookies = _ref8.cookies,
      scope = _ref8.scope,
      rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref8, ['component', 'cookies', 'scope']);

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
    render: function render(props) {
      return checkAuth(cookies, scope) ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, props) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Redirect"], { to: { pathname: '/login' } });
    }
  }));
});

AuthRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"])
};

var AuthLoggedInRoute = Object(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["withCookies"])(function (_ref9) {
  var Component = _ref9.component,
      cookies = _ref9.cookies,
      redirect = _ref9.redirect,
      scope = _ref9.scope,
      rest = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref9, ['component', 'cookies', 'redirect', 'scope']);

  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Route"], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, rest, {
    render: function render(props) {
      return checkAuth(cookies, scope) ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Redirect"], { to: { pathname: redirect } }) : __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, props);
    }
  }));
});

AuthLoggedInRoute.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.func,
  cookies: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_8_react_cookie__["Cookies"]),
  redirect: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string,
  scope: __WEBPACK_IMPORTED_MODULE_5_prop_types___default.a.string
};








/***/ }),

/***/ "./src/client/modules/user/containers/ForgotPassword.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form__ = __webpack_require__("redux-form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_ForgotPasswordView__ = __webpack_require__("./src/client/modules/user/components/ForgotPasswordView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_ForgotPassword_graphql__ = __webpack_require__("./src/client/modules/user/graphql/ForgotPassword.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_ForgotPassword_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_ForgotPassword_graphql__);








var _this2 = this;










var ForgotPassword = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ForgotPassword, _React$Component);

  function ForgotPassword() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ForgotPassword);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ForgotPassword.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ForgotPassword)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ForgotPassword, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_ForgotPasswordView__["a" /* default */], this.props);
    }
  }]);

  return ForgotPassword;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var ForgotPasswordWithApollo = Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_ForgotPassword_graphql___default.a, {
  props: function props(_ref) {
    var mutate = _ref.mutate;
    return {
      forgotPassword: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var email = _ref3.email;

          var _ref4, forgotPassword;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { email: email } }
                  });

                case 3:
                  _ref4 = _context.sent;
                  forgotPassword = _ref4.data.forgotPassword;

                  if (!forgotPassword.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: forgotPassword.errors });

                case 7:
                  return _context.abrupt('return', forgotPassword);

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 10]]);
        }));

        return function forgotPassword(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(null, function (dispatch) {
  return {
    onFormSubmitted: function onFormSubmitted() {
      dispatch(Object(__WEBPACK_IMPORTED_MODULE_10_redux_form__["reset"])('forgotPassword'));
    }
  };
}))(ForgotPassword);

/* harmony default export */ __webpack_exports__["a"] = (ForgotPasswordWithApollo);

/***/ }),

/***/ "./src/client/modules/user/containers/Login.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_LoginView__ = __webpack_require__("./src/client/modules/user/components/LoginView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_Login_graphql__ = __webpack_require__("./src/client/modules/user/graphql/Login.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_Login_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_Login_graphql__);








var _this2 = this;

/* eslint-disable no-undef */
// React


// Apollo


// Components




var Login = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Login, _React$Component);

  function Login() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Login);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Login.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Login)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Login, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_LoginView__["a" /* default */], this.props);
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var LoginWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10__graphql_Login_graphql___default.a, {
  props: function props(_ref) {
    var _ref$ownProps = _ref.ownProps,
        history = _ref$ownProps.history,
        navigation = _ref$ownProps.navigation,
        mutate = _ref.mutate;
    return {
      login: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var email = _ref3.email,
              password = _ref3.password;

          var _ref4, login, _login$tokens, token, refreshToken;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { email: email, password: password } }
                  });

                case 3:
                  _ref4 = _context.sent;
                  login = _ref4.data.login;

                  if (!login.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: login.errors });

                case 7:
                  _login$tokens = login.tokens, token = _login$tokens.token, refreshToken = _login$tokens.refreshToken;

                  localStorage.setItem('token', token);
                  localStorage.setItem('refreshToken', refreshToken);

                  if (!history) {
                    _context.next = 12;
                    break;
                  }

                  return _context.abrupt('return', history.push('/profile'));

                case 12:
                  if (!navigation) {
                    _context.next = 14;
                    break;
                  }

                  return _context.abrupt('return', navigation.goBack());

                case 14:
                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 19:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 16]]);
        }));

        return function login(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}))(Login);

/* harmony default export */ __webpack_exports__["a"] = (LoginWithApollo);

/***/ }),

/***/ "./src/client/modules/user/containers/Profile.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ProfileView__ = __webpack_require__("./src/client/modules/user/components/ProfileView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_CurrentUserQuery_graphql__ = __webpack_require__("./src/client/modules/user/graphql/CurrentUserQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphql_CurrentUserQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__graphql_CurrentUserQuery_graphql__);





// React


// Apollo


// Components




var Profile = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Profile, _React$Component);

  function Profile() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Profile);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Profile.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Profile)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Profile, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ProfileView__["a" /* default */], this.props);
    }
  }]);

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_8__graphql_CurrentUserQuery_graphql___default.a, {
  options: { fetchPolicy: 'network-only' },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        error = _ref$data.error,
        currentUser = _ref$data.currentUser;

    if (error) throw new Error(error);
    return { loading: loading, currentUser: currentUser };
  }
}))(Profile));

/***/ }),

/***/ "./src/client/modules/user/containers/Register.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_RegisterView__ = __webpack_require__("./src/client/modules/user/components/RegisterView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_Register_graphql__ = __webpack_require__("./src/client/modules/user/graphql/Register.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_Register_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_Register_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings__ = __webpack_require__("./settings.js");








var _this2 = this;

// React


// Apollo


// Components






var Register = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Register, _React$Component);

  function Register() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Register);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Register.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Register)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Register, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_RegisterView__["a" /* default */], this.props);
    }
  }]);

  return Register;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var RegisterWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10__graphql_Register_graphql___default.a, {
  props: function props(_ref) {
    var _ref$ownProps = _ref.ownProps,
        history = _ref$ownProps.history,
        navigation = _ref$ownProps.navigation,
        mutate = _ref.mutate;
    return {
      register: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var username = _ref3.username,
              email = _ref3.email,
              password = _ref3.password;

          var _ref4, register;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { username: username, email: email, password: password } }
                  });

                case 3:
                  _ref4 = _context.sent;
                  register = _ref4.data.register;

                  if (!register.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: register.errors });

                case 7:
                  if (!history) {
                    _context.next = 11;
                    break;
                  }

                  if (!__WEBPACK_IMPORTED_MODULE_11__settings__["a" /* default */].subscription.enabled) {
                    _context.next = 10;
                    break;
                  }

                  return _context.abrupt('return', history.push('/subscription'));

                case 10:
                  return _context.abrupt('return', history.push('/profile'));

                case 11:
                  if (!navigation) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt('return', navigation.goBack());

                case 13:
                  _context.next = 18;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 18:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 15]]);
        }));

        return function register(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}))(Register);

/* harmony default export */ __webpack_exports__["a"] = (RegisterWithApollo);

/***/ }),

/***/ "./src/client/modules/user/containers/ResetPassword.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_ResetPasswordView__ = __webpack_require__("./src/client/modules/user/components/ResetPasswordView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_ResetPassword_graphql__ = __webpack_require__("./src/client/modules/user/graphql/ResetPassword.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_ResetPassword_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_ResetPassword_graphql__);








var _this2 = this;








var ResetPassword = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(ResetPassword, _React$Component);

  function ResetPassword() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, ResetPassword);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ResetPassword.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(ResetPassword)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(ResetPassword, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_ResetPasswordView__["a" /* default */], this.props);
    }
  }]);

  return ResetPassword;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var ResetPasswordWithApollo = Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10__graphql_ResetPassword_graphql___default.a, {
  props: function props(_ref) {
    var history = _ref.ownProps.history,
        mutate = _ref.mutate;
    return {
      resetPassword: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref3) {
          var password = _ref3.password,
              passwordConfirmation = _ref3.passwordConfirmation,
              token = _ref3.token;

          var _ref4, resetPassword;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: { password: password, passwordConfirmation: passwordConfirmation, token: token } }
                  });

                case 3:
                  _ref4 = _context.sent;
                  resetPassword = _ref4.data.resetPassword;

                  if (!resetPassword.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: resetPassword.errors });

                case 7:

                  history.push('/login');
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 10]]);
        }));

        return function resetPassword(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    };
  }
}))(ResetPassword);

/* harmony default export */ __webpack_exports__["a"] = (ResetPasswordWithApollo);

/***/ }),

/***/ "./src/client/modules/user/containers/UserEdit.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_UserEditView__ = __webpack_require__("./src/client/modules/user/components/UserEditView.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_UserQuery_graphql__ = __webpack_require__("./src/client/modules/user/graphql/UserQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphql_UserQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__graphql_UserQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_AddUser_graphql__ = __webpack_require__("./src/client/modules/user/graphql/AddUser.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_AddUser_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_AddUser_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_EditUser_graphql__ = __webpack_require__("./src/client/modules/user/graphql/EditUser.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_EditUser_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_EditUser_graphql__);








var _this2 = this;










var UserEdit = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UserEdit, _React$Component);

  function UserEdit() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UserEdit);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UserEdit.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UserEdit)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UserEdit, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_UserEditView__["a" /* default */], this.props);
    }
  }]);

  return UserEdit;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10__graphql_UserQuery_graphql___default.a, {
  options: function options(props) {
    var id = 0;
    if (props.match) {
      id = props.match.params.id;
    } else if (props.navigation) {
      id = props.navigation.state.params.id;
    }

    return {
      variables: { id: id }
    };
  },
  props: function props(_ref) {
    var _ref$data = _ref.data,
        loading = _ref$data.loading,
        user = _ref$data.user;

    return { loading: loading, user: user };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_AddUser_graphql___default.a, {
  props: function props(_ref2) {
    var _ref2$ownProps = _ref2.ownProps,
        history = _ref2$ownProps.history,
        navigation = _ref2$ownProps.navigation,
        mutate = _ref2.mutate;
    return {
      addUser: function () {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(input) {
          var _ref4, addUser;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { input: input }
                  });

                case 3:
                  _ref4 = _context.sent;
                  addUser = _ref4.data.addUser;

                  if (!addUser.errors) {
                    _context.next = 7;
                    break;
                  }

                  return _context.abrupt('return', { errors: addUser.errors });

                case 7:
                  if (!history) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt('return', history.push('/users'));

                case 9:
                  if (!navigation) {
                    _context.next = 11;
                    break;
                  }

                  return _context.abrupt('return', navigation.goBack());

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 13]]);
        }));

        return function addUser(_x) {
          return _ref3.apply(this, arguments);
        };
      }()
    };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_EditUser_graphql___default.a, {
  props: function props(_ref5) {
    var _ref5$ownProps = _ref5.ownProps,
        history = _ref5$ownProps.history,
        navigation = _ref5$ownProps.navigation,
        mutate = _ref5.mutate;
    return {
      editUser: function () {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(input) {
          var _ref7, editUser;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return mutate({
                    variables: { input: input }
                  });

                case 3:
                  _ref7 = _context2.sent;
                  editUser = _ref7.data.editUser;

                  if (!editUser.errors) {
                    _context2.next = 7;
                    break;
                  }

                  return _context2.abrupt('return', { errors: editUser.errors });

                case 7:
                  if (!history) {
                    _context2.next = 9;
                    break;
                  }

                  return _context2.abrupt('return', history.push('/users'));

                case 9:
                  if (!navigation) {
                    _context2.next = 11;
                    break;
                  }

                  return _context2.abrupt('return', navigation.goBack());

                case 11:
                  _context2.next = 16;
                  break;

                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2['catch'](0);

                  console.log(_context2.t0.graphQLErrors);

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2, _this2, [[0, 13]]);
        }));

        return function editUser(_x2) {
          return _ref6.apply(this, arguments);
        };
      }()
    };
  }
}))(UserEdit));

/***/ }),

/***/ "./src/client/modules/user/containers/UsersFilter.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_UsersFilterView__ = __webpack_require__("./src/client/modules/user/components/UsersFilterView.web.jsx");





// React



// Components


var UsersFilter = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(UsersFilter, _React$Component);

  function UsersFilter() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, UsersFilter);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UsersFilter.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(UsersFilter)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(UsersFilter, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_UsersFilterView__["a" /* default */], this.props);
    }
  }]);

  return UsersFilter;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(function (state) {
  return {
    searchText: state.user.searchText,
    role: state.user.role,
    isActive: state.user.isActive
  };
}, function (dispatch) {
  return {
    onSearchTextChange: function onSearchTextChange(searchText) {
      dispatch({
        type: 'USER_FILTER_SEARCH_TEXT',
        value: searchText
      });
    },
    onRoleChange: function onRoleChange(role) {
      dispatch({
        type: 'USER_FILTER_ROLE',
        value: role
      });
    },
    onIsActiveChange: function onIsActiveChange(isActive) {
      dispatch({
        type: 'USER_FILTER_IS_ACTIVE',
        value: isActive
      });
    }
  };
})(UsersFilter));

/***/ }),

/***/ "./src/client/modules/user/containers/UsersList.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_UsersListView__ = __webpack_require__("./src/client/modules/user/components/UsersListView.web.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UsersQuery_graphql__ = __webpack_require__("./src/client/modules/user/graphql/UsersQuery.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphql_UsersQuery_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__graphql_UsersQuery_graphql__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_DeleteUser_graphql__ = __webpack_require__("./src/client/modules/user/graphql/DeleteUser.graphql");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graphql_DeleteUser_graphql___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__graphql_DeleteUser_graphql__);








var _this2 = this;

// React



// Apollo


// Components





var UsersList = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(UsersList, _React$Component);

  function UsersList() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, UsersList);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (UsersList.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(UsersList)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(UsersList, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_UsersListView__["a" /* default */], this.props);
    }
  }]);

  return UsersList;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var UsersListWithApollo = Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11__graphql_UsersQuery_graphql___default.a, {
  options: function options(_ref) {
    var orderBy = _ref.orderBy,
        searchText = _ref.searchText,
        role = _ref.role,
        isActive = _ref.isActive;

    return {
      fetchPolicy: 'cache-and-network',
      variables: {
        orderBy: orderBy,
        filter: { searchText: searchText, role: role, isActive: isActive }
      }
    };
  },
  props: function props(_ref2) {
    var _ref2$data = _ref2.data,
        loading = _ref2$data.loading,
        users = _ref2$data.users,
        refetch = _ref2$data.refetch,
        error = _ref2$data.error;

    return { loading: loading, users: users, refetch: refetch, errors: error ? error.graphQLErrors : null };
  }
}), Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12__graphql_DeleteUser_graphql___default.a, {
  props: function props(_ref3) {
    var refetch = _ref3.ownProps.refetch,
        mutate = _ref3.mutate;
    return {
      deleteUser: function () {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(id) {
          var _ref5, deleteUser;

          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return mutate({
                    variables: { id: id }
                  });

                case 3:
                  _ref5 = _context.sent;
                  deleteUser = _ref5.data.deleteUser;


                  // refeatch USERS_QUERY
                  refetch();

                  if (!deleteUser.errors) {
                    _context.next = 8;
                    break;
                  }

                  return _context.abrupt('return', { errors: deleteUser.errors });

                case 8:
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context['catch'](0);

                  console.log(_context.t0.graphQLErrors);

                case 13:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2, [[0, 10]]);
        }));

        return function deleteUser(_x) {
          return _ref4.apply(this, arguments);
        };
      }()
    };
  }
}))(UsersList);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(function (state) {
  return {
    searchText: state.user.searchText,
    role: state.user.role,
    isActive: state.user.isActive,
    orderBy: state.user.orderBy
  };
}, function (dispatch) {
  return {
    onOrderBy: function onOrderBy(orderBy) {
      dispatch({
        type: 'USER_ORDER_BY',
        value: orderBy
      });
    }
  };
})(UsersListWithApollo));

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");

















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

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_13__connector__["a" /* default */]({
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
          __html: __WEBPACK_IMPORTED_MODULE_5__client_modules_common_components_web__["u" /* styles */]._getCss() + __WEBPACK_IMPORTED_MODULE_4__client_modules__["default"].stylesInserts.map(function (style) {
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

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

};
//# sourceMappingURL=index.d95562835ea7451f2700.js.map