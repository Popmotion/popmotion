import React from 'react';
import { MotionGroupContext } from './MotionGroup';
import MotionElement, { MotionElementChildContext } from './MotionElement';

const componentCache = {};
const hasLifecycleEvents = ({ poseMap }) => (poseMap.appear || poseMap.enter || poseMap.leave);

const createComponent = (elementType) => {
  const Component = (props) => hasLifecycleEvents(props) ? (
    <MotionGroupContext.Consumer>
      {groupCtx => (
        <MotionElementChildContext.Consumer>
          {elementCtx => <MotionElement elementType={elementType} {...props} {...groupCtx} {...elementCtx} />}}
        </MotionElementChildContext.Consumer>
      )}
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
