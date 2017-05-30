
import markdown from 'markdown-in-js';
import { A, H1, H2, H3, P, Code } from '~/components/primatives';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown({
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  p: P,
  code: Code
})`
# Calculators

Popmotion provides a series of simple functions useful in UI calculations.

\`\`\`javascript
import { calc } from 'popmotion';
\`\`\`

### \`angle\`
Calculate the angle between two 2D points, in degrees.

\`angle(a <Object>, b <Object>)\`

\`\`\`javascript
const a = { x: 0, y: 0 };
const b = { x: 1, y: 1 };
calc.angle(a, b); // 45
\`\`\`

### \`degreesToRadians\`
Convert degrees to radians.

\`degreesToRadians(degrees <Number>)\`

\`\`\`javascript
calc.degreesToRadians(45); // 0.7853981633974483
\`\`\`

### \`dilate\`
Dilate the difference between two values.

\`dilate(a <Number>, b <Number>, dilation <Number>)\`

\`\`\`javascript
calc.dilate(0, 80, .5); // 40
calc.dilate(100, 200, 2); // 300
\`\`\`

### \`distance\`
Calculate the distance between 1D, 2D or 3D points.

\`distance(a <Number | Object>, b <Number | Object>)\`

\`\`\`javascript
calc.distance(-100, 100); // 200
calc.distance({ x: 0, y: 0 }, { x: 1, y: 1}); // 1.4142135623730951
calc.distance({ x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 10 }); // 10
\`\`\`

### \`getProgressFromValue\`
Calculate a progress (0 - 1) from a value and range.

\`getProgressFromValue(min <Number>, max <Number>, value <Number>)\`

\`\`\`javascript
calc.getProgressFromValue(0, 100, 50); // 0.5
calc.getProgressFromValue(100, 200, 50); // -0.5
\`\`\`

### \`getValueFromProgress\`
Calculate a value from a progress (0 - 1) and range.

\`getValueFromProgress(min <Number>, max <Number>, value <Number>)\`

\`\`\`javascript
calc.getValueFromProgress(100, 200, 0.5); // 150
calc.getValueFromProgress(100, 200, -1); // 0
\`\`\`

### \`pointFromAngleAndDistance\`
Given an origin point, angle in degrees and distance, returns a new point.

\`pointFromAngleAndDistance(origin <Object>, angle <Number>, distance <Number>)\`

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

\`radiansToDegrees(radians <Number>)\`

\`\`\`javascript
calc.radiansToDegrees(0.7853981633974483); // 45
\`\`\`

### \`smooth\`
Framerate-independent value smoothing.

\`smooth(newValue <Number>, oldValue <Number>, frameDuration <Number>, smoothing <Number>)\`

### \`speedPerFrame\`
Convert speed per second into speed per frame.

\`speedPerFrame(speedPerSecond <Number>, frameDuration <Number>)\`

### \`speedPerSecond\`
Convert speed per frame into speed per second.

\`speedPerSecond(speedPerFrame <Number>, frameDuration <Number>)\`
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="calc"
    section={section}
    category="undefined"
    title="Calculators"
    description="Simple functions useful in UI calculations."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
