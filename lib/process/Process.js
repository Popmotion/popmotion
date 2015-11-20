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
        loop.deactivate(this, this.id);
    };

    Process.prototype.once = function once() {
        var _this2 = this;

        this.cleanup = function () {
            _this2.stop();
            _this2.cleanup = undefined;
        };

        return this.start();
    };

    Process.prototype.setPassive = function setPassive(passive) {
        this.isPassive = passive;
    };

    return Process;
})();

module.exports = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0lBRXpCLE9BQU87Ozs7Ozs7QUFNVCxhQU5FLE9BQU8sQ0FNRyxRQUFRLEVBQUUsS0FBSyxFQUFFOzs7OEJBTjNCLE9BQU87OztBQVFMLFlBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN4QixnQkFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7U0FFMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDOUIsaUJBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBSztBQUNqQyxzQkFBSyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDckIsQ0FBQyxDQUFDO1NBQ047O0FBRUQsWUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRS9DLFlBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ3pCOztBQXJCQyxXQUFPLFdBdUJULEtBQUssb0JBQUc7QUFDSixZQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUExQkMsV0FBTyxXQTRCVCxJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2xCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBL0JDLFdBQU8sV0FpQ1QsUUFBUSx1QkFBRztBQUNQLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQzs7QUFwQ0MsV0FBTyxXQXNDVCxVQUFVLHlCQUFHO0FBQ1QsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xDOztBQXpDQyxXQUFPLFdBMkNULElBQUksbUJBQUc7OztBQUNILFlBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTTtBQUNqQixtQkFBSyxJQUFJLEVBQUUsQ0FBQztBQUNaLG1CQUFLLE9BQU8sR0FBRyxTQUFTLENBQUM7U0FDNUIsQ0FBQTs7QUFFRCxlQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUN2Qjs7QUFsREMsV0FBTyxXQW9EVCxVQUFVLHVCQUFDLE9BQU8sRUFBRTtBQUNoQixZQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztLQUM1Qjs7V0F0REMsT0FBTzs7O0FBeURiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuY29uc3QgbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG5jbGFzcyBQcm9jZXNzIHtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb24gfHwgb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICovXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgIC8vIFNldCBjYWxsYmFja1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBjYWxsYmFjaztcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmooY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB1dGlscy5lYWNoKGNhbGxiYWNrLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3BlID0gdXRpbHMuaXNPYmooc2NvcGUpID8gc2NvcGUgOiB0aGlzO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZhdGUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLCB0aGlzLmlkKTtcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLmNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc2V0UGFzc2l2ZShwYXNzaXZlKSB7XG4gICAgICAgIHRoaXMuaXNQYXNzaXZlID0gcGFzc2l2ZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvY2VzczsiXX0=