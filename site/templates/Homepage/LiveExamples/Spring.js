import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { spring, styler, value, listen, pointer } from 'popmotion';

const code = `const ball = document.querySelector('.ball');
const ballStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, ballStyler.set);

listen(ball, 'mousedown touchstart').start(() => {
  pointer(ballXY.get()).start(ballXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({
    from: ballXY.get(),
    to: 0,
    velocity: ballXY.getVelocity()
  }).start(ballXY);
});`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.ballXY = value({ x: 0, y: 0 }, this.boxStyler.set);
    this.ballXY.subscribe(this.boxStyler.set);

    listen(ref, 'mousedown touchstart')
      .start(() => {
        pointer(this.ballXY.get()).start(this.ballXY);
      });

    listen(document, 'mouseup touchend')
      .start(() => {
        spring({
          from: this.ballXY.get(),
          velocity: this.ballXY.getVelocity(),
          to: { x: 0, y: 0 },
          stiffness: 200,
        }).start(this.ballXY);
      });
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <AlignCenter>
        <Ball innerRef={this.startAnimation}>
          Throw
        </Ball>
      </AlignCenter>
    );
  }
}

export default () => (
  <Template code={code}>
    <Example />
  </Template>
);
