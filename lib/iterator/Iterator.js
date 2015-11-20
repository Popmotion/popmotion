'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = require('../actor/Actor'),
    Tween = require('../actions/Tween'),
    utils = require('../inc/utils');

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

            var callback = generateCallback.apply(undefined, [method].concat(args)),
                newIterator = new Iterator();

            this.members.forEach(function (member) {
                return newIterator.add(callback(member));
            });

            return newIterator;
        }
    }, {
        key: 'stagger',
        value: function stagger(method, props) {
            for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
                args[_key4 - 2] = arguments[_key4];
            }

            var tempMembers = utils.copyArray(this.members),
                numMembers = tempMembers.length,
                propsIsInterval = utils.isNum(props),
                interval = propsIsInterval ? props : props.interval || 100,
                staggerProps = {},
                i = -1,
                callback = generateCallback.apply(undefined, [method].concat(args));

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
                var newIndex = output.i,
                    gapIndex = i + 1;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUVwQyxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQzs7QUFFdEMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQVc7c0NBQU4sSUFBSTtBQUFKLFlBQUk7OztBQUNyQyxRQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBRXRCLFFBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QixnQkFBUSxHQUFHLFVBQUMsTUFBTTttQkFBSyxNQUFNLENBQUMsTUFBTSxPQUFDLENBQWQsTUFBTSxFQUFZLElBQUksQ0FBQztTQUFBLENBQUM7S0FDbEQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixnQkFBUSxHQUFHLFVBQUMsTUFBTTttQkFBSyxNQUFNLENBQUMsS0FBSyxNQUFBLENBQVosTUFBTSxHQUFPLE1BQU0sU0FBSyxJQUFJLEVBQUM7U0FBQSxDQUFDO0tBQ3hEOztBQUVELFdBQU8sUUFBUSxDQUFDO0NBQ25COztJQUVLLFFBQVE7QUFDVixhQURFLFFBQVEsQ0FDRSxPQUFPLEVBQUU7OEJBRG5CLFFBQVE7O0FBRU4sWUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUViLFlBQUksT0FBTyxFQUFFO0FBQ1QsZ0JBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDckI7O0FBRUQsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0tBQy9COztpQkFUQyxRQUFROzs0QkFXTixPQUFPLEVBQUU7QUFDVCxnQkFBSSxDQUFD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T0FBTyxFQUFFLENBQUM7QUFDdkIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztXQXRGQyxRQUFROzs7QUF5RmQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiSXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpLFxuICAgIFR3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpLFxuICAgIHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gbWV0aG9kO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc0Z1bmMobWV0aG9kKSkge1xuICAgICAgICBjYWxsYmFjayA9IChtZW1iZXIpID0+IG1lbWJlci5zdGFydChtZXRob2QsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoSW50b05ldyhtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpLFxuICAgICAgICAgICAgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgdmFyIHRlbXBNZW1iZXJzID0gdXRpbHMuY29weUFycmF5KHRoaXMubWVtYmVycyksXG4gICAgICAgICAgICBudW1NZW1iZXJzID0gdGVtcE1lbWJlcnMubGVuZ3RoLFxuICAgICAgICAgICAgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpLFxuICAgICAgICAgICAgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IDEwMCxcbiAgICAgICAgICAgIHN0YWdnZXJQcm9wcyA9IHt9LFxuICAgICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgICAgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAtMC42LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bU1lbWJlcnMsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMC42XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uQ29tcGxldGUgPSBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vblVwZGF0ZSA9IChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgIHZhciBuZXdJbmRleCA9IG91dHB1dC5pLFxuICAgICAgICAgICAgICAgIGdhcEluZGV4ID0gaSArIDE7XG5cbiAgICAgICAgICAgIC8vIElmIG91ciBuZXcgaW5kZXggaXMgb25seSBvbmUgbW9yZSB0aGFuIHRoZSBwcmV2aW91cyBpbmRleCwgZmlyZSBpbW1lZGlldGx5XG4gICAgICAgICAgICBpZiAobmV3SW5kZXggPT09IGkgKyAxKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG5cbiAgICAgICAgICAgIC8vIE9yIGxvb3AgdGhyb3VnaCB0aGUgZGlzdGFuY2UgdG8gZmlyZSBhbGwgaW5kZWNpZXMuIEluY3JlYXNlIGRlbGF5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gbmV3SW5kZXg7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGVtcE1lbWJlcnNbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpID0gbmV3SW5kZXg7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlci5zdGFydChuZXcgVHdlZW4oc3RhZ2dlclByb3BzKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQXJyYXkgbWFuaXB1bGF0aW9uXG4gICAgKi9cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSXRlcmF0b3I7Il19