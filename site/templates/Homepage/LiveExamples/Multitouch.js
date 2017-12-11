import Template from './Template';
import { Box, AlignCenter } from './styled';
import { styler, value, listen, multitouch } from 'popmotion';

const code = `const box = document.querySelector('.box');
const boxTransform = value({ x: 0, y: 0 }, styler(box).set);

listen(box, 'touchstart')
  .filter(({ touches }) => touches.length >= 2)
  .start(() => {
    multitouch(boxTransform.get())
      .start(boxTransform);
  });`;

class Example extends React.Component {
  startAnimation = (ref) => {
    if (!ref) return;

    const ballStyler = styler(ref);
    this.box = value({ scale: 1, rotate: 0 }, ballStyler.set);

    listen(ref, 'touchstart')
      .filter(({ touches }) => touches.length >= 2)
      .start(() => multitouch(this.box.get()).start(this.box));

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
  <Template code={code} hideOverflow codepen="https://codepen.io/popmotion/pen/LOBjxQ?editors=0010">
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
