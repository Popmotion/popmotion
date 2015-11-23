const Actor = require('../actor/Actor');
const Tween = require('../actions/Tween');
const utils = require('../inc/utils');

const DEFAULT_STAGGER_EASE = 'linear';

function generateCallback(method, ...args) {
    let callback = method;

    if (utils.isString(method)) {
        callback = (member) => member[method](...args);
    } else if (!utils.isFunc(method)) {
        callback = (member) => member.start(method, ...args);
    }

    return callback;
}

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

    each(method, ...args) {
        const callback = generateCallback(method, ...args);
        this.members.forEach(callback);
        return this;
    }

    eachIntoNew(method, ...args) {
        const callback = generateCallback(method, ...args);
        const newIterator = new Iterator();

        this.members.forEach((member) => newIterator.add(callback(member)));

        return newIterator;
    }

    stagger(method, props, ...args) {
        const tempMembers = utils.copyArray(this.members);
        const numMembers = tempMembers.length;
        const propsIsInterval = utils.isNum(props);
        const interval = propsIsInterval ? props : props.interval || 100;
        const callback = generateCallback(method, ...args);

        let i = -1;
        let staggerProps = {};

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

        staggerProps.onUpdate = (output) => {
            const newIndex = output.i;
            let gapIndex = i + 1;

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
    reverse() {
        this.members.reverse();
        return this;
    }
}

module.exports = Iterator;