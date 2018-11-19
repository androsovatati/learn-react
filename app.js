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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var isFalse = function isFalse(value) {
  return value === 'false';
};

var login =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var email, password, url, requestParams, response, parsedData, errorMessage;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref.email, password = _ref.password;
            url = 'https://us-central1-mercdev-academy.cloudfunctions.net/login';
            requestParams = {
              method: 'POST',
              headers: {
                'Content-type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
            };
            _context.next = 5;
            return fetch(url, requestParams).catch(function (error) {
              return Promise.reject({
                message: 'Network error',
                body: error
              });
            });

          case 5:
            response = _context.sent;
            _context.prev = 6;
            _context.next = 9;
            return response.json();

          case 9:
            parsedData = _context.sent;

            if (!response.ok) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", parsedData);

          case 12:
            if (!(parsedData && parsedData.error)) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("return", Promise.reject({
              message: parsedData.error,
              status: response.status,
              body: parsedData
            }));

          case 14:
            errorMessage = '';

            if (response.status >= 500) {
              errorMessage = 'Server error. Try again';
            } else if (response.status >= 400 && response.status < 500) {
              errorMessage = 'Application error';
            }

            return _context.abrupt("return", Promise.reject({
              message: errorMessage || 'Unhandled error',
              status: response.status,
              body: parsedData
            }));

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](6);
            return _context.abrupt("return", Promise.reject({
              message: 'Invalid server data',
              status: response.status,
              body: _context.t0
            }));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[6, 19]]);
  }));

  return function login(_x) {
    return _ref2.apply(this, arguments);
  };
}();

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

var ErrorNotification = function ErrorNotification(props) {
  if (!props.errorMessage) {
    return null;
  }

  return React.createElement("div", {
    className: "login-form__error"
  }, props.errorMessage);
};

var FormLoader = function FormLoader(_ref3) {
  var isLoading = _ref3.isLoading;

  if (!isLoading) {
    return null;
  }

  return React.createElement("div", {
    className: "login-form__loader"
  }, React.createElement("div", {
    className: "loader"
  }));
};

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEmailChange", function (e) {
      _this.props.resetError();

      _this.setState({
        email: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPasswordChange", function (e) {
      _this.props.resetError();

      _this.setState({
        password: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoginClick",
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(e) {
        var response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                _context2.prev = 1;

                _this.setLoading();

                _context2.next = 5;
                return login(_this.state);

              case 5:
                response = _context2.sent;

                _this.resetLoading();

                _this.props.onSuccess(response);

                _context2.next = 13;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);

                _this.props.onError(_context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 10]]);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());

    _this.state = {
      isLoading: false,
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "setLoading",
    value: function setLoading() {
      this.setState({
        isLoading: true
      });
    }
  }, {
    key: "resetLoading",
    value: function resetLoading() {
      this.setState({
        isLoading: false
      });
    }
  }, {
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
        value: this.state.email,
        onChange: this.onEmailChange
      }), React.createElement(Input, {
        className: "login-form__input",
        name: "password",
        type: "password",
        placeholder: "Password",
        required: true,
        value: this.state.password,
        onChange: this.onPasswordChange
      }), React.createElement(ErrorNotification, {
        errorMessage: this.props.errorMessage
      }), React.createElement(Button, {
        className: "login-form__button",
        onClick: this.onLoginClick
      }, "Login"), React.createElement(FormLoader, {
        isLoading: this.state.isLoading
      }));
    }
  }]);

  return LoginForm;
}(React.Component);

var LogoutForm = function LogoutForm(_ref5) {
  var data = _ref5.data,
      onLogout = _ref5.onLogout;
  return React.createElement("div", {
    className: "login-page__form logout-form"
  }, React.createElement("img", {
    className: "logout-form__avatar",
    src: data.photoUrl,
    alt: "avatar"
  }), React.createElement("div", {
    className: "logout-form__username"
  }, data.name), React.createElement(Button, {
    className: "logout-form__button",
    onClick: onLogout
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onSuccessLogin", function (data) {
      _this2.setState({
        user: _objectSpread({}, data)
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onErrorLogin", function (error) {
      _this2.setState({
        errorMessage: error.message
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "resetError", function () {
      _this2.setState({
        errorMessage: ''
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onLogout", function () {
      _this2.setState({
        user: null
      });
    });

    _this2.state = {
      user: null
    };
    return _this2;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var form = this.state.user ? React.createElement(LogoutForm, {
        data: this.state.user,
        onLogout: this.onLogout
      }) : React.createElement(LoginForm, {
        errorMessage: this.state.errorMessage,
        onSuccess: this.onSuccessLogin,
        onError: this.onErrorLogin,
        resetError: this.resetError
      });
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
