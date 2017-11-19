import { Container, Blurb } from './styled';
import ExampleSection from './ExampleSection';
import Example from './Example';
import TweenExample from '../LiveExamples/Tween';
import SpringExample from '../LiveExamples/Spring';
import KeyframesExample from '../LiveExamples/Keyframes';
import PhysicsExample from '../LiveExamples/Physics';
import { Strong } from '~/templates/global/styled';

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
        description="A lightweight integrated physics simulation that can be affected mid-animation."
      >
        <PhysicsExample />
      </Example>
      <Example
        title="Decay"
        link="/api/decay"
        description="Exponentially-decayed velocity to smoothly dampen momentum."
        
      />
    </ExampleSection>
    <ExampleSection title="Input">
      <Example
        title="Pointer"
        link="/api/pointer"
        description="Provides absolute or relative pointer coordinates."
        
      />
      <Example
        title="Multitouch"
        link="/api/touch"
        description="Create multitouch gestures with a list of active touches, delta rotation and scale properties."
        
      />
      <Example
        title="Listen"
        link="/api/listen"
        description="Convert any browser event into a chainable action."
        
      />
    </ExampleSection>
    <ExampleSection title="More features">
      <Example
        title="Chain modifiers"
        description="All animation and input actions can be chained, returning a new version of that action."   
      />
      <Example
        title="Stagger"
        description="Stagger any series of animations or functions."   
      />
      <Example
        title="Animate colors"
        description="Popmotion uses advanced color blending that avoids muddy saturation loss."
      />
      <Example
        title="Crossfade"
        description="Blend the output of any two actions."
      />
    </ExampleSection>
  </Container>
);