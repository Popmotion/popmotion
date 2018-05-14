import { Container, Blurb, BlurbText } from '~/templates/Popmotion/USPs/styled';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';
import Example from '~/templates/Popmotion/USPs/Example';
import RenderBatchingExample from './RenderBatchingExample';
import CSSVariableExample from './CSSVariableExample';
import ScrollExample from './ScrollExample';
import PathDrawingExample from './PathDrawingExample';
import TransformSVGExample from './TransformSVGExample';
import IndividualTransformExample from './IndividualTransformExample';
import Link from 'next/link';
import { CTA } from '~/templates/Popmotion/Masthead/styled';

export default () => (
  <Container>
    <Blurb>A tiny, </Blurb>
    <ExampleSection>
      <Example
        title="Render batching"
        description="Stylefire batches all rendering once per frame to avoid layout thrashing."
      >
        <RenderBatchingExample />
      </Example>
      <Example
        title="Individual transform properties"
        description="Set and animate transform properties independently from one another."
      >
        <IndividualTransformExample />
      </Example>
      <Example
        title="Transform SVG like it's CSS"
        description="Stylefire standardises difficult SVG transforms with the simple CSS model."
      >
        <TransformSVGExample />
      </Example>
      <Example
        title="Path drawing"
        description="Stylefire lets you set path lengths as simple percentages, making the drawing effect a breeze."
      >
        <PathDrawingExample />
      </Example>
      <Example
        title="Scroll away"
        description="Supports scrollTop and scrollLeft properties for both HTML elements and the viewport."
      >
        <ScrollExample />
      </Example>
      <Example
        title="CSS variables"
        description="Stylefire is fully-compatible with CSS variables."
      >
        <CSSVariableExample />
      </Example>
      <Example
        title="Automatic vendor prefixing"
        description="Stylefire will automatically test properties for support on the current browser."
      >
        <div />
      </Example>
    </ExampleSection>
    <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
      At ~3.5kb, this mighty little library can fit into any project.
    </BlurbText>
    <CTA brandFill>
      <Link href="/stylefire/api/styler" prefetch>
        <a>Get started</a>
      </Link>
    </CTA>
  </Container>
);
