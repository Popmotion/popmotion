import React from "react";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";

const delay = ({ charIndex }) => charIndex * 50;

const charPoses = {
  in: { color: "#000" },
  out: {
    color: "#f00",
    delay
  }
};

export class AnimateText extends React.Component {
  render() {
    return (
      <SplitText initialPose="in" pose="out" charPoses={charPoses}>
        Hello world!
      </SplitText>
    );
  }
}

const charPosesGroup = {
  enter: { opacity: 1, y: 0, delay },
  exit: { opacity: 0, y: 10, delay }
};

export class TextPoseGroup extends React.Component {
  state = { text: "Hello world!" };

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          text: "world hello!"
        }),
      2000
    );
  }
  render() {
    return (
      <PoseGroup animateOnMount>
        <SplitText charPoses={charPosesGroup}>{this.state.text}</SplitText>
      </PoseGroup>
    );
  }
}

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

export class ExternalPoser extends React.Component {
  render() {
    return (
      <Container initialPose="exit" pose="enter">
        <SplitText charPoses={charPosesGroup}>Hello world!</SplitText>
      </Container>
    );
  }
}

const viaPoseCharProps = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 30
  }
};

export class ViaPoseProp extends React.Component {
  state = { hover: false };
  render() {
    return (
      <SplitText
        initialPose="exit"
        charPoses={viaPoseCharProps}
        pose={this.state.hover ? "exit" : "enter"}
      >
        React Pose Text
      </SplitText>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ hover: !this.state.hover });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
