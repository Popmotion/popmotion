import Template from './Template';
import { SmallBall, StackedLeft } from './styled';
import { styler, spring, stagger } from 'popmotion';
import trackVisibility from './track-visibility';

const code = `const stylers = Array
  .from(container.childNodes)
  .map(styler); 

const mapStylerToAnimation = (thisStyler) => () => spring({ to: 300 })
  .start(thisStyler.set('x'));

stagger(stylers.map(mapStylerToAnimation), 50)`;

class Example extends React.Component {
  setContainer = (ref) => {
    if (!ref) return;
    this.container = ref;
    this.ballStylers = Array
      .from(this.container.childNodes)
      .map(styler);

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
    stagger(
      this.ballStylers.map((thisStyler) => () =>  spring({ to: 300 }).start(thisStyler.set('x')))
    , 100).start();
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
      <StackedLeft innerRef={this.setContainer}>
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
