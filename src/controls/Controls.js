class Controls {
    constructor(actor, action, hasStarted) {
        this.actor = actor;
        this.action = action;

        if (hasStarted) {
            this.id = this.bindAction();
            this.action.activate();
        }
    }

    start(input) {
        this.id = this.bindAction();
        this.actor.startBound(this.id, input);
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
        if (this.action.isActive) {
            this.action.deactivate();
        } else {
            this.action.activate();
        }
        return this;
    }

    then(...args) {
        this.actor.then(...args);
        return this;
    }

    bindAction() {
        return this.actor.bindAction(this.action, this.id);
    }
}

module.exports = Controls;