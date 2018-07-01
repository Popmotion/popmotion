
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
# Stagger

Stagger the execution of a series of actions.

## Import 

\`\`\`javascript
import { stagger } from 'popmotion';
\`\`\`

## Usage

\`\`\`typescript
stagger(actions: Action[], interval: number | (i: number) => number): Action
\`\`\`

\`stagger\` accepts two arguments, an array of actions and an \`interval\`:

\`\`\`javascript
stagger([
  tween(),
  spring()
], 100)
\`\`\`

When started, it outputs the values as an array. Actions that haven't yet started will output \`undefined\`, and you can define a default.

\`\`\`javascript
stagger([
  tween(),
  spring()
], 100).start((values) => values.forEach((v = 0, i) => {
  console.log(v);
}))
\`\`\`

## Methods

### Action methods

\`stagger()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the tween and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`stagger().start()\` returns:

- \`stop(): void\`

`);

const Page = ({ section }) => (
  <ContentTemplate
    id="stagger"
    section="api"
    category="compositors"
    title="Stagger"
    description="Stagger the execution of a series of actions."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
