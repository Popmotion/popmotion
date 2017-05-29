
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# SVG Path Renderer

- Docs coming soon
`;

export default () => (
  <ContentTemplate
    id="svg-path"
    category="renderers"
    title="SVG Path Renderer"
    description="Optimised SVG Path renderer."
  >
    <Content />
  </ContentTemplate>
);
