import { Container, Blurb, BlurbText } from '~/templates/Popmotion/USPs/styled';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';
import Example from '~/templates/Popmotion/USPs/Example';
import ZeroConfigExample from './ZeroConfigExample';
import DeclarativeExample from './DeclarativeExample';
import DraggableExample from './DraggableExample';
import PassiveExample from './PassiveExample';
import ReactExample from './ReactExample';
import { Strong } from '~/templates/global/styled';
import CustomExample from './CustomExample';
import ChildrenExample from './ChildrenExample';
import FlipExample from './FlipExample';
import Link from 'next/link';
import { CTA } from '~/templates/Popmotion/Masthead/styled';
import AnimateAnythingExample from './AnimateAnything';

export default () => (
  <Container>
    <Blurb>JavaScript animation simpler than CSS</Blurb>
    <ExampleSection>
      <Example
        title="Magic animations"
        description="By default, Pose will figure out the animation based on the properties being animated."
      >
        <ZeroConfigExample />
      </Example>
      <Example
        title="Animate anything"
        description="Numbers, units, colors, box shadows, radial gradients, path definitions - Pose animates them all."
      >
        <AnimateAnythingExample />
      </Example>
      <Example
        title="Declarative"
        description="Pose's declarative API enforces the separation of business and animation logic."
      >
        <DeclarativeExample />
      </Example>
      <Example
        title="Custom animations"
        description="Use the power of Popmotion or React Animated to create complex custom animations."
      >
        <CustomExample />
      </Example>
      <Example
        title="Orchestrate"
        description="Pose's component tree makes coordinating animations across multiple elements as easy as animating one."
      >
        <ChildrenExample />
      </Example>
      <Example
        title="Interactivity"
        description="Draggable elements are just a prop away, with more options coming soon."
      >
        <DraggableExample />
      </Example>
      <Example
        title="Passive values"
        description="Link values to the status of other values on the same poser or their parent."
      >
        <PassiveExample />
      </Example>
      <Example
        title="FLIPpin' great"
        description="Slow flow-breaking animations can be easily converted to fast transforms. Plus, an imperative FLIP API allows the poser to respond to DOM operations."
      >
        <FlipExample />
      </Example>
      <Example
        title="Awesome with React DOM"
        description="The freedom to use any animation, automatic child binding, FLIP-enhanced enter/exit transitions and more."
      >
        <ReactExample />
      </Example>
    </ExampleSection>
    <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
      Pose is a continuing project to simplify the creation of fluid and playful
      interfaces.
    </BlurbText>
    <CTA brandFill>
      <Link href="/pose/learn/get-started" prefetch>
        <a>Get started</a>
      </Link>
    </CTA>
  </Container>
);
