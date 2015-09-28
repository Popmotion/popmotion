var Controls = require('../../controls/Controls');

class TweenControls extends Controls {
    loop() {
        this.action.resetValues(this.actor);
        return this;
    }

    yoyo() {
        this.action.reverseValues(this.actor);
        return this;
    }

    flip() {
        this.action.flipValues(this.actor);
        return this;
    }

    seek(progress) {
        if (!this.actor.hasAction(this.id)) {
            this.start().pause();
        }

        this.action.elapsed = this.action.duration * progress;

        if (!this.action.isActive) {
            this.action.activate();
            this.actor.process.fire();
            this.action.deactivate();
        }

        return this;
    }
}

module.exports = TweenControls;