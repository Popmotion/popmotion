const escapeBackticks = (string) => string.replace(/`/g, '\\`');

module.exports = (body, { category, id, title, description }) => `
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown\`${escapeBackticks(body)}\`;
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
