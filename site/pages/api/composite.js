
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Composite Action

Control multiple named actions simultaneously. Output value is an object. Composite actions can be nested.

\`composite(actions <Object>, props <Object>)\`

## Example

\`\`\`javascript
import { composite, tween } from 'popmotion';

const tweenShadowCSSValue = composite({
  foo: physics(...opts),
  bar: physics(...opts)
}, {
  onUpdate: (v) => console.log(v) // { foo: 0, bar: 0 }
}).start();
\`\`\`
`;

export default () => (
  <ContentTemplate
    id="composite"
    category="actions"
    title="Composite"
    description="Control multiple named actions simultaneously."
  >
    <Content />
  </ContentTemplate>
);
