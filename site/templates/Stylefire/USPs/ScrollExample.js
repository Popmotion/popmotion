import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import styled from 'styled-components';
import { easing, keyframes } from 'popmotion';
import posed, { PoseGroup } from 'react-pose';
import { color } from '~/styles/vars';

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

const code = `styler(window).set('scrollY', 100)`;

class Example extends React.Component {
  render() {
    return null;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
