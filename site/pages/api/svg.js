
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# SVG Renderer

- Docs coming soon
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="svg"
    section={section}
    category="renderers"
    title="SVG Renderer"
    description="Optimised SVG renderer."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
