require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./node_modules/css-loader/index.js?{\"sourceMap\":true}!./node_modules/postcss-loader/lib/index.js?{\"sourceMap\":true}!./src/client/views/Home/styles.css":
false,

/***/ "./src/client/app/Routes.web.jsx":
/***/ (function(module, exports) {

// import React from 'react';
// import { Switch } from 'react-router-dom';
//
// import modules from '../modules';
//
// export default (
//   <Switch>
//     <div>
//       <Header />
//       {modules.routes}
//     </div>
//   </Switch>
// );

/***/ }),

/***/ "./src/client/components/Aside/Aside.js":
false,

/***/ "./src/client/components/Footer/Footer.js":
false,

/***/ "./src/client/components/Header/Header.js":
false,

/***/ "./src/client/components/Sidebar/Sidebar.js":
false,

/***/ "./src/client/components/Sidebar/_nav.js":
false,

/***/ "./src/client/modules/Widgets/Widget01.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  smallText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  value: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string
};

var defaultProps = {
  header: '89.9%',
  mainText: 'Lorem ipsum...',
  smallText: 'Lorem ipsum dolor sit amet enim.',
  // color: '',
  value: '25',
  variant: ''
};

var Widget01 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget01, _Component);

  function Widget01() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget01);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget01.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget01)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget01, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          smallText = _props.smallText,
          color = _props.color,
          value = _props.value,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'smallText', 'color', 'value', 'children', 'variant']);

      // demo purposes only


      var progress = { style: '', color: color, value: value };
      var card = { style: '', bgColor: '' };

      if (variant === 'inverse') {
        progress.style = 'progress-white';
        progress.color = '';
        card.style = 'text-white';
        card.bgColor = 'bg-' + color;
      }

      var classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, card.bgColor), cssModule);
      progress.style = __WEBPACK_IMPORTED_MODULE_10_classnames___default()('progress-xs my-1', progress.style);

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: classes }, attributes),
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          { className: 'card-body' },
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'h4 m-0' },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            mainText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_reactstrap__["Progress"], { className: progress.style, color: progress.color, value: progress.value }),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'small',
            { className: 'text-muted' },
            smallText
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            null,
            children
          )
        )
      );
    }
  }]);

  return Widget01;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget01.propTypes = propTypes;
Widget01.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget01);

/***/ }),

/***/ "./src/client/modules/Widgets/Widget02.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__ = __webpack_require__("reactstrap/lib/utils");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__);













var propTypes = {
  header: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  mainText: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  icon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  color: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  variant: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  footer: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,
  link: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  children: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,
  className: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  cssModule: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.object
};

var defaultProps = {
  header: '$1,999.50',
  mainText: 'Income',
  icon: 'fa fa-cogs',
  color: 'primary',
  variant: '0',
  link: '#'
};

var Widget02 = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Widget02, _Component);

  function Widget02() {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Widget02);

    return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Widget02.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Widget02)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Widget02, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          header = _props.header,
          mainText = _props.mainText,
          icon = _props.icon,
          color = _props.color,
          footer = _props.footer,
          link = _props.link,
          children = _props.children,
          variant = _props.variant,
          attributes = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ['className', 'cssModule', 'header', 'mainText', 'icon', 'color', 'footer', 'link', 'children', 'variant']);

      // demo purposes only


      var padding = variant === '0' ? { card: 'p-3', icon: 'p-3', lead: 'mt-2' } : variant === '1' ? {
        card: 'p-0',
        icon: 'p-4',
        lead: 'pt-3'
      } : { card: 'p-0', icon: 'p-4 px-5', lead: 'pt-3' };

      var card = { style: 'card-body clearfix', color: color, icon: icon, classes: '' };
      card.classes = Object(__WEBPACK_IMPORTED_MODULE_11_reactstrap_lib_utils__["mapToCssModules"])(__WEBPACK_IMPORTED_MODULE_10_classnames___default()(className, card.style, padding.card), cssModule);

      var lead = { style: 'h5 mb-0', color: color, classes: '' };
      lead.classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(lead.style, 'text-' + card.color, padding.lead);

      var blockIcon = function blockIcon(icon) {
        var classes = __WEBPACK_IMPORTED_MODULE_10_classnames___default()(icon, 'bg-' + card.color, padding.icon, 'font-2xl mr-3 float-left');
        return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: classes });
      };

      var cardFooter = function cardFooter() {
        if (footer) {
          return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardFooter"],
            { className: 'px-3 py-2' },
            __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
              'a',
              { className: 'font-weight-bold font-xs btn-block text-muted', href: link },
              'View More',
              __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement('i', { className: 'fa fa-angle-right float-right font-lg' })
            )
          );
        }
      };

      return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Card"],
        null,
        __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["CardBlock"],
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ className: card.classes }, attributes),
          blockIcon(card.icon),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: lead.classes },
            header
          ),
          __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
            'div',
            { className: 'text-muted text-uppercase font-weight-bold font-xs' },
            mainText
          )
        ),
        cardFooter()
      );
    }
  }]);

  return Widget02;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Widget02.propTypes = propTypes;
Widget02.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["a"] = (Widget02);

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

/* unused harmony default export */ var _unused_webpack_default_export = (MenuItem);

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

/***/ "./src/client/modules/home/containers/chart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsHome; });
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









