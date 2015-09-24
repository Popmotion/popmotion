'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Actor = require('../actor/Actor'),
    Tween = require('../actions/Tween'),
    utils = require('../inc/utils');

var DEFAULT_STAGGER_EASE = 'linear';

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
        value: function each(callback) {
            this.members.forEach(callback);
            return this;
        }
    }, {
        key: 'stagger',
        value: function stagger(props, method) {
            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                args[_key - 2] = arguments[_key];
            }

            var _this = this;

            var numMembers = this.members.length,
                propsIsInterval = utils.isNum(props),
                interval = propsIsInterval ? props : props.interval,
                staggerProps = {},
                i = -1,
                callback = utils.isString(method) ? function (member) {
                member[method].apply(member, args);
            } : method;

            staggerProps.values = {
                i: {
                    current: 0,
                    duration: interval * numMembers,
                    ease: propsIsInterval ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                    round: true,
                    to: numElements - 1
                }
            };

            staggerProps.onUpdate = function (output) {
                var newIndex = output.i,
                    gapIndex = i + 1;

                // If our new index is only one more than the previous index, fire immedietly
                if (newIndex === i + 1) {
                    callback(_this.members[gapIndex], gapIndex);

                    // Or loop through the distance to fire all indecies. Increase delay.
                } else {
                        for (; gapIndex <= newIndex; gapIndex++) {
                            callback(_this.members[gapIndex], gapIndex);
                        }
                    }

                i = newIndex;
            };

            this._stagger.start(new Tween(staggerProps));

            return this;
        }
    }]);

    return Iterator;
})();

module.exports = Iterator;