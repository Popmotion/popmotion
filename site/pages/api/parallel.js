
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

export default () => (
  <ContentTemplate
    id="parallel"
    category="actions"
    title="Parallel"
    description="Control playback of multiple actions in parallel."
  >
    <Content />
  </ContentTemplate>
);
