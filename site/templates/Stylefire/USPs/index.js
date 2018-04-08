import { Container, Blurb, BlurbText } from '~/templates/Popmotion/USPs/styled';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';
import Example from '~/templates/Popmotion/USPs/Example';
import RenderBatchingExample from './RenderBatchingExample';
import CSSVariableExample from './CSSVariableExample';
import PathDrawingExample from './PathDrawingExample';
import TransformSVGExample from './TransformSVGExample';
import Link from 'next/link';
import { CTA } from '~/templates/Popmotion/Masthead/styled';

export default () => (
  <Container>
    <Blurb>Pump it out</Blurb>
    <ExampleSection>
      <Example
        title="Render batching"
        description="Stylefire batches all rendering to a single moment, once per frame."
      >
        <RenderBatchingExample />
      </Example>
      <Example
        title="Transform SVG like it's CSS"
        description="Stylefire standardises the weird SVG transform model with CSS."
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
        title="CSS variables"
        description="Stylefire is fully-compatible with CSS variables, so they can be performantly animated."
      >
        <CSSVariableExample />
      </Example>
      <Example
        title="Automatic vendor prefixing"
        description="Stylefire will test and detect each new property key for support on the current browser."
      >
        <div />
      </Example>
    </ExampleSection>
    <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
      At ~4kb, this mighty little library can fit into any project.
    </BlurbText>
    <CTA brandFill>
      <Link href="/stylefire/learn/get-started" prefetch>
        <a>Get started</a>
      </Link>
    </CTA>
  </Container>
);
