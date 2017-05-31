const escapeBackticks = (string) => string.replace(/`/g, '\\`');

module.exports = (body, { category, id, title, description }) => `
import markdown from 'markdown-in-js';
import { A, H1, H2, H3, P, Li, Ul, Code, Pre } from '~/templates/content/primatives';
import ContentTemplate from '~/templates/content/Template';

const Content = () => markdown({
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  pre: Pre
})\`${escapeBackticks(body)}\`;
const Page = ({ section }) => (
  <ContentTemplate
    id="${id}"
    section={section}
    category="${category}"
    title="${title}"
    description="${description}"
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
`;
