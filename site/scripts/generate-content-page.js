const escapeBackticks = (string) => string.replace(/`/g, '\\`');

module.exports = (body, { category, id, title, description }) => `
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown\`${escapeBackticks(body)}\`;

export default () => (
  <ContentTemplate
    id="${id}"
    category="${category}"
    title="${title}"
    description="${description}"
  >
    <Content />
  </ContentTemplate>
);
`;
