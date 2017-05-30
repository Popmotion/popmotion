
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
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
