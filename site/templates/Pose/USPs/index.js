import { Container, Blurb } from '~/templates/Popmotion/USPs/styled';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';
import Example from '~/templates/Popmotion/USPs/Example';
import DeclarativeExample from './DeclarativeExample';
import IntelligentExample from './IntelligentExample';
import { Strong } from '~/templates/global/styled';
import CustomExample from './CustomExample';
import ChildrenExample from './ChildrenExample';
import FlipExample from './FlipExample';

export default () => (
  <Container>
    <Blurb>
      Popmotion Pose combines the simplicity of CSS transitions with the power of JavaScript
    </Blurb>
    <ExampleSection>
      <Example
        title="Declarative"
        description="Separate your animation and application logic."
      >
        <DeclarativeExample />
      </Example>
      <Example
        title="Intelligent defaults"
        description="Pose will automatically select appropriate animations based on the type of property being animated."
      >
        <IntelligentExample />
      </Example>
      <Example
        title="Custom animations"
        description="Use Popmotion animations to manually create custom transitions."
      >
        <CustomExample />
      </Example>
      <Example
        title="Complexity made simple"
        description="Orchestrate animations across multiple animations by adding new Posers as children."
      >
        <ChildrenExample />
      </Example>
      <Example
        title="FLIPpin' great"
        description="Slow animations are automatically converted to transforms. An additional imperative API handles the heavy-lifting of FLIP."
      >
        <FlipExample />
      </Example>
      <Example
        title="Draggable"
        description="A lightweight integrated physics simulation that can be altered mid-animation."
      >
      </Example>
      <Example
        title="Passive values"
        description="A lightweight integrated physics simulation that can be altered mid-animation."
      >
      </Example>
    </ExampleSection>
  </Container>
);