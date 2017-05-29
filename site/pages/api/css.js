
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# CSS Renderer

The CSS renderer provides a simple and optimised \`get\`/\`set\` interface for DOM elements.

\`css(element <Node>, props <Object>)\`

## Methods
- \`get(key <String>\`: Get the property of the provided key.
- \`set(props <Object>)\` | \`set(key <String>, value)\`: Set provided property(s) and schedule render for next frame.
- \`render()\`: Immediately render.

## Props
- \`enableHardwareAcceleration <Boolean>\`: (default: \`true\`)

## Getting \`transform\` properties
If a \`transform\` property isn't present in the caching layer (because it hasn't previously been set by the developer), firing \`get\` on a property will return its default value (\`1\` for scale props, \`0\` for others).

This is because browsers return the \`transform\` attribute as a matrix, and the size of the code required to convert these is prohibative. However it'd be relatively simple for someone to develop an alternative CSS renderer as a drop-in replacement.

## Property mapping
The following alias' can be optionally used for setting CSS props:

- \`x\` -> \`translateX\`
- \`y\` -> \`translateY\`
- \`z\` -> \`translateZ\`

## Example

\`\`\`javascript
import { css } from 'popmotion';

const div = document.querySelector('div');
const divRenderer = css(div);

divRenderer.get('opacity'); // Reads opacity from div
divRenderer.set({
  x: 10, // default value types to \`px\`
  y: 10
}); // set and schedule for render
\`\`\`
`;

export default () => (
  <ContentTemplate
    id="css"
    category="renderers"
    title="CSS Renderer"
    description="Optimised CSS renderer."
  >
    <Content />
  </ContentTemplate>
);
