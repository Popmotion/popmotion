
import { createElement } from 'react';
import marksy from 'marksy/components';
import { A, H1, H2, H3, H4, H5, P, Li, Ol, Ul, Hr, Code, Blockquote, ArticleHeader, Video } from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';
import ContentTemplate from '~/templates/content/Template';
import Example from '~/components/examples/Example';
import CodePen from '~/components/examples/CodePen';

const removeEmpty = filename => filename !== '';

const convertMarkdown = marksy({
  createElement,
  elements: {
    a: A,
    h1: ArticleHeader,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P,
    code: Code,
    li: Li,
    ol: Ol,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote,
  },
  components: {
    Example,
    CodePen,
    Video
  }
});

const content = convertMarkdown(`
# Spring

A spring animation based on \`stiffness\`, \`damping\` and \`mass\`.

This simulation offers smoother motion and a greater variety of spring-feels than the basic spring integration found in [physics](/api/physics).

It's based on the differential equations governing a [damped harmonic oscillator](https://en.wikipedia.org/wiki/Harmonic_oscillator#Damped_harmonic_oscillator), the same as those underlying Apple's \`CASpringAnimation\`.

## Import

\`\`\`javascript
import { spring } from 'popmotion';
\`\`\`

## Usage

Animate numbers:

\`\`\`javascript
spring({ to: 500, stiffness: 200, damping: 20 })
  .start((v) => console.log(v))
\`\`\`

Or optionally provide vectors:

\`\`\`javascript
spring({
  to: [500, 100],
  stiffness: 300,
  damping: [20, 10]
})
\`\`\`

\`\`\`javascript
spring({
  to: { x: 200, y: 300, z: 25 }
})
\`\`\`

## Props

- \`from: number | Vector = 0.0\`: Value to start from.
- \`to: number | Vector = 0.0\`: Value to spring to.
- \`stiffness: number | Vector = 100\`: Spring stiffness.
- \`damping: number | Vector = 10\`: Strength of opposing force.
- \`mass: number | Vector = 1.0\`: Mass of the moving object.
- \`velocity: number | Vector = 0.0\`: Initial velocity of spring.
- \`restDelta: number = 0.01\`: End animation if distance to \`to\` is below this value **and** \`restSpeed\` is \`true\`.
- \`restSpeed: number = 0.01\`: End animation if speed drops below this value **and** \`restDelta\` is \`true\`.

## Methods

### Action methods

\`spring()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`spring().start()\` returns:

- \`stop(): void\`

## Example

<CodePen id="mqKyjd" />
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="spring"
    section="api"
    category="animation"
    title="Spring"
    description="Accurate, versatile spring animation."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
