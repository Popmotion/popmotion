"use strict";

var Process = require('../process/Process'),
    update = require('./update');

class Element {

    constructor(element) {
        this.element = element || false;

        this.values = {};
        this.output = {};
        this.queue = new Queue();

        this.process = new Process(update, this);
    }

    // [boolean]: Is this Element currently active?
    get isActive() {
        return this._isActive;
    }

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

}


        var isActive = (active !== undefined) ? active : this.active;
        
        if (active === true) {
            this.hasChanged = active;
        }

        this.active = isActive;

        return isActive;

module.exports = Element;