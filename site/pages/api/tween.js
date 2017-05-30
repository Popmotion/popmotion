
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
# Tween

- \`tween(props <Object>)\`

## Props

- \`duration <Number>\`: The amount of time for the tween to take, in milliseconds.
- \`ease <Function>\`: Easing function.
- \`from <Number>\`: The number to tween from. (default \`0\`)
- \`to <Number>\`: The number to tween to. (default: \`1\`)
- \`flip <Number>\`: Number of times to flip tween on tween complete. (default: \`0\`)
- \`loop <Number>\`: Number of times to restart tween from beginning on tween complete. (default: \`0\`)
- \`yoyo <Number>\`: Number of times to reverse tween on tween complete. (default: \`0\`)

## Methods

### \`getElapsed\`
Get the elapsed time of the tween.

### \`flip\`
Flip the tween's \`from\` and \`to\`.

### \`reverse\`
Reverse the tween's progress through time.
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="tween"
    section={section}
    category="actions"
    title="Tween"
    description="Change a value over a specific duration of time."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
