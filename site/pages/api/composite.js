
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
const Page = ({ section }) => (
  <ContentTemplate
    id="composite"
    section={section}
    category="actionComposition"
    title="Composite"
    description="Control multiple named actions simultaneously."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
