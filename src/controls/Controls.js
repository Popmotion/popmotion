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
}

module.exports = Controls;