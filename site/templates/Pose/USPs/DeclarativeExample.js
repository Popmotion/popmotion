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

const props = {
  open: { scale: 1 },
  closed: { scale: 0 }
};

const Box = styled(posed.div(props))`
  width: 100px;
  height: 100px;
  background: ${color.blue};
  border-radius: 50%;
  transform: scaleX(0);
  transform-origin: 50%;
`;

const code = `// Vanilla
poser.set('open')

// React
({ isOpen }) => (
  <PosedComponent pose={isOpen ? 'open' : 'closed'} />
)`;

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
    return <Box pose={this.state.isVisible ? 'open' : 'closed'} />;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
