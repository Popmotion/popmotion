
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
# Crossfade

Fade between two numerical actions.

## Import

\`\`\`javascript
import { crossfade } from 'popmotion';
\`\`\`

## Usage

Example: blend from one tween to another:

\`\`\`javascript
const blendTweens = crossfade(
  tween({ from: 0, to: 500, elapsed: 200 }),
  tween({ from: 500, to: 0 })
).start((v) => console.log(v));

tween({ duration: 100 }).start(blendTweens.setBalance);
\`\`\`

## Methods

### Action methods

\`crossfade()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.


### Subscription methods

\`crossfade().start()\` returns:

- \`setBalance(): this\`: Sets the balance of blended output from the first action (\`0\`) to the second (\`1\`).
- \`stop(): void\`

## Example

<CodePen id="ooPjxj" />
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="crossfade"
    section="api"
    category="compositors"
    title="Crossfade"
    description="Fade between two numerical actions."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
