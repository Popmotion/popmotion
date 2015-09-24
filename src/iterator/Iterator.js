var Actor = require('../actor/Actor'),
    Tween = require('../actions/Tween'),
    utils = require('../inc/utils');

const DEFAULT_STAGGER_EASE = 'linear';

class Iterator {
    constructor(members) {
        this.clear();

        if (members) {
            this.add(members);
        }

        this._stagger = new Actor();
    }

    add(members) {
        this.members = this.members.concat(members);
        return this;
    }

    clear() {
        this.members = [];
        return this;
    }

    each(callback) {
        this.members.forEach(callback);
        return this;
    }

    stagger(props, method, ...args) {
        var numMembers = this.members.length,
            propsIsInterval = utils.isNum(props),
            interval = propsIsInterval ? props : props.interval,
            staggerProps = {},
            i = -1,

            callback = utils.isString(method) ?
                function (member) {
                    member[method](...args);
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

        staggerProps.onUpdate = (output) => {
            var newIndex = output.i,
                gapIndex = i + 1;

            // If our new index is only one more than the previous index, fire immedietly
            if (newIndex === i + 1) {
                callback(this.members[gapIndex], gapIndex);

            // Or loop through the distance to fire all indecies. Increase delay.
            } else {
                for (; gapIndex <= newIndex; gapIndex++) {
                    callback(this.members[gapIndex], gapIndex);
                }
            }

            i = newIndex;
        };

        this._stagger.start(new Tween(staggerProps));

        return this;
    }
}

module.exports = Iterator;