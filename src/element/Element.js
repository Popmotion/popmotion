"use strict";

var Process = require('../process/Process'),
    update = require('./update'),

    Element = function (element) {
        this.element = element || false;

        this.values = {};
        this.output = {};
        this.queue = new Queue();

        this.process = new Process(this, update);
    };

Element.prototype = {

    // [boolean]: Is this Element currently active?
    get isActive() {
        return this._isActive;
    },

    /*
        Set Element active status

        If active is being set to true, set hasChanged to true, too

        @param [boolean]: New active status
    */
    set isActive(status) {
        if (status === true) {
            this.hasChanged = status;
        }

        this._isActive = status;
    }
};

module.exports = Element;