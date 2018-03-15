import Template from '~/templates/Popmotion/LiveExamples/Template';
import { Carousel, Item, VerticalCenter } from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `const props = {
  open: {
    x: '0%',
    transition: ({ from, to }) => tween({ from, to, ease: easing.backOut })
  },
  closed: {
    x: '-100%',
    transition: ({ from, to, velocity }) => spring({ from, to, velocity, stiffness: 1000 })
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
