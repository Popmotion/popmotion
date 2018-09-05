import React from "react";
import { Box } from "../inc";
import styled from "styled-components";
import pose from "popmotion-pose";
import { decay, tween, spring, physics, transform, value } from "popmotion";
const { pipe, blendColor, conditional, clamp, interpolate } = transform;

const SidePanel = styled.div`
  width: 300px;
  height: 100vh;
  background: #eee;
  padding: 30px;
  display: flex;
  transform: translateX(-100%);
  flex-direction: column;

  > div {
    background: #43415f;
    height: 40px;
    width: 100%;
    opacity: 0;
    margin-bottom: 10px;
  }
`;

const sidebarProps = {
  label: "sidebar",
  initialPose: "close",
  draggable: "x",
  dragBounds: { left: -100, right: 0 },
  open: {
    x: "0%",
    beforeChildren: true,
    staggerChildren: 50,
    transition: { duration: 3000, ease: "easeIn" }
  },
  close: {
    afterChildren: true,
    x: "-100%"
  }
  // passive: {
  //   backgroundColor: [
  //     "x",
  //     pipe(
  //       parseFloat,
  //       interpolate([-100, 0], [0, 1]),
  //       blendColor("#a00", "#f00")
  //     )
  //   ]
  // }
};

const itemProps = {
  initialPose: "close",
  open: {
    opacity: 1,
    x: 0
  },
  close: {
    opacity: 0,
    x: ({ i }) => {
      return Math.sin(i * Math.PI * 0.5) * 75;
    },
    transition: tween
  }
};

export class PoseDOM extends React.Component {
  componentDidMount() {
    this.sidebarPoser = pose(this.sidebar, sidebarProps);
    this.items.forEach((item, i) => {
      const poser = this.sidebarPoser.addChild(item, {
        ...itemProps,
        props: { i }
      });
    });

    setTimeout(
      () => this.sidebarPoser.set("open").then(() => console.log("finished")),
      1000
    );
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
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
        <div ref={this.setItem} />
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
      transform.pipe(
        parseFloat,
        transform.interpolate([-100, 0], [0, 1])
      ),
      "sidebar"
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
  },
  flip: {
    transition: { type: "tween" }
    //transition: props => tween({ ...props, duration: 3000 })
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

  componentWillUpdate() {
    this.modalPoser.measure();
  }

  componentDidUpdate() {
    this.listRefs.forEach(el => this.modalPoser.addChild(el, modalItemProps));
    this.listRefs.clear();
    this.modalPoser.flip().then(() => this.modalPoser.set("itemsIn"));
  }

  render() {
    return (
      <Modal innerRef={this.setContainerRef}>
        {this.state.list.map(i => (
          <div key={i} ref={this.setItemRef} />
        ))}
      </Modal>
    );
  }
}

export class PoseOpacity extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        visible: {
          backgroundImage:
            "radial-gradient(circle at 50%, #333, #333 50%, #eee 75%, #333 75%)"
        },
        hidden: {
          backgroundImage:
            "radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%)"
        },
        initialPose: "hidden"
      });
      this.poser.set("visible");
    } else {
      this.poser.destroy();
    }
  };

  componentDidMount() {}

  render() {
    return (
      <Box
        style={{ opacity: 0.4, backgroundColor: "#00f" }}
        innerRef={this.setRef}
      />
    );
  }
}

export class Auto extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        init: {
          x: 10
        },
        auto: {
          x: 20
        }
      });
      let isAuto = false;
      this.interval = setInterval(() => {
        this.poser.set(isAuto ? "init" : "auto");
        isAuto = !isAuto;
      }, 2000);
    } else {
      clearInterval(this.interval);
      this.poser.destroy();
    }
  };

  render() {
    return <Box style={{ position: "relative" }} innerRef={this.setRef} />;
  }
}

export class PoseDrag extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        draggable: "x",
        dragBounds: { left: 0, right: 200 },
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

export class PoseHover extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        hoverable: true,
        draggable: true,
        init: { scale: 1 },
        hover: { scale: 1.1 },
        drag: { scale: 1.4 }
      });
    } else {
      this.poser.destroy();
    }
  };

  render() {
    return <Box innerRef={this.setRef} />;
  }
}

export class PoseClick extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        pressable: true,
        init: { scale: 1 },
        press: { scale: 1.1 }
      });
    } else {
      this.poser.destroy();
    }
  };

  render() {
    return <button onClick={() => console.log("test")} ref={this.setRef} />;
  }
}

export class PoseFocus extends React.PureComponent {
  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        focusable: true,
        init: { scale: 1 },
        focus: { scale: 1.1 }
      });
    } else {
      this.poser.destroy();
    }
  };

  render() {
    return <input type="text" ref={this.setRef} />;
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export class PoseFullScreenFlip extends React.PureComponent {
  isOpen = true;

  setRef = ref => {
    if (ref) {
      this.poser = pose(ref, {
        fullscreen: {
          width: () => "100%",
          height: () => "100%",
          flip: true,
          transition: tween
        },
        thumbnail: {
          width: () => 100,
          height: () => 100,
          flip: true,
          transition: tween
        },
        initialPose: "fullscreen"
      });
      this.poser.setProps({ bar: false });
      this.poser.setProps({ foo: true });
    } else {
      this.poser.destroy();
    }
  };

  toggle = () => {
    this.poser.set(this.isOpen ? "thumbnail" : "fullscreen");
    this.isOpen = !this.isOpen;
  };

  render() {
    return (
      <Container>
        <Box innerRef={this.setRef} onClick={this.toggle} />
      </Container>
    );
  }
}

export class UnitTypeError extends React.Component {
  setRef = ref => {
    this.ref = ref;
  };

  componentDidMount() {
    const poser = pose(this.ref, {
      a: { height: 0 },
      b: { height: "100" },
      initialPose: "a"
    });

    try {
      poser.set("b");
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <Box innerRef={this.setRef} />;
  }
}

// pose(container, {
//   label: 'container',
//   hover: true,
//   hoverIn: {
//     'x y': ({ dimensions }) => {
//       const { width, height, left, top } = dimensions.measure()
//       return pointer({
//         x: width / 2 + left,
//         y: height / 2 + top
//       })
//     }
//   },
//   silent: ['x', 'y']
// });

// pose(box, {
//   hoverIn: { x: 100, scale: 1.2 },
//   hoverOut: { x: 0, scale: 1 },
//   passive: {
//     rotateY: ['x', x => (x * CO_EFFICIENT.x).toFixed(2) + 'deg', true],
//     rotateX: ['y', (y * CO_EFFICIENT.y).toFixed(2) + 'deg', true]
//   }
// })

// pose(glare, {
//   passive: {
//     opacity: ['y', v => v / height * 1, 'container'],
//     rotate: ['x y', ({ x, y }) => angle({ x: 0, y: 0 }, {x, y}) + 90, 'container']
//   }
// })
