
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Chain

Chain a linear sequence of actions. The next action in the sequence is started when the previous action is completed.

\`chain(actions <Array>)\`

## Example

\`\`\`javascript
import { chain, tween, stagger } from 'popmotion';

chain([
  tween(0, 1),
  tween(1, 1000)
]).start();
\`\`\`
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="chain"
    section={section}
    category="actions"
    title="Chain"
    description="Chain a linear sequence of actions."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
