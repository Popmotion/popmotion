
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
# Calculators

Popmotion provides a series of simple functions useful in UI calculations.

## Import

\`\`\`javascript
import { calc } from 'popmotion';
\`\`\`

## Methods

### \`angle\`
Calculate the angle between two 2D points, in degrees.

\`type Point = { x: number, y: number }\`

\`angle(a: Point, b: Point)\`

\`\`\`javascript
const a = { x: 0, y: 0 };
const b = { x: 1, y: 1 };
calc.angle(a, b); // 45
\`\`\`

### \`degreesToRadians\`
Convert degrees to radians.

\`degreesToRadians(degrees: number)\`

\`\`\`javascript
calc.degreesToRadians(45); // 0.7853981633974483
\`\`\`

### \`dilate\`
Dilate the difference between two values.

\`dilate(a: number, b: number, dilation: number)\`

\`\`\`javascript
calc.dilate(0, 80, .5); // 40
calc.dilate(100, 200, 2); // 300
\`\`\`

### \`distance\`
Calculate the distance between 1D, 2D or 3D points.

\`type Point = { x: number, y: number, z?: number }\`

\`distance(a: number | Point, b: number | Point)\`

\`\`\`javascript
calc.distance(-100, 100); // 200
calc.distance({ x: 0, y: 0 }, { x: 1, y: 1}); // 1.4142135623730951
calc.distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 }); // 10
\`\`\`

### \`getProgressFromValue\`
Calculate a progress (0 - 1) from a value and range.

\`getProgressFromValue(min: number, max: number, value: number)\`

\`\`\`javascript
calc.getProgressFromValue(0, 100, 50); // 0.5
calc.getProgressFromValue(100, 200, 50); // -0.5
\`\`\`

### \`getValueFromProgress\`
Calculate a value from a progress (0 - 1) and range.

\`getValueFromProgress(min: number, max: number, value: number)\`

\`\`\`javascript
calc.getValueFromProgress(100, 200, 0.5); // 150
calc.getValueFromProgress(100, 200, -1); // 0
\`\`\`

### \`pointFromAngleAndDistance\`
Given an origin point, angle in degrees and distance, returns a new point.

\`pointFromAngleAndDistance(origin: Point, angle: number, distance: number)\`

\`\`\`javascript
calc.pointFromAngleAndDistance({ x: 0, y: 0 }, 45, 100);
/*
  {
    x: 70.71067811865476,
    y: 70.71067811865474
  }
*/
\`\`\`

### \`radiansToDegrees\`
Convert radians to degrees.

\`radiansToDegrees(radians: number)\`

\`\`\`javascript
calc.radiansToDegrees(0.7853981633974483); // 45
\`\`\`

### \`smooth\`
Framerate-independent value smoothing.

\`smooth(newValue: number, oldValue: number, frameDuration: number, smoothing: number)\`

### \`speedPerFrame\`
Convert speed per second into speed per frame.

\`speedPerFrame(speedPerSecond: number, frameDuration: number)\`

### \`speedPerSecond\`
Convert speed per frame into speed per second.

\`speedPerSecond(speedPerFrame: number, frameDuration: number)\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="calc"
    section="api"
    undefined
    title="Calculators"
    description="Simple functions useful in UI calculations."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
