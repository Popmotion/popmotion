
import markdown from 'markdown-in-js';
import { A, H1, H2, H3, P, Code } from '~/components/primatives';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown({
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code
})`
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
