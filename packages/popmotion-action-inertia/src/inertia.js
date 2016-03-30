/*
    Kinetic scrolling ala http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
*/
import { Action, utils } from 'popmotion';

const currentTime = utils.currentTime;

class Inertia extends Action {
    start() {
        super.start();
        this.started = currentTime();
        this.targetEnd = this.started + 0;

        for (let i = 0; i < this.numValueKeys; i++) {
            const value = this.values[this.valueKeys[i]];

            if (value.to === undefined) {
                value.to = Math.round(value.current + (value.mass * value.velocity));
            }
        }
    }

    onUpdate() {
        const totalElapsed = currentTime() - this.started;

        this.ended = true;

        for (let i = 0; i < this.numValueKeys; i++) {
            const value = this.values[this.valueKeys[i]];
            const delta = - value.to * Math.exp(- totalElapsed / value.timeConstant);

            // If we're still far away from the target, continue
            if (delta > 0.1 || delta < -0.1) {
                this.ended = false;
                value.current = value.to + delta;

            // Otherwise snap to target
            } else {
                value.current = value.to;
            }
        }
    }

    onFrameEnd() {
        if (this.ended) {
            this.complete();
        }
    }
}

Inertia.prototype.defaultValueProp = 'velocity';
Inertia.prototype.defaultValue = Action.extendDefaultValue({
    timeConstant: 325,
    amp: 0.8
});

export default (props) => new Inertia(props);
