import adapter from './adapter';

export function getter(key) {
    return this.element.getAttribute(key);
}

export function setter(props) {
    for (let key in props) {
        if (props.hasOwnProperty(key)) {
            this.element.setAttribute(key, props[key]);
        }
    }
}

export default (element) => {
    const attrAdapter = adapter(element);
    attrAdapter.getter = getter;
    attrAdapter.setter = setter;

    return attrAdapter;
};
