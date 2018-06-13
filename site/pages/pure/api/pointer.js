
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
# Pointer

Outputs the screen position of a single mouse or touch point.

## Import

\`\`\`javascript
import { pointer } from 'popmotion';
\`\`\`

## Usage

### Absolute position

\`\`\`javascript
pointer()
  .start(({ x, y }) => console.log(x, y));
\`\`\`

### Relative position

Provide initial \`x\` and \`y\` properties to output pointer movement **applied to this initial point**.

\`\`\`javascript
pointer({ x: 200, y: 175 })
  .start(({ x, y }) => console.log(x, y));
\`\`\`


Reactions are provided the following pointer data:

- \`x\`, \`y\`: Alias of \`clientX\` / \`clientY\`, or 
- \`clientX\`, \`clientY\`: Position relative to the viewport.
- \`pageX\`, \`pageY\`: Position relative to the document.

To apply the change in pointer movement to, for instance, a slider, you can use the [\`deltaOffset\`](/api/delta-pointer) action.

## Props

- \`preventDefault: boolean = true\`
- \`x?: number\`: If defined, apply pointer \`y\` movement to this number.
- \`y?: number\`: If defined, apply pointer \`y\` movement to this number.

## Methods

### Action methods

\`pointer()\` returns:

- \`filter((v: any) => boolean)\`: Returns a new action that filters out values when the provided function returns \`false\`.
- \`pipe(...funcs: Array<(v) => v)\`: Returns a new action that will run \`update\` values through this sequence of functions.
- \`start(update | { update, complete })\`: Starts the action and returns a subscription.
- \`while((v: any) => boolean)\`: Returns a new action that will \`complete\` when the provided function returns \`false\`.

### Subscription methods

\`pointer().start()\` returns:

- \`stop(): void\`

## Example

<CodePen id="RjBZoe" />
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="pointer"
    section="api"
    category="input"
    title="Pointer"
    description="Outputs the screen position of a single mouse or touch point."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
