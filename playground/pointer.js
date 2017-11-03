import React from 'react';
import { Box } from './inc';
import styler from 'stylefire';
import pointer from '../packages/popmotion/lib/input/pointer';
import pointerDelta from '../packages/popmotion/lib/input/pointer/delta';
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
  };

  startDrag = () => {
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
    this.drag = pointerDelta({
      x: this.box.get('x'),
      y: this.box.get('y')
    }).start(this.box.set);
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
