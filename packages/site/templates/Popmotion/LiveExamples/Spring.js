import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { spring, styler, value, listen, pointer } from 'popmotion';

const code = `spring({
  from: ballXY.get(),
  to: 0,
  velocity: ballXY.getVelocity(),
  stiffness: 200
})`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.ballXY = value({ x: 0, y: 0 }, this.boxStyler.set);

    listen(ref, 'mousedown touchstart')
      .start((e) => {
        e.preventDefault();
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
    this.ballXY && this.ballXY.stop();
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
  <Template code={code} codepen="https://codepen.io/popmotion/pen/mqKyjd?editors=0010">
    <Example />
  </Template>
);
