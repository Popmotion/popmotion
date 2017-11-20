import Template from './Template';
import { SmallBall, StackedLeft } from './styled';
import { styler, spring, stagger } from 'popmotion';

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
  };

  startAnimation = () => {
    stagger(
      this.ballStylers.map((thisStyler) => () =>  spring({ to: 300 }).start(thisStyler.set('x')))
    , 100).start();
  };

  componentDidMount() {
    this.timer = setInterval(this.startAnimation, 1200);
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
