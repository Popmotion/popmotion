import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import styled from 'styled-components';
import { color } from '~/styles/vars';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: ${color.blue};
  border-radius: 50%;
  transform: scaleX(0);
  transform-origin: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const code = `pathStyler.set({
  pathLength: 100,
  pathOffset: 20
})`;

class Example extends React.Component {
  render() {
    return <Box>Drag</Box>;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
