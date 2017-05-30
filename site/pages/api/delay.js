
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Delay

\`delay(duration <Number>, onComplete <Function>)\`

Delay is a dummy action that fires \`onComplete\` after a set duration of time. This is useful in composing with other actions.

## Example

\`\`\`javascript
import { delay, chain, physics } from 'popmotion';

chain([
  delay(200),
  physics({
    velocity: 100,
    onUpdate: console.log
  })
]).start();
\`\`\`
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="delay"
    section={section}
    category="actions"
    title="Delay"
    description="A dummy action that completes after a set duration of time."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
