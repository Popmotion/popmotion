import Template from './Template';
import { SmallBall, StackedLeft } from './styled';
import { easing, styler, spring, physics, tween, stagger } from 'popmotion';

const code = `stagger([
  () => tween({ from: 0, to: 300 }).start(ballA),
  () => spring({ from: 0, to: 300 }).start(ballB)
], 50)`;

class Example extends React.Component {
  setContainer = (ref) => {
    if (!ref) return;
    this.container = ref;
    this.ballStyler = Array
      .from(this.container.childNodes)
      .map(styler);
  };

  startAnimation = () => {
    const actions = [
      tween({ to: 300 }),
      spring({ to: 300 }),
      physics({ to: 300, springStrength: 400, friction: 0.8 })
    ];

    stagger(
      this.ballStyler.map((styler, i) => () => actions[i].start(styler.set('x')))
    , 150).start();
  };

  componentDidMount() {
    this.timer = setInterval(this.startAnimation, 1000);
  }

  componentWillUnmount() {
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

export default () => (
  <Template code={code}>
    <Example />
  </Template>
);
