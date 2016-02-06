import Process from '../process/Process';
import { isFunc } from '../inc/utils';

export default class Input extends Process {
    constructor(initialValues, poll) {
        super();
        this.state = initialValues;

        if (isFunc(poll)) {
            this.onFrameStart = () => this.latest(this.poll());
        }
    }

    /*
        Manually add latest values

        @param [object]
    */
    latest(props) {
        this.state = { ...this.state, ...props };
    }
}
