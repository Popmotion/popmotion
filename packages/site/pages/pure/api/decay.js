
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
# Decay

\`decay\` returns an [action](/api/action) that exponentially decelerates a number and velocity to an automatically generated target value. This target can be modified by the user.

This animation is particularly useful for implementing momentum scrolling.

## Import

\`\`\`javascript
import { decay } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
decay({ velocity: 200, from: 50 })
  .start((v) => console.log(v));
\`\`\`

## Props

- \`velocity: number = 0\`: Initial velocity to decelerate from.
- \`from: number = 0\`: Number to apply movement to.
- \`power: number = 0.8\`: A constant with which to calculate a target value. Higher power = further target. \`0.8\` should be okay.
- \`timeConstant: number = 350\`: Adjusting the time constant will change the duration of the deceleration, thereby affecting its feel.
- \`restDelta: number = 0.5\`: Automatically completes the action when the calculated value is this far away from the target.
- \`modifyTarget: (v: number) => number\`: A function that receives the calculated target and returns a new one. Useful for snapping the target to a grid, for example.

## Methods

### Action methods

\`decay()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.


### Subscription methods

\`decay().start()\` returns:

- \`stop(): void\`

## Example

<CodePen id="Kyewbv" />
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="decay"
    section="api"
    category="animation"
    title="Decay"
    description="Exponential deceleration, primarily for use in momentum scrolling."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
