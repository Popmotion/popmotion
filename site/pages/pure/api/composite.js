
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
# Composite

Control a named map of actions, and output to the same structure.

## Import

\`\`\`javascript
import { composite } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
composite({
  x: tween({ from: 60, to: 400 }),
  y: physics({ from: 60, velocity: 300 })
}).start(({ x, y }) => {});
\`\`\`

\`composite\` outputs at most once per frame.

## Methods

### Action methods

\`composite()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`composite().start()\` returns:

- \`stop(): void\`

**Note:** If all actions return the same API, for instance all composed actions are \`tween\`s, the \`composite\` subscription will also return a version of that API that controls all child actions.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="composite"
    section="api"
    category="compositors"
    title="Composite"
    description="Control a map of actions and output to that same structure."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
