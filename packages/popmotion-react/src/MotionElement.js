import React from 'react';
import { rangeTransformer, noop, just, getDragEndAnimation } from './utils';
import { pointer, styler, listen, value, spring, composite } from '../../popmotion/lib';

// type Props = {
//   elementType,

//   // Drag props
//   dragTransform,
//   isDraggable,
//   onDragEnd,
//   onDrag,
//   onDragStart,
//   dragX,
//   dragY,

//   // Animation props
//   styles,
//   range,

//   // MotionGroup methods

// };

export default class MotionElement extends React.Component {
  static defaultProps = {
    dragTransform: noop
  };

  static getDerivedStateFromProps({ isDraggable }) {
    console.log('runs')
    return {
      dragX: isDraggable === true || isDraggable === 'x',
      dragY: isDraggable === true || isDraggable === 'y'
    };
  }

  state = {};

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
    if (this.ref) this.checkDraggable();
  }

  /**
   * Draggable methods
   * =============================================
  */
  checkDraggable() {
    const { isDraggable } = this.props;

    // If we're draggable and not already listening for pointer events
    if (isDraggable && !this.onDragStartListener) {
      this.onDragStartListener = listen(this.ref, 'mousedown touchstart').start((e) => this.onDragStart(e));

    } else if (!isDraggable && this.onDragStartListener) {
      this.onDragStartListener.stop();
    }
  }

  onDragStart(e) {
    e.preventDefault();
    const { onDragStart, elasticity, range, dragTransform } = this.props;

    this.onDragEndListener = listen(document, 'mouseup touchend').start(() => this.onDragEnd());

    if (onDragStart) onDragStart();

    this.positionAnimation = pointer({
      x: this.x.get(),
      y: this.y.get()
    }).pipe(
      dragTransform,
      range ? rangeTransformer(range, elasticity) : noop
    ).start(v => this.onDrag(v));
  }

  onDragEnd() {
    const { onDragEnd, range } = this.props;

    if (this.positionAnimation) this.positionAnimation.stop();
    if (this.onDragEndListener) this.onDragEndListener.stop();

    if (onDragEnd) onDragEnd();

    // Animate to a stop
    this.positionAnimation = composite({
      x: getDragEndAnimation(this.x, range.left, range.right),
      y: getDragEndAnimation(this.y, range.top, range.bottom)
    }).start(v => this.onDrag(v));
  }

  onDrag(xy) {
    const { dragX, dragY } = this.state;
    const { onDrag } = this.props;

    if (onDrag) onDrag(xy);

    if (dragX) this.x.update(xy.x);
    if (dragY) this.y.update(xy.y);
  }

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
    props.ref = this.setRef;
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
