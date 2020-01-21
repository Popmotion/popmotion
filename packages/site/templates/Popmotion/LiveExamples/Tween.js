import Template from './Template';
import { Box, VerticalCenter } from './styled';
import { easing, styler, tween } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 1000,
  ease: easing.backOut,
  flip: Infinity
})`;

class Tween extends React.Component {
  setRef = ref => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    if (this.props.isVisible) this.startAnimation();
  };

  componentWillReceiveProps({ isVisible: willBeVisible }) {
    const { isVisible } = this.props;
    if (!isVisible && willBeVisible) this.startAnimation();
    if (isVisible && !willBeVisible) this.stopAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation() {
    this.animation = tween({
      to: { x: 300, rotate: 180 },
      duration: 1200,
      ease: easing.backOut,
      flip: Infinity
    }).start(v => this.boxStyler.set(v));
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  render() {
    return <Box ref={this.setRef} />;
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template
    code={code}
    codepen="https://codepen.io/popmotion/pen/WXOPWX?editors=0010"
  >
    <VerticalCenter>
      <Tween isVisible={isVisible} />
    </VerticalCenter>
  </Template>
));
