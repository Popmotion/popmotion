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
  rest: {
    x: 0,
    y: 0,
    background: 'rgba(161, 0, 246, 0)',
    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
    transition: { duration: 700 }
  },
  popped: {
    x: -10,
    y: -10,
    background: 'rgba(161, 0, 246, 1)',
    boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
    transition: { duration: 700 }
  }
};

const Box = styled(posed.div(props))`
  width: 100px;
  height: 100px;
`;

const code = `popped: {
  x: -10,
  y: -10,
  background: 'rgba(161, 0, 246, 1)',
  boxShadow: '10px 10px 20px rgba(161, 0, 246, 0.2)',
  transition: { duration: 700 }
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
    return <Box pose={this.state.isVisible ? 'popped' : 'rest'} />;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
