import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { schedule, styler, value, listen, pointer, transform, everyFrame } from 'popmotion';

const { smooth } = transform;

const code = `const { transformMap, smooth } = transform;

const smoothXY = transformMap({
  x: smooth(200),
  y: smooth(200)
});

listen(ref, 'mousedown touchstart').start(() => 
  schedule(everyFrame(), pointer(ballXY.get()))
    .pipe(smoothXY)
    .start(ballXY)
);`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;
    this.boxStyler = styler(ref);
    this.ballXY = value({ x: 0, y: 0 }, this.boxStyler.set);

    const smoothXY = transform.transformChildValues({
      x: smooth(200),
      y: smooth(200)
    });

    listen(ref, 'mousedown touchstart').start(() => {
      schedule(everyFrame(), pointer(this.ballXY.get()))
        .pipe(smoothXY)
        .start(this.ballXY)
    });

    listen(document, 'mouseup touchend').start(() => this.ballXY.stop());
  };

  componentWillUnmount() {
    this.ballXY && this.ballXY.stop();
  }

  render() {
    return (
      <AlignCenter>
        <Ball innerRef={this.startAnimation}>
          Drag
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
