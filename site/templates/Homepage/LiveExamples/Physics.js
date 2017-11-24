import Template from './Template';
import { Ball, BottomCenter } from './styled';
import { styler, value, listen, physics, spring, tween } from 'popmotion';

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
    this.ballScale = value(1, this.boxStyler.set('scaleY'));
    this.ballBorder = value({
      borderColor: '',
      borderWidth: 0
    }, ({ borderColor, borderWidth }) => this.boxStyler.set({
      boxShadow: `0 0 0 ${borderWidth}px ${borderColor}`
    }));
    
    const checkBounce = (v) => {
      if (v > 0) {
        v = 0;
        
        if (this.ballY.getVelocity() > 0) {
          const compression = spring({
            to: 1,
            from: 1,
            velocity: - this.ballY.getVelocity() * 0.04,
            damping: 20,
            stiffness: 400
          }).pipe((s) => {
            if (s >= 1) {
              compression.stop();
              gravity
                .set(0)
                .setVelocity(- this.ballScale.getVelocity() * 200);
            }
            return s;
          }).start(this.ballScale);
        }
      }
      return v;
    };
    
    const checkFail = (v) => {
      if (v === 0 && this.ballY.getVelocity() !== 0 && ref.innerHTML !== 'Tap') {
        count = 0;
        tween({
          from: { borderWidth: 0, borderColor: 'rgb(255, 28, 104, 1)' },
          to: { borderWidth: 30, borderColor: 'rgb(255, 28, 104, 0)' }
        }).start(this.ballBorder);
    
        ref.innerHTML = 'Tap';
      }
      return v;
    };
    
    const gravity = physics({
      acceleration: 2500,
      restSpeed: false
    }).pipe(checkBounce, checkFail)
      .start(this.ballY);

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
      }).start(this.ballBorder);
    });
  };

  componentWillUnmount() {
    this.ballBorder.stop();
    this.ballScale.stop();
    this.ballY.stop();
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
  <Template code={code} codepen="https://codepen.io/popmotion/pen/ooybYP?editors=0010">
    <BottomCenter>
      <Example />
    </BottomCenter>
  </Template>
);
