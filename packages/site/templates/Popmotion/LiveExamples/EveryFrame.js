import Template from './Template';
import { MediumBall, VerticalCenter } from './styled';
import { everyFrame, styler } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const ballStylers = Array
  .from(container.children)
  .map(styler);

const distance = 100;
const stagger = 0.5;
const speed = 0.004;

everyFrame()
  .start((timestamp) => ballStylers.forEach((style, i) => {
    const y = distance * Math.sin(speed * timestamp + (i * stagger));
    styler.set('y', y);
  }));`;

class Example extends React.Component {
  setContainer = ref => {
    if (!ref) return;
    this.container = ref;
    this.ballStylers = Array.from(this.container.children).map(styler);

    this.distance = 100;
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
    this.animation = everyFrame().start(timestamp =>
      this.ballStylers.forEach((styler, i) => {
        styler.set('y', this.distance * Math.sin(0.004 * timestamp + i * 0.5));
      })
    );
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <VerticalCenter ref={this.setContainer}>
        <MediumBall />
        <MediumBall />
        <MediumBall />
        <MediumBall />
      </VerticalCenter>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template
    code={code}
    codepen="https://codepen.io/popmotion/pen/XzYJvP?editors=0010"
  >
    <Example isVisible={isVisible} />
  </Template>
));
