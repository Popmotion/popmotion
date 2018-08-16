
import { createElement } from 'react';
import marksy from 'marksy/components';
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

const content = convertMarkdown(`
# Viewport styler

When \`styler\` is provided \`window\`, it returns a styler capable of scrolling the viewport.

\`\`\`javascript
const viewportStyler = styler(window);

viewportStyler.set('scrollTop', 20);
\`\`\`

It supports \`scrollTop\` and \`scrollLeft\` props.`);

const Page = ({ section }) => (
  <ContentTemplate
    id="viewport"
    section="api"
    category="stylers"
    title="Viewport"
    description="Styler for setting viewport scroll position."
    published=""
    theme="stylefire"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
