
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
# Render Loop

The Popmotion render loop execute four sequential steps, once per frame.

- \`frameStart\`
- \`frameUpdate\`
- \`frameRender\`
- \`frameEnd\`

Developers can set any function to run at any of these steps using the \`on\` and \`cancel\` callbacks:

- \`onFrameStart\`, \`cancelOnFrameStart\`
- \`onFrameUpdate\`, \`cancelOnFrameUpdate\`: Actions update here
- \`onFrameRender\`, \`cancelOnFrameRender\`: Renderers render here
- \`onFrameEnd\`, \`cancelOnFrameEnd\`

\`timeSinceLastFrame\` and \`currentFrameTimestamp\` methods allow frame-locked time measurements.

### Example

\`\`\`javascript
import {
  timeSinceLastFrame,
  onFrameStart,
  cancelFrameStart
} from 'popmotion';

function logTimeSinceLastFrame() {
  console.log(timeSinceLastFrame());
  onFrameStart(logTimeSinceLastFrame);
}

onFrameStart(logTimeSinceLastFrame);

function stopLogging() {
  cancelOnFrameStart(logTimeSinceLastFrame);
}

setTimeout(stopLogging, 5000);
\`\`\`
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="render-loop"
    section={section}
    category="undefined"
    title="Render Loop"
    description="Schedule functions to run on Popmotion's internal render loop."
  >
    {content.tree}
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
