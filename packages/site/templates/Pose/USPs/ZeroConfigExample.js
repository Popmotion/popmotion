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
  left: { x: '-100%' },
  right: { x: '100%' }
};

const Box = styled(posed.div(props))`
  width: 100px;
  height: 100px;
  background: ${color.brand};
  transform: translateX(-100%);
`;

const code = {
  react: `const Box = posed.div({
  left: { x: -100 },
  right: { x: 100 }
})

const Component = ({ position }) =>
  <Box pose={position} />`,
  vue: `const Component = {
  components: {
    Box: posed.div({
      left: { x: -100 },
      right: { x: 100 }
    })
  },
  template: \`<Box :pose="position" />\`
}`
};

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
    return <Box pose={this.state.isVisible ? 'left' : 'right'} />;
  }
}

export default props => (
  <Template code={code} {...props}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
