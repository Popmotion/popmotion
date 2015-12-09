const each = require('../inc/utils').each;

class Controls {
    constructor(actor, action, hasStarted) {
        this.actor = actor;
        this.action = action;
        this.saveOrigins();

        if (hasStarted) {
            this.id = this.bindAction();
            this.action.activate();
        }
    }

    start(input) {
        this.id = this.bindAction();
        this.actor.start(this.id, input);
        this.action.activate();
        return this;
    }

    stop() {
        this.actor.unbindAction(this.id);
        this.action.deactivate();

        return this;
    }

    pause() {
        this.action.deactivate();
        return this;
    }

    resume() {
        this.action.activate();
        return this;
    }

    toggle() {
        let resume = this.actor.hasAction(this.id) ? this.resume : this.start;
        return this.action.isActive ? this.pause() : resume.call(this);
    }

    then(...args) {
        this.actor.then(...args);
        return this;
    }

    bindAction() {
        return this.actor.bindAction(this.action, this.id);
    }

    saveOrigins() {
        this.origins = {};

        each(this.action.values, (key, value) => {
            let actorValue = this.actor.values[key];

            this.origins[key] = actorValue.current;

            if (actorValue.children) {
                each(actorValue.children, (childKey, childValue) => {
                    this.origins[key + childKey] = this.actor.values[key + childKey].current;
                });
            }
        });
    }

    restoreOrigins() {
        each(this.origins, (key, value) => {
            this.actor.values[key].origin = value;
        });
    }
}

module.exports = Controls;