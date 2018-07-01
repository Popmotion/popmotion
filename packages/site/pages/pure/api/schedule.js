
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
# Schedule

\`schedule\` can use one action to control the output of another.

For instance, by default \`pointer\` outputs only when the pointer updates.

With \`schedule\`, you could compose it with \`everyFrame\` to output the latest \`pointer\` value every frame.

## Import

\`\`\`javascript
import { schedule } from 'popmotion';
\`\`\`

## Usage

\`\`\`typescript
schedule(scheduler: Action, subject: Action): Action
\`\`\`

\`\`\`javascript
// \`pointer\` will output at most once every frame
schedule(
  everyFrame(),
  pointer()
).start(({ x, y }) => {});
\`\`\`

## Methods

### Action methods

\`schedule()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`schedule().start()\` returns:

- \`stop(): void\`

`);

const Page = ({ section }) => (
  <ContentTemplate
    id="schedule"
    section="api"
    category="compositors"
    title="Schedule"
    description="Use an action to control the output of another."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
