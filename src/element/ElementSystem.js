"use strict";

var Element = require('./Element'),
    generateMethodIterator = require('./system/generate-iterator'),
    actionManager = require('../actions/manager'),

    /*
        ElementSystem constructor

        @param [array]: Array of Elements, or valid Element subjects
    */
    ElementSystem = function (members, options) {
        this.members = [];
        this.add(members, options);
    };

ElementSystem.prototype = {

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
            i = -1;

        this._stagger = this._stagger || new Element();
        duration = duration || 250;
        ease = ease || 'linear';

        this._stagger.stop().play({
            values: {
                i: {
                    current: i,
                    to: numMembers - 1
                }
            },
            round: true,
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
        }, duration * numMembers, ease);

        return this;
    },

    /*
        Add a group of Elements to our System

        @param [array]: Array of Elements, or valid Element subjects
    */
    add: function (members, options) {
        var numNewMembers = members.length,
            i = 0,
            newMember;

        for (; i < numNewMembers; i++) {
            newMember = (members[i].prototype !== Element.prototype) ? new Element(members[i], options) : members[i];
            this.members.push(newMember);
        }

        return this;
    }
};

// Initialise Element System methods
(function () {
    for (var method in Element.prototype) {
        ElementSystem.prototype[method] = generateMethodIterator(method);
    }
})();

// Register Element with actionManager, so when a new Action is set,
// We get a new method on Element
actionManager.setElementSystem(ElementSystem);

module.exports = ElementSystem;