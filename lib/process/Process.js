'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

    _createClass(Process, [{
        key: 'start',
        value: function start() {
            this.activate();
            return this;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.deactivate();
            return this;
        }
    }, {
        key: 'activate',
        value: function activate() {
            this.isActive = true;
            loop.activate(this, this.id);
        }
    }, {
        key: 'deactivate',
        value: function deactivate() {
            this.isActive = false;
            loop.deactivate(this.id);
        }
    }, {
        key: 'once',
        value: function once() {
            var _this2 = this;

            this.cleanup = function () {
                _this2.stop();
                _this2.cleanup = undefined;
            };

            return this.start();
        }
    }, {
        key: 'setBackground',
        value: function setBackground(runInBackground) {
            this.isBackground = runInBackground === true ? true : false;
            return this;
        }
    }]);

    return Process;
})();

module.exports = Process;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7SUFFekIsT0FBTzs7Ozs7OztBQU1ULGFBTkUsT0FBTyxDQU1HLFFBQVEsRUFBRSxLQUFLLEVBQUU7Ozs4QkFOM0IsT0FBTzs7O0FBUUwsWUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3hCLGdCQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztTQUUxQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM5QixpQkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ2pDLHNCQUFLLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNyQixDQUFDLENBQUM7U0FDTjs7QUFFRCxZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQzs7QUFFL0MsWUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwRCxZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QixZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7aUJBdkJDLE9BQU87O2dDQXlCRDtBQUNKLGdCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDaEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OzsrQkFFTTtBQUNILGdCQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDbEIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OzttQ0FFVTtBQUNQLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixnQkFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hDOzs7cUNBRVk7QUFDVCxnQkFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVCOzs7K0JBRU07OztBQUNILGdCQUFJLENBQUMsT0FBTyxHQUFHLFlBQU07QUFDakIsdUJBQUssSUFBSSxFQUFFLENBQUM7QUFDWix1QkFBSyxPQUFPLEdBQUcsU0FBUyxDQUFDO2FBQzVCLENBQUE7O0FBRUQsbUJBQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3ZCOzs7c0NBRWEsZUFBZSxFQUFFO0FBQzNCLGdCQUFJLENBQUMsWUFBWSxHQUFHLEFBQUMsZUFBZSxLQUFLLElBQUksR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQzlELG1CQUFPLElBQUksQ0FBQztTQUNmOzs7V0F6REMsT0FBTzs7O0FBNERiLE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuY29uc3QgbG9vcCA9IHJlcXVpcmUoJy4vbG9vcCcpO1xuXG5jbGFzcyBQcm9jZXNzIHtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbZnVuY3Rpb24gfHwgb2JqZWN0XVxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICovXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2ssIHNjb3BlKSB7XG4gICAgICAgIC8vIFNldCBjYWxsYmFja1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIgPSBjYWxsYmFjaztcbiAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmooY2FsbGJhY2spKSB7XG4gICAgICAgICAgICB1dGlscy5lYWNoKGNhbGxiYWNrLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjb3BlID0gdXRpbHMuaXNPYmooc2NvcGUpID8gc2NvcGUgOiB0aGlzO1xuXG4gICAgICAgIHRoaXMuc2V0QmFja2dyb3VuZChhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcywgdGhpcy5pZCk7XG4gICAgfVxuXG4gICAgZGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zdGFydCgpO1xuICAgIH1cblxuICAgIHNldEJhY2tncm91bmQocnVuSW5CYWNrZ3JvdW5kKSB7XG4gICAgICAgIHRoaXMuaXNCYWNrZ3JvdW5kID0gKHJ1bkluQmFja2dyb3VuZCA9PT0gdHJ1ZSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQcm9jZXNzOyJdfQ==