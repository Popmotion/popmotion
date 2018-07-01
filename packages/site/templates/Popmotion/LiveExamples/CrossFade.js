import Template from './Template';
import { MediumBall, VerticalCenter } from './styled';
import { tween, styler, easing, crossfade, transform, valueTypes } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const blendedBall = styled(document.querySelector('.blended'));

const animateUp = tween({ from: -100, to: 100, flip: Infinity });
const animateDown = tween({ from: 100, to: -100, flip: Infinity });

crossfade(animateUp, animateDown)
  .start(blendedBall.set('y'));`;

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

    const blendRedBlue = transform.blendColor('#FF1C68', '#198FE3');

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
    
    this.leftAnimation = animateLeft.start(left.set('y'));
    this.rightAnimation = animateRight.start(right.set('y'));
    
    const blendedMotion = crossfade(animateLeft, animateRight)
      .start(blended.set('y'));
    
    this.blendAnimation = tween({
      duration: 3333,
      flip: Infinity,
      ease: easing.easeInOut
    }).start((v) => {
      blended.set('background', valueTypes.color.transform(blendRedBlue(v)));
      blendedMotion.setBalance(v);
    });
  }

  stopAnimation() {
    this.leftAnimation && this.leftAnimation.stop();
    this.rightAnimation && this.rightAnimation.stop();
    this.blendAnimation && this.blendAnimation.stop();
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
