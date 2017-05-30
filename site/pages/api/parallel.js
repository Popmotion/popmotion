
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
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="parallel"
    section={section}
    category="actions"
    title="Parallel"
    description="Control playback of multiple actions in parallel."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
