const escapeBackticks = (string) => string.replace(/`/g, '\\`');

module.exports = (body, { category, id, title, description, published }) => `
import { createElement } from 'react';
import marksy from 'marksy/components';
import { A, H1, H2, H3, H4, P, Li, Ul, Hr, Code, Pre } from '~/templates/global/primatives';
import { Img } from '~/templates/content/primatives';
import ContentTemplate from '~/templates/content/Template';
import Example from '~/components/examples/Example';
import CodePen from '~/components/examples/CodePen';

const removeEmpty = filename => filename !== '';

const convertMarkdown = marksy({
  createElement,
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  code: Code,
  li: Li,
  ul: Ul,
  hr: Hr,
  img: Img,
  components: {
    Example,
    CodePen
  }
});

const content = convertMarkdown(\`${escapeBackticks(body)}\`);

const Page = ({ section }) => (
  <ContentTemplate
    id="${id}"
    section={section}
    category="${category}"
    title="${title}"
    description="${description}"
    published="${published}"
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname, req }) => {
  const [section] = pathname.split('/').filter(removeEmpty);

  return { section };
};

export default Page;
`;
