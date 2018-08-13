import React from "react";
import styled from "styled-components";
import posed, { PoseGroup } from "../../packages/react-pose/lib";
import {
  easing,
  decay,
  tween,
  spring,
  physics,
  transform,
  value
} from "../../packages/popmotion/lib";
const { pipe, blendColor, conditional, clamp, interpolate } = transform;

const boxProps = {
  draggable: true,
  closed: { scaleX: 0 },
  open: { scaleX: 1 }
};

const Box = ({ className, children, hostRef }) => (
  <div className={className} ref={hostRef}>
    {children}
  </div>
);

const BoxStyled = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
  transform-origin: 0 0;
`;

const AnimatedBox = posed(BoxStyled)({
  enter: { opacity: 1, y: "0%" },
  exit: { opacity: 0, y: "30%" }
});

// const Box = styled(posed.div(boxProps))`
//   background-color: red;
//   width: 100px;
//   height: 100px;
//   transform-origin: 0 0;
// `;

export class ReactPose extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 1000);
  }

  render() {
    const { isOpen } = this.state;
    return (
      <PoseGroup animateOnMount>
        <AnimatedBox key="1" />
        <AnimatedBox key="2" />
      </PoseGroup>
    );
  }
}

const SpringBox = posed(BoxStyled)({
  spring: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 1000,
      velocity: 1000
    }
  }
});

export class PoseKey extends React.Component {
  state = { key: 0 };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          key: this.state.key + 1
        }),
      1000
    );
  }

  render() {
    return <SpringBox pose={["spring"]} poseKey={this.state.key} />;
  }
}

export class PoseKeyFail extends React.Component {
  state = { key: 0 };

  componentDidMount() {
    setInterval(
      () =>
        this.setState({
          key: this.state.key + 1
        }),
      1000
    );
  }

  render() {
    return <SpringBox pose={["spring"]} />;
  }
}

