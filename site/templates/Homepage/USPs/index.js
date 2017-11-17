import { Container, Blurb } from './styled';
import ExampleSection from './ExampleSection';
import Example from './Example';
import { Strong } from '~/templates/global/styled';

const tweenCode = `tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  flip: Infinity,
  ease: easing.backOut
})`;

const springCode = `const ball = document.getElementById('ball');
const ballStyler = styler(ball);

const ballXY = value({ x: 0, y: 0});
const ballXY.subscribe(ballStyler.set);

listen(ball, 'mousedown touchstart').start(() => {
  pointer(ballXY.get())
    .start(ballXY);
});

listen(document, 'mouseup touchend').start(() => {
  spring({ velocity: ballXY.getVelocity() })
    .start(ballXY);
});`;

export default () => (
  <Container>
    <Blurb>
      Popmotion is a <Strong>10kb</Strong> Swiss Army knife for animators and interaction developers:
    </Blurb>
    <ExampleSection title="Animations">
      <Example
        title="Tween"
        link="/api/tween"
        description="Animate between two states with a scrubbable playhead. Includes a full suite of easing, and methods to generate your own."
      />
    </ExampleSection>
  </Container>
);