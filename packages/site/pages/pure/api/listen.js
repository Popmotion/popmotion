
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
# Listen

\`listen\` creates DOM event listeners as an action stream.

## Import

\`\`\`javascript
import { listen } from 'popmotion';
\`\`\`

## Usage

To listen to an event, provide a DOM element and an event name to \`listen\`:

\`\`\`javascript
listen(document, 'mousemove')
  .start((e) => console.log(e));
\`\`\`

### Multiple events

Multiple events can be subscribed to by providing a space-delimited string:

\`\`\`javascript
listen(document, 'touchstart touchend')
\`\`\`

### Chainable actions

The primary benefit of using \`listen\` is passing each event through the chainable actions like \`filter\`. For instance, here's an event listener that only fires when two or more touches are detected:

\`\`\`javascript
const onMultitouch = listen(document, 'touchstart')
  .filter(({ touches }) => touches.length > 1);

onMultitouch.start((e) => ...);
\`\`\`

### Options

\`listen\` optionally accepts a third argument of options:

\`\`\`typescript
type EventOpts = boolean | {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
};

listen(element: Element, eventNames: string, opts?: EventOpts): Action
\`\`\`

## Methods

### Action methods

\`listen()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`listen().start()\` returns:

- \`stop(): void\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="listen"
    section="api"
    category="input"
    title="Listen"
    description="Creates a DOM event listener as an action stream."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
