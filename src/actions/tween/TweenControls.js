var Controls = require('../../actor/Controls');

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
        this.action.elapsed = this.actor.duration * progress;

        if (!this.actor.isActive) {
            this.actor.process.fire();
        }
        return this;
    }
}

module.exports = TweenControls;