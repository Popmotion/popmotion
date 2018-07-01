import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';
import posed from 'react-pose';
import styled from 'styled-components';
import { color } from '~/styles/vars';
const { interpolate } = transform;
const props = {
  draggable: 'x',
  passive: {
    opacity: ['x', interpolate([-200, -100, 100, 200], [0, 1, 1, 0])]
  }
};

const Box = styled(posed.div(props))`
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

const code = `// Vanilla & React DOM
passive: {
  opacity: ['x', interpolate(
    [-200, -100, 100, 200],
    [0, 1, 1, 0]
  )]
}

// React Native
passive: {
  opacity: ['x', {
    inputRange: [-200, -100, 100, 200],
    outputRange: [0, 1, 1, 0]
  }]
}`;

class Example extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    this.interval = setInterval(this.toggleVisibility, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return <Box pose={this.state.isVisible ? 'open' : 'closed'}>Drag</Box>;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
