
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
# Delay

Fires \`complete\` after the defined interval.

## Import

\`\`\`javascript
import { delay } from 'popmotion';
\`\`\`

## Usage

\`\`\`javascript
delay(100).start({
  complete: () => console.log('complete!')
});
\`\`\`

Useful for delaying actions in a \`chain\`.

\`\`\`javascript
chain(
  delay(100),
  tween({ to: 400, duration: 500 })
);
\`\`\`

### Action methods

\`delay()\` returns:

- \`start(update | { update, complete })\`: Starts the action and returns a subscription.

### Subscription methods

\`delay().start()\` returns:

- \`stop(): void\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="delay"
    section="api"
    category="compositors"
    title="Delay"
    description="Fires complete after the defined interval."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
