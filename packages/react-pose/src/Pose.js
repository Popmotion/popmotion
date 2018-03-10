import React from 'react';
import PoseElement, { PoseParentContext } from './PoseElement';
console.log(PoseParentContext)
const componentCache = {};

const createComponent = (elementType) => {
  const Component = (props) => (
    <PoseParentContext.Consumer>
      {parentCtx => (
        <PoseElement elementType={elementType} {...props} {...parentCtx} />
      )}
    </PoseParentContext.Consumer>
  );

  componentCache[elementType] = Component;

  return Component;
};

const getComponent = (element) => componentCache[element] || createComponent(element);

export default new Proxy({}, {
  get: (target, key) => getComponent(key)
});
