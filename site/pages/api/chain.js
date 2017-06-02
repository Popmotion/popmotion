
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
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="chain"
    section={section}
    category="actionComposition"
    title="Chain"
    description="Chain a linear sequence of actions."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
