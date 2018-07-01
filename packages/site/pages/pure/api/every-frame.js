
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
# Every Frame

\`everyFrame\` fires once per frame, and provides \`update\` with the duration of time since it started.

## Import

\`\`\`javascript
import { everyFrame } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
everyFrame()
  .start((timeSinceStart) => console.log(timeSinceStart));
\`\`\`

## Methods

### Action methods

\`everyFrame()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.


### Subscription methods

\`everyFrame().start()\` returns:

- \`stop(): void\`

## Example

<CodePen id="XzYJvP" />
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="every-frame"
    section="api"
    category="animation"
    title="Every Frame"
    description="Fires with timestamp, once every frame."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
