import Action from '../actions/Action';
import { smooth } from '../inc/calc';
import { each, speedPerSecond } from '../inc/utils';

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
    }

    do(action) {
        if (this.reducer) {
            this.start(this.reducer(action, this.values));
        }
    }

    start(action) {
        super.start();
        
        if (action) {
            const actionInstance = action.inherit();

            // Assign action to appropriate values

            return actionInstance;
        }
    }
}