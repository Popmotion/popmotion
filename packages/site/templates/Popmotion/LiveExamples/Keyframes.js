import Template from './Template';
import { Box, TopLeft } from './styled';
import { GREEN, ENTITY, BRAND, ACTION } from '~/styles/vars';
import { styler, easing, keyframes } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `keyframes({
  values: [
    { x: 0, y: 0, rotateY: 0, background: '${ENTITY}' },
    { x: 300, y: 0, rotateY: 180, rotateX: 0, background: '${GREEN}' },
    { x: 300, y: 200, rotateY: 180, rotateX: 180, background: '${BRAND}' },
    { x: 0, y: 200, rotateY: 0, rotateX: 180, background: '${ACTION}' },
    { x: 0, y: 0, rotateY: 0, rotateX: 0, background: '${ENTITY}' }
  ],
  duration: 3000,
  easings: easing.easeInOut,
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

  componentWillUnmount() {
    this.stopAnimation();
  }

  startAnimation() {
    this.animation = keyframes({
      values: [
        { x: 0, y: 0, rotateY: 0, backgroundColor: ENTITY },
        { x: 300, y: 0, rotateY: 180, rotateX: 0, backgroundColor: GREEN },
        { x: 300, y: 200, rotateY: 180, rotateX: 180, backgroundColor: GREEN },
        { x: 0, y: 200, rotateY: 0, rotateX: 180, backgroundColor: ENTITY },
        { x: 0, y: 0, rotateY: 0, rotateX: 0, backgroundColor: ENTITY }
      ],
      duration: 3000,
      easings: [
        easing.easeInOut,
        easing.easeInOut,
        easing.easeInOut,
        easing.easeInOut
      ],
      loop: Infinity
    }).start(this.boxStyler.set);
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
    codepen="https://codepen.io/popmotion/pen/JOZGdp?editors=0010"
  >
    <TopLeft>
      <Example isVisible={isVisible} />
    </TopLeft>
  </Template>
));
