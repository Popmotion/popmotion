import Action from '../actions/Action';

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
    }

    bind(action) {
        return action.inherit({
            onStart: () => {
                
            }
        });
    }

    start(action) {
        if (action) {
            const boundAction = this.bind(action);
            boundAction.start();

            return boundAction;
        }

        return super.start();
    }
}