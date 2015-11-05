'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = require('../../controls/Controls');

var TweenControls = (function (_Controls) {
    _inherits(TweenControls, _Controls);

    function TweenControls() {
        _classCallCheck(this, TweenControls);

        return _possibleConstructorReturn(this, _Controls.apply(this, arguments));
    }

    TweenControls.prototype.restart = function restart() {
        this.action.restart();
        return this;
    };

    TweenControls.prototype.reverse = function reverse() {
        this.action.reverse();
        return this;
    };

    TweenControls.prototype.seek = function seek(progress) {
        if (!this.actor.hasAction(this.id)) {
            this.start().pause();
        }

        this.action.elapsed = this.action.duration * progress;

        if (!this.action.isActive) {
            this.action.activate();
            this.actor.process.fire();
            this.action.deactivate();
        }

        return this;
    };

    return TweenControls;
})(Controls);

module.exports = TweenControls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7SUFFNUMsYUFBYTtjQUFiLGFBQWE7O2FBQWIsYUFBYTs4QkFBYixhQUFhOzs7OztBQUFiLGlCQUFhLFdBQ2YsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFKQyxpQkFBYSxXQU1mLE9BQU8sc0JBQUc7QUFDTixZQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBVEMsaUJBQWEsV0FXZixJQUFJLGlCQUFDLFFBQVEsRUFBRTtBQUNYLFlBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDaEMsZ0JBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN4Qjs7QUFFRCxZQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O0FBRXRELFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUN2QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixnQkFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDNUI7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F6QkMsYUFBYTtHQUFTLFFBQVE7O0FBNEJwQyxNQUFNLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQyIsImZpbGUiOiJUd2VlbkNvbnRyb2xzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbnRyb2xzID0gcmVxdWlyZSgnLi4vLi4vY29udHJvbHMvQ29udHJvbHMnKTtcblxuY2xhc3MgVHdlZW5Db250cm9scyBleHRlbmRzIENvbnRyb2xzIHtcbiAgICByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5yZXN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICBpZiAoIXRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCkucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aW9uLmVsYXBzZWQgPSB0aGlzLmFjdGlvbi5kdXJhdGlvbiAqIHByb2dyZXNzO1xuXG4gICAgICAgIGlmICghdGhpcy5hY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdG9yLnByb2Nlc3MuZmlyZSgpO1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFR3ZWVuQ29udHJvbHM7Il19