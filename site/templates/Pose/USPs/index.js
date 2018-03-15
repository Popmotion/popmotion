import { Container, Blurb } from './styled';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';
import Example from '~/templates/Popmotion/USPs/Example';
import { Strong } from '~/templates/global/styled';

export default () => (
  <Container>
    <Blurb>
      Pose is a declarative animation library that brings the simplicity of CSS transitions to JavaScript
    </Blurb>
    <ExampleSection title="Features">
      <Example
        title="Declarative"
        description="Separate your animation and application logic by defining poses."
      >
        <TweenExample />
      </Example>
      <Example
        title="Intelligent defaults"
        description="Pose will automatically select appropriate animations based on the type of property being animated."
      >
        <SpringExample />
      </Example>
      <Example
        title="Custom animations"
        description="Use Popmotion animations to manually create custom transitions."
      >
        <SpringExample />
      </Example>
      <Example
        title="Complexity made simple"
        description="Orchestrate animations across multiple animations by adding new Posers as children."
      >
        <SpringExample />
      </Example>
      <Example
        title="FLIPpin' great"
        description="Friends don't let friends reflow, and neither does Pose. Slow animations are converted to fast transforms using the FLIP technique."
      >
        <KeyframesExample />
      </Example>
      <Example
        title="Draggable"
        link="/api/physics"
        description="A lightweight integrated physics simulation that can be altered mid-animation."
      >
        <PhysicsExample />
      </Example>
    </ExampleSection>
  </Container>
);