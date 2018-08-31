import SplitText from 'react-pose-text';
import styled from 'styled-components';
import { ActionLink } from '~/templates/global-new/styled';
import { color, media } from '~/styles/vars';

const Container = styled.div`
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  ${media.medium`height: 180px;`} ${media.small`height: 140px;`};
`;

const HeaderText = styled.h2`
  margin-bottom: 30px;

  ${media.medium`margin-bottom: 15px`};

  div {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
    color: ${color.white};
    font-size: 24px;
    font-weight: 700;

    ${media.medium`
      font-size: 22px;`};
    ${media.small`
      font-size: 18px;`};
  }
`;

const charPoses = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 10
  }
};

export default () => (
  <Container>
    <HeaderText>
      <SplitText charPoses={charPoses} initialPose="hidden" pose="visible">
        A functional, flexible JavaScript animation library
      </SplitText>
    </HeaderText>
    <ActionLink white cta href="/pose/learn/get-started">
      Get started
    </ActionLink>
  </Container>
);
