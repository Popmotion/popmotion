import React from "react";
import { Box } from "./inc";
import styler from "stylefire";
import {
  pointer,
  multitouch,
  spring,
  value,
  transform
} from "../packages/popmotion/lib";
const { applyOffset } = transform;

export class Drag extends React.Component {
  setRef = dom => {
    if (!dom) return;
    this.box = styler(dom);
  };

  startDrag = () => {
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
    this.drag = pointer()
      .pipe(
        ({ x }) => x,
        applyOffset(this.box.get("x"))
      )
      .start(v => this.box.set("x", v));
  };

  stopDrag = () => {
    if (this.drag) this.drag.stop();
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  };

  render() {
    return (
      <Box
        onMouseDown={this.startDrag}
        onTouchStart={this.startDrag}
        innerRef={this.setRef}
      />
    );
  }
}

export class DragWithDeltaPointer extends React.Component {
  setRef = dom => {
    if (!dom) return;
    this.box = styler(dom);
    this.boxXY = value({ x: 0, y: 0 });
    this.boxXY.subscribe(this.box.set);
  };

  startDrag = e => {
    e.preventDefault();
    document.addEventListener("mouseup", this.stopDrag);
    document.addEventListener("touchend", this.stopDrag);
    pointer(this.boxXY.get()).start(this.boxXY);
  };

  stopDrag = () => {
    spring({
      from: this.boxXY.get(),
      to: 0,
      velocity: this.boxXY.getVelocity(),
      stiffness: 100
    }).start(this.boxXY);
    document.removeEventListener("mouseup", this.stopDrag);
    document.removeEventListener("touchend", this.stopDrag);
  };

  render() {
    return (
      <Box
        onMouseDown={this.startDrag}
        onTouchStart={this.startDrag}
        innerRef={this.setRef}
      />
    );
  }
}

export class Multitouch extends React.Component {
  setRef = dom => {
    if (!dom) return;
    this.box = styler(dom);
    this.boxRotate = value(0, this.box.set("rotate"));
  };

  startRotate = () => {
    multitouch({
      rotate: this.boxRotate.get()
    })
      .while(({ touches }) => touches.length === 2)
      .pipe(({ rotate }) => rotate)
      .start(this.boxRotate);
  };

  componentDidMount() {
    document.addEventListener("touchstart", this.startRotate);
  }

  componentWillUnmount() {
    if (this.boxRotate) this.boxRotate.stop();
    document.removeEventListener("touchstart", this.startRotate);
  }

  render() {
    return <Box innerRef={this.setRef} />;
  }
}
