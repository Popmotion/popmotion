
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
# Easing

Easing functions make tweened motion look more natural by emulating the changes in velocity experienced by objects in the real world.

It can be any function that takes a progress value from \`0\` to \`1\`, and returns a new progress.

Popmotion comes with a number of preset easing functions, and provides methods to create new easing functions.

## Example

\`\`\`javascript
import { tween, easing } from 'popmotion';

tween({
  from: 0,
  to: 1,
  ease: easing.easeOut
}).start();
\`\`\`

## Presets

Popmotion comes with the following preset easing functions:

- \`linear\`
- \`easeIn\`, \`easeOut\`, \`easeInOut\`
- \`circIn\`, \`circOut\`, \`circInOut\`
- \`backIn\`, \`backOut\`, \`backInOut\`
- \`anticipate\`

## Easing creation

Any function that takes a progress value can be used to ease. For instance, the [\`bezier-easing\` npm module](https://www.npmjs.com/package/bezier-easing) can produce easing functions based on bezier curves. 

Popmotion also provides the following functions to create your own easing functions:

### \`createReversedEasing\`
Reverses the provided easing function.

\`\`\`javascript
const { anticipate, createReversedEasing } = easing;
const anticipateOut = createReversedEasing(anticipate);
\`\`\`

### \`createMirroredEasing\`
Mirrors the provided easing function.

\`\`\`javascript
const { anticipate, createMirroredEasing } = easing;
const anticipateInAndOut = createMirroredEasing(anticipate);
\`\`\`

### \`createExpoIn\`
Creates an easing function based on the exponent function \`progress ** exponent\`. \`easeIn\` is \`createExpoIn(2)\`.

\`\`\`javascript
const { createExpoIn } = easing;
const strongerEaseIn = createExpoIn(3);
\`\`\`

### \`createBackIn\`
Creates an easing function with an overshoot. \`backIn\` is \`createBackIn(1.525)\`.

\`\`\`javascript
const { createBackIn, createReversedEasing } = easing;
const strongerBackOut = createReversedEasing(createBackIn(3));
\`\`\`

### \`createAnticipateEasing\`
Creates an easing function with a small anticipate and ease out. \`anticipate\` is \`createAnticipateEasing(1.525)\`.

\`\`\`javascript
const { createAnticipateEasing } = easing;
const strongerAnticipate = createAnticipateEasing(3);
\`\`\`
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="easing"
    section={section}
    category="undefined"
    title="Easing"
    description="Functions that speed or slow a tween over time."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
