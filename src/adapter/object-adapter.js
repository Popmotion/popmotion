import createAdapter from './adapter';

export default createAdapter({
    getter: (object, key) => object[key],
    setter: (object, props) => {
        for (let key in props) {
            if (props.hasOwnProperty(key)) {
                object[key] = props[key];
            }
        }
    }
});