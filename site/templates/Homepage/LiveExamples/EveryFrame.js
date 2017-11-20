import Template from './Template';
import { Ball, VerticalCenter } from './styled';
import { onFrame, styler } from 'popmotion';

const code = `const ballStylers = Array
  .from(container.childNodes)
  .map(styler);

const distance = 100;

everyFrame()
  .start((timestamp) => ballStylers.map((styler, i) => {
    styler.set('y', distance * Math.sin(0.004 * timestamp + (i * 0.5)));
  }));`;

class Example extends React.Component {
  setContainer = (ref) => {
    if (!ref) return;
    this.container = ref;
  };

  componentDidMount() {
    const ballStylers = Array
      .from(this.container.childNodes)
      .map(styler);

    const distance = 100;
    
    onFrame()
      .start((timestamp) => ballStylers.map((styler, i) => {
        styler.set('y', distance * Math.sin(0.004 * timestamp + (i * 0.5)));
      }));
  }

  componentWillUnmount() {
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

export default () => (
  <Template code={code}>
    <Example />
  </Template>
);
