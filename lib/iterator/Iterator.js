'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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