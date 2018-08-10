import React from "react";
import posed from "react-pose";
import SplitText from "../../packages/react-pose-text/lib";

const charPoses = {
  in: { opacity: 0 },
  out: {
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 50
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
