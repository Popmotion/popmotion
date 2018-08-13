import React from "react";
import posed, { PoseGroup } from "../../packages/react-pose/lib";
import SplitText from "../../packages/react-pose-text/lib";

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