const sidebarProps = {
  dragBounds: { left: -100, right: 0 },
  open: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  closed: {
    delay: 500,
    x: "-100%"
  },
  enter: {
    x: "0%",
    delayChildren: 200,
    staggerChildren: 50
  },
  exit: {
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
  transform-origin: 0%;
  transform-style: flat;
  color: white;
`;

const SidePanel = styled(posed.div(sidebarProps))`
  ${sidepanelStyles};
`;

const itemProps = {
  enter: {
    delayChildren: 500,
    opacity: 1,
    scaleY: 1,
    transition: ({ from, to }) => tween({ from, to, duration: 400 })
  },
  open: {
    opacity: 1,
    y: 0
  },
  exit: {
    delay: 300,
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
    y: ({ i }) => 20 * i
  }
};

const ItemStyled = styled(posed.div(itemProps))`
  ${itemStyle};
`;

const Item = ItemStyled;

export class ReactPoseChildren extends React.PureComponent {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(() => this.setState({ isOpen: true }), 1000);
  }

  render() {
    const { isOpen } = this.state;

    return (
      <SidePanel pose={isOpen ? "open" : "closed"}>
        <Item i={0} />
        <Item i={1} />
        <Item i={2} />
        <Item i={3} />
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

const ItemChild = styled(
  posed.div({
    enter: { x: 0 },
    exit: { x: 100 }
  })
)`
  background: white;
  width: 40px;
  height: 40px;
`;

export class Group extends React.PureComponent {
  state = {
    isOpen: true,
    items: ["d", "c", "a"]
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ items: ["d", "c", "b", "a"] });

      setTimeout(() => {
        this.setState({ items: ["b", "c", "d"] });

        setTimeout(() => {
          this.setState({ items: ["e", "c", "b", "a"] });
        }, 3000);
      }, 3000);
    }, 3000);
  }

  render() {
    return (
      <SidePanel pose={this.state.isOpen ? "enter" : "exit"}>
        <PoseGroup>
          {this.state.items.map(key => (
            <Item key={key} style={{ backgroundColor: colorMap[key] }}>
              <ItemChild />
            </Item>
          ))}
        </PoseGroup>
      </SidePanel>
    );
  }
}

const Slidable = posed.div({
  draggable: "x",
  dragEnd: {
    transition: ({ from, to, velocity }) =>
      velocity === 0
        ? spring({ from, to: 0, velocity, stiffness: 750, damping: 50 })
        : spring({
            from,
            to: velocity < 0 ? -500 : 500,
            velocity,
            stiffness: 750,
            damping: 50
          })
  }
});

const Tick = posed.path({
  passive: {
    pathLength: ["x", clamp(0, 100), true]
  }
});

const xToProgress = pipe(
  interpolate([110, 20], [1, 0]),
  clamp(0, 1)
);

const IconContainer = posed.div({
  passive: {
    opacity: ["x", xToProgress, true],
    scale: ["x", xToProgress, true]
  }
});

const EmailContainer = posed.div({
  exit: { scaleY: 0, transition: tween },
  enter: { scaleY: 1, transition: tween },
  flip: {
    transition: tween
  }
});

const EmailContainerInner = posed.div({
  passive: {
    backgroundColor: ["x", v => (v >= 0 ? "#14D790" : "#fafafa"), true]
  }
});

class Email extends React.Component {
  x = value(0);
  hasDeleted = false;

  render() {
    const { subject, sender, removeEmail, id } = this.props;
    const valuesMap = { x: this.x };

    return (
      <EmailContainerInner className="email-container" parentValues={valuesMap}>
        <IconContainer className="icon accept" parentValues={valuesMap}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              strokeWidth="3"
              stroke="#fff"
              fill="none"
              transform="translate(1, 1.2)"
            >
              <Tick
                d="M6.173 16.252l5.722 4.228 9.22-12.69"
                parentValues={valuesMap}
              />
            </g>
          </svg>
        </IconContainer>
        <Slidable
          className="slidable"
          values={valuesMap}
          onChange={{
            x: v => {
              !!this.hasDeleted && v > 300 && removeEmail(id);
              this.hasDeleted = true;
            }
          }}
        >
          {subject}
        </Slidable>
      </EmailContainerInner>
    );
  }
}

const emailData = [
  { subject: "Test" },
  { subject: "Test" },
  { subject: "Test" },
  { subject: "Test" },
  { subject: "Test" }
];

export class EmailList extends React.Component {
  state = { emails: [0, 1, 2, 3, 4] };

  removeEmail = id => {
    const { emails } = this.state;
    const i = emails.indexOf(id);
    if (i === -1) return;
    emails.splice(i, 1);
    this.setState({ emails: [...emails] });
  };

  render() {
    const { emails } = this.state;

    return (
      <div className="container">
        <style>
          {`
          .container {
            width: 300px;
          }
          .visibility-container {
            transform-origin: 50% 0;
          }
          .email-container {
            height: 75px;
            background-color: #14D790;
            position: relative;
            overflow: hidden;
            transform-origin: 50% 0;
          }

          .slidable {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #eee;
            box-shadow: 0 1px 0 0 rgba(0,0,0,0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
          }

          .icon {
            width: 50px;
            height: 50px;
            position: absolute;
            top: calc(50% - 25px);
            left: 15px;
          }
          `}
        </style>
        <PoseGroup>
          {emails.map(id => (
            <EmailContainer className="visibility-container" key={id}>
              <Email
                id={id}
                {...emailData[id]}
                removeEmail={this.removeEmail}
              />
            </EmailContainer>
          ))}
        </PoseGroup>
      </div>
    );
  }
}

const UserPoseContainer = styled.div`
  height: 100vh;
  display: flex;
  width: 600px;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Square = props => {
  const { onDel, onFlip, hostRef, text, ...others } = props;
  return (
    <div ref={hostRef} {...others}>
      {text}
      {onFlip && <button onClick={onFlip}>Flip</button>}
      {onDel && <button onClick={onDel}>Del</button>}
    </div>
  );
};

const SquarePos = posed(Square)({
  enter: { scale: 1, rotateY: 0 },
  flipped: { rotateY: 180 },
  exit: { scale: 0 }
});

export class UserPoseInPoseGroup extends React.Component {
  state = { hovering: false, items: [], flipped_items: [] };

  addMore = () => {
    const item = { id: Math.random() };
    this.setState({ items: [...this.state.items, item] });
  };

  remove = i => {
    const newState = this.state.items.filter(item => item.id !== i.id);
    this.setState({ items: newState });
    console.log(newState);
  };

  flip = i => {
    if (this.state.flipped_items.includes(i)) {
      const newState = this.state.flipped_items.filter(
        item => item.id !== i.id
      );
      this.setState({ flipped_items: newState });
    } else {
      this.setState({ flipped_items: [...this.state.flipped_items, i] });
    }
  };

  render() {
    return (
      <UserPoseContainer>
        <Square
          key={`s`}
          onClick={this.addMore}
          style={{ background: "blue", width: 100, height: 100 }}
        />
        <PoseGroup>
          {this.state.items.map((i, index) => {
            const should_flip = this.state.flipped_items.includes(i);
            console.log(should_flip);
            return (
              <SquarePos
                key={`s-${i.id}`}
                text={i.id}
                style={{ background: "red", width: 100, height: 100 }}
                pose={should_flip ? "flipped" : "enter"}
                onDel={() => this.remove(i)}
                onFlip={() => this.flip(i)}
              />
            );
          })}
        </PoseGroup>
      </UserPoseContainer>
    );
  }
}

const Img = posed.img({
  dull: {
    filter: "grayscale(100%) brightness(100%)"
  },
  coloured: {
    filter: "grayscale(0%) brightness(100%)"
  }
});

export const Filter = () => (
  <Img
    initialPose="dull"
    pose="coloured"
    src="https://popmotion.io/static/images/dusk.jpg"
  />
);
