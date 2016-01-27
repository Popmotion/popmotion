import Action from '../actions/Action';

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
    }

    set(props, forceInstant) {
        super.set(props);

        if (this.reducer) {
            props = this.reducer(this);
        }
    }

    bind(action) {
        return action.inherit({
            preRender: (action) => {
                for (let i = 0; i < this.numValueKeys; i++) {
                    const key = this.valueKeys[i];
                    const value = this.values[key];

                    
                }
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