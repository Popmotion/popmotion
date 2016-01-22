import Action from '../actions/Action';

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
        const actionInstance = action.inherit();

        return actionInstance;
    }

    willRender() {

    }
}