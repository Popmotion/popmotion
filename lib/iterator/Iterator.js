'use strict';

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

    Iterator.prototype.add = function add(members) {
        this.members = this.members.concat(members);
        return this;
    };

    Iterator.prototype.clear = function clear() {
        this.members = [];
        return this;
    };

    Iterator.prototype.each = function each(method) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var callback = generateCallback.apply(undefined, [method].concat(args));
        this.members.forEach(callback);
        return this;
    };

    Iterator.prototype.eachIntoNew = function eachIntoNew(method) {
        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            args[_key3 - 1] = arguments[_key3];
        }

        var callback = generateCallback.apply(undefined, [method].concat(args));
        var newIterator = new Iterator();

        this.members.forEach(function (member) {
            return newIterator.add(callback(member));
        });

        return newIterator;
    };

    Iterator.prototype.stagger = function stagger(method, props) {
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

            // If our new index is only one more than the previous index, fire now
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
    };

    /*
        Array manipulation
    */

    Iterator.prototype.reverse = function reverse() {
        this.members.reverse();
        return this;
    };

    return Iterator;
})();

module.exports = Iterator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDeEMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDMUMsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztBQUV0QyxJQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQzs7QUFFdEMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQVc7c0NBQU4sSUFBSTtBQUFKLFlBQUk7OztBQUNyQyxRQUFJLFFBQVEsR0FBRyxNQUFNLENBQUM7O0FBRXRCLFFBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QixnQkFBUSxHQUFHLFVBQUMsTUFBTTttQkFBSyxNQUFNLENBQUMsTUFBTSxPQUFDLENBQWQsTUFBTSxFQUFZLElBQUksQ0FBQztTQUFBLENBQUM7S0FDbEQsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUM5QixnQkFBUSxHQUFHLFVBQUMsTUFBTSxFQUFLO0FBQ25CLGtCQUFNLENBQUMsS0FBSyxNQUFBLENBQVosTUFBTSxHQUFPLE1BQU0sU0FBSyxJQUFJLEVBQUMsQ0FBQztTQUNqQyxDQUFBO0tBQ0o7O0FBRUQsV0FBTyxRQUFRLENBQUM7Q0FDbkI7O0lBRUssUUFBUTtBQUNWLGFBREUsUUFBUSxDQUNFLE9BQU8sRUFBRTs4QkFEbkIsUUFBUTs7QUFFTixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWIsWUFBSSxPQUFPLEVBQUU7QUFDVCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjs7QUFFRCxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7S0FDL0I7O0FBVEMsWUFBUSxXQVdW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QkFDSjs7QUFFRCxhQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ2hCLENBQUM7O0FBRUYsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzs7QUFFN0MsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0FBL0VDLFlBQVEsV0FvRlYsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F2RkMsUUFBUTs7O0FBMEZkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6Ikl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQWN0b3IgPSByZXF1aXJlKCcuLi9hY3Rvci9BY3RvcicpO1xuY29uc3QgVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIGxldCBjYWxsYmFjayA9IG1ldGhvZDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKG1lbWJlcikgPT4gbWVtYmVyW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNGdW5jKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiB7XG4gICAgICAgICAgICBtZW1iZXIuc3RhcnQobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuY2xhc3MgSXRlcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuXG4gICAgICAgIGlmIChtZW1iZXJzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZChtZW1iZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIgPSBuZXcgQWN0b3IoKTtcbiAgICB9XG5cbiAgICBhZGQobWVtYmVycykge1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSB0aGlzLm1lbWJlcnMuY29uY2F0KG1lbWJlcnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2gobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVhY2hJbnRvTmV3KG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcbiAgICAgICAgY29uc3QgbmV3SXRlcmF0b3IgPSBuZXcgSXRlcmF0b3IoKTtcblxuICAgICAgICB0aGlzLm1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiBuZXdJdGVyYXRvci5hZGQoY2FsbGJhY2sobWVtYmVyKSkpO1xuXG4gICAgICAgIHJldHVybiBuZXdJdGVyYXRvcjtcbiAgICB9XG5cbiAgICBzdGFnZ2VyKG1ldGhvZCwgcHJvcHMsIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgdGVtcE1lbWJlcnMgPSB1dGlscy5jb3B5QXJyYXkodGhpcy5tZW1iZXJzKTtcbiAgICAgICAgY29uc3QgbnVtTWVtYmVycyA9IHRlbXBNZW1iZXJzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gdXRpbHMuaXNOdW0ocHJvcHMpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgMTAwO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKTtcblxuICAgICAgICBsZXQgaSA9IC0xO1xuICAgICAgICBsZXQgc3RhZ2dlclByb3BzID0ge307XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLnZhbHVlcyA9IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAtMC42LFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIG51bU1lbWJlcnMsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9TVEFHR0VSX0VBU0UgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfU1RBR0dFUl9FQVNFLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMC42XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc3RhZ2dlclByb3BzLm9uQ29tcGxldGUgPSBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vblVwZGF0ZSA9IChvdXRwdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gb3V0cHV0Lmk7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBpICsgMTtcblxuICAgICAgICAgICAgLy8gSWYgb3VyIG5ldyBpbmRleCBpcyBvbmx5IG9uZSBtb3JlIHRoYW4gdGhlIHByZXZpb3VzIGluZGV4LCBmaXJlIG5vd1xuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFycmF5IG1hbmlwdWxhdGlvblxuICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yOyJdfQ==