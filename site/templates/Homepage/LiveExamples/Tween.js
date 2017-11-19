import Template from './Template';
import { Box, VerticalCenter } from './styled';
import { easing, styler, tween } from 'popmotion';

const code = `tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity
})`;

class Tween extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.animation = tween({
      to: { x: 300, rotate: 180 },
      duration: 1200,
      ease: easing.backOut,
      flip: Infinity
    }).start(this.boxStyler.set);
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return <Box innerRef={this.startAnimation} />;
  }
}

export default () => (
  <Template code={code}>
    <VerticalCenter>
      <Tween />
    </VerticalCenter>
  </Template>
);
