import Task from '../task/Task';
import { isFunc } from '../inc/utils';

export default class Input extends Task {
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
