import React from 'react';
import { Box } from './inc';
import styler from 'stylefire';
import pointer from '../packages/popmotion/lib/input/pointer';
import multitouch from '../packages/popmotion/lib/input/multitouch';
import spring from '../packages/popmotion/lib/animations/spring';
import value from '../packages/popmotion/lib/reactions/value';
import { applyOffset } from '../packages/popmotion/lib/transformers';

export class Drag extends React.Component {
  setRef = (dom) => {
    if (!dom) dom;
    this.box = styler(dom);
  };

  startDrag = () => {
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
    this.drag = pointer()
      .pipe(({x}) => x, applyOffset(this.box.get('x')))
      .start((v) => this.box.set('x', v));
  };

  stopDrag = () => {
    if (this.drag) this.drag.stop();
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  };

  render() {
    return <Box onMouseDown={this.startDrag} onTouchStart={this.startDrag} innerRef={this.setRef} />
  }
}

export class DragWithDeltaPointer extends React.Component {
  setRef = (dom) => {
    if (!dom) dom;
    this.box = styler(dom);
    this.boxXY = value({ x: 0, y: 0 });
    this.boxXY.subscribe(this.box.set);
  };

  startDrag = () => {
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
    pointer(this.boxXY.get()).start(this.boxXY);
  };

  stopDrag = () => {
    spring({
      from: this.boxXY.get(),
      to: 0,
      velocity: this.boxXY.getVelocity(),
      stiffness: 100,
    }).start(this.boxXY)
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  };

  render() {
    return <Box onMouseDown={this.startDrag} onTouchStart={this.startDrag} innerRef={this.setRef} />
  }
}

export class Multitouch extends React.Component {
  componentDidMount() {
    document.addEventListener('touchstart', () => {
      multitouch()
        .while(({ touches }) => touches.length > 1)
        .start(console.log)
    });
  }

  render() {
    return null;
  }
}
