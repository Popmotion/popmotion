
import { createElement } from 'react';
import marksy from 'marksy/components';
import { A, H1, H2, H3, H4, H5, P, Li, Ol, Ul, Hr, Code, Blockquote, ArticleHeader, Video } from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';
import ContentTemplate from '~/templates/content/Template';
import Example from '~/components/examples/Example';
import CodePen from '~/components/examples/CodePen';

const removeEmpty = filename => filename !== '';

const convertMarkdown = marksy({
  createElement,
  elements: {
    a: A,
    h1: ArticleHeader,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P,
    code: Code,
    li: Li,
    ol: Ol,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote,
  },
  components: {
    Example,
    CodePen,
    Video
  }
});

const content = convertMarkdown(`
# Rounded values

Popmotion's emphasis on functional composition means actions don't offer explicit support via properties like \`rounded: true\`.

Instead, we can round the output of any [action](/api/action) by providing JavaScript's native \`Math.round\` to \`pipe\`. For instance:

## Round a single value

If we have a \`tween\` that outputs a single value, we can round it like this:

\`\`\`javascript
tween({ to: 1000 }).pipe(Math.round)
\`\`\`

\`\`\`marksy
<Example template="Counter" id="a" autostart={false}>{\`
const counter = document.querySelector('#a .counter');
const updateCounter = (v) => counter.innerHTML = v;

tween({ to: 1000, duration: 2000 })
  .pipe(Math.round)
  .start(updateCounter);
\`}</Example>
\`\`\`

Every animation is an action, so this applies to animations like \`physics\` too:

\`\`\`javascript
physics({ velocity: 100 }).pipe(Math.round)
\`\`\`

\`\`\`marksy
<Example template="Counter" id="b" autostart={false}>{\`
const counter = document.querySelector('#b .counter');
const updateCounter = (v) => counter.innerHTML = v;

physics({ velocity: 100 })
  .pipe(Math.round)
  .start(updateCounter);
\`}</Example>
\`\`\`

## Round a complex value

If we're animating an object, we can apply rounding to specific values using the \`transformMap\` [transformer](/api/transformers#transformmap):

\`\`\`javascript
import { tween, transform } from 'popmotion';
const { transformMap } = transform;

tween({
  to: { x: 100, y: 100 }
}).pipe(transformMap({
  x: Math.round
}));
\`\`\`

More examples of \`pipe\` and functional composition can be found in the [value pipelines](/api/value-pipelines) tutorial.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="rounded-values"
    section="learn"
    category="how-to"
    title="Rounded values"
    description="How to output rounded values from any action"
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
