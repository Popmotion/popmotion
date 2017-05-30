
import markdown from 'markdown-in-js';
import ContentTemplate from '~/components/layout/Content';

const Content = () => markdown`
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
`;
const Page = ({ section }) => (
  <ContentTemplate
    id="render-loop"
    section={section}
    category="undefined"
    title="Render Loop"
    description="Schedule functions to run on Popmotion's internal render loop."
  >
    <Content />
  </ContentTemplate>
);

Page.getInitialProps = async ({ pathname }) => {
  const [, section] = pathname.split('/');
  return { section };
};

export default Page;
