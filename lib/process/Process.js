'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = require('../inc/utils');
var loop = require('./loop');

var Process = (function () {

    /*
        @param [function || object]
        @param [object] (optional)
    */

    function Process(callback, scope) {
        var _this = this;

        _classCallCheck(this, Process);

        // Set callback
        if (utils.isFunc(callback)) {
            this.render = callback;
        } else if (utils.isObj(callback)) {
            utils.each(callback, function (key, value) {
                _this[key] = value;
            });
        }

        this.scope = utils.isObj(scope) ? scope : this;

        this.setBackground(arguments[arguments.length - 1]);

        this.id = loop.getProcessId();
        this.isActive = false;
    }

    Process.prototype.start = function start() {
        this.activate();
        return this;
    };

    Process.prototype.stop = function stop() {
        this.deactivate();
        return this;
    };

    Process.prototype.activate = function activate() {
        this.isActive = true;
        loop.activate(this, this.id);
    };

    Process.prototype.deactivate = function deactivate() {
        this.isActive = false;
        loop.deactivate(this.id);
    };

    Process.prototype.once = function once() {
        var _this2 = this;

        this.cleanup = function () {
            _this2.stop();
            _this2.cleanup = undefined;
        };

        return this.start();
    };

    Process.prototype.setBackground = function setBackground(runInBackground) {
        this.isBackground = runInBackground === true ? true : false;
        return this;
    };

    return Process;
})();

module.exports = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRXpCLE9BQU87Ozs7Ozs7QUFNVCxhQU5FLE9BQU8sQ0FNRyxRQUFRLEVBQUUsS0FBSyxFQUFFOzs7OEJBTjNCLE9BQU87OztBQVFMLFlBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN4QixnQkFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FFMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDOUIsaUJBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUNqQyxzQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047O0FBRUQsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRS9DLFlBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFcEQsWUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDOUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7O0FBdkJDLFdBQU8sV0F5QlQsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNoQixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCQyxXQUFPLFdBOEJULElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFqQ0MsV0FBTyxXQW1DVCxRQUFRLHVCQUFHO0FBQ1AsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hDOztBQXRDQyxXQUFPLFdBd0NULFVBQVUseUJBQUc7QUFDVCxZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM1Qjs7QUEzQ0MsV0FBTyxXQTZDVCxJQUFJLG1CQUFHOzs7QUFDSCxZQUFJLENBQUMsT0FBTyxHQUFHLFlBQU07QUFDakIsbUJBQUssSUFBSSxFQUFFLENBQUM7QUFDWixtQkFBSyxPQUFPLEdBQUcsU0FBUyxDQUFDO1NBQzVCLENBQUE7O0FBRUQsZUFBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDdkI7O0FBcERDLFdBQU8sV0FzRFQsYUFBYSwwQkFBQyxlQUFlLEVBQUU7QUFDM0IsWUFBSSxDQUFDLFlBQVksR0FBRyxBQUFDLGVBQWUsS0FBSyxJQUFJLEdBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztBQUM5RCxlQUFPLElBQUksQ0FBQztLQUNmOztXQXpEQyxPQUFPOzs7QUE0RGIsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5jb25zdCBsb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbmNsYXNzIFByb2Nlc3Mge1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtmdW5jdGlvbiB8fCBvYmplY3RdXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaywgc2NvcGUpIHtcbiAgICAgICAgLy8gU2V0IGNhbGxiYWNrXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlciA9IGNhbGxiYWNrO1xuICAgICAgICBcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iaihjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHV0aWxzLmVhY2goY2FsbGJhY2ssIChrZXksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NvcGUgPSB1dGlscy5pc09iaihzY29wZSkgPyBzY29wZSA6IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRCYWNrZ3JvdW5kKGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV0pO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLmNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2V0QmFja2dyb3VuZChydW5JbkJhY2tncm91bmQpIHtcbiAgICAgICAgdGhpcy5pc0JhY2tncm91bmQgPSAocnVuSW5CYWNrZ3JvdW5kID09PSB0cnVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2Nlc3M7Il19