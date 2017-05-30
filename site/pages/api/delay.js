
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
