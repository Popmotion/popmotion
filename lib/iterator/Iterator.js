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
            member.start.apply(member, [method].concat(args));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN4QyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXRDLElBQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDOztBQUV0QyxTQUFTLGdCQUFnQixDQUFDLE1BQU0sRUFBVztzQ0FBTixJQUFJO0FBQUosWUFBSTs7O0FBQ3JDLFFBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQzs7QUFFdEIsUUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3hCLGdCQUFRLEdBQUcsVUFBQyxNQUFNO21CQUFLLE1BQU0sQ0FBQyxNQUFNLE9BQUMsQ0FBZCxNQUFNLEVBQVksSUFBSSxDQUFDO1NBQUEsQ0FBQztLQUNsRCxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQzlCLGdCQUFRLEdBQUcsVUFBQyxNQUFNLEVBQUs7QUFDbkIsa0JBQU0sQ0FBQyxLQUFLLE1BQUEsQ0FBWixNQUFNLEdBQU8sTUFBTSxTQUFLLElBQUksRUFBQyxDQUFDO1NBQ2pDLENBQUE7S0FDSjs7QUFFRCxXQUFPLFFBQVEsQ0FBQztDQUNuQjs7SUFFSyxRQUFRO0FBQ1YsYUFERSxRQUFRLENBQ0UsT0FBTyxFQUFFOzhCQURuQixRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFYixZQUFJLE9BQU8sRUFBRTtBQUNULGdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCOztBQUVELFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztLQUMvQjs7aUJBVEMsUUFBUTs7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QyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7QUFFN0MsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7Ozs7Ozs7O2tDQUtTO0FBQ04sZ0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsbUJBQU8sSUFBSSxDQUFDO1NBQ2Y7OztXQXZGQyxRQUFROzs7QUEwRmQsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMiLCJmaWxlIjoiSXRlcmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyk7XG5jb25zdCBUd2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcbmNvbnN0IHV0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmNvbnN0IERFRkFVTFRfU1RBR0dFUl9FQVNFID0gJ2xpbmVhcic7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgbGV0IGNhbGxiYWNrID0gbWV0aG9kO1xuXG4gICAgaWYgKHV0aWxzLmlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXJbbWV0aG9kXSguLi5hcmdzKTtcbiAgICB9IGVsc2UgaWYgKCF1dGlscy5pc0Z1bmMobWV0aG9kKSkge1xuICAgICAgICBjYWxsYmFjayA9IChtZW1iZXIpID0+IHtcbiAgICAgICAgICAgIG1lbWJlci5zdGFydChtZXRob2QsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5jbGFzcyBJdGVyYXRvciB7XG4gICAgY29uc3RydWN0b3IobWVtYmVycykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG5cbiAgICAgICAgaWYgKG1lbWJlcnMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKG1lbWJlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc3RhZ2dlciA9IG5ldyBBY3RvcigpO1xuICAgIH1cblxuICAgIGFkZChtZW1iZXJzKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IHRoaXMubWVtYmVycy5jb25jYXQobWVtYmVycyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZWFjaChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZWFjaEludG9OZXcobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuICAgICAgICBjb25zdCBuZXdJdGVyYXRvciA9IG5ldyBJdGVyYXRvcigpO1xuXG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKChtZW1iZXIpID0+IG5ld0l0ZXJhdG9yLmFkZChjYWxsYmFjayhtZW1iZXIpKSk7XG5cbiAgICAgICAgcmV0dXJuIG5ld0l0ZXJhdG9yO1xuICAgIH1cblxuICAgIHN0YWdnZXIobWV0aG9kLCBwcm9wcywgLi4uYXJncykge1xuICAgICAgICBjb25zdCB0ZW1wTWVtYmVycyA9IHV0aWxzLmNvcHlBcnJheSh0aGlzLm1lbWJlcnMpO1xuICAgICAgICBjb25zdCBudW1NZW1iZXJzID0gdGVtcE1lbWJlcnMubGVuZ3RoO1xuICAgICAgICBjb25zdCBwcm9wc0lzSW50ZXJ2YWwgPSB1dGlscy5pc051bShwcm9wcyk7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCAxMDA7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuXG4gICAgICAgIGxldCBpID0gLTE7XG4gICAgICAgIGxldCBzdGFnZ2VyUHJvcHMgPSB7fTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMudmFsdWVzID0ge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IC0wLjYsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IGludGVydmFsICogbnVtTWVtYmVycyxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX1NUQUdHRVJfRUFTRSA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9TVEFHR0VSX0VBU0UsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdG86IG51bU1lbWJlcnMgLSAwLjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25Db21wbGV0ZSA9IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGU7XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uVXBkYXRlID0gKG91dHB1dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBvdXRwdXQuaTtcbiAgICAgICAgICAgIGxldCBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFycmF5IG1hbmlwdWxhdGlvblxuICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yOyJdfQ==