
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
# Parallel

Control an n-dimensional array of actions in parallel, and output as an array.

## Import

\`\`\`javascript
import { parallel } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
parallel(
  tween({ from: 40, to: 50 }),
  spring({ to: 500 })
).start(([ tweenOutput, springOutput ]) => {});
\`\`\`

\`parallel\` outputs max once per frame.

## Methods

### Action methods

\`parallel()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`parallel().start()\` returns:

- \`stop(): void\`

**Note:** If all actions return the same API, for instance all composed actions are \`tween\`s, the \`parallel\` subscription will also return a version of that API that controls all child actions.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="parallel"
    section="api"
    category="compositors"
    title="Parallel"
    description="Control multiple actions in parallel and output as an array."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
