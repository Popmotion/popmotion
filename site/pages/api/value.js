
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Value

\`value(current <Number>, onUpdate <Function>)\`

## Methods

- \`set <Number>\`: Updates \`current\` and schedules an update.
`;

export default () => (
  <ContentTemplate
    id="value"
    category="actions"
    title="Value"
    description="A simple value that updates when a new number is passed to `set`."
  >
    <Content />
  </ContentTemplate>
);
