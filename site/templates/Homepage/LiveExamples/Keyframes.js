import Template from './Template';
import { Box, TopLeft } from './styled';
import { styler, easing, keyframes } from 'popmotion';

const code = `keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: '#9B65DE' },
    { x: 300, y: 0, rotateY: 180, background: '#14D790' },
    { x: 300, y: 200, rotateY: 180, background: '#14D790' },
    { x: 0, y: 200, rotateY: 0, background: '#9B65DE' },
    { x: 0, y: 0, rotateY: 0, background: '#9B65DE' }
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
        { x: 0, y: 0, rotateY: 0, background: '#9B65DE' },
        { x: 300, y: 0, rotateY: 180, background: '#14D790' },
        { x: 300, y: 200, rotateY: 180, background: '#14D790' },
        { x: 0, y: 200, rotateY: 0, background: '#9B65DE' },
        { x: 0, y: 0, rotateY: 0, background: '#9B65DE' }
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
