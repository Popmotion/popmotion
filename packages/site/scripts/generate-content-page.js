const escapeBackticks = (string) => string.replace(/`/g, '\\`');

module.exports = (
  body,
  {
    category,
    id,
    title,
    description,
    published,
    siteName,
    section,
    next,
    author,
  },
  isHomepage = false
) =>
  isHomepage
    ? `
import marksy from 'marksy';
import Homepage from '~/components/template';
import { A, H1, H2, H3, H4, H5, P, Li, Ol, Ul, Hr, Code, Blockquote, ArticleHeader, Video } from '~/templates/global/styled';
import { createElement } from 'react';

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
    blockquote: Blockquote,
  }
});

const Page = ({ section }) => (
  <Homepage tableOfContents={content.toc}>
    {content.tree}
  </Homepage>
);

const content = convertMarkdown(\`${escapeBackticks(body)}\`);

export default Page;
`
    : `
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

const content = convertMarkdown(\`${escapeBackticks(body)}\`);

const Page = ({ section }) => (
  <ContentTemplate
    id="${id}"
    section="${section}"
    ${category && `category="${category}"`}
    title="${title}"
    description="${description}"
    published="${published}"
    author="${author}"
    theme="${siteName}"
    ${next && `next="${next}"`}
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
`;
