function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import spinnable from './';

var Spinnable = /*#__PURE__*/function (_React$Component) {
  _inherits(Spinnable, _React$Component);

  function Spinnable(props) {
    _classCallCheck(this, Spinnable);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.setRef = function (ref) {
      if (ref) {
        var _this$props = _this.props,
            friction = _this$props.friction,
            onSpin = _this$props.onSpin,
            transformSpin = _this$props.transformSpin;

        _this.spin = spinnable(ref, { friction: friction, onSpin: onSpin, transformSpin: transformSpin });
      }
    };
    return _this;
  }

  Spinnable.prototype.componentWillUnmount = function componentWillUnmount() {
    this.spin.stop();
  };

  Spinnable.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        className = _props.className;


    return React.createElement(
      'div',
      { ref: this.setRef, className: className },
      children
    );
  };

  return Spinnable;
}(React.Component);

export default Spinnable;