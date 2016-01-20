import Action from '../actions/Action';

export default class Actor extends Action {
    constructor(...args) {
        super(...args);
        this.once();
    }

    willRender() {

    }

    render() {

    }
}
