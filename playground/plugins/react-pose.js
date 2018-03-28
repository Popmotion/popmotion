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
              key={key}
              style={{ backgroundColor: colorMap[key] }}
            />
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

const xToProgress = pipe(interpolate([110, 20], [1, 0]), clamp(0, 1));

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
