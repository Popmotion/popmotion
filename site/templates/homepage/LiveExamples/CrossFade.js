import Template from './Template';
import { MediumBall, VerticalCenter } from './styled';
import { tween, styler, easing, crossfade } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const circle = document.querySelector('path.outline');

tween({ ease: easing.easeIn }).start({
  update: (v) => circle.set({
    opacity: v,
    pathLength: v * 45
  }),
  complete: () => physics({ velocity: -400 })
    .start(circle.set('rotation'))
});`;

class Example extends React.Component {
  setContainer = (ref) => {
    if (!ref) return;
    this.container = ref;
    this.ballStylers = Array
      .from(this.container.childNodes)
      .map(styler);
  };

  componentDidMount() {
    if (this.props.isVisible) this.startAnimation();
  }

  componentWillReceiveProps({ isVisible: willBeVisible }) {
    const { isVisible } = this.props;
    if (!isVisible && willBeVisible) this.startAnimation();
    if (isVisible && !willBeVisible) this.stopAnimation();
  }

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation() {
    const left = this.ballStylers[0];
    const blended = this.ballStylers[1];
    const right = this.ballStylers[2];

    const animateLeft = tween({
      from: 100,
      to: -100,
      ease: easing.easeInOut,
      flip: Infinity,
      duration: 1000
    });

    const animateRight = tween({
      from: -100,
      to: 100,
      ease: easing.easeInOut,
      flip: Infinity,
      duration: 1000
    });

    const a = animateLeft.start(left.set('y'));
    const b = animateLeft.start(right.set('y'))
    // animateRight.start(right.set('y'));
b.stop()
    //const blendedMotion = crossfade(animateLeft, animateRight).start(blended.set('y'));
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <VerticalCenter innerRef={this.setContainer}>
        <MediumBall />
        <MediumBall />
        <MediumBall />
      </VerticalCenter>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/ooPjxj?editors=0010">
    <Example isVisible={isVisible} />
  </Template>
));
