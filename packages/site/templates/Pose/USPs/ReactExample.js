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
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';
import { color } from '~/styles/vars';
import { eachValue } from 'popmotion-pose';

const Container = styled.div`
  overflow: hidden;
`;

const sidepanelProps = {};

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
  width: 300px;
  padding: 20px;
`;

const Item = styled(posed.li())`
  width: 100%;
  border-radius: 5px;
  height: 35px;
  background: ${color.white};
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &[data-key='0'] {
    background: ${color.green};
  }

  &[data-key='1'] {
    background: ${color.brand};
  }

  &[data-key='2'] {
    background: ${color.blue};
  }

  &[data-key='3'] {
    background: ${color.purple};
  }
`;

const code = `// PoseGroup currently React DOM only

const Item = posed.li()

const List = ({ items }) => (
  <ul>
    <PoseGroup>
      {items.map(item => <Item key={item.key} />)}
    </PoseGroup>
  </ul>
)`;

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class Example extends React.Component {
  state = { items: [0, 1, 2, 3] };

  componentDidMount() {
    this.interval = setInterval(this.toggleVisibility, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleVisibility = () => this.setState({ items: shuffle(this.state.items) });

  render() {
    return (
      <Container>
        <Sidepanel>
          <PoseGroup>
            {this.state.items.map(item => <Item data-key={item} key={item} />)}
          </PoseGroup>
        </Sidepanel>
      </Container>
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
