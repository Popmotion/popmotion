"use strict";

var Actor = require('./Actor'),
    generateMethodIterator = require('./system/generate-iterator'),
    utils = require('../inc/utils'),
    DEFAULT_STAGGER_EASE = 'linear',

/*
    ActorCollection constructor
     @param [array]: Array of Actors, or valid Actor elements
*/
ActorCollection = function ActorCollection(elements, opts) {
    // Add initial elements
    this.clear();

    if (elements) {
        this.add(elements, opts);
    }

    // Create stagger Actor
    this._stagger = new Actor();
};

ActorCollection.prototype = {

    /*
        Clear current Actors
    */
    clear: function clear() {
        this.elements = [];
        return this;
    },

    /*
        Stagger the execution of Element methods
         @param [number || object]: Interval between Elements or stagger options
        @param [string || function]: Name of method to execute or a callback
        @args ... (optional): Optional arguments to send to callback
    */
    stagger: function stagger(props, method) {
        var self = this,
            args = [].slice.call(arguments),
            numElements = this.elements.length,
            propsIsNum = utils.isNum(props),
            interval = propsIsNum ? props : props.interval,
            staggerProps = propsIsNum ? {} : props,
            i = -1,
            callback = utils.isString(method) ? function (actor) {
            actor[method].apply(actor, args);
        } : method;

        args.splice(0, 2);

        staggerProps.values = {
            i: {
                current: 0,
                duration: interval * numElements,
                ease: propsIsNum ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                round: true,
                to: numElements - 1
            }
        };

        staggerProps.onUpdate = function (output) {
            var newIndex = output.i,
                gapIndex = i + 1;

            // If our new index is only one more than the previous index, fire immedietly
            if (newIndex === i + 1) {
                callback(self.elements[gapIndex], gapIndex);

                // Or loop through the distance to fire all indecies. Increase delay.
            } else {
                    for (; gapIndex <= newIndex; gapIndex++) {
                        callback(self.elements[gapIndex], gapIndex);
                    }
                }

            i = newIndex;
        };

        this._stagger.play(staggerProps);

        return this;
    },

    /*
        Iterate over each element in collection
         @param [function]: Callback to run on each Actor, provided (actor, index) args
    */
    each: function each(callback) {
        this.elements.forEach(callback);
        return this;
    },

    /*
        Add a group of Actors to our Collection
         @param [array]: Array of Actors, or valid Actor elements
    */
    add: function add(elements, opts) {
        var numNewElements = elements.length,
            i = 0,
            newElement;

        opts = opts || {};

        for (; i < numNewElements; i++) {
            opts.element = elements[i];
            newElement = elements[i] instanceof Actor ? elements[i] : new Actor(opts);
            this.elements.push(newElement);
        }

        return this;
    }
};

// Initialise ActorCollection methods
(function () {
    utils.each(Actor.prototype, function (name) {
        ActorCollection.prototype[name] = generateMethodIterator(name);
    });
})();

module.exports = ActorCollection;