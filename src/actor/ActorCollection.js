"use strict";

var Actor = require('./Actor'),
    generateMethodIterator = require('./system/generate-iterator'),
    utils = require('../inc/utils'),
    actionManager = require('../actions/manager'),

    DEFAULT_STAGGER_EASE = 'linear',

    /*
        ActorCollection constructor

        @param [array]: Array of Actors, or valid Actor elements
    */
    ActorCollection = function (elements) {
        // Add initial elements
        this.clear();

        if (elements) {
            this.add(elements);
        }

        // Create stagger Actor
        this._stagger = new Actor();
    };

ActorCollection.prototype = {

    /*
        Clear current Actors
    */
    clear: function () {
        this.elements = [];
        return this;
    },

    /*
        Stagger the execution of Element methods

        @param [number || object]: Interval between Elements or stagger options
        @param [string || function]: Name of method to execute or a callback
        @args ... (optional): Optional arguments to send to callback
    */
    stagger: function (props, method) {
        var self = this,
            args = [].slice.call(arguments),
            numElements = this.elements.length,
            propsIsNum = utils.isNum(props),
            interval = propsIsNum ? props : props.interval,
            staggerProps = propsIsNum ? {} : props,
            i = -1,

            callback = utils.isString(method) ?
                function (actor) {
                    actor[method].apply(actor, args);
                } : method;

        args.splice(0, 2);

        staggerProps.values = {
            i: {
                current: 0,
                duration: interval * numElements,
                ease: propsIsNum ? DEFAULT_STAGGER_EASE : props.ease || DEFAULT_STAGGER_EASE,
                steps: numElements,
                round: true,
                to: numElements - 1
            }
        };

        staggerProps.onChange = function (output) {
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
        Add a group of Actors to our Collection

        @param [array]: Array of Actors, or valid Actor elements
    */
    add: function (elements) {
        var numNewElements = elements.length,
            i = 0,
            newElement;

        for (; i < numNewElements; i++) {
            newElement = (elements[i] instanceof Actor) ? elements[i] : new Actor({ element: elements[i] });
            this.elements.push(newElement);
        }

        return this;
    }
};

// Initialise ActorCollection methods
(function () {
    for (var method in Actor.prototype) {
        if (Actor.prototype.hasOwnProperty(method)) {
            ActorCollection.prototype[method] = generateMethodIterator(method);
        }
    }
})();

actionManager.setActorCollection(ActorCollection);

module.exports = ActorCollection;