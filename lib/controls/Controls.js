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
            _this.origins[key] = _this.actor.values[key].current;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9scy9Db250cm9scy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7SUFFcEMsUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFOzhCQURyQyxRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7QUFFbkIsWUFBSSxVQUFVLEVBQUU7QUFDWixnQkFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDNUIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDMUI7S0FDSjs7QUFWQyxZQUFRLFdBWVYsS0FBSyxrQkFBQyxLQUFLLEVBQUU7QUFDVCxZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM1QixZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFqQkMsWUFBUSxXQW1CVixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRXpCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBeEJDLFlBQVEsV0EwQlYsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDekIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE3QkMsWUFBUSxXQStCVixNQUFNLHFCQUFHO0FBQ0wsWUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN2QixlQUFPLElBQUksQ0FBQztLQUNmOztBQWxDQyxZQUFRLFdBb0NWLE1BQU0scUJBQUc7QUFDTCxZQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3RFLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEU7O0FBdkNDLFlBQVEsV0F5Q1YsSUFBSSxtQkFBVTs7O0FBQ1Ysa0JBQUEsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLE1BQUEsbUJBQVMsQ0FBQztBQUN6QixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVDQyxZQUFRLFdBOENWLFVBQVUseUJBQUc7QUFDVCxlQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3REOztBQWhEQyxZQUFRLFdBa0RWLFdBQVcsMEJBQUc7OztBQUNWLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztBQUVsQixZQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3JDLGtCQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3RELENBQUMsQ0FBQztLQUNOOztBQXhEQyxZQUFRLFdBMERWLGNBQWMsNkJBQUc7OztBQUNiLFlBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUMvQixtQkFBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDekMsQ0FBQyxDQUFDO0tBQ047O1dBOURDLFFBQVE7OztBQWlFZCxNQUFNLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyIsImZpbGUiOiJDb250cm9scy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVhY2ggPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKS5lYWNoO1xuXG5jbGFzcyBDb250cm9scyB7XG4gICAgY29uc3RydWN0b3IoYWN0b3IsIGFjdGlvbiwgaGFzU3RhcnRlZCkge1xuICAgICAgICB0aGlzLmFjdG9yID0gYWN0b3I7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLnNhdmVPcmlnaW5zKCk7XG5cbiAgICAgICAgaWYgKGhhc1N0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaWQgPSB0aGlzLmJpbmRBY3Rpb24oKTtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLmFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICB0aGlzLmlkID0gdGhpcy5iaW5kQWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWN0b3Iuc3RhcnQodGhpcy5pZCwgaW5wdXQpO1xuICAgICAgICB0aGlzLmFjdGlvbi5hY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aGlzLmFjdG9yLnVuYmluZEFjdGlvbih0aGlzLmlkKTtcbiAgICAgICAgdGhpcy5hY3Rpb24uZGVhY3RpdmF0ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICB0aGlzLmFjdGlvbi5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24uYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBsZXQgcmVzdW1lID0gdGhpcy5hY3Rvci5oYXNBY3Rpb24odGhpcy5pZCkgPyB0aGlzLnJlc3VtZSA6IHRoaXMuc3RhcnQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGlvbi5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHJlc3VtZS5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHRoZW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLmFjdG9yLnRoZW4oLi4uYXJncyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRBY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yLmJpbmRBY3Rpb24odGhpcy5hY3Rpb24sIHRoaXMuaWQpO1xuICAgIH1cblxuICAgIHNhdmVPcmlnaW5zKCkge1xuICAgICAgICB0aGlzLm9yaWdpbnMgPSB7fTtcblxuICAgICAgICBlYWNoKHRoaXMuYWN0aW9uLnZhbHVlcywgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luc1trZXldID0gdGhpcy5hY3Rvci52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlT3JpZ2lucygpIHtcbiAgICAgICAgZWFjaCh0aGlzLm9yaWdpbnMsIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdG9yLnZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29udHJvbHM7Il19