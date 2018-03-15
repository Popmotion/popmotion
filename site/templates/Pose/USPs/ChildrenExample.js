import Template from '~/templates/Popmotion/LiveExamples/Template';
import { Carousel, Item, VerticalCenter } from '~/templates/Popmotion/LiveExamples/styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `const sidebarProps = {
  open: {
    y: '-100%',
    delayChildren: 150
    staggerChildren: 75
  },
  closed: { x: '0%' },
  initialPose
}

const itemProps = {
  open: { opacity: 1, y: '-100%' },
  closed: { opacity: 0, y: '0%' }
}

const sidebarPoser = pose(sidebarElement, sidebarProps)
itemElements.forEach((itemElement) => sidebarPoser.addChild(itemElement, itemProps))

sidebarPoser.set('open')
`;

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
