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


const menu = new Actor({
    render: Render.CSS,
    element: document.getElementById('test'),
    values: {
        scaleY: 1
    }
});

const closeMenu = new Tween({
    duration: 400,
    ease: Easing.easeOut,
    values: {
        scaleY: 0
    }
});

