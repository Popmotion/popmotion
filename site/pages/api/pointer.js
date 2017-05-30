
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Pointer

Creates a composite action that tracks the \`x\` and \`y\` movement of touch and mouse events.

\`pointer(e <MouseEvent | TouchEvent>, props <Object>)\`

## Example

\`\`\`javascript
import { pointer } from 'popmotion';

document.addEventListener('mousedown', (e) => {
  pointer(e, {
    preventDefault: true,
    onUpdate: ({ x, y }) => console.log(x, y)
  }).start();
});
\`\`\`

## Props

- \`preventDefault <Boolean>\`: If \`true\`, fire \`preventDefault\` on \`mousemove\` or \`touchmove\` events (default \`true\`)
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="pointer"
    section={section}
    category="actions"
    title="Pointer"
    description="Tracks mouse and touch movement."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
