import Action from './Action';
import { speedPerFrame } from '../inc/calc';
import { each, currentTime } from '../inc/utils';

const TIME_CONSTANT = 395;

export default class Glide extends Action {
    start() {
        super.start();
        this.started = currentTime();
    }

    onUpdate(glide, frameStart, elapsed) {
        const timeUntilFinished = - currentTime() - this.started;

        each(this.values, (value) => {
            const delta = - value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
            value.velocity = (value.to + delta) - value.current;
            value.current += speedPerFrame(value.velocity, elapsed);
        });
    }
}