var doughnut = {
  labels: ['Good', 'Bad'],
  datasets: [{
    data: [300, 150],
    backgroundColor: ['#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#36A2EB', '#FFCE56']
  }]
};

var ChartsHome = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(ChartsHome, _Component);

  function ChartsHome() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, ChartsHome);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (ChartsHome.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(ChartsHome)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(ChartsHome, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
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
                'Overall investment rating'
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'div',
                  { className: 'chart-wrapper' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_chartjs_2__["Doughnut"], { data: doughnut })
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Card"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_7_reactstrap__["CardBlock"],
                { className: 'card-body' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'ul',
                  { className: 'horizontal-bars type-2' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Technology'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '43%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '43' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Team'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'warning', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Marketing'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'India', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Product'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'danger', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Financials'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'info', value: '37' })
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'li',
                    null,
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'icon-user-female' }),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'title' },
                      'Community'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'span',
                      { className: 'value' },
                      '37%'
                    ),
                    __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                      'div',
                      { className: 'bars' },
                      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_reactstrap__["Progress"], { className: 'progress-xs', color: 'success', value: '37' })
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

  return ChartsHome;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/coin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coin; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__ = __webpack_require__("./src/client/modules/Widgets/Widget02.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css__ = __webpack_require__("./src/client/modules/home/containers/styles.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__styles_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__companyData__ = __webpack_require__("./src/client/modules/home/containers/companyData.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_reactstrap__);











var Coin = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Coin, _Component);

  function Coin() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Coin);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Coin.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Coin)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Coin, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'col-3 scrollit' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Bitcoin', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Litecoin', mainText: 'Income', icon: 'fa fa-laptop', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Etherium', mainText: 'Income', icon: 'fa fa-moon-o', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Ripple', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: 'Dash', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_9_reactstrap__["Col"],
          { xs: '12', sm: '12', lg: '12' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Widgets_Widget02__["a" /* default */], { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'primary' })
        )
      );
    }
  }]);

  return Coin;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

/***/ "./src/client/modules/home/containers/companyData.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainCompanyData; });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chart_js__ = __webpack_require__("./src/client/modules/home/containers/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Widgets_Widget01__ = __webpack_require__("./src/client/modules/Widgets/Widget01.js");










var MainCompanyData = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(MainCompanyData, _Component);

  function MainCompanyData() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, MainCompanyData);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (MainCompanyData.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(MainCompanyData)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(MainCompanyData, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'animated fadeIn' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__chart_js__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Row"],
          null,
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["Col"],
            { xs: '12', sm: '12', lg: '12' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Widgets_Widget01__["a" /* default */], {
              color: 'primary',
              variant: 'inverse',
              header: 'Company phase',
              mainText: '2 phase',
              smallText: 'benchmark between same phases'
            })
          )
        )
      );
    }
  }]);

  return MainCompanyData;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),

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

/***/ "./src/client/modules/home/index.web.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_home__ = __webpack_require__("./src/client/modules/home/containers/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__("./src/client/modules/connector.web.jsx");


// import { MenuItem } from '../../modules/common/components/web';


// import PostEdit from './containers/PostEdit';
//
// import reducers from './reducers';



/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_3__connector__["a" /* default */]({
  route: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_2__containers_home__["a" /* default */] })
}));

/***/ }),

/***/ "./src/client/views/Charts/Charts.js":
false,

/***/ "./src/client/views/Components/Buttons/Buttons.js":
false,

/***/ "./src/client/views/Components/Cards/Cards.js":
false,

/***/ "./src/client/views/Components/Forms/Forms.js":
false,

/***/ "./src/client/views/Components/Modals/Modals.js":
false,

/***/ "./src/client/views/Components/SocialButtons/SocialButtons.js":
false,

/***/ "./src/client/views/Components/Switches/Switches.js":
false,

/***/ "./src/client/views/Components/Tables/Tables.js":
false,

/***/ "./src/client/views/Components/Tabs/Tabs.js":
false,

/***/ "./src/client/views/Dashboard/Dashboard.js":
false,

/***/ "./src/client/views/Home/chart.js":
false,

/***/ "./src/client/views/Home/coin.js":
false,

/***/ "./src/client/views/Home/companyData.js":
false,

/***/ "./src/client/views/Home/main.js":
false,

/***/ "./src/client/views/Home/styles.css":
false,

/***/ "./src/client/views/Icons/FontAwesome/FontAwesome.js":
false,

/***/ "./src/client/views/Icons/SimpleLineIcons/SimpleLineIcons.js":
false,

/***/ "./src/client/views/Project/main.js":
false,

/***/ "./src/client/views/Project/video.js":
false,

/***/ "./src/client/views/Rating/main.js":
false,

/***/ "./src/client/views/Widgets/Widget01.js":
false,

/***/ "./src/client/views/Widgets/Widget02.js":
false,

/***/ "./src/client/views/Widgets/Widget03.js":
false,

/***/ "./src/client/views/Widgets/Widget04.js":
false,

/***/ "./src/client/views/Widgets/Widgets.js":
false,

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__client_app_Routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__client_app_Routes__);
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
                    __WEBPACK_IMPORTED_MODULE_22__client_app_Routes___default.a
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

/***/ "babel-runtime/core-js/object/values":
false,

/***/ "react-chartjs-2":
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "reactstrap":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

};
//# sourceMappingURL=index.d9d7fd11ca4f0c235eec.js.map