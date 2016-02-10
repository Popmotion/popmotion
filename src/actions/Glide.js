import Action from './Action';
import { speedPerFrame } from '../inc/calc';
import { currentTime } from '../inc/utils';

const TIME_CONSTANT = 395;

export default class Glide extends Action {
    start() {
        super.start();
        this.started = currentTime();
    }

    onUpdate(glide, frameStart, elapsed) {
        const timeUntilFinished = - currentTime() - this.started;

        for (let key in this.values) {
            if (this.values.hasOwnProperty(key)) {
                const value = this.values[key];
                const delta = - value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
                value.velocity = (value.to + delta) - value.current;
                value.current += speedPerFrame(value.velocity, elapsed);
            }
        }
    }
}
