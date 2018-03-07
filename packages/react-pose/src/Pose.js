import React from 'react';
import PoseElement from './PoseElement';

const componentCache = {};

const createComponent = (elementType) => {
  const Component = (props) => <PoseElement elementType={elementType} {...props} />;

  componentCache[elementType] = Component;

  return Component;
};

const getComponent = (element) => componentCache[element] || createComponent(element);

export default new Proxy({}, {
  get: (target, key) => getComponent(key)
});
