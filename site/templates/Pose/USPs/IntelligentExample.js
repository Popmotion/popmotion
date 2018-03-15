import Template from '~/templates/Popmotion/LiveExamples/Template';
import { Carousel, Item, VerticalCenter } from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `const props = {
  alert: {
    backgroundColor: '#f00', // Tween
    x: 200, // Underdamped spring
    scale: 2 // Overdamped spring
  }
}`;

class Example extends React.Component {

  render() {
    return (null
    );
  }
}

export default () => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/Kyewbv?editors=0010">
    <VerticalCenter>
      <Example />
    </VerticalCenter>
  </Template>
);
