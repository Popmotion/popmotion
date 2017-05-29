
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# SVG Renderer

- Docs coming soon
`;

export default () => (
  <ContentTemplate
    id="svg"
    category="renderers"
    title="SVG Renderer"
    description="Optimised SVG renderer."
  >
    <Content />
  </ContentTemplate>
);
