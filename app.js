"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isFalse = function isFalse(value) {
  return value === 'false';
};

var Input = function Input(props) {
  var opts = _objectSpread({}, props);

  delete opts.onChange;

  if (isFalse(opts.required)) {
    delete opts.required;
  }

  return React.createElement("input", _extends({
    className: "login-form__input"
  }, opts, {
    onChange: props.onChange
  }));
};

var Button = function Button(props) {
  return React.createElement("button", {
    className: "login-form__button",
    onClick: props.onClick
  }, props.children);
};

var LoginPage = function LoginPage(props) {
  return React.createElement("main", {
    className: "login-page"
  }, React.createElement("div", {
    className: "login-page__logo"
  }, React.createElement("img", {
    className: "company-logo",
    src: "images/w-mercury-development.svg",
    alt: "logo"
  })), props.children);
};

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onInputChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEmailChange", function (e) {
      _this.setState({
        email: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "login", function () {
      console.log('login', _this.state);
    });

    _this.state = {
      name: '',
      email: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "render",
    value: function render() {
      return React.createElement("form", {
        className: "login-page__form login-form"
      }, React.createElement("div", {
        className: "login-form__title"
      }, "Log in"), React.createElement(Input, {
        className: "login-form__input",
        name: "email",
        type: "email",
        placeholder: "E-Mail",
        required: true,
        value: this.state.name,
        onChange: this.onInputChange
      }), React.createElement(Input, {
        className: "login-form__input",
        name: "password",
        type: "password",
        placeholder: "Password",
        required: true,
        value: this.state.email,
        onChange: this.onEmailChange
      }), React.createElement("div", {
        className: "login-form__error"
      }), React.createElement(Button, {
        className: "login-form__button",
        onClick: this.login
      }, "Login"));
    }
  }]);

  return LoginForm;
}(React.Component);

var LogoutForm = function LogoutForm(props) {
  return React.createElement("form", {
    className: "login-page__form logout-form"
  }, React.createElement("img", {
    className: "logout-form__avatar",
    src: "",
    alt: "avatar"
  }), React.createElement("div", {
    className: "logout-form__username"
  }), React.createElement(Button, {
    className: "logout-form__button"
  }, "Logout"));
};

var App =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    var _this2;

    _classCallCheck(this, App);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this2.state = {
      user: null
    };
    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var form = this.isLoggedIn ? React.createElement(LogoutForm, null) : React.createElement(LoginForm, null);
      return React.createElement(LoginPage, null, form);
    }
  }, {
    key: "isLoggedIn",
    get: function get() {
      return !!this.state.user;
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
