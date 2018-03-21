import React from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "../../packages/react-pose/lib";
import { tween, spring, easing, transform } from "../../packages/popmotion/lib";
const { pipe, blendColor, interpolate } = transform;

const boxProps = {
  closed: { scaleX: 0 },
  open: { scaleX: 1 }
};

const Box = styled(posed.div(boxProps))`
  background-color: red;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
`;

export class ReactPose extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 1000);
  }

  render() {
    const { isOpen } = this.state;
    return <Box pose={isOpen ? "open" : "closed"} />;
  }
}

const sidebarProps = {
  initialPose: "close",
  dragBounds: { left: -100, right: 0 },
  open: {
    x: "0%",
    delayChildren: 300,
    staggerChildren: 50
  },
  closed: {
    delay: 500,
    x: "-100%"
  }
};

const sidepanelStyles = `
  width: 300px;
  height: 100vh;
  background: #eee;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const itemStyle = `
  background: #43415F;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  opacity: 0;
  margin-bottom: 10px;
  transform-origin-y: 0%;
  color: white;
`;

const SidePanel = styled(posed.div(sidebarProps))`
  ${sidepanelStyles};
`;

const itemProps = {
  enter: {
    opacity: 1,
    scaleY: 1,
    transition: ({ from, to }) => tween({ from, to, duration: 400 })
  },
  open: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transition: ({ from, to }) => tween({ from, to, duration: 400 })
  },
  flip: {
    transition: ({ from, to }) =>
      tween({ from, to, ease: easing.backOut, duration: 400 })
  },
  closed: {
    opacity: 0,
    y: 20
  }
};

const Item = styled(posed.div(itemProps))`
  ${itemStyle};
`;

export class ReactPoseChildren extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 1000);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <SidePanel pose={isOpen ? "open" : "closed"}>
        <Item />
        <Item />
        <Item />
        <Item />
      </SidePanel>
    );
  }
}

const SidePanelPlain = styled.div`
  ${sidepanelStyles};
`;

const colorMap = {
  a: "#F69A9A",
  b: "#EF4566",
  c: "#F9CDAE",
  d: "#C8C8A9",
  e: "#83AE9B",
  f: "black"
};

export class Group extends React.PureComponent {
  state = {
    isOpen: false,
    items: ["a", "b", "c", "d"]
  };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 1000);

    setTimeout(() => {
      this.setState({ items: ["d", "c", "b", "a"] });

      setTimeout(() => {
        this.setState({ items: ["b", "c", "d"] });

        setTimeout(() => {
          this.setState({ items: ["e", "c", "b", "a"] });
        }, 1000);
      }, 1000);
    }, 2000);
  }

  render() {
    return (
      <SidePanel pose={this.state.isOpen ? "open" : "closed"}>
        <PoseGroup>
          {this.state.items.map(key => (
            <Item
              withParent
              key={key}
              style={{ backgroundColor: colorMap[key] }}
            />
          ))}
        </PoseGroup>
      </SidePanel>
    );
  }
}
