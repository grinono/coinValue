require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/components/Sidebar/Sidebar.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_reactstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames__ = __webpack_require__("classnames");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nav__ = __webpack_require__("./src/client/components/Sidebar/_nav.js");











var Sidebar = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Sidebar, _Component);

  function Sidebar() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Sidebar);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Sidebar.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Sidebar)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Sidebar, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }

    // activeRoute(routeName, props) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    //   // return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    // }

    // todo Sidebar nav secondLevel
    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }

  }, {
    key: 'render',
    value: function render() {
      // const props = this.props;
      // const activeRoute = this.activeRoute;
      // const handleClick = this.handleClick;
      //
      // // badge addon to NavItem
      // const badge = badge => {
      //   if (badge) {
      //     const classes = classNames(badge.class);
      //     return (
      //       <Badge className={classes} color={badge.variant}>
      //         {badge.text}
      //       </Badge>
      //     );
      //   }
      // };
      //
      // // simple wrapper for nav-title item
      // const wrapper = item => {
      //   return !item.wrapper ? item.name : React.createElement(item.wrapper.element, item.wrapper.attributes, item.name);
      // };
      //
      // // nav list section title
      // const title = (title, key) => {
      //   const classes = classNames('nav-title', title.class);
      //   return (
      //     <li key={key} className={classes}>
      //       {wrapper(title)}{' '}
      //     </li>
      //   );
      // };
      //
      // // nav list divider
      // const divider = (divider, key) => <li key={key} className="divider" />;
      //
      // // nav item with nav link
      // const navItem = (item, key) => {
      //   const classes = classNames('nav-link', item.class);
      //   return (
      //     <NavItem key={key}>
      //       <NavLink to={item.url} className={classes} activeClassName="active">
      //         <i className={item.icon} />
      //         {item.name}
      //         {badge(item.badge)}
      //       </NavLink>
      //     </NavItem>
      //   );
      // };
      //
      // // nav dropdown
      // const navDropdown = (item, key) => {
      //   return (
      //     <li key={key} className={activeRoute(item.url, props)}>
      //       <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick.bind(this)}>
      //         <i className={item.icon} /> {item.name}
      //       </a>
      //       <ul className="nav-dropdown-items">{navList(item.children)}</ul>
      //     </li>
      //   );
      // };
      //
      // // nav link
      // const navLink = (item, idx) =>
      //   item.title
      //     ? title(item, idx)
      //     : item.divider ? divider(item, idx) : item.children ? navDropdown(item, idx) : navItem(item, idx);
      //
      // // nav list
      // const navList = items => {
      //   return items.map((item, index) => navLink(item, index));
      // };

      // sidebar-nav root
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'sidebar' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'nav',
          { className: 'sidebar-nav' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["NavItem"],
            { href: '#' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'p',
              null,
              'fgdf'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_reactstrap__["NavItem"],
            { href: '#' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'p',
              null,
              'sdfadsf'
            )
          )
        )
      );
    }
  }]);

  return Sidebar;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Sidebar);

/***/ })

};
//# sourceMappingURL=index.d0d31c1cbc0fbbecf318.js.map