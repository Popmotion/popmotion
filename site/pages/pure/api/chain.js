
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
# Chain

Chain a sequence of actions, move to the next when the current one completes.

## Import

\`\`\`javascript
import { chain } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
chain(
  tween({ to: 300 }),
  spring({ from: 300, to: 0 })
).start({
  update: (v) => console.log(v),
  complete: () => console.log('All actions complete')
})
\`\`\`

## Methods

### Action methods

\`chain()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.


### Subscription methods

\`chain().start()\` returns:

- \`stop(): void\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="chain"
    section="api"
    category="compositors"
    title="Chain"
    description="Chain a sequence of actions, move to the next when the current one completes."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
