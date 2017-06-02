
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
# Parallel

Control playback of multiple actions in parallel.

\`parallel(actions <Array>, props <Object>)\`

## Example

\`\`\`javascript
import { parallel, tween } from 'popmotion';

parallel([
  tween(props),
  tween(props)
]).start()
\`\`\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="parallel"
    section={section}
    category="actionComposition"
    title="Parallel"
    description="Control playback of multiple actions in parallel."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
