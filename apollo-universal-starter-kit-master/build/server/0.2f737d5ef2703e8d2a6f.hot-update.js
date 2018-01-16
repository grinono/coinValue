require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./src/client/components/Header/Header.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap__ = __webpack_require__("reactstrap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_reactstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_reactstrap__);








var Header = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Header, _Component);

  function Header() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Header);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Header, [{
    key: 'render',

    // constructor(props) {
    //   super(props);
    //
    //   this.toggle = this.toggle.bind(this);
    //   this.state = {
    //     dropdownOpen: false
    //   };
    //   document.body.classList.toggle('sidebar-hidden');
    // }
    //
    // toggle() {
    //   this.setState({
    //     dropdownOpen: !this.state.dropdownOpen
    //   });
    // }
    //
    // sidebarToggle(e) {
    //   e.preventDefault();
    //   document.body.classList.toggle('sidebar-hidden');
    // }
    //
    // sidebarMinimize(e) {
    //   e.preventDefault();
    //   document.body.classList.toggle('sidebar-minimized');
    // }
    //
    // mobileSidebarToggle(e) {
    //   e.preventDefault();
    //   document.body.classList.toggle('sidebar-mobile-show');
    // }
    //
    // asideToggle(e) {
    //   e.preventDefault();
    //   document.body.classList.toggle('aside-menu-hidden');
    // }

    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'header',
        { className: 'app-header navbar' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarToggler"],
          { className: 'd-lg-none' },
          '\u2630'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarBrand"], { href: '#' }),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavbarToggler"],
          { className: 'd-md-down-none' },
          '\u2630'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Nav"],
          { className: 'd-md-down-none', navbar: true },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavItem"],
            { className: 'px-3' },
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavLink"],
              { href: '/' },
              'Dashboard'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Nav"],
          { style: { marginRight: 20 }, className: 'ml-auto', navbar: true },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_reactstrap__["NavItem"],
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_reactstrap__["Dropdown"],
              null,
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownToggle"],
                { className: 'nav-link dropdown-toggle' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('img', { src: 'img/avatars/6.jpg', className: 'img-avatar', alt: 'admin@bootstrapmaster.com' }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  'span',
                  { className: 'd-md-down-none' },
                  'Bartel'
                )
              ),
              __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownMenu"],
                { right: true, className: 'show' },
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  { header: true, tag: 'div', className: 'text-center' },
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                    'strong',
                    null,
                    'Settings'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-user' }),
                  ' Profile'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-wrench' }),
                  ' Settings'
                ),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"], { divider: true }),
                __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
                  __WEBPACK_IMPORTED_MODULE_6_reactstrap__["DropdownItem"],
                  null,
                  __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('i', { className: 'fa fa-lock' }),
                  ' Logout'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ })

};
//# sourceMappingURL=index.3082d2c6f91dba34ab43.js.map