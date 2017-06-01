
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
# Cross Fade

Fade between any two actions with the Cross Fade action. It creates a new value, interpolated between the output of two existing actions.

The "fader", a third action that provides a progress value from \`0\` to \`1\`, dictates the ratio of the blend between the \`from\` and \`to\` actions. By default, this is a tween that can be adjusted using \`duration\` and \`ease\` properties, but any action can be provided to the \`fader\` property.

\`crossFade(props <Object>)\`

## Props

- \`from <Tween>\`: The tween to fade from.
- \`to <Tween>\`: The tween to fade to.
- \`duration <Number>\`: Duration of fade (default: \`300\`).
- \`ease <Function>\`: Easing for the fade tween (default: \`linear\`).
- \`fader <Action>\`: Optional action, that outputs between \`0\` and \`1\`, to use to fade between the two actions.

## Example

\`\`\`javascript
import { crossFade, tween } from 'popmotion';

const foo = tween(0, 100).start();
const bar = tween(100, 200).start();

const fadeBetween = crossFade({
  from: foo,
  to: bar,
  onUpdate: (v) => console.log(v)
});
\`\`\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="cross-fade"
    section={section}
    category="actionComposition"
    title="Cross Fade"
    description="Fade between any two actions."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
