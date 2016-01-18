import Action from './Action';
import { currentTime } from 'ui-utils';

const TIME_CONSTANT = 395;

export default class Glide extends Action {
    start() {
        super.start();
        this.started = currentTime();
    }

    update(glide, frameStart, elapsed) {
        const timeUntilFinished = - currentTime() - this.started;

        each(this.values, (value, key) => {
            const delta = - value.to * Math.exp(timeUntilFinished / TIME_CONSTANT);
            value.velocity = (value.to + delta) - value.current;
            value.current += calc.speedPerFrame(value.velocity, elapsed);
        });
    }
}
