import React from 'react';
import { MotionGroupContext } from './MotionGroup';
import { styler } from 'popmotion';

type Props = {
  isDraggable: boolean | string,
  onDragStart: Function,
  onDragEnd: Function,
  dragTransform: Function
};

const componentCache = {};

const createComponent = (key) => {
  const Component = class MotionElement extends React.Component {
    setRef = (ref) => {
      const { innerRef } = this.props;
      if (innerRef) innerRef(ref);

      if (!ref) return;
      
      this.styler = styler(ref);
    };

    onDragStart(e) {
      e.preventDefault();
      const { onDragStart, dragRange, elasticity } = this.props;

      if (onDragStart) onDragStart();

      this.draggingAction = applyRange(pointer({
        x: this.styler.get('x'),
        y: this.styler.get('y')
      }), dragRange, elasticity).start(this.styler.set);
    }

    onDragEnd() {
      if (this.draggingAction) this.draggingAction.stop();
    }

    getDomProps({ isDraggable, ...props }) {
      if (isDraggable) {
        // Actually replace this shit with dom event listeners too, fuck React events
        props.onMouseDown = props.onTouchStart = this.onDragStart;
        
        // Replace with dom document event listeners
        // props.onMouseUp = props.onTouchEnd = this.onDragEnd;
      }

      return props;
    }

    render() {
      const { children, onLeave, ...remaining } = this.props;
      const element = React.createElement(
        key,
        this.getDomProps(remaining),
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
