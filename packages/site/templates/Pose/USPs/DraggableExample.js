import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import {
  styler,
  value,
  listen,
  pointer,
  decay,
  spring,
  transform
} from 'popmotion';
import posed from 'react-pose';
import styled from 'styled-components';
import { color } from '~/styles/vars';

const props = {
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' }
};

const Box = styled(posed.div(props))`
  width: 100px;
  height: 100px;
  background: ${color.brand};
  transform: scaleX(0);
  transform-origin: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const code = `const Box = posed.div({
  draggable: 'x',
  dragBounds: { left: '-100%', right: '100%' }
})

// Note: 'dragBounds' not yet available for React Native`;

class Example extends React.Component {
  render() {
    return <Box pose={'init'}>Drag</Box>;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
