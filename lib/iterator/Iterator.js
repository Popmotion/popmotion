'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = require('../actor/Actor');
var Tween = require('../actions/Tween');
var utils = require('../inc/utils');

var DEFAULT_STAGGER_EASE = 'linear';

function generateCallback(method) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var callback = method;

    if (utils.isString(method)) {
        callback = function (member) {
            return member[method].apply(member, args);
        };
    } else if (!utils.isFunc(method)) {
        callback = function (member) {
            return member.start.apply(member, [method].concat(args));
        };
    }

    return callback;
}

var Iterator = (function () {
    function Iterator(members) {
        _classCallCheck(this, Iterator);

        this.clear();

        if (members) {
            this.add(members);
        }

        this._stagger = new Actor();
    }

    _createClass(Iterator, [{
        key: 'add',
        value: function add(members) {
            this.members = this.members.concat(members);
            return this;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.members = [];
            return this;
        }
    }, {
        key: 'each',
        value: function each(method) {
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            var callback = generateCallback.apply(undefined, [method].concat(args));
            this.members.forEach(callback);
            return this;
        }
    }, {
        key: 'eachIntoNew',
        value: function eachIntoNew(method) {
            for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                args[_key3 - 1] = arguments[_key3];
            }

            var callback = generateCallback.apply(undefined, [method].concat(args));
            var newIterator = new Iterator();

            this.members.forEach(function (member) {
                return newIterator.add(callback(member));
            });

            return newIterator;
        }
    }, {
        key: 'stagger',
        value: function stagger(method, props) {
            var tempMembers = utils.copyArray(this.members);
            var numMembers = tempMembers.length;
            var propsIsInterval = utils.isNum(props);
            var interval = propsIsInterval ? props : props.interval || 100;

            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            var callback = generateCallback.apply(undefined, [method].concat(args));

            var i = -1;
            var staggerProps = {};

            staggerProps.values = {
                i: {
                    current: -0.6,
                    duration: interval * numMembers,
                    ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                    round: true,
                    to: numMembers - 0.6
                }
            };

            staggerProps.onComplete = propsIsInterval ? undefined : props.onComplete;

            staggerProps.onUpdate = function (output) {
                var newIndex = output.i;
                var gapIndex = i + 1;

                // If our new index is only one more than the previous index, fire immedietly
                if (newIndex === i + 1) {
                    callback(tempMembers[gapIndex], gapIndex);

                    // Or loop through the distance to fire all indecies. Increase delay.
                } else {
                        for (; gapIndex <= newIndex; gapIndex++) {
                            callback(tempMembers[gapIndex], gapIndex);
                        }
                    }

                i = newIndex;
            };

            this._stagger.start(new Tween(staggerProps));

            return this;
        }

        /*
            Array manipulation
        */

    }, {
        key: 'reverse',
        value: function reverse() {
            this.members.reverse();
            return this;
        }
    }]);

    return Iterator;
})();

module.exports = Iterator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN4QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXRDLElBQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDOztBQUV0QyxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBVztzQ0FBTixJQUFJO0FBQUosWUFBSTs7O0FBQ3JDLFFBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFFdEIsUUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3hCLGdCQUFRLEdBQUcsVUFBQyxNQUFNO21CQUFLLE1BQU0sQ0FBQyxNQUFNLE9BQUMsQ0FBZCxNQUFNLEVBQVksSUFBSSxDQUFDO1NBQUEsQ0FBQztLQUNsRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzlCLGdCQUFRLEdBQUcsVUFBQyxNQUFNO21CQUFLLE1BQU0sQ0FBQyxLQUFLLE1BQUEsQ0FBWixNQUFNLEdBQU8sTUFBTSxTQUFLLElBQUksRUFBQztTQUFBLENBQUM7S0FDeEQ7O0FBRUQsV0FBTyxRQUFRLENBQUM7Q0FDbkI7O0lBRUssUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLE9BQU8sRUFBRTs4QkFEbkIsUUFBUTs7QUFFTixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWIsWUFBSSxPQUFPLEVBQUU7QUFDVCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjs7QUFFRCxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7S0FDL0I7O2lCQVRDLFFBQVE7OzRCQVdOLE9BQU8s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LElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7O0FBRTdDLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7Ozs7OztrQ0FLUztBQUNOLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3ZCLG1CQUFPLElBQUksQ0FBQztTQUNmOzs7V0F2RkMsUUFBUTs7O0FBMEZkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6Ikl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xuY29uc3QgVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIGxldCBjYWxsYmFjayA9IG1ldGhvZDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKG1lbWJlcikgPT4gbWVtYmVyW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNGdW5jKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXIuc3RhcnQobWV0aG9kLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbmNsYXNzIEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICBpZiAobWVtYmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGQobWVtYmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfVxuXG4gICAgYWRkKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gdGhpcy5tZW1iZXJzLmNvbmNhdChtZW1iZXJzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoKG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG4gICAgICAgIGNvbnN0IG5ld0l0ZXJhdG9yID0gbmV3IEl0ZXJhdG9yKCk7XG5cbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4gbmV3SXRlcmF0b3IuYWRkKGNhbGxiYWNrKG1lbWJlcikpKTtcblxuICAgICAgICByZXR1cm4gbmV3SXRlcmF0b3I7XG4gICAgfVxuXG4gICAgc3RhZ2dlcihtZXRob2QsIHByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IHRlbXBNZW1iZXJzID0gdXRpbHMuY29weUFycmF5KHRoaXMubWVtYmVycyk7XG4gICAgICAgIGNvbnN0IG51bU1lbWJlcnMgPSB0ZW1wTWVtYmVycy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHByb3BzSXNJbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHByb3BzKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IDEwMDtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG5cbiAgICAgICAgbGV0IGkgPSAtMTtcbiAgICAgICAgbGV0IHN0YWdnZXJQcm9wcyA9IHt9O1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy52YWx1ZXMgPSB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDogLTAuNixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBudW1NZW1iZXJzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IERFRkFVTFRfU1RBR0dFUl9FQVNFIDogcHJvcHMuZWFzZSB8fCBERUZBVUxUX1NUQUdHRVJfRUFTRSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0bzogbnVtTWVtYmVycyAtIDAuNlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vbkNvbXBsZXRlID0gcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSAob3V0cHV0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IG91dHB1dC5pO1xuICAgICAgICAgICAgbGV0IGdhcEluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgICAgIC8vIElmIG91ciBuZXcgaW5kZXggaXMgb25seSBvbmUgbW9yZSB0aGFuIHRoZSBwcmV2aW91cyBpbmRleCwgZmlyZSBpbW1lZGlldGx5XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gbmV3SW5kZXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlci5zdGFydChuZXcgVHdlZW4oc3RhZ2dlclByb3BzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXJyYXkgbWFuaXB1bGF0aW9uXG4gICAgKi9cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSXRlcmF0b3I7Il19