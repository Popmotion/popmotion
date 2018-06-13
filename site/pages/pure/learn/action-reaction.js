
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
# Actions and reactions

The \`tween\` function returns what's known in Popmotion as an **action**.

Popmotion is a reactive library, and actions are functions that **create** streams of values. These actions output to **reactions**.

**In Popmotion, every animation and input is an action**. In this quick tutorial, we'll gain a better understanding of actions and reactions by writing our own.

## Import

\`\`\`javascript 
import { action } from 'popmotion';
\`\`\`

## Creating an action

The \`action\` function accepts a single argument. It's an initialisation function that will be executed **each time the returned action is started** via its \`start\` method.

This means that we can define one action, and start it multiple times, leading to multiple instances of that action.

The \`init\` function is provided an object of three functions: \`update\`, \`complete\`, and \`error\`:

\`\`\`javascript
action(({ update, complete, error }) => {})
\`\`\`

Let's define a function called \`just\`. It'll return an action that, when started, will fire \`update\` with the provided value and then \`complete\`:

\`\`\`javascript
const just = (v) => action(({ update, complete }) => {
  update(v);
  complete();
});
\`\`\`

Now, when the action returned from \`just\` is \`start\`ed, it'll emit the provided value:

\`\`\`javascript
just(1).start(console.log); // 1
\`\`\`

\`console.log\` is being used as a **reaction**. It will fire whenever the new action instance calls \`update\` with a new value.

We also defined \`just\` to fire \`complete\` once it's finished. Instead of a function, we can provide an object of \`update\` and \`complete\` functions as our reaction:

\`\`\`javascript
just(1).start({
  update: console.log,
  complete: () => console.log('complete!')
});
\`\`\`

When \`start\` runs, the initialisation function is run anew, and a **new instance** of the active action is returned:

\`\`\`javascript
const justOne = just(1);
justOne.start(console.log); // 1
justOne.start(console.log); // 1
\`\`\`

As all Popmotion animations are actions, we can define an animation once and use it multiple times:

\`\`\`javascript
const mySpring = spring({ to: 500 });

mySpring.start({
  update: console.log,
  complete: () => console.log('complete!')
});

mySpring.start({
  update: (v) => console.log('second spring: ' + v),
  complete: () => console.log('second spring also complete!')
});
\`\`\`

## Chainable modifiers

All actions, as well as special reactions like [multicast](/api/multicast) and [value](/api/value), are **chainable**.

They offer methods that **return a new instance of the action or reaction** with altered behaviour.

Currently, there are three chainable methods: \`filter\`, \`pipe\` and \`while\`.

An API for developers to add more is on the roadmap.

Let's take a look at an example of each:

### \`filter\`

\`filter\` accepts a single function. This function is passed the latest value emitted from \`update\`.

The value is only passed down the chain if the function provided to \`filter\` returns \`true\`.

\`\`\`javascript
action(({ update }) => {
  update(1);
  update(2);
  update(1);
}).filter((v) => v === 1)
  .start(log); // 1, 1
\`\`\`

### \`pipe\`

\`pipe\` accepts a series of functions.

Each function is provided the latest value emitted from \`update\`, and returns a new value that is passed down the chain:

\`\`\`javascript
const double = (v) => v * 2;
const px = (v) => v + 'px';

const one = just(1);
const twoPx = one.pipe(double, px);

one.start(console.log); // 1
twoPx.start(console.log); // '2px'
\`\`\`

### \`while\`

\`while\` accepts a single function. This function is passed every value from \`update\` and fires \`complete\` if the function returns \`false\`:

\`\`\`javascript
just(1)
  .while((v) => v === 2);
  .start(console.log); // never fires, as while returned false
\`\`\`

### Combining

Let's combine \`pipe\` and \`while\` to make a [pointer](/api/pointer) that outputs its \`x\` position as percentage of the current viewport, and automatically stops itself if the pointer is more than 75% across the screen:

\`\`\`javascript
const pickX = ({ x }) => x;
const viewportWidth = window.innerWidth;
const percentageOfViewport = (v) => v / viewportWidth * 100;
const asPercent = (v) => v + '%';

pointer()
  .pipe(pickX, percentageOfViewport) // The output of this
  .while((v) => v < 75) // Gets passed to this
  .pipe(asPercent) // Before being passed to this
\`\`\`

## Stopping actions

Every action returns a \`stop\` method:

\`\`\`javascript
const foo = tween().start(console.log);
foo.stop();
\`\`\`

But how does the code defined in your \`init\` function know its been stopped?

Each init function can **optionally** return an API. This can include a \`stop\` function:

\`\`\`javascript
const oneEverySecond = action(({ update }) => {
  const updateOne = () => update(1);
  const interval = setInterval(updateOne, 1000);

  return {
    stop: () => clearInterval(interval)
  };
});

const foo = oneEverySecond.start();
setTimeout(() => foo.stop(), 3000); // 1, 1, 1
\`\`\`

## Custom API

Your action can return a custom API, too:

\`\`\`javascript
const valueEverySecond = action(({ update }) => {
  let outputValue = 1;
  const updateOne = () => update(outputValue);
  const interval = setInterval(updateOne, 1000);

  return {
    stop: () => clearInterval(interval),
    setOutputValue: (v) => outputValue = v
  };
});

const foo = valueEverySecond.start();
foo.setOutputValue(2); // 2, 2...
\`\`\`

## Conclusion

By chaining actions we can create new actions with different behaviour.

This flexibility is available on all animations and inputs, and later tutorials will touch on these capabilities.

In the next tutorial, we'll learn how to implement pointer tracking with two input actions, [Pointer and Listen](/learn/input-tracking).
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="action-reaction"
    section="learn"
    category="basics"
    title="Actions and reactions"
    description="A quick look at Popmotion's simplified reactive model."
    published=""
    theme="pure"
    next="input-tracking"
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
