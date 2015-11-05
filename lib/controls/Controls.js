"use strict";

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

    Controls.prototype.start = function start(input) {
        this.id = this.bindAction();
        this.actor.start(this.id, input);
        this.action.activate();
        return this;
    };

    Controls.prototype.stop = function stop() {
        this.actor.unbindAction(this.id);
        this.action.deactivate();

        return this;
    };

    Controls.prototype.pause = function pause() {
        this.action.deactivate();
        return this;
    };

    Controls.prototype.resume = function resume() {
        this.action.activate();
        return this;
    };

    Controls.prototype.toggle = function toggle() {
        var resume = this.actor.hasAction(this.id) ? this.resume : this.start;
        return this.action.isActive ? this.pause() : resume.call(this);
    };

    Controls.prototype.then = function then() {
        var _actor;

        (_actor = this.actor).then.apply(_actor, arguments);
        return this;
    };

    Controls.prototype.bindAction = function bindAction() {
        return this.actor.bindAction(this.action, this.id);
    };

    return Controls;
})();

module.exports = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQU0sUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFOzhCQURyQyxRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixZQUFJLFVBQVUsRUFBRTtBQUNaLGdCQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQjtLQUNKOztBQVRDLFlBQVEsV0FXVixLQUFLLGtCQUFDLEtBQUssRUFBRTtBQUNULFlBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzVCLFlBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixlQUFPLElBQUksQ0FBQztLQUNmOztBQWhCQyxZQUFRLFdBa0JWLElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7QUFFekIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUF2QkMsWUFBUSxXQXlCVixLQUFLLG9CQUFHO0FBQ0osWUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN6QixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCQyxZQUFRLFdBOEJWLE1BQU0scUJBQUc7QUFDTCxZQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBakNDLFlBQVEsV0FtQ1YsTUFBTSxxQkFBRztBQUNMLFlBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdEUsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRTs7QUF0Q0MsWUFBUSxXQXdDVixJQUFJLG1CQUFVOzs7QUFDVixrQkFBQSxJQUFJLENBQUMsS0FBSyxFQUFDLElBQUksTUFBQSxtQkFBUyxDQUFDO0FBQ3pCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBM0NDLFlBQVEsV0E2Q1YsVUFBVSx5QkFBRztBQUNULGVBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdEQ7O1dBL0NDLFFBQVE7OztBQWtEZCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJDb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRyb2xzIHtcbiAgICBjb25zdHJ1Y3RvcihhY3RvciwgYWN0aW9uLCBoYXNTdGFydGVkKSB7XG4gICAgICAgIHRoaXMuYWN0b3IgPSBhY3RvcjtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBsZXQgcmVzdW1lID0gdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkgPyB0aGlzLnJlc3VtZSA6IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHJlc3VtZS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHRoZW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmFjdG9yLnRoZW4oLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRBY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yLmJpbmRBY3Rpb24odGhpcy5hY3Rpb24sIHRoaXMuaWQpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDb250cm9sczsiXX0=