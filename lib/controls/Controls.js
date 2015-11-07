"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controls = (function () {
    function Controls(actor, action, hasStarted) {
        _classCallCheck(this, Controls);

        this.actor = actor;
        this.action = action;

        if (hasStarted) {
            this.id = this.bindAction();
            this.action.activate();
        }
    }

    _createClass(Controls, [{
        key: "start",
        value: function start(input) {
            this.id = this.bindAction();
            this.actor.start(this.id, input);
            this.action.activate();
            return this;
        }
    }, {
        key: "stop",
        value: function stop() {
            this.actor.unbindAction(this.id);
            this.action.deactivate();

            return this;
        }
    }, {
        key: "pause",
        value: function pause() {
            this.action.deactivate();
            return this;
        }
    }, {
        key: "resume",
        value: function resume() {
            this.action.activate();
            return this;
        }
    }, {
        key: "toggle",
        value: function toggle() {
            var resume = this.actor.hasAction(this.id) ? this.resume : this.start;
            return this.action.isActive ? this.pause() : resume.call(this);
        }
    }, {
        key: "then",
        value: function then() {
            var _actor;

            (_actor = this.actor).then.apply(_actor, arguments);
            return this;
        }
    }, {
        key: "bindAction",
        value: function bindAction() {
            return this.actor.bindAction(this.action, this.id);
        }
    }]);

    return Controls;
})();

module.exports = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTSxRQUFRO0FBQ1YsYUFERSxRQUFRLENBQ0UsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUU7OEJBRHJDLFFBQVE7O0FBRU4sWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRXJCLFlBQUksVUFBVSxFQUFFO0FBQ1osZ0JBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzVCLGdCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzFCO0tBQ0o7O2lCQVRDLFFBQVE7OzhCQVdKLEtBQUssRUFBRTtBQUNULGdCQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixnQkFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUNqQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixtQkFBTyxJQUFJLENBQUM7U0FDZjs7OytCQUVNO0FBQ0gsZ0JBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7QUFFekIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztnQ0FFTztBQUNKLGdCQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pCLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7aUNBRVE7QUFDTCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixtQkFBTyxJQUFJLENBQUM7U0FDZjs7O2lDQUVRO0FBQ0wsZ0JBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEUsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEU7OzsrQkFFYTs7O0FBQ1Ysc0JBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLE1BQUEsbUJBQVMsQ0FBQztBQUN6QixtQkFBTyxJQUFJLENBQUM7U0FDZjs7O3FDQUVZO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDdEQ7OztXQS9DQyxRQUFROzs7QUFrRGQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoYWN0b3IsIGFjdGlvbiwgaGFzU3RhcnRlZCkge1xuICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgIGlmIChoYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdG9yLnN0YXJ0KHRoaXMuaWQsIGlucHV0KTtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci51bmJpbmRBY3Rpb24odGhpcy5pZCk7XG4gICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7Il19