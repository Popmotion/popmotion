import React from 'react';
import { rangeTransformer, noop } from './utils';
import { pointer, styler, listen, value, spring } from '../../popmotion/lib';

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
    dragTransform: noop,
    density: 1
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

    this.draggingAction = pointer({
      x: this.x.get(),
      y: this.y.get()
    }).pipe(
      dragTransform,
      range ? rangeTransformer(range, elasticity) : noop
    ).start(v => this.onDrag(v));
  }

  onDragEnd() {
    const { elasticity, onDragEnd } = this.props;

    if (this.draggingAction) this.draggingAction.stop();
    if (this.onDragEndListener) this.onDragEndListener.stop();

    if (elasticity) this.springToClosestBoundary();

    if (onDragEnd) onDragEnd();
  }

  onDrag(xy) {
    const { onDrag, isDraggable } = this.props;

    if (onDrag) onDrag(xy);

    if (isDraggable === true || isDraggable === 'x') this.x.update(xy.x);
    if (isDraggable === true || isDraggable === 'y') this.y.update(xy.y);
  }

  springToClosestBoundary() {
    const radius = this.ref.getBoundingClientRect().width / 2;
    const area = Math.PI * radius * radius;
    console.log(area * this.props.density / 10000)
    spring({
      from: { x: this.x.get(), y: this.y.get() },
      to: 0,
      mass: area * this.props.density / 10000
    }).start(v => this.onDrag(v));
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
