import Template from '~/templates/Popmotion/LiveExamples/Template';
import { Carousel, Item, VerticalCenter } from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `const poser = pose(element, {
  open: { opacity: 1, scaleX: 1 },
  closed: { opacity: 0, scaleX: 0 },
  initialPose: 'closed'
})

poser.set('open')`;

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
