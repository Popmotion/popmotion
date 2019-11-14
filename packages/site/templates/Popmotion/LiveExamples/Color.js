import Template from './Template';
import { ColorPanel, AlignCenter } from './styled';
import { GREEN, ACTION, BRAND, ENTITY } from '~/styles/vars';
import { styler, easing, keyframes } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `keyframes({
  values: ['${GREEN}', '${ACTION}', '${BRAND}', '${ENTITY}', '${GREEN}'],
  duration: 10000,
  ease: easing.linear,
  loop: Infinity
})`;

class Example extends React.Component {
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

  startAnimation = () => {
    this.animation = keyframes({
      values: [GREEN, ACTION, BRAND, ENTITY, GREEN],
      duration: 10000,
      ease: easing.linear,
      loop: Infinity
    }).start(v => this.boxStyler.set('background', v));
  };

  componentWillUnmount() {
    this.stopAnimation();
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  render() {
    return <ColorPanel ref={this.setRef} />;
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template
    code={code}
    codepen="https://codepen.io/popmotion/pen/WXybaR?editors=0010"
  >
    <AlignCenter>
      <Example isVisible={isVisible} />
    </AlignCenter>
  </Template>
));
