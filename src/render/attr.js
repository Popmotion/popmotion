export default ({ element, state }) => {
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            element.setAttribute(key, state[key]);
        }
    }
};