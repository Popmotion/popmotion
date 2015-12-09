'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var each = require('../inc/utils').each;

var Controls = (function () {
    function Controls(actor, action, hasStarted) {
        _classCallCheck(this, Controls);

        this.actor = actor;
        this.action = action;
        this.saveOrigins();

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

    Controls.prototype.saveOrigins = function saveOrigins() {
        var _this = this;

        this.origins = {};

        each(this.action.values, function (key, value) {
            var actorValue = _this.actor.values[key];

            _this.origins[key] = actorValue.current;

            if (actorValue.children) {
                each(actorValue.children, function (childKey, childValue) {
                    _this.origins[key + childKey] = _this.actor.values[key + childKey].current;
                });
            }
        });
    };

    Controls.prototype.restoreOrigins = function restoreOrigins() {
        var _this2 = this;

        each(this.origins, function (key, value) {
            _this2.actor.values[key].origin = value;
        });
    };

    return Controls;
})();

module.exports = Controls;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7SUFFcEMsUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFOzhCQURyQyxRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7QUFFbkIsWUFBSSxVQUFVLEVBQUU7QUFDWixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7S0FDSjs7QUFWQyxZQUFRLFdBWVYsS0FBSyxrQkFBQyxLQUFLLEVBQUU7QUFDVCxZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFqQkMsWUFBUSxXQW1CVixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRXpCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBeEJDLFlBQVEsV0EwQlYsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE3QkMsWUFBUSxXQStCVixNQUFNLHFCQUFHO0FBQ0wsWUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixlQUFPLElBQUksQ0FBQztLQUNmOztBQWxDQyxZQUFRLFdBb0NWLE1BQU0scUJBQUc7QUFDTCxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RFLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEU7O0FBdkNDLFlBQVEsV0F5Q1YsSUFBSSxtQkFBVTs7O0FBQ1Ysa0JBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLE1BQUEsbUJBQVMsQ0FBQztBQUN6QixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVDQyxZQUFRLFdBOENWLFVBQVUseUJBQUc7QUFDVCxlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3REOztBQWhEQyxZQUFRLFdBa0RWLFdBQVcsMEJBQUc7OztBQUNWLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVsQixZQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3JDLGdCQUFJLFVBQVUsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXhDLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDOztBQUV2QyxnQkFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO0FBQ3JCLG9CQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUs7QUFDaEQsMEJBQUssT0FBTyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDNUUsQ0FBQyxDQUFDO2FBQ047U0FDSixDQUFDLENBQUM7S0FDTjs7QUFoRUMsWUFBUSxXQWtFVixjQUFjLDZCQUFHOzs7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUs7QUFDL0IsbUJBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3pDLENBQUMsQ0FBQztLQUNOOztXQXRFQyxRQUFROzs7QUF5RWQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiQ29udHJvbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlYWNoID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJykuZWFjaDtcblxuY2xhc3MgQ29udHJvbHMge1xuICAgIGNvbnN0cnVjdG9yKGFjdG9yLCBhY3Rpb24sIGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5hY3RvciA9IGFjdG9yO1xuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5zYXZlT3JpZ2lucygpO1xuXG4gICAgICAgIGlmIChoYXNTdGFydGVkKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pZCA9IHRoaXMuYmluZEFjdGlvbigpO1xuICAgICAgICB0aGlzLmFjdG9yLnN0YXJ0KHRoaXMuaWQsIGlucHV0KTtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5hY3Rvci51bmJpbmRBY3Rpb24odGhpcy5pZCk7XG4gICAgICAgIHRoaXMuYWN0aW9uLmRlYWN0aXZhdGUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VtZSA9IHRoaXMuYWN0b3IuaGFzQWN0aW9uKHRoaXMuaWQpID8gdGhpcy5yZXN1bWUgOiB0aGlzLnN0YXJ0O1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rpb24uaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiByZXN1bWUuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICB0aGVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5hY3Rvci50aGVuKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBiaW5kQWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3Rvci5iaW5kQWN0aW9uKHRoaXMuYWN0aW9uLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBzYXZlT3JpZ2lucygpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5zID0ge307XG5cbiAgICAgICAgZWFjaCh0aGlzLmFjdGlvbi52YWx1ZXMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgYWN0b3JWYWx1ZSA9IHRoaXMuYWN0b3IudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHRoaXMub3JpZ2luc1trZXldID0gYWN0b3JWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoYWN0b3JWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGVhY2goYWN0b3JWYWx1ZS5jaGlsZHJlbiwgKGNoaWxkS2V5LCBjaGlsZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luc1trZXkgKyBjaGlsZEtleV0gPSB0aGlzLmFjdG9yLnZhbHVlc1trZXkgKyBjaGlsZEtleV0uY3VycmVudDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVzdG9yZU9yaWdpbnMoKSB7XG4gICAgICAgIGVhY2godGhpcy5vcmlnaW5zLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rvci52YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRyb2xzOyJdfQ==