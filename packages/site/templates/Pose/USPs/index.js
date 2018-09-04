import styled from 'styled-components';
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
import PluginsExample from './PluginsExample';
import Link from 'next/link';
import { CTA } from '~/templates/Popmotion/Masthead/styled';
import AnimateAnythingExample from './AnimateAnything';
import { ActionLink } from '~/templates/global-new/styled';

const MoreExamples = styled.div`
  margin: 20px auto 50px;
`;

export default class Examples extends React.Component {
  state = { framework: 'react' };

  setFramework = framework => () => this.setState({ framework });

  setFrameworkTo = {
    vue: this.setFramework('vue'),
    react: this.setFramework('react')
  };

  render() {
    const { framework } = this.state;

    return (
      <Container>
        <ExampleSection>
          <Example
            title="Magic animations"
            description="Pose can create animations based on the properties being animated."
          >
            <ZeroConfigExample
              currentExample={framework}
              setExampleTo={this.setFrameworkTo}
            />
          </Example>
          <Example
            title="Animate anything"
            description="Numbers, units, colors, box shadows, radial gradients, SVG path definitions - Pose animates it all."
          >
            <AnimateAnythingExample />
          </Example>
          <Example
            title="Custom animations"
            description="Use the power of Popmotion or React Animated to create complex custom animations."
          >
            <CustomExample />
          </Example>
          <Example
            title="Declarative"
            description="Pose's declarative API leaves your code squeaky clean and free of messy, brittle code."
          >
            <DeclarativeExample
              currentExample={framework}
              setExampleTo={this.setFrameworkTo}
            />
          </Example>
          <Example
            title="Orchestrate"
            description="With Pose, coordinating animations across multiple components is as easy as animating just one."
          >
            <ChildrenExample
              currentExample={framework}
              setExampleTo={this.setFrameworkTo}
            />
          </Example>
          <Example
            title="Interactivity"
            description="Hovering, dragging, pressing, focusing. It's all just a prop away."
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
            title="Awesome with React DOM"
            description="The freedom to use any animation, automatic child binding, FLIP-enhanced enter/exit transitions and more."
          >
            <ReactExample />
          </Example>
          {/* <Example
            title="Popmotion Pro"
            description="An amazing series of plugins, like React Pose Text, with exclusive commercial licenses for Popmotion supporters."
          >
            <PluginsExample />
          </Example> */}
        </ExampleSection>
        <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
          Pose is a continuing project to simplify the creation of fluid and
          playful interfaces.
        </BlurbText>
        <ActionLink cta href="/pose/learn/get-started">
          Get started
        </ActionLink>

        <MoreExamples>
          <Link href="/pose/examples">
            <a>See all examples</a>
          </Link>
        </MoreExamples>
      </Container>
    );
  }
}
