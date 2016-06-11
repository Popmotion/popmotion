import createAdapter from './adapter';

export const getter = (element, key) => element.getAttribute(key);
export const setter = (element, props) => {
  for (let key in props) {
    if (props.hasOwnProperty(key)) {
      element.setAttribute(key, props[key]);
    }
  }
};

export default createAdapter({ getter, setter });
