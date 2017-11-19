import Template from './Template';
import { Ball, BottomCenter } from './styled';
import { styler, value, listen, physics, transform } from 'popmotion';

const code = `const gravity = physics({
  acceleration: 2000,
  restSpeed: false
}).start(ballY);

listen(ball, 'mousedown touchstart')
  .start(() => gravity
    .set(ballY.get())
    .setVelocity(-1000)
  )`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    let count = 0;

    this.boxStyler = styler(ref);
    const ballX = value(0, this.boxStyler.set('y'));

    const gravity = physics({
      acceleration: 2000,
      restSpeed: false
    }).pipe((v) => {
      if (v <= 0) {
        v = 0;
      }
      return v;
    }).start(ballX);

    listen(ref, 'mousedown touchstart', (e) => {
      e.preventDefault();
      count++;
      ref.innerHTML = count;

      gravity
        .set(ballY.get())
        .setVelocity(-10000);
    });
  };

  componentWillUnmount() {
    this.animation && this.animation.stop();
  }

  render() {
    return (
      <Ball innerRef={this.startAnimation}>
        Tap
      </Ball>
    );
  }
}

export default () => (
  <Template code={code}>
    <BottomCenter>
      <Example />
    </BottomCenter>
  </Template>
);
