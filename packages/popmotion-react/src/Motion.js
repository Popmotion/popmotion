import React from 'react';
import { MotionGroupContext } from './MotionGroup';
import MotionElement from './MotionElement';

const componentCache = {};

const createComponent = (elementType) => {
  const Component = (props) => props.onLeave ? (
    <MotionGroupContext.Consumer>
      {ctx => <MotionElement elementType={elementType} {...props} {...ctx} />}
    </MotionGroupContext.Consumer>
  ) : (
    <MotionElement elementType={elementType} {...props} />
  );

  componentCache[elementType] = Component;

  return Component;
};

const getComponent = (element) => componentCache[element] || createComponent(element);

export default new Proxy({}, {
  get: (target, key) => getComponent(key)
});
