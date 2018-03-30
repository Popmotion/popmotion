const escapeBackticks = string => string.replace(/`/g, '\\`');

module.exports = (
  body,
  { category, id, title, description, published, siteName, section, next }
) => `
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

const content = convertMarkdown(\`${escapeBackticks(body)}\`);

const Page = ({ section }) => (
  <ContentTemplate
    id="${id}"
    section="${section}"
    ${category && `category="${category}"`}
    title="${title}"
    description="${description}"
    published="${published}"
    theme="${siteName}"
    ${next && `next="${next}"`}
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
`;
