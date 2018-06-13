
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
# Install Popmotion

## Package managers

### npm

\`\`\`bash
npm install popmotion --save
\`\`\`

### yarn

\`\`\`bash
yarn add popmotion
\`\`\`

## File include

**Note:** The Popmotion documentation uses the \`import\` syntax for importing individual modules.

**If you use one of the following installation methods, Popmotion will be available on the global \`popmotion\` variable.**

So, when you see in the docs \`import { tween } from 'popmotion'\`, you will use \`const { tween } = popmotion\` instead.

### Download

You can download the latest version of Popmotion at https://unpkg.com/popmotion/dist/popmotion.global.min.js

### \`script\` include:

Or include it directly in your HTML with this \`script\` tag:

\`\`\`html
<script src="https://unpkg.com/popmotion/dist/popmotion.global.min.js"></script>
\`\`\`

### CodePen

You can fork the [Popmotion playground on CodePen](https://codepen.io/popmotion/pen/zPjXWa?editors=0010), which is set up with the latest version of Popmotion.

You an also add Popmotion to any existing CodePen project by clicking on Settings > JavaScript and then pasting \`https://unpkg.com/popmotion/dist/popmotion.global.min.js\` into the "Add External JavaScript" field.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="install"
    section="learn"
    category="basics"
    title="Install Popmotion"
    description="Overview of Popmotion's different installation options."
    published=""
    theme="pure"
    next="get-started"
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
