
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
# Stagger

\`stagger(actions <Array>, interval <Number | Function>, onComplete <Function>)\`

If \`interval\` is a function, it's provided \`i\` and returns a \`timeToDelay\` for each action in the list.

## Example

\`\`\`javascript
import { stagger, tween, css } from 'popmotion';

const divs = document.getElementByTag('div');
const mappedTweens = [].slice.call(divs).map((element) => {
  const elementRenderer = css(element);
  return tween({
    from: 0,
    to: 100,
    onUpdate: (v) => elementRenderer.set('x', v)
  });
});

stagger(mappedTweens, 50, () => console.log('done!'));
\`\`\`
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="stagger"
    section={section}
    category="actionComposition"
    title="Stagger"
    description="Stagger the start of a series of a actions."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
