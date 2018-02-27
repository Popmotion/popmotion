import React from 'react';
import { rangeTransformer, noop, just, getDragEndAnimation, getPositionAnimation } from './utils';
import { pointer, styler, listen, value, spring, composite } from '../../popmotion/lib';

// type Props = {
//   elementType,
//    surfaceTension,
//   // Drag props
//   dragTransform,
//   draggable,
//   onDragEnd,
//   onDrag,
//   onDragStart,
//   dragX,
//   dragY,
//   preserveDragMomentum,
// poseMap, pose,

//   // Animation props
//   styles,
//   range,

//   // MotionGroup methods

// };

export const MotionElementChildrenContext = React.createContext();

export default class MotionElement extends React.Component {
  static defaultProps = {
    dragTransform: noop,
    draggable: false,
    preserveDragMomentum: false,
    mass: 1
  };

  static getDerivedStateFromProps = ({ draggable }) => ({
    dragX: draggable === true || draggable === 'x',
    dragY: draggable === true || draggable === 'y'
  });

  values = {};

  children = new Set();
  childCtx = {
    addChild: (child) => this.children.add(child),
    removeChild: (child) => this.children.remove(child)
  };

  setRef = (ref) => {
    const { innerRef, values } = this.props;
    if (innerRef) innerRef(ref);

    if (!ref) return;
    
    this.ref = ref;
    this.styler = styler(ref);
    this.initValues(values);



    // this.x = xValue || value(pose.x || 0);
    // this.x.subscribe(this.styler.set('x'));
    // this.y = yValue || value(pose.y || 0);
    // this.y.subscribe(this.styler.set('y'));

    this.checkDraggable();
  };

  componentDidUpdate(prevProps) {
    const { pose } = this.props;
    this.checkDraggable();

    if (position !== prevProps) this.animateToPosition(pose, prevProps.pose);
  }

  componentWillUnmount() {
    if (this.positionAnimation) this.positionAnimation.stop();
  }

  initValues(values) {
    this.values = values;
    
  }

  getCurrentPose() {
    const { poseMap, pose } = this.props;
    return poseMap && poseMap[pose];
  }

  /**
   * Draggable methods
   * =============================================
  */
  checkDraggable() {
    const { draggable } = this.props;

    // If we're draggable and not already listening for pointer events
    if (draggable && !this.onDragStartListener) {
      this.onDragStartListener = listen(this.ref, 'mousedown touchstart')
        .start((e) => this.onDragStart(e));

    } else if (!draggable && this.onDragStartListener) {
      this.onDragStartListener.stop();
    }
  }

  onDragStart(e) {
    e.preventDefault();
    const { onDragStart, elasticity, range, dragTransform } = this.props;

    this.onDragEndListener = listen(document, 'mouseup touchend')
      .start(() => this.onDragEnd());

    if (onDragStart) onDragStart();
  
    this.startPositionAnimation(pointer({
      x: this.x.get(),
      y: this.y.get()
    }).pipe(
      dragTransform,
      range ? rangeTransformer(range, elasticity) : noop
    ));
  }

  onDragEnd() {
    const { dragX, dragY } = this.state;
    const { onDragEnd, range, preserveDragMomentum } = this.props;

    if (this.positionAnimation) this.positionAnimation.stop();
    if (this.onDragEndListener) this.onDragEndListener.stop();

    if (onDragEnd) onDragEnd();

    // Animate to a stop
    this.startPositionAnimation(composite({
      x: getDragEndAnimation(this.x, true/*dragX*/, range && range.left, range && range.right, preserveDragMomentum),
      y: getDragEndAnimation(this.y, true/*dragY*/, range && range.top, range && range.bottom, preserveDragMomentum)
    }));
  }

  onDrag(xy) {
    const { dragX, dragY } = this.state;
    const { onDrag } = this.props;

    if (onDrag) onDrag(xy);

    if (true) this.x.update(xy.x);
    if (true) this.y.update(xy.y);
    // if (dragX) this.x.update(xy.x);
    // if (dragY) this.y.update(xy.y);
  }

  /**
   * Animation methods
   * =============================================
  */
  animateToPosition(position) {
    const pose
    this.startPositionAnimation(getPositionAnimation(this.x, this.y, position, mass));
  }

  startPositionAnimation(animation) {
    if (this.positionAnimation) this.positionAnimation.stop();
    this.positionAnimation = animation.start(v => this.onDrag(v));
  }

  getDomProps({
    draggable,
    dragTransform,
    onDragEnd,
    onDragStart,
    onDrag,
    preserveDragMomentum,
    ...props
  }) {
    props.ref = this.setRef;
    return props;
  }

  render() {
    const { elementType, children, ...remaining } = this.props;

    return (
      <MotionElementChildrenContext.Provider value={this.childCtx}>
        {React.createElement(
          elementType,
          this.getDomProps(remaining),
          ...children
        )}
      </MotionElementChildrenContext.Provider>
    );
  }
}
