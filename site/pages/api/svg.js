
import marksy from 'marksy';
import { A, H1, H2, H3, P, Li, Ul, Code, Pre } from '~/templates/content/primatives';
import ContentTemplate from '~/templates/content/Template';

const convertMarkdown = marksy({
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  li: Li,
  ul: Ul
});

const content = convertMarkdown(`
# SVG Renderer

- Docs coming soon
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="svg"
    section={section}
    category="renderers"
    title="SVG Renderer"
    description="Optimised SVG renderer."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
