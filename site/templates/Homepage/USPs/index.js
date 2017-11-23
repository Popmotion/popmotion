import { Container, Blurb } from './styled';
import ExampleSection from './ExampleSection';
import Example from './Example';
import TweenExample from '../LiveExamples/Tween';
import SpringExample from '../LiveExamples/Spring';
import KeyframesExample from '../LiveExamples/Keyframes';
import PhysicsExample from '../LiveExamples/Physics';
import DecayExample from '../LiveExamples/Decay';
import PointerExample from '../LiveExamples/Pointer';
import MultitouchExample from '../LiveExamples/Multitouch';
import EveryFrameExample from '../LiveExamples/EveryFrame';
import StaggerExample from '../LiveExamples/Stagger';
import ColorExample from '../LiveExamples/Color';
import { Strong } from '~/templates/global/styled';

export default () => (
  <Container>
    <Blurb>
      Popmotion is a <Strong>10kb max</Strong> Swiss Army knife for animators and interaction developers:
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
        description="An accurate spring simulation powered by the same equations as Apple’s CASpringAnimation. "
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
        description="Exponentially-decayed velocity to smoothly dampen momentum."
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
        description="Popmotion uses advanced color blending that avoids muddy brightness loss."
      >
        <ColorExample />
      </Example>
      <Example
        title="Crossfade"
        link="/api/crossfade"
        description="Blend the output of any two actions."
      />
      <Example
        title="Line animation"
        link="/api/svg"
        description="Leverage Stylefire's line drawing capabilities."
      />
    </ExampleSection>
  </Container>
);