import Template from './Template';
import { Ball, BottomCenter } from './styled';
import { styler, value, listen, physics, transform, tween } from 'popmotion';

const code = `const ball = document.querySelector('.ball');
const ballY = value(0, styler(ball).set('y'));

const gravity = physics({
  acceleration: 2500,
  restSpeed: false
}).start(ballY);

listen(ball, 'mousedown touchstart').start(() => {
  gravity
    .set(ballY.get())
    .setVelocity(-1200);
});`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    let count = 0;

    this.boxStyler = styler(ref);
    this.ballY = value(0, this.boxStyler.set('y'));
    const ballBorder = value({
      borderColor: '',
      borderWidth: 0
    }, ({ borderColor, borderWidth }) => this.boxStyler.set({
      boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
    }));
    
    const gravity = physics({
      acceleration: 2500,
      restSpeed: false
    }).pipe((v) => {
      if (v >= 0) {
        v = 0;
        gravity
          .set(0)
          .setVelocity(- this.ballY.getVelocity() * 0.8);

        if (this.ballY.getVelocity() !== 0 && ref.innerHTML !== 'Tap') {
          count = 0;
          tween({
            from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
            to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
          }).start(ballBorder);
  
          ref.innerHTML = 'Tap';
        }
      }
      return v;
    }).start(this.ballY);

    listen(ref, 'mousedown touchstart').start((e) => {
      e.preventDefault();
      count++;
      ref.innerHTML = count;

      gravity
        .set(this.ballY.get())
        .setVelocity(-1200);

      tween({
        from: { borderWidth: 0, borderColor: 'rgb(20, 215, 144, 1)' },
        to: { borderWidth: 30, borderColor: 'rgb(20, 215, 144, 0)' }
      }).start(ballBorder);
    });
  };

  componentWillUnmount() {
    this.ballY && this.ballY.stop();
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
