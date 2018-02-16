import React from 'react';
import { MotionGroupContext } from './MotionGroup';

const componentCache = {};

const createComponent = (key) => {
  const Component = class MotionElement extends React.Component {
    componentDidMount() {}
    
    setRef = (ref) => {
      const { innerRef } = this.props;
      if (innerRef) innerRef(ref);

      
    };

    render() {
      const { children, onLeave, ...remaining } = this.props;
      const element = React.createElement(
        key,
        { ...remaining, ref: this.setRef },
        ...children
      );

      return onLeave ? (
        <MotionGroupContext.Consumer>
          {(ctx) => element}
        </MotionGroupContext.Consumer>
      ) : element;
    }
  };

  componentCache[key] = Component;

  return Component;
};

const getComponent = (element) => componentCache[element] || createComponent(element);

export default new Proxy({}, {
  get: (target, key) => getComponent(key)
});
