
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# SVG Path Renderer

- Docs coming soon
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="svg-path"
    section={section}
    category="renderers"
    title="SVG Path Renderer"
    description="Optimised SVG Path renderer."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
