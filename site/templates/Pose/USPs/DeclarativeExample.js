import Template from "~/templates/Popmotion/LiveExamples/Template";
import {
  Carousel,
  Item,
  VerticalCenter
} from "~/templates/Popmotion/LiveExamples/styled";
import { styler, value, listen, pointer, decay, transform } from "popmotion";

const code = `const props = {
  open: { opacity: 1 },
  closed: { opacity: 0 }
}

// Vanilla JavaScript
const poser = pose(element, props)
poser.set('open')

// Or React!
const Component = posed.div(props)
({ isOpen }) => <Component pose={isOpen ? 'open' : 'closed'} />
`;

class Example extends React.Component {
  render() {
    return null;
  }
}

export default () => (
  <Template
    code={code}
    codepen="https://codepen.io/popmotion/pen/Kyewbv?editors=0010"
  >
    <VerticalCenter>
      <Example />
    </VerticalCenter>
  </Template>
);
