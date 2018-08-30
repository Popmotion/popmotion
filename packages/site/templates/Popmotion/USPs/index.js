import { Container, Blurb } from './styled';
import ExampleSection from './ExampleSection';
import Example from './Example';
import TweenExample from '../LiveExamples/Tween';
import SpringExample from '../LiveExamples/Spring';
import KeyframesExample from '../LiveExamples/Keyframes';
import PhysicsExample from '../LiveExamples/Physics';
import DecayExample from '../LiveExamples/Decay';
import TimelineExample from '../LiveExamples/Timeline';
import PointerExample from '../LiveExamples/Pointer';
import MultitouchExample from '../LiveExamples/Multitouch';
import EveryFrameExample from '../LiveExamples/EveryFrame';
import StaggerExample from '../LiveExamples/Stagger';
import ColorExample from '../LiveExamples/Color';
import CrossFadeExample from '../LiveExamples/CrossFade';
import LineDrawingExample from '../LiveExamples/LineDrawing';
import ThreeExample from '../LiveExamples/Three';
import SteppedExample from '../LiveExamples/Stepped';
import { Strong } from '~/templates/global/styled';

export default () => (
  <Container>
    <Blurb>
      Popmotion is a <Strong>11.7kb</Strong> Swiss Army knife for animators and
      UI developers:
    </Blurb>
    <ExampleSection title="Animations">
      <Example
        title="Tween"
        link="/api/tween"
        description="Animate between two states with a scrubbable playhead. Includes a full suite of easing, and methods to generate your own."
      >
        <TweenExample />
      </Example>
      <Example
        title="Spring"
        link="/api/spring"
        description="An accurate spring simulation powered by the same equations as Apple’s CASpringAnimation."
      >
        <SpringExample />
      </Example>
      <Example
        title="Keyframes"
        link="/api/keyframes"
        description="Animate through multiple sequential states with all the power of a single tween."
      >
        <KeyframesExample />
      </Example>
      <Example
        title="Physics"
        link="/api/physics"
        description="A lightweight integrated physics simulation that can be altered mid-animation."
      >
        <PhysicsExample />
      </Example>
      <Example
        title="Decay"
        link="/api/decay"
        description="Smoothly dampen velocity for native-feeling momentum scrolling."
      >
        <DecayExample />
      </Example>
      <Example
        title="Every Frame"
        link="/api/every-frame"
        description="Fires once every frame with the latest framestamp."
      >
        <EveryFrameExample />
      </Example>
      <Example
        title="Timeline"
        link="/api/timeline"
        description="Script complicated sequences of tweens with a simple array."
      >
        <TimelineExample />
      </Example>
    </ExampleSection>
    <ExampleSection title="Input">
      <Example
        title="Pointer"
        link="/api/pointer"
        description="Provides absolute or relative pointer coordinates."
      >
        <PointerExample />
      </Example>
      <Example
        title="Multitouch"
        link="/api/touch"
        description="Create multitouch gestures with a list of active touches, delta rotation and scale properties."
      >
        <MultitouchExample />
      </Example>
    </ExampleSection>
    <ExampleSection title="More features">
      <Example
        title="Stagger"
        link="/api/stagger"
        description="Stagger any series of animations or functions."
      >
        <StaggerExample />
      </Example>
      <Example
        title="Color"
        description="Popmotion uses advanced linear RGB color blending to avoid muddy brightness loss."
      >
        <ColorExample />
      </Example>
      <Example
        title="Crossfade"
        link="/api/crossfade"
        description="Blend the output of any two animations."
      >
        <CrossFadeExample />
      </Example>
      <Example
        title="Line drawing"
        link="/api/svg"
        description="Animate SVG path elements to emulate drawing."
      >
        <LineDrawingExample />
      </Example>
      <Example
        title="Learn once, animate anything"
        description="Popmotion isn't opinionated, so you can pump out numbers to Three.js, React, A-Frame, PixiJS... anywhere!"
      >
        <ThreeExample />
      </Example>
      <Example
        title="Functional composition"
        link="/learn/value-pipelines"
        description="Don't wait for the library authors to offer new features via configs. Use pure functions to compose your own."
      >
        <SteppedExample />
      </Example>
    </ExampleSection>
  </Container>
);
