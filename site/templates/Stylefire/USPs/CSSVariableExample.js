import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import { GREEN, ACTION, BRAND, ENTITY } from '~/styles/vars';
import styled from 'styled-components';
import { easing, keyframes } from 'popmotion';
import posed, { PoseGroup } from 'react-pose';
import { color } from '~/styles/vars';

const Container = posed.div({
  enter: {
    '--color': true,
    transition: () =>
      keyframes({
        values: [GREEN, ACTION, BRAND, ENTITY, GREEN],
        duration: 10000,
        ease: easing.linear,
        loop: Infinity
      })
  }
});

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: var(--color);
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const code = `documentStyler.set('--color', '#0f0')`;

class Example extends React.Component {
  render() {
    return (
      <PoseGroup animateOnMount>
        <Container>
          <Box />
        </Container>
      </PoseGroup>
    );
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
