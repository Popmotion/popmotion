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
        code={tweenCode}
      />
      <Example
        title="Spring"
        link="/api/spring"
        description="An accurate spring simulation that offers smooth animation and a great variety of spring-feels."
        code={tweenCode}
      />
      <Example
        title="Keyframes"
        link="/api/keyframes"
        description="Animate through multiple sequential states with all the power of a single tween."
        code={tweenCode}
      />
      <Example
        title="Physics"
        link="/api/physics"
        description="A lightweight integrated physics simulation that can be affected mid-animation."
        code={tweenCode}
      />
      <Example
        title="Decay"
        link="/api/decay"
        description="Exponentially-decayed velocity to smoothly dampen momentum."
        code={tweenCode}
      />
    </ExampleSection>
    <ExampleSection title="Input">
      <Example
        title="Pointer"
        link="/api/pointer"
        description="Provides absolute or relative pointer coordinates."
        code={tweenCode}
      />
      <Example
        title="Mulittouch"
        link="/api/touch"
        description=""
        code={tweenCode}
      />
      <Example
        title="Listen"
        link="/api/listen"
        description=""
        code={tweenCode}
      />
    </ExampleSection>
    <ExampleSection title="More ">
      <Example
        title="Stagger"
        description=""
        code={tweenCode}
      />
      <Example
        title="Animate colors"
        description="Popmotion uses advanced color blending that avoids muddy saturation loss."
        code={tweenCode}
      />
    </ExampleSection>
  </Container>
);