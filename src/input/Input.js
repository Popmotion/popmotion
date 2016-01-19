import { Process } from 'framesync';
import { isFunc } from 'ui-utils';

export default class Input extends Process {
    constructor(initialValues, poll) {
        super();
        this.state = {};
        this.offset = {};

        if (isFunc(poll)) {
            this.frameStart = () => this.latest(this.poll());
        }
    }

    /*
        Manually add latest values

        @param [object]
    */
    latest(props) {
        this.state = { ...this.state, props };
    }
}
