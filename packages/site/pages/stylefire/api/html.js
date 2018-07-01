
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
# HTML styler

When [\`styler\`](/stylefire/stylefire) is provided a \`HTMLElement\`, it returns a styler capable of setting CSS and scroll props.

\`\`\`javascript
const divStyler = styler(document.getElementByTag('div'))

divStyler.set({ x: 0, scale: 1.2 })
\`\`\`

## Config

A configuration argument can be **optionally** passed to \`styler\` as the second argument:

\`\`\`javascript
const divStyler = styler(div, {});
\`\`\`

### enableHardwareAcceleration

If set to \`false\`, Stylefire won't optimise animations with the GPU.

This can result in higher image quality when scaling up elements.

## Props

### Property alias

The following alias' can be optionally used for setting CSS props:

* \`x\`: \`translateX\`
* \`y\`: \`translateY\`
* \`z\`: \`translateZ\`
* \`originX\`: \`transformOriginX\`
* \`originY\`: \`transformOriginY\`
* \`originZ\`: \`transformOriginZ\`

### Transform property order

The \`transform\` property can be set directly, but in most cases it's simpler to animate \`rotate\`, \`translate\` and \`scale\` as individual props.

In accordance with the [CSS Transforms Level 2 spec](https://drafts.csswg.org/css-transforms-2/#individual-transforms), if set individually these properties will be set in the following order:

\`translate\`, \`scale\`, \`rotate\`

### CSS variables

[CSS variables](https://css-tricks.com/difference-between-types-of-css-variables/#article-header-id-1) can be set and animated just like any other property:

\`\`\`javascript
const htmlStyler = css(document.documentElement);

htmlRenderer.set('--bg-color', '#000');
\`\`\`

### Supported props

**All CSS properties are supported**, in addition to these scroll properties:

* \`scrollX\`
* \`scrollY\`

If \`window\` is passed to styler, these are the **only** two supported props.

### Prop types

For convenience and safety, many props are mapped to [value types](https://github.com/Popmotion/popmotion/tree/master/packages/style-value-types) for safety and convenience.

#### Color props

* \`color\`: \`color\`
* \`backgroundColor\`: \`color\`
* \`outlineColor\`: \`color\`
* \`fill\`: \`color\`
* \`stroke\`: \`color\`

#### Border props

* \`borderColor\`: \`color\`
* \`borderTopColor\`: \`color\`
* \`borderRightColor\`: \`color\`
* \`borderBottomColor\`: \`color\`
* \`borderLeftColor\`: \`color\`
* \`borderRadius\`: \`px\`

#### Positioning

* \`width\`: \`px\`
* \`height\`: \`px\`
* \`top\`: \`px\`
* \`left\`: \`px\`
* \`bottom\`: \`px\`
* \`right\`: \`px\`

#### Transform

* \`rotate\`: \`degrees\`
* \`rotateX\`: \`degrees\`
* \`rotateY\`: \`degrees\`
* \`rotateZ\`: \`degrees\`
* \`scale\`: \`scale\`
* \`scaleX\`: \`scale\`
* \`scaleY\`: \`scale\`
* \`scaleZ\`: \`scale\`
* \`skewX\`: \`degrees\`
* \`skewY\`: \`degrees\`
* \`distance\`: \`px\`
* \`translateX\`: \`px\`
* \`translateY\`: \`px\`
* \`translateZ\`: \`px\`
* \`perspective\`: \`px\`
* \`opacity\`: \`alpha\`

`);

const Page = ({ section }) => (
  <ContentTemplate
    id="html"
    section="api"
    category="stylers"
    title="HTML"
    description="Styler for HTML that supports CSS variables, individual transform props and prevents layout thrashing."
    published=""
    theme="stylefire"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
