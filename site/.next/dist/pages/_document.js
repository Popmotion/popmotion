'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('regenerator-runtime/runtime');

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _StyleSheet = require('styled-components/lib/models/StyleSheet');

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _asyncToGenerator(fn) {
  return function () {
    var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);var value = info.value;
        } catch (error) {
          reject(error);return;
        }if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }return step("next");
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _ref3 = _react2.default.createElement('html', null, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })), _react2.default.createElement('body', null, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null)));

var PageTemplate = function (_Document) {
  _inherits(PageTemplate, _Document);

  function PageTemplate() {
    _classCallCheck(this, PageTemplate);

    return _possibleConstructorReturn(this, _Document.apply(this, arguments));
  }

  PageTemplate.getInitialProps = function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(_ref2) {
      var renderPage = _ref2.renderPage;
      var page, styles;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              page = renderPage();
              styles = _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _StyleSheet2.default.rules().map(function (rule) {
                    return rule.cssText;
                  }).join('\n') } });
              return _context.abrupt('return', _extends({}, page, { styles: styles }));

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getInitialProps(_x) {
      return _ref.apply(this, arguments);
    }

    return getInitialProps;
  }();

  PageTemplate.prototype.render = function render() {
    return _ref3;
  };

  return PageTemplate;
}(_document2.default);

exports.default = PageTemplate;