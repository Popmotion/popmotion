
import { createElement } from 'react';
import marksy from 'marksy/components';
import { A, H1, H2, H3, H4, P, Li, Ul, Hr, Code, Blockquote, ArticleHeader } from '~/templates/global/styled';
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
    p: P,
    code: Code,
    li: Li,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote,
  },
  components: {
    Example,
    CodePen
  }
});

const content = convertMarkdown(`
#
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="svg-props"
    section="api"
    category="svg"
    title="Config"
    description="Config options for SVG styler"
    published=""
    theme="stylefire"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
