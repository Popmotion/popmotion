
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
# Framesync

A tiny frame scheduler for performantly batching reads and renders.

Segregating actions that read and write to the DOM will avoid [layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing).

Popmotion batches updates on the \`frameUpdate\` step, and Stylefire batches renders on the \`frameRender\` step.

## Install

**Framesync is installed as part of Popmotion.**

To use as a standalone library, install with:

\`\`\`bash
npm install framesync --save
\`\`\`

## Usage

The Framesync render loop executes four sequential steps, once per frame.

- \`frameStart\`
- \`frameUpdate\`
- \`frameRender\`
- \`frameEnd\`

Developers can set any function to run at any of these steps using the \`on\` and \`cancel\` callbacks:

- \`onFrameStart\`, \`cancelOnFrameStart\`
- \`onFrameUpdate\`, \`cancelOnFrameUpdate\`
- \`onFrameRender\`, \`cancelOnFrameRender\`
- \`onFrameEnd\`, \`cancelOnFrameEnd\`

Framesync also exports some time-measurement methods:
- \`currentTime\`: The current time as measured by the host platform's most accurate \`now\` function.
- \`currentFrameTime\`: The time the current \`requestAnimationFrame\` was initiated.
- \`timeSinceLastFrame\`: The duration between the previous frame and the current \`currentFrameTime\`

### Example

\`\`\`javascript
import {
  timeSinceLastFrame,
  onFrameStart,
  cancelFrameStart
} from 'framesync';

function logTimeSinceLastFrame() {
  console.log(timeSinceLastFrame());
  onFrameStart(logTimeSinceLastFrame);
}

onFrameStart(logTimeSinceLastFrame);

function stopLogging() {
  cancelOnFrameStart(logTimeSinceLastFrame);
}

setTimeout(stopLogging, 5000);
\`\`\``);

const Page = ({ section }) => (
  <ContentTemplate
    id="framesync"
    section="api"
    undefined
    title="Framesync"
    description="Schedule functions to run at specific steps on the render loop."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
