import Template from './Template';
import { Box, TopLeft } from './styled';
import { GREEN, ENTITY } from '~/styles/vars';
import { styler, easing, keyframes } from 'popmotion';

const code = `keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: '${ENTITY}' },
    { x: 300, y: 0, rotateY: 180, background: '${GREEN}' },
    { x: 300, y: 200, rotateY: 180, background: '${GREEN}' },
    { x: 0, y: 200, rotateY: 0, background: '${ENTITY}' },
    { x: 0, y: 0, rotateY: 0, background: '${ENTITY}' }
  ],
  duration: 3000,
  ease: easing.easeInOut,
  loop: Infinity
})`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.animation = keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, background: ENTITY },
        { x: 300, y: 0, rotateY: 180, background: GREEN },
        { x: 300, y: 200, rotateY: 180, background: GREEN },
        { x: 0, y: 200, rotateY: 0, background: ENTITY },
        { x: 0, y: 0, rotateY: 0, background: ENTITY }
      ],
      duration: 3000,
      ease: [easing.easeInOut, easing.easeInOut, easing.easeInOut, easing.easeInOut],
      loop: Infinity
    }).start(this.boxStyler.set);
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <Box innerRef={this.startAnimation} />
    );
  }
}

export default () => (
  <Template code={code}>
    <TopLeft>
      <Example />
    </TopLeft>
  </Template>
);
