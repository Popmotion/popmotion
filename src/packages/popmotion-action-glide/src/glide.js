/*
    Kinetic scrolling ala http://ariya.ofilabs.com/2013/11/javascript-kinetic-scrolling-part-2.html
*/
import { Action, utils, calc } from 'popmotion';

const speedPerFrame = calc.speedPerFrame;
const currentTime = utils.currentTime;

class Glide extends Action {
    start() {
        super.start();
        this.started = currentTime();

        for (let i = 0; i < this.numValueKeys; i++) {
            const value = this.values[this.valueKeys[i]];

            if (value.to === undefined) {
                value.to = Math.round(value.current + (0.8 * value.velocity));
            }
        }
    }

    onUpdate(glide, frameStart, elapsed) {
        const timeUntilFinished = - currentTime() - this.started;

        for (let i = 0; i < this.numValueKeys; i++) {
            const value = this.values[this.valueKeys[i]];
            const delta = - value.to * Math.exp(timeUntilFinished / value.timeConstant);
            value.velocity = (value.to + delta) - value.current;
            value.current += speedPerFrame(value.velocity, elapsed);
        }
    }

    /*
        # Get default Action value properties

        @return [object]
    */
    getDefaultValue() {
        return {
            ...super.getDefaultValue(),
            timeConstant: 395
        };
    }

    getDefaultValueProp() {
        return 'velocity';
    }
}

