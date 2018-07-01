
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
# Spring-loaded "characters remaining" counter

Forms are, by nature, dreary. From a user's perspective, there's nothing fun about them: Non-zero friction, mental effort, the cold exchange of info for goods.

It doesn't have to be this way! By adding thoughtful little touches, we can soften the negative form experience and maybe even make something a little bit delightful.

In this tutorial we're going to take a traditionally mundane part of form, the remaining character counter, and increase its functionality by adding a little playfulness.

We're going to attach a spring that fires on every keypress that goes over the character count limit, drawing attention to the counter. We're also going to slowly change the counter color to red as we approach the limit.

Have a play by typing in this box:

<CodePen id="JOeemQ" />

To begin, you can use [this CodePen template](https://codepen.io/popmotion/pen/XzyypY?editors=0010) to follow along.

## The counter

Our first job is to get the counter to actually count down as a user enters characters.

The input field's \`maxlength\` is set to \`10\`. We can read this with JavaScript:

\`\`\`javascript
const charLimit = parseInt(input.getAttribute('maxlength'));
\`\`\`

Now, let's create a function that takes a string and updates the character counter with the remaining number of characters, which will be calculated by measuring the string and subtracting that from the \`charLimit\`:

\`\`\`javascript
function updateRemainingCharsCounter(val) {
  counter.innerHTML = charLimit - val.length;
}
\`\`\`

We can test that this function works by, on the following line, writing:

\`\`\`javascript
updateRemainingCharsCounter('test');
\`\`\`

\`'test'\` is four characters long, so our counter displays \`6\`.

We want this function to fire on every \`keyup\` event, as this event carries the \`input\` field's latest value.

We're going to use the [\`listen\` action](/api/listen) to bind the event. \`listen\` converts DOM events into reactive streams. As an action, we can use \`pipe\` to pick the latest value out of the event before passing it on to \`updateRemainingCharsCounter\`:

\`\`\`javascript
listen(input, 'keyup')
  .pipe(e => e.target.value)
  .start(updateRemainingCharsCounter);
\`\`\`

Now when you type, the character counter updates!

We have a functional counter, but not a delightful one. Let's attach a \`spring\`.

## The spring

We're going to use the spring to increase the counter's \`scale\` property.

This isn't just going to look playful. By rapidly enlarging the counter, it'll draw the user's attention. You could use a little shake, or another effect. It's the movement itself that will distract the user to make sure they understand that there's no space for new characters.

Unlike a simple \`tween\`, spring physics can take into account a pre-existing velocity. This will make the animation interactive and playful: I haven't seen many people resist hammering away at the keyboard once they realise rapid keypresses builds momentum!

### Rendering the counter's \`scale\` prop

First, we need to import the [\`value\`](/api/value) and [\`styler\`](/api/styler) functions.

\`value\` will help us track and measure the velocity of \`scale\`, and \`styler\` will enable us to render it performantly.

\`\`\`javascript
const { listen, value, styler } = window.popmotion;
\`\`\`

We make our styler by simply passing the \`counter\`'s DOM node to \`styler\`:

\`\`\`javascript
const counterStyler = styler(counter);
\`\`\`

And we can initialise the \`counterScale\` value by passing it an initial value (\`1\`), and create a setter function with \`counterStyler.set\`: 

\`\`\`javascript
const counterScale = value(1, counterStyler.set('scale'));
\`\`\`

Now, whenever \`counterScale\` updates, the \`counter\` DOM node will be updated too.

### Listening to \`keydown\`

We also need to listen for a new event, \`keydown\`.

This event the moment the user presses down on the key, which is the moment they're imparting their physical energy into the UI.

It feels very responsive - try putting the following code under a \`keyup\` event instead and you'll immediately notice how disconnected the animation feels from your physical actions.

We'll use \`listen\` again, this time chained with a different method, \`filter\`. 

\`filter\`, as the name implies, filters out values that don't meet the provided criteria. In this case, we want to create an event listener that only fires when the number of entered characters is the same as the \`chatLimit\`:

\`\`\`javascript
listen(input, 'keydown')
  .filter(e => e.target.value.length === charLimit)
  .start(fireSpring);
\`\`\`

### The \`spring\` function

Now, we're ready to add our \`spring\`.

\`\`\`javascript
const { listen, value, styler, spring } = window.popmotion;
\`\`\`

Before this event listener, create a new function called \`fireSpring\` that'll start a new \`spring\` animation:

\`\`\`javascript
function fireSpring() {
  spring({
    // Start the animation from the current scale:
    from: counterScale.get()

    // We want the spring to rest on 1
    to: 1,

    // We set the initial velocity to whichever the smallest is:
    // a) counterScale's current velocity, or
    // b) an arbitrary minimum. You can experiment.
    velocity: Math.max(counterScale.getVelocity(), 100),

    // This ratio of stiffness to damping gives a nice, tight spring. Experiment!
    stiffness: 700,
    damping: 80
  }).start(counterScale);
}
\`\`\`

By tweaking the properties of \`spring\`, you can make springs with wildly different feelings. Some can be playful, some can be terse. Try to find one appropriate for your brand or website.

There's one final modification to make. Currently, the spring says "Hey! You've reached the character count!" in a loud and abrupt way. By slowly changing the color of the counter we can also quietly inform the user that they're **approaching** the limit.

## The warning color

We're going to compose a very simple [value pipeline](/learn/value-pipelines) function that will convert our remaining character count into a color.

We can use three of Popmotion's [transformers](/api/transformers) to achieve this: \`pipe\`, \`blendColor\`, and \`interpolate\`.

We'll use \`pipe\` to make a new function. This new function will accept a character count and map that to a value between \`0\` and \`1\`. That new number is then used to blend between the \`counter\`'s text color and red:

Import:

\`\`\`javascript
const { listen, value, styler, spring, transform } = window.popmotion;
const { blendColor, interpolate, pipe } = transform;
\`\`\`

And then, after we define \`charLimit\` and \`counterStyler\`, create our new function:

\`\`\`javascript
const convertCountToColor = pipe(
  // The input range starts at half the charLimit and ends at the
  // charLimit itself. This means the color will start changing, in this
  // instance, when the counter hits 5
  interpolate([charLimit * 0.5, charLimit], [0, 1]),
  blendColor(counterStyler.get('color'), '#f00')
);
\`\`\`

Now we just need to amend our \`updateRemainingCharsCounter\` function to set \`counterStyler\`'s \`'color'\` property with the output of this function:

\`\`\`javascript
function updateRemainingCharsCounter(val) {
  // Measure char count
  const charCount = val.length;

  // Set remaining chars
  counter.innerHTML = charLimit - charCount;

  // Set counter color
  counterStyler.set('color', convertCharCountToColor(charCount));
}
\`\`\`

Now when you type, the counter will begin to change color as your reach the character limit.

## Further optimisations

That's all for this tutorial, but there's plenty of ways in which we can go on to improve this form field counter:

- Visual \`focus\` state - maybe only show the character remaining count while the input has focus.
- Allow extra characters to be entered, and allow the "characters remaining" counter to run into the negatives.
- Not firing the spring on backspace.
- Only show the counter if JavaScript has loaded.
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="spring-loaded-characters-remaining"
    section="learn"
    category="projects"
    title="Spring-loaded 'characters remaining' counter"
    description="Inject some fun into your text fields with a spring-loaded characters remaining counter."
    published=""
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
