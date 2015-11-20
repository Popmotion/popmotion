const utils = require('../inc/utils');
const loop = require('./loop');

class Process {

    /*
        @param [function || object]
        @param [object] (optional)
        @param [boolean] (optional)
    */
    constructor(callback, scope, isPassive) {
        const numArgs = arguments.length;      

        // Set callback
        if (utils.isFunc(callback)) {
            this.render = callback;
        
        } else if (utils.isObj(callback)) {
            utils.each(callback, (key, value) => {
                this[key] = value;
            });
        }

        // Set scope
        this.scope = utils.isObj(scope) ? scope : this;
        this.isPassive = isPassive === true ? true : false;

        this.id = loop.getProcessId();
        this.isActive = false;
    }

    start() {
        this.activate();
        return this;
    }

    stop() {
        this.deactivate();
        return this;
    }

    activate() {
        this.isActive = true;
        loop.activate(this, this.id);
    }

    deactivate() {
        this.isActive = false;
        loop.deactivate(this, this.id);
    }
}

module.exports = Process;