
import { createElement } from 'react';
import marksy from 'marksy';
import { A, H1, H2, H3, H4, H5, P, Li, Ol, Ul, Hr, Code, Blockquote, ArticleHeader, Video } from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';
import ContentTemplate from '~/templates/content/Template';
import Example from '~/components/examples/Example';
import CodePen from '~/components/examples/CodePen';
import CodeSandbox from '~/components/examples/CodeSandbox';
import TOC from '~/templates/content/TableOfContents';

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
    Video,
    TOC: () => <TOC toc={content.toc} />,
    CodeSandbox
  }
});

const content = convertMarkdown(`# Styler

Stylers are performant style setters for HTML and SVG elements, optimised to work with animation libraries.

They batch updates to a single step on the [Framesync](/api/framesync) render loop, preventing layout thrashing and unnecessary renders.

They also allow \`transform\` properties to be set and animated independently.

The \`styler\` factory function is used to create a new styler for a single element or \`window\`.

## Usage

### Import

\`\`\`javascript
import styler from 'stylefire';
\`\`\`

### Create a styler

\`\`\`javascript
const div = document.querySelector('div');
const divStyler = styler(div);
\`\`\`

### Set style properties

The \`set\` method is used to schedule an update on the next render step.

\`\`\`javascript
divStyler.set({ x: 100 });
\`\`\`

Stylers understand default property types for many [CSS](/stylefire/api/html) and [SVG](/stylefire/api/svg) props. So even though we just set \`x\` as \`100\`, Stylefire will output \`transform: translateX(100px)\`.

### Forced render

Sometimes we need to force a render outside of the render loop. For instance, if we want to set some properties and then immediately measure the state of the element.

We can do so with the \`render\` method:

\`\`\`javascript
divStyler.set({ width: 'auto' });
divStyler.render();
\`\`\`

### Get style property

The \`get\` method can be used to read individual properties:

\`\`\`javascript
const div = document.querySelector('path');
const pathStyler = styler(path);
pathStyler.get('pathLength');
\`\`\`

**Note:** Due to the considerable filesize overhead in reading CSS \`transform\` properties, Stylefire will return the default value for any transform properties unless they've already been \`set\`.

## Methods

### set

Sets one or multiple properties, and schedules a render for the next available render step.

\`\`\`typescript
set(props: {}): this
set(key: string, prop: any): this
\`\`\`

### get

Returns the value of the provided key.

\`\`\`typescript
get(key: string): any
\`\`\`

### render

Immediately render, without waiting for the next frame.

\`\`\`typescript
render(): this
\`\`\``);

const Page = ({ section }) => (
  <ContentTemplate
    id="styler"
    section="api"
    undefined
    title="Styler"
    description="Create style setters for HTML, SVG and the viewport."
    published=""
    author="undefined"
    theme="stylefire"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
