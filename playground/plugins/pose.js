import React from "react";
import { Box } from "../inc";
import styled from "styled-components";
import pose from "../../packages/popmotion-pose/lib";
import {
  decay,
  tween,
  spring,
  physics,
  transform,
  value
} from "../../packages/popmotion/lib";
const { pipe, blendColor, conditional, clamp, interpolate } = transform;

const SidePanel = styled.div`
  width: 300px;
  height: 100vh;
  background: red;
  padding: 30px;
  display: flex;
  transform: translateX(-100%);
  flex-direction: column;

  > div {
    background: blue;
    height: 40px;
    width: 100%;
    opacity: 0;
    margin-bottom: 10px;
  }
`;

const sidebarProps = {
  initialPose: "close",
  draggable: "x",
  dragBounds: { left: -100, right: 0 },
  open: {
    x: "0%",
    delayChildren: 300,
    staggerChildren: 50
  },
  close: {
    delay: 500,
    x: "-100%"
  },
  passive: {
    backgroundColor: [
      "x",
      pipe(
        parseFloat,
        interpolate([-100, 0], [0, 1]),
        blendColor("#a00", "#f00")
      )
    ]
  }
};

const itemProps = {
  initialPose: ["close"],
  open: {
    opacity: 1,
    y: 0
  },
  close: {
    opacity: 0,
    y: 20
  }
};

export class PoseDOM extends React.Component {
  componentDidMount() {
    this.sidebarPoser = pose(this.sidebar, sidebarProps);
    this.items.forEach(item => this.sidebarPoser.addChild(item, itemProps));

    setTimeout(() => this.sidebarPoser.set("open"), 1000);
  }

  componentWillUnmount() {
    if (this.sidebarPoser) this.sidebarPoser.destroy();
  }

  items = [];

  setSidePanel = ref => {
    if (ref) this.sidebar = ref;
  };

  setItem = ref => {
    if (ref) this.items.push(ref);
  };

  close = () => this.sidebarPoser.set("close");

  render() {
    return (
      <SidePanel innerRef={this.setSidePanel} onClick={this.close}>
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
      </SidePanel>
    );
  }
}

const passiveModalItemProps = {
  passive: {
    opacity: [
      "x",
      transform.pipe(parseFloat, transform.interpolate([-100, 0], [0, 1])),
      true
    ]
  }
};

export class PoserPassive extends React.Component {
  componentDidMount() {
    this.sidebarPoser = pose(this.sidebar, sidebarProps);
    this.items.forEach(item =>
      this.sidebarPoser.addChild(item, passiveModalItemProps)
    );

    setTimeout(() => this.sidebarPoser.set("open"), 1000);
  }

  componentWillUnmount() {
    this.sidebarPoser.destroy();
  }

  items = [];

  setSidePanel = ref => {
    if (ref) this.sidebar = ref;
  };

  setItem = ref => {
    if (ref) this.items.push(ref);
  };

  close = () => this.sidebarPoser.set("close");

  render() {
    return (
      <SidePanel innerRef={this.setSidePanel} onClick={this.close}>
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
      </SidePanel>
    );
  }
}

export class PoserManualValues extends React.Component {
  componentDidMount() {
    const x = value("-100%");
    this.sidebarPoser = pose(this.sidebar, {
      ...sidebarProps,
      values: {
        x
      }
    });

    setTimeout(() => x.update("50%"), 3000);

    this.items.forEach(item =>
      this.sidebarPoser.addChild(item, passiveModalItemProps)
    );

    setTimeout(() => this.sidebarPoser.set("open"), 1000);
  }

  componentWillUnmount() {
    this.sidebarPoser.destroy();
  }

  items = [];

  setSidePanel = ref => {
    if (ref) this.sidebar = ref;
  };

  setItem = ref => {
    if (ref) this.items.push(ref);
  };

  close = () => this.sidebarPoser.set("close");

  render() {
    return (
      <SidePanel innerRef={this.setSidePanel} onClick={this.close}>
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
      </SidePanel>
    );
  }
}

const Modal = styled.div`
  background: grey;
  width: 300px;
  padding: 20px;

  > div {
    background: black;
    height: 40px;
    margin-bottom: 10px;
    opacity: 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const modalProps = {
  itemsOut: {
    staggerChildren: 50
  }
};
const modalItemProps = {
  initialPose: "itemsOut",
  itemsOut: {
    x: -50,
    opacity: 0
  },
  itemsIn: {
    x: 0,
    opacity: 1
  }
};

export class PoserFLIP extends React.Component {
  a = [0, 1, 2, 3];
  b = [4, 5, 6];

  state = {
    list: this.a
  };

  listRefs = new Set();

  setContainerRef = ref => {
    if (ref) {
      this.ref = ref;
    } else if (this.modalPoser) {
      this.modalPoser.destroy();
    }
  };

  setItemRef = ref => {
    if (ref) {
      this.listRefs.add(ref);
    } else if (this.modalPoser) {
      // remove
    }
  };

  componentDidMount() {
    this.modalPoser = pose(this.ref, modalProps);
    this.listRefs.forEach(el => this.modalPoser.addChild(el, modalItemProps));
    this.listRefs.clear();

    this.interval = setInterval(() => {
      this.modalPoser.set("itemsOut").then(() => {
        this.modalPoser.clearChildren();
        this.modalPoser.measure();
        this.setState({
          list: this.state.list === this.a ? this.b : this.a
        });
      });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    this.listRefs.forEach(el => this.modalPoser.addChild(el, modalItemProps));
    this.listRefs.clear();
    this.modalPoser.flip().then(() => this.modalPoser.set("itemsIn"));
  }

  render() {
    return (
      <Modal innerRef={this.setContainerRef}>
        {this.state.list.map(i => <div key={i} ref={this.setItemRef} />)}
      </Modal>
    );
  }
}

export class PoseDrag extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        draggable: true,
        onDragStart: console.log,
        onDragEnd: console.log
      });
    } else {
      this.poser.destroy();
    }
  };
  render() {
    return <Box innerRef={this.setRef} />;
  }
}
