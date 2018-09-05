import Template from '~/templates/Popmotion/LiveExamples/Template';
import { AlignCenter } from '~/templates/Popmotion/LiveExamples/styled';
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

const Container = styled.div`
  overflow: hidden;
`;

const sidepanelProps = {
  closed: {
    x: '-100%'
  },
  open: {
    x: '0%',
    delayChildren: 100,
    staggerChildren: 60
  }
};

const itemProps = {
  closed: {
    y: 20,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
};

const Sidepanel = styled(posed.ul(sidepanelProps))`
  background: ${color.blue};
  width: 300px;
  padding: 20px;
`;

const Item = styled(posed.li(itemProps))`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  background: ${color.white};
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const code = {
  react: `const Parent = posed.ul(config)
const Child = posed.li(childConfig)

({ items }) => (
  <Parent pose="open">
    {items.map(item => <Child />)}
  </Parent>
)
`,
  vue: `const Component = {
  components: {
    Parent: posed.ul(config),
    Child: posed.li(childConfig)
  },
  template: \`<Parent :pose="isOpen ? 'open' : 'closed'">
    <Child v-for="item in items" />
  </Parent>\`
}`
};

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
    return (
      <Container>
        <Sidepanel pose={this.state.isVisible ? 'open' : 'closed'}>
          <Item key={0} />
          <Item key={1} />
          <Item key={2} />
          <Item key={3} />
        </Sidepanel>
      </Container>
    );
  }
}

export default props => (
  <Template code={code} {...props}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
