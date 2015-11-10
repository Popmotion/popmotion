'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Controls = require('../../controls/Controls');

var TweenControls = (function (_Controls) {
    _inherits(TweenControls, _Controls);

    function TweenControls() {
        _classCallCheck(this, TweenControls);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TweenControls).apply(this, arguments));
    }

    _createClass(TweenControls, [{
        key: 'restart',
        value: function restart() {
            this.action.restart();
            return this;
        }
    }, {
        key: 'reverse',
        value: function reverse() {
            this.action.reverse();
            return this;
        }
    }, {
        key: 'seek',
        value: function seek(progress) {
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
        }
    }]);

    return TweenControls;
})(Controls);

module.exports = TweenControls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hY3Rpb25zL3R3ZWVuL1R3ZWVuQ29udHJvbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztJQUU1QyxhQUFhO2NBQWIsYUFBYTs7YUFBYixhQUFhOzhCQUFiLGFBQWE7O3NFQUFiLGFBQWE7OztpQkFBYixhQUFhOztrQ0FDTDtBQUNOLGdCQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7a0NBRVM7QUFDTixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN0QixtQkFBTyxJQUFJLENBQUM7U0FDZjs7OzZCQUVJLFFBQVEsRUFBRTtBQUNYLGdCQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLG9CQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDeEI7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7QUFFdEQsZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtBQUN2QixvQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixvQkFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsb0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDNUI7O0FBRUQsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztXQXpCQyxhQUFhO0dBQVMsUUFBUTs7QUE0QnBDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDIiwiZmlsZSI6IlR3ZWVuQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29udHJvbHMgPSByZXF1aXJlKCcuLi8uLi9jb250cm9scy9Db250cm9scycpO1xuXG5jbGFzcyBUd2VlbkNvbnRyb2xzIGV4dGVuZHMgQ29udHJvbHMge1xuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnJlc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIGlmICghdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKS5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpb24uZWxhcHNlZCA9IHRoaXMuYWN0aW9uLmR1cmF0aW9uICogcHJvZ3Jlc3M7XG5cbiAgICAgICAgaWYgKCF0aGlzLmFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuYWN0b3IucHJvY2Vzcy5maXJlKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHdlZW5Db250cm9sczsiXX0=