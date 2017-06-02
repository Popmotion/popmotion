
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
# Color Tween

Creates a special tween that uses the \`blendColor\` transformer to smoothly transition between two colors. Popmotion uses an advanced algorithm for smoother blends, as explained in the video [Computer Color is Broken](https://www.youtube.com/watch?v=LKnqECcg6Gw).

Colors can be provided either as objects of named color channels ('red', 'green' etc), or as hex/rgb/rgba strings.

\`colorTween(props <Object>)\`

\`\`\`javascript
import { css, colorTween } from 'popmotion';

const element = css(document.getElementById('example'));

colorTween({
  from: '#f00',
  to: '#00f',
  onUpdate: (v) => element.set('backgroundColor', v)
});
\`\`\`

## Props

See: [Tween](tween)

## Methods

See: [Tween](tween)
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="color-tween"
    section={section}
    category="actions"
    title="Color Tween"
    description="Blends from one color to another using linear interpolation."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
