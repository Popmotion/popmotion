const utils = require('../inc/utils');
const loop = require('./loop');

class Process {

    /*
        @param [function || object]
        @param [object] (optional)
    */
    constructor(callback, scope) {
        // Set callback
        if (utils.isFunc(callback)) {
            this.render = callback;
        
        } else if (utils.isObj(callback)) {
            utils.each(callback, (key, value) => {
                this[key] = value;
            });
        }

        this.scope = utils.isObj(scope) ? scope : this;

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

    once() {
        this.cleanup = () => {
            this.stop();
            this.cleanup = undefined;
        }

        return this.start();
    }

    setPassive(passive) {
        this.isPassive = passive;
    }
}

module.exports = Process;