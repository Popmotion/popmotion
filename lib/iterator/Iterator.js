'use strict';

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

        var callback = generateCallback.apply(undefined, [method].concat(args)),
            newIterator = new Iterator();

        this.members.forEach(function (member) {
            return newIterator.add(callback(member));
        });

        return newIterator;
    };

    Iterator.prototype.stagger = function stagger(method, props) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pdGVyYXRvci9JdGVyYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLEtBQUssR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFDbkMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzs7QUFFcEMsSUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUM7O0FBRXRDLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFXO3NDQUFOLElBQUk7QUFBSixZQUFJOzs7QUFDckMsUUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDOztBQUV0QixRQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDeEIsZ0JBQVEsR0FBRyxVQUFDLE1BQU07bUJBQUssTUFBTSxDQUFDLE1BQU0sT0FBQyxDQUFkLE1BQU0sRUFBWSxJQUFJLENBQUM7U0FBQSxDQUFDO0tBQ2xELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDOUIsZ0JBQVEsR0FBRyxVQUFDLE1BQU07bUJBQUssTUFBTSxDQUFDLEtBQUssTUFBQSxDQUFaLE1BQU0sR0FBTyxNQUFNLFNBQUssSUFBSSxFQUFDO1NBQUEsQ0FBQztLQUN4RDs7QUFFRCxXQUFPLFFBQVEsQ0FBQztDQUNuQjs7SUFFSyxRQUFRO0FBQ1YsYUFERSxRQUFRLENBQ0UsT0FBTyxFQUFFOzhCQURuQixRQUFROztBQUVOLFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFYixZQUFJLE9BQU8sRUFBRTtBQUNULGdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCOztBQUVELFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztLQUMvQjs7QUFUQyxZQUFRLFdBV1YsR0FBRyxnQkFBQyxPQUFPLEVBQUU7QUFDVCxZQUFJ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QUFFN0MsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7O0FBOUVDLFlBQVEsV0FtRlYsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDdkIsZUFBTyxJQUFJLENBQUM7S0FDZjs7V0F0RkMsUUFBUTs7O0FBeUZkLE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDIiwiZmlsZSI6Ikl0ZXJhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEFjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKSxcbiAgICBUd2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKSxcbiAgICB1dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5jb25zdCBERUZBVUxUX1NUQUdHRVJfRUFTRSA9ICdsaW5lYXInO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncykge1xuICAgIHZhciBjYWxsYmFjayA9IG1ldGhvZDtcblxuICAgIGlmICh1dGlscy5pc1N0cmluZyhtZXRob2QpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gKG1lbWJlcikgPT4gbWVtYmVyW21ldGhvZF0oLi4uYXJncyk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNGdW5jKG1ldGhvZCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSAobWVtYmVyKSA9PiBtZW1iZXIuc3RhcnQobWV0aG9kLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cbmNsYXNzIEl0ZXJhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzKSB7XG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICBpZiAobWVtYmVycykge1xuICAgICAgICAgICAgdGhpcy5hZGQobWVtYmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zdGFnZ2VyID0gbmV3IEFjdG9yKCk7XG4gICAgfVxuXG4gICAgYWRkKG1lbWJlcnMpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gdGhpcy5tZW1iZXJzLmNvbmNhdChtZW1iZXJzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlYWNoKG1ldGhvZCwgLi4uYXJncykge1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSBnZW5lcmF0ZUNhbGxiYWNrKG1ldGhvZCwgLi4uYXJncyk7XG4gICAgICAgIHRoaXMubWVtYmVycy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZWFjaEludG9OZXcobWV0aG9kLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGdlbmVyYXRlQ2FsbGJhY2sobWV0aG9kLCAuLi5hcmdzKSxcbiAgICAgICAgICAgIG5ld0l0ZXJhdG9yID0gbmV3IEl0ZXJhdG9yKCk7XG5cbiAgICAgICAgdGhpcy5tZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4gbmV3SXRlcmF0b3IuYWRkKGNhbGxiYWNrKG1lbWJlcikpKTtcblxuICAgICAgICByZXR1cm4gbmV3SXRlcmF0b3I7XG4gICAgfVxuXG4gICAgc3RhZ2dlcihtZXRob2QsIHByb3BzLCAuLi5hcmdzKSB7XG4gICAgICAgIHZhciB0ZW1wTWVtYmVycyA9IHV0aWxzLmNvcHlBcnJheSh0aGlzLm1lbWJlcnMpLFxuICAgICAgICAgICAgbnVtTWVtYmVycyA9IHRlbXBNZW1iZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIHByb3BzSXNJbnRlcnZhbCA9IHV0aWxzLmlzTnVtKHByb3BzKSxcbiAgICAgICAgICAgIGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCAxMDAsXG4gICAgICAgICAgICBzdGFnZ2VyUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIGkgPSAtMSxcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZ2VuZXJhdGVDYWxsYmFjayhtZXRob2QsIC4uLmFyZ3MpO1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy52YWx1ZXMgPSB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgY3VycmVudDogLTAuNixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBudW1NZW1iZXJzLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IERFRkFVTFRfU1RBR0dFUl9FQVNFIDogcHJvcHMuZWFzZSB8fCBERUZBVUxUX1NUQUdHRVJfRUFTRSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0bzogbnVtTWVtYmVycyAtIDAuNlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHN0YWdnZXJQcm9wcy5vbkNvbXBsZXRlID0gcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZTtcblxuICAgICAgICBzdGFnZ2VyUHJvcHMub25VcGRhdGUgPSAob3V0cHV0KSA9PiB7XG4gICAgICAgICAgICB2YXIgbmV3SW5kZXggPSBvdXRwdXQuaSxcbiAgICAgICAgICAgICAgICBnYXBJbmRleCA9IGkgKyAxO1xuXG4gICAgICAgICAgICAvLyBJZiBvdXIgbmV3IGluZGV4IGlzIG9ubHkgb25lIG1vcmUgdGhhbiB0aGUgcHJldmlvdXMgaW5kZXgsIGZpcmUgaW1tZWRpZXRseVxuICAgICAgICAgICAgaWYgKG5ld0luZGV4ID09PSBpICsgMSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuXG4gICAgICAgICAgICAvLyBPciBsb29wIHRocm91Z2ggdGhlIGRpc3RhbmNlIHRvIGZpcmUgYWxsIGluZGVjaWVzLiBJbmNyZWFzZSBkZWxheS5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IG5ld0luZGV4OyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRlbXBNZW1iZXJzW2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSA9IG5ld0luZGV4O1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3N0YWdnZXIuc3RhcnQobmV3IFR3ZWVuKHN0YWdnZXJQcm9wcykpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFycmF5IG1hbmlwdWxhdGlvblxuICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5tZW1iZXJzLnJldmVyc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEl0ZXJhdG9yOyJdfQ==