import Template from '~/templates/Popmotion/LiveExamples/Template';
import {
  Carousel,
  Item,
  AlignCenter
} from '~/templates/Popmotion/LiveExamples/styled';
import {
  styler,
  spring,
  value,
  listen,
  tween,
  pointer,
  decay,
  transform
} from 'popmotion';
import posed from 'react-pose';
import styled from 'styled-components';
import { color } from '~/styles/vars';
import { eachValue } from 'popmotion-pose';

const props = {
  rest: {
    scale: 1,
    backgroundColor: color.green
  },
  alert: {
    scale: 1.3,
    transition: eachValue({
      scale: props => spring({ ...props, stiffness: 200, damping: 0 }),
      backgroundColor: tween
    })
  }
};

const Box = styled(posed.div(props))`
  width: 100px;
  height: 100px;
  background: ${color.green};
  border-radius: 50%;
  transform: scaleX(0);
  transform-origin: 50%;
`;

const code = `attention: {
  scale: 1.3,
  transition: (props) =>
    spring({ ...props, stiffness: 200, damping: 0 })
}`;

class Example extends React.Component {
  state = { isVisible: false };

  componentDidMount() {
    this.interval = setInterval(this.toggleVisibility, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    return <Box pose={this.state.isVisible ? 'alert' : 'rest'} />;
  }
}

export default () => (
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
