import Template from './Template';
import { Ball, VerticalCenter } from './styled';
import { everyFrame, styler } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const ballStylers = Array
  .from(container.childNodes)
  .map(styler);

const distance = 100;

everyFrame()
  .start((timestamp) => {
    ballStylers.map((style, i) => {
      const y = distance * Math.sin(0.004 * timestamp + (i * 0.5));
      styler.set('y', y);
    });
  });`;

class Example extends React.Component {
  setContainer = (ref) => {
    if (!ref) return;
    this.container = ref;
    this.ballStylers = Array
      .from(this.container.childNodes)
      .map(styler);

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
    everyFrame()
      .start((timestamp) => this.ballStylers.map((styler, i) => {
        styler.set('y', this.distance * Math.sin(0.004 * timestamp + (i * 0.5)));
      }));
  }

  stopAnimation() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <VerticalCenter innerRef={this.setContainer}>
        <Ball />
        <Ball />
        <Ball />
      </VerticalCenter>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/XzYJvP?editors=0010">
    <Example isVisible={isVisible} />
  </Template>
));
