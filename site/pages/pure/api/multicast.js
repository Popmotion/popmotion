
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
# Multicast

The multicast reaction provides a reaction that many other reactions can \`subscribe\` to.

It also helps manage actions: if a \`multicast\` reaction is passed to another \`action\`, the first \`action\` will automatically \`stop\`.

## Import

\`\`\`javascript
import { multicast } from 'popmotion';
\`\`\`

## Usage

### Subscription

Provide a reactions to \`mulitcast.subscribe()\`:

\`\`\`javascript
const foo = multicast();
foo.subscribe((v) => console.log('first subscriber', v));
foo.subscribe((v) => console.log('second subscriber', v));
\`\`\`

When the multicast reaction is \`update\`d, all listeners will fire:

\`\`\`javascript
foo.update(5);
// first subscriber, 5
// second subscriber, 5
\`\`\`

### Automatically stop previous action

Passing the multicast reaction to a new action will stop the previous one:

\`\`\`javascript
tween().start(foo);
spring().start(foo); // This will stop \`tween\`
\`\`\`

### Chain methods

\`multicast\` can be chained in the same way as [actions](/api/action).

\`\`\`javascript
const double = (v) => v * 2;
const px = (v) => v + 'px';

const foo = multicast().pipe(double, px);

foo.update(5); // 10px
\`\`\`

### Unsubscribe

\`subscribe\` returns an \`unsubscribe\` method:

\`\`\`javascript
const foo = multicast();
const sub = foo.subcribe(console.log);

sub.unsubscribe();
\`\`\`

## Methods

### Multicast methods

\`multicast()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new reaction that will run \`update\` values through this sequence of functions.
- \`subscribe(update | { update, complete, error })\`: Returns a subscription.
- \`stop()\`: Stops current parent action.
- \`while((v: any) => boolean)\`: Returns a new reaction that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`multicast().subscribe()\` returns:

- \`unsubscribe()\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="multicast"
    section="api"
    category="reactions"
    title="Multicast"
    description="A reaction that multiple reactions can subscribe to."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
