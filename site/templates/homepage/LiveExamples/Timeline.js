import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { CTA } from '../Masthead/styled';
import { styler, value, listen, pointer, timeline } from 'popmotion';

const code = `timeline([
  { track: 'shade', from: 0, to: 1, ease: easing.linear },
  '-100',
  {
    track: 'modal',
    duration: 500,
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    ease: { y: easing.backOut, opacity: easing.linear }
  }
])`;


class Example extends React.Component {
  setRef = (ref) => {
    if (!ref) return;
    this.container = ref;
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <div ref={this.setRef}>
        <CTA>
          <button>Open modal</button>
        </CTA>
      </div>
    );
  }
}

export default () => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/aEoqEG?editors=0010">
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
