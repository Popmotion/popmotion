import Template from './Template';
import { Box, AlignCenter } from './styled';
import { styler, value, listen, pointer, touch, decay, transform } from 'popmotion';

const code = `listen(slider, 'mousedown touchstart').start(() => {
  pointer(sliderX.get())
    .start(ballXY);
});`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    const ballStyler = styler(ref);
    this.box = value({ scale: 1, rotate: 0 }, ballStyler.set);

    listen(ref, 'touchstart')
      .start(() => {
        const { scale: initialScale, rotate: initialRotate } = this.box.get();
        touch().start(({ scale, rotation }) => {
          console.log(scale, rotation)
          this.box.update({
            scale: initialScale + scale,
            rotate: initialRotate + rotation
          });
        });
      });

    listen(document, 'mouseup touchend')
      .start(() => this.box.stop());
  }

  componentWillUnmount() {
    this.box && this.box.stop();
  }

  render() {
    return (
      <Box innerRef={this.startAnimation}>
        {`Pinch & zoom`}
      </Box>
    );
  }
}

export default () => (
  <Template code={code} hideOverflow>
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
