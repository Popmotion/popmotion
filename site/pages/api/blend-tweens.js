
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Blend Tweens

## Example

\`\`\`javascript
import { tween, blendTweens } from 'popmotion';

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
  // Unset the first tween's \`onUpdate\`
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
