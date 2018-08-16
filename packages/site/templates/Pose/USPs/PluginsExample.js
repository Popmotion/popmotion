import Template from '~/templates/Popmotion/LiveExamples/Template';
import { AlignCenter } from '~/templates/Popmotion/LiveExamples/styled';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { color } from '~/styles/vars';
import trackVisibility from '~/templates/Popmotion/LiveExamples/track-visibility';
import SplitText from 'react-pose-text';

const code = `const charPoses = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 50
  }
};

({ isVisible }) => (
  <SplitText
    pose={isVisible ? 'visible' : 'hidden'}
    charPoses={charPoses}
  >
    React Pose Text
  </SplitText>
)`;

const charPoses = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    delay: ({ charIndex }) => charIndex * 50
  }
};

class Example extends React.Component {
  render() {
    return (
      <Container>
        <SplitText
          pose={this.props.isVisible ? 'visible' : 'hidden'}
          charPoses={charPoses}
        >
          React Pose Text
        </SplitText>
      </Container>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
));
