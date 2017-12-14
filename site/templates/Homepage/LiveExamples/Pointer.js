import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { styler, value, listen, pointer } from 'popmotion';

const code = `const ball = document.querySelector('.ball');
const ballXY = value({ x: 0, y: 0 }, styler(ball).set);

listen(ball, 'mousedown touchstart').start(() => {
  pointer(ballXY.get())
    .start(ballXY);
});`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    const ballStyler = styler(ref);
    const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

    listen(ref, 'mousedown touchstart')
      .start((e) => {
        e.preventDefault();
        pointer(ballXY.get()).start(ballXY);
      });

    listen(document, 'mouseup touchend')
      .start(() => ballXY.stop());
  }

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <Ball innerRef={this.startAnimation}>
        Drag
      </Ball>
    );
  }
}

export default () => (
  <Template code={code} codepen="https://codepen.io/popmotion/pen/RjBZoe?editors=0010">
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
