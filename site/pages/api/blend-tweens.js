
import markdown from 'markdown-in-js';
import { A, H1, H2, H3, P, Li, Ul, Code, Pre } from '~/templates/content/primatives';
import ContentTemplate from '~/templates/content/Template';

const Content = () => markdown({
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code,
  pre: Pre
})`
# Blend Tweens

## Example

\`\`\`javascript
import { tween } from 'popmotion';
import blendTween from 'popmotion/lib/actions/blend-tween';

const logValue = (v) => console.log(v);

const foo = tween({
  from: 0,
  to: 1,
  onUpdate: logValue
});

const bar = tween({
  from: 1,
  to: 0
});

foo.start();

setTimeout(() => {
  // Unset the first tween's onUpdate
  foo.setProps({
    onUpdate: undefined
  });
  blendTweens({
    from: foo,
    to: bar,
    onUpdate: logValue
  }).start();
}, 150);
\`\`\`

## Props

- \`from <Tween>\`: The tween to blend from.
- \`to <Tween>\`: The tween to blend to.
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="blend-tweens"
    section={section}
    category="actions"
    title="Blend Tweens"
    description="Blend between two tweens using a bezier interpolator."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
