
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
  pre: Code
});

const content = convertMarkdown(`
# Value

\`value(current <Number>, onUpdate <Function>)\`

## Methods

- \`set <Number>\`: Updates \`current\` and schedules an update.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="value"
    section={section}
    category="actions"
    title="Value"
    description="A simple value that updates when a new number is passed to `set`."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
