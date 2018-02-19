import React from 'react';
import { rangeTransformer, noop } from './utils';
import { pointer, styler, listen } from 'popmotion';

type Props = {
  elementType,

  // Drag props
  dragTransform,
  isDraggable,
  onDragEnd,
  onDrag,
  onDragStart,
  lockDragAxis,

  // Animation props
  styles,
  range,

  // MotionGroup methods

};

export default class MotionElement extends React.Component {
  static defaultProps = {
    dragTransform: noop
  };

  setRef = (ref) => {
    const { innerRef, xValue, yValue } = this.props;
    if (innerRef) innerRef(ref);

    if (!ref) return;
    
    this.ref = ref;
    this.styler = styler(ref);

    this.x = xValue || value(0);
    this.x.subscribe(this.styler.set('x'));
    this.y = yValue || value(0);
    this.y.subscribe(this.styler.set('y'));

    this.checkDraggable();
  };

  componentDidUpdate() {
    this.checkDraggable();
  }

  /**
   * Draggable methods
   * =============================================
  */
  checkDraggable() {
    const { isDraggable } = this.props;

    // If we're draggable and not already listening for pointer events
    if (isDraggable && !this.onDragStartListener) {
      this.onDragStartListener = listen(this.ref, 'mousedown touchstart').start(this.onDragStart);

    } else if (!isDraggable && this.onDragStartListener) {
      this.onDragStartListener.stop();
    }
  }

  onDragStart(e) {
    e.preventDefault();
    const { onDragStart, elasticity, range, dragTransform } = this.props;

    this.onDragEndListener = listen(document, 'mouseup touchend').start(this.onDragEnd);

    if (onDragStart) onDragStart();

    let draggingAction = pointer({
      x: this.x.get(),
      y: this.y.get()
    }).pipe(
      dragTransform,
      range ? rangeTransformer(range, elasticity) : noop
    ).start(this.onDrag);
  }

  onDragEnd() {
    const { onDragEnd } = this.props;

    if (this.draggingAction) this.draggingAction.stop();
    if (this.onDragEndListener) this.onDragEndListener.stop();

    if (onDragEnd) onDragEnd();
  }

  onDrag = (xy) => {
    const { onDrag } = this.props;

    if (onDrag) onDrag(xy);
  };

  /**
   * Animation methods
   * =============================================
  */

  getDomProps({
    isDraggable,
    dragTransform,
    lockDragAxis,
    onDragEnd,
    onDragStart,
    onDrag,
    ...props
  }) {
    return props;
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return React.createElement(
      elementType,
      this.getDomProps(remaining),
      ...children
    );
  }
}
