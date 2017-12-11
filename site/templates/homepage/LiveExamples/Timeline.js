import Template from './Template';
import { Ball, AlignCenter } from './styled';
import { styler, value, listen, pointer, timeline } from 'popmotion';

const code = `const tweenUp = (track, duration = 500, yFrom = 100) => ({
  track,
  duration,
  from: { y: yFrom, opacity: 0 },
  to: { y: 0, opacity: 1 },
  ease: { y: easing.backOut, opacity: easing.linear }
});

timeline([
  { track: 'shade', from: 0, to: 1, ease: easing.linear },
  '-100',
  tweenUp('modal'),
  '-200',
  [...modalSections.map((s, i) => tweenUp(sectionLabels[i], 300, 50)), 50]
]).start(setStylers);`;


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
  <Template code={code} codepen="https://codepen.io/popmotion/pen/aEoqEG?editors=0010">
    <AlignCenter>
      <Example />
    </AlignCenter>
  </Template>
);
