"use strict";

var Actor = require('./Actor'),
    generateMethodIterator = require('./system/generate-iterator'),
    actionManager = require('../actions/manager'),

    /*
        ElementSystem constructor

        @param [array]: Array of Elements, or valid Element subjects
    */
    ActorCollection = function (members, options) {
        this.members = [];
        this.add(members, options);
    };

ActorCollection.prototype = {

    /*
        Stagger the execution of Element methods

        @param [string]: Name of method to execute
        @param [number] (optional): Duration between Elements
        @param [object] (optional): Properties to pass to method
        @param [string] (optional): Ease over stagger
    */
    stagger: function (method, duration, props, ease) {
        var self = this,
            numMembers = this.members.length,
            i = -1,
            targetIndex = numMembers - 1;

        this._stagger = this._stagger || new Actor();
        duration = duration || 250;
        ease = ease || 'linear';

        this._stagger.play({
            values: {
                i: {
                    current: 0,
                    to: targetIndex
                }
            },
            duration: 1000,
            ease: ease,
            round: true,
            steps: numMembers,
            onChange: function (output) {
                var newIndex = output.i;

                // If our new index is only one more than the last
                if (newIndex === i + 1) {
                    self.members[newIndex][method](props);

                // Or it's more than one more than the last, so fire all indecies
                } else {
                    for (var index = i + 1; index <= newIndex; index++) {
                        self.members[index][method](props);
                    }
                }

                i = newIndex;
            }
        });

        return this;
    },

    /*
        Add a group of Actors to our System

        @param [array]: Array of Actors, or valid Actor subjects
    */
    add: function (members, options) {
        var numNewMembers = members.length,
            i = 0,
            newMember;

        for (; i < numNewMembers; i++) {
            newMember = (members[i].prototype !== Actor.prototype) ? new Actor(members[i], options) : members[i];
            this.members.push(newMember);
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