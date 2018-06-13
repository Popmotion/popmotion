
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
# Composable value pipelines

Popmotion provides simple utility functions that can take a value and return it transformed. These are, unsurprisingly, called **[transformers](/api/transformers)**.

\`\`\`javascript
import { transform } from 'popmotion';
// Or save your user's bytes!
import * as transform from 'popmotion/transformers';
\`\`\`

These functions can perform a wide range of tasks. Something as simple as appending a unit:

\`\`\`javascript
const { appendUnit } = transform;
const px = appendUnit('px');
px(5); // '5px'
\`\`\`

Make an infinite looping sequence:

\`\`\`javascript
wrap(0, 100)(150); // 50
\`\`\`

Or converting a value from one range to another:

\`\`\`javascript
interpolate([0,1], [-500, 500])(0.5); // 0
\`\`\`

## Curry

As you can see, many of these transformers are curried. So we can make a function:

\`\`\`javascript
const restrictNormalised = clamp(0, 1);
\`\`\`

And then reuse it elsewhere:

\`\`\`javascript
restrictNormalised(5); // 1
\`\`\`

## Compose

Because these functions are very simple and all carry the same signature, we can compose them. Popmotion provides a special transformer to do just that.

\`\`\`javascript
const { pipe } = transform;
\`\`\`

\`pipe\` is named as such because it takes a list of functions and returns a new function that will run these functions from **left to right**. Essentially, creating a value pipeline.

As our functions are descriptively named, and as many of them are curried, our pipelines become very easy to read. They become less imperative, and more declarative.

For instance, let's compose a function that will always return a valid RGB value. RGB values are simply integers between \`0\` and \`255\`.

\`\`\`javascript
const rgbUnit = pipe(
  clamp(0, 255),
  Math.round
);
\`\`\`

What's cool about this example is that it shows that **any** function that 1) takes a number and 2) returns a number, can be composed. \`Math.round\` does exactly that, so we can compose it.

You don't have to write this function yourself, because that exact code is already included as a Popmotion transformer, and used in the \`rgba\` [value type](/api/value-types).

The \`rgba\` transformer is **itself** composed. Here's the exact code:

\`\`\`javascript
const rgba = pipe(
  transformMap({
    red: rgbUnit,
    green: rgbUnit,
    blue: rgbUnit,
    alpha
  }),
  rgbaTemplate
);
\`\`\`

This is an example of composing functions **which were themselves composed**. This is a very clear way of expressing and reusing our logic.

## Applying transformers to animations

Every Popmotion [action](/api/action) and [reaction](/api/reaction) has a native \`pipe\` function.

Providing a list of functions to \`pipe\` will return a new instance of the action or reaction, and whenever its \`update\` function is called, the value will be passed through these functions before being emitted.

Consider this tween:

\`\`\`javascript
tween({ from: 0, to: 255 });
\`\`\`

We can use our \`rgbUnit\` transformer from before to ensure that whenever this tween is called, it **always** returns a valid RGB unit:

\`\`\`javascript
tween({ from: 0, to: 255 })
  .pipe(rgbUnit)
  .start(console.log);
\`\`\`

This is a versatile approach to adding functionality to any animation. For instance, many animation libraries offer an option to create stepped tweens, but with this kind of composition we can easily bring that same functionality to \`physics\` (or any other animation).

Here, we can easily create something that spins at a constant velocity, outputting an angle value that snaps to \`45\` degree intervals:

\`\`\`javascript
physics({ velocity: 100 })
  .pipe(
    snap(45),
    appendUnit('deg')
  );
\`\`\`

Etc.

## Conclusion

These pure, simple functions are easily composed and reused. They can be used on their own, or with any action (not just tweens), making them extremely versatile.

We believe this functional approach gives developers the greatest flexibility and predictability.

We've covered just some of the many transformers here, but more are documented in our [API docs](/api/transformers). As they're pure functions, not specific to Popmotion, you can easily have fun creating your own.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="value-pipelines"
    section="learn"
    category="advanced"
    title="Composable value pipelines"
    description="Use `pipe` to compose reusable value pipelines"
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
