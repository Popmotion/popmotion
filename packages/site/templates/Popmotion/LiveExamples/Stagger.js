import Template from './Template';
import { SmallBall, StackedLeft } from './styled';
import { styler, spring, stagger } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const stylers = Array
  .from(container.children)
  .map(styler); 

const animations = Array(stylers.length)
  .fill(spring({ to: 300 }));

stagger(animations, 100)
  .start((v) => v.forEach((x, i) => stylers[i].set('x', x)));`;

class Example extends React.Component {
  setContainer = ref => {
    if (!ref) return;
    this.container = ref;
    this.ballStylers = Array.from(this.container.children).map(styler);

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

  fireAnimation = () => {
    const animation = spring({ to: 300 });
    const animations = Array(this.ballStylers.length).fill(animation);

    stagger(animations, 100).start(v => {
      v.forEach((x, i) => {
        this.ballStylers[i].set('x', x);
      });
    });
  };

  startAnimation() {
    this.fireAnimation();
    this.timer = setInterval(this.fireAnimation, 1200);
  }

  stopAnimation() {
    this.animation && this.animation.stop();
    clearInterval(this.timer);
  }

  render() {
    return (
      <StackedLeft ref={this.setContainer}>
        <SmallBall />
        <SmallBall />
        <SmallBall />
      </StackedLeft>
    );
  }
}

export default trackVisibility(({ isVisible }) => (
  <Template code={code}>
    <Example isVisible={isVisible} />
  </Template>
));
