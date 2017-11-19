import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { styler, value, listen, pointer, decay, transform } from 'popmotion';

const code = `listen(slider, 'mousedown touchstart').start(() => {
  pointer(sliderX.get())
    .start(ballXY);
});`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    const ballStyler = styler(ref);
    const ballXY = value({ x: 0, y: 0 }, ballStyler.set);
    
    listen(ref, 'mousedown touchstart')
      .start(() => pointer(ballXY.get())
        .start(ballXY)
      );

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
  <Template code={code}>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
