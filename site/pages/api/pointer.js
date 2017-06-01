
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
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="pointer"
    section={section}
    category="actions"
    title="Pointer"
    description="Tracks mouse and touch movement."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
