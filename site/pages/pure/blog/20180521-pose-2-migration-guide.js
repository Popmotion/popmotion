
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
# What's new in Pose 2.0?

Pose and React Pose 2.0 are out now!

They introduce a simple new API for \`transition\`, so there's now no requirement to import Popmotion separately for custom transitions.

\`transition\` can also now accept a named map of values, meaning no more having to check \`key\` to return different animations.

As we all know all-too-well, major version increases also mean one thing: All your shit's broke. Just kidding. Only some of your shit's broke.

Let's take a look.

## Transition definitions

Until now, creating custom transitions involved importing Popmotion animations and manually passing along Pose-generated values like \`from\`, \`to\` and \`velocity\`:

\`\`\`javascript
import { tween, easing } from 'popmotion';

const config = {
  visible: {
    opacity: 0,
    transition: (props) => tween({
      ...props,
      duration: 1000,
      ease: easing.linear
    })
  }
};
\`\`\`

Now, we can simply define \`transition\` as an object of animation props:

\`\`\`javascript
const config = {
  visible: {
    opacity: 0,
    transition: { duration: 1000, ease: 'linear' }
  }
};
\`\`\`

Notice that we don't need to import easing functions separately, as Pose provides a collection of named easings. We can even automatically define a cubic bezier easing by providing an array:

\`\`\`javascript
ease: [.01, .64, .99, .56]
\`\`\`

By default, a transition defined like this will be a [tween](/api/tween). But Pose supports Popmotion's [spring](/api/spring), [keyframes](/api/keyframes), [physics](/api/physics) and [decay](/api/decay) animations too.

We can switch to one of these by setting \`transition.type\`:

\`\`\`javascript
const config = {
  dragEnd: {
    x: 0,
    transition: { type: 'spring', stiffness: 1000 }
  }
}
\`\`\`

Or dynamically set them as a function:

\`\`\`javascript
const config = {
  dragEnd: {
    x: 0,
    transition: ({ velocity }) => velocity < 0
      ? { type: 'spring', stiffness: 1000 }
      : { type: 'physics', to: -1000 }
  }
}
\`\`\`

There's also some new properties supported by all animations: \`round\`, \`min\`, \`max\` and \`delay\`. Take a look at the [custom transition tutorial for full details](/pose/learn/custom-transitions).

Of course, for animations that aren't yet possible with the new transition API, these functions can still return Popmotion animations just as before. 

## Named transition maps

Previously, to return different animations for different properties, we had to check the provided \`key\` property:

\`\`\`javascript
const config = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: ({ key, ...props }) => (key === 'x')
      ? spring({ ...props, stiffness: 1000 })
      : tween({ ...props, duration: 100 })
  }
}
\`\`\`

Instead, we can now **optionally** define \`transition\` as a named map, with a \`default\` prop for a catch-all transition:

\`\`\`javascript
const config = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 1000 },
      default: { duration: 100 }
    }
  }
}
\`\`\`

These named transitions can also be functions that return dynamic transition definitions or Popmotion animations.

Transition definitions and named transition maps will both be coming to React Native Pose in the near future.

## Migration guide

Of course, with a major version change there's always a breaking change or two. We've started flagging these in advance with deprecation warnings, where possible, so hopefully the impact will be minimal.

Here's what's changed:

### \`transitionProps\` is now \`props\`

In a bit of bikeshedding that should, nonetheless, make the API a little easier to explain, \`transitionProps\` is now \`props\`.

When they were first introduced, \`transitionProps\` were used to dynamically generate \`transition\`s. Now, they can be used to dynamically set any pose prop, hence the change in terminology:

\`\`\`javascript
const config = {
  open: {
    x: ({ x }) => x
  },
  props: { x: 0 }
};

// Pose
const poser = pose(config);

// React Pose
const Posed = posed.div(config);
() => <Posed x={10} />
\`\`\`

This has also led to the renaming of \`setTransitionProps\` to \`setProps\` for the vanilla Pose users in the audience.

### FLIP is now opt-in

Previously, Pose would detect if you were animating a layout property like \`width\` or \`top\` and automatically convert that to a FLIP animation.

Although FLIP animations are more performant, if not handled with care they can cause unexpected visual artifacts. We also don't currently have a good strategy for animating to \`0\` (which makes the "invert" stage of FLIP decidedly tricky - what's the inverse of 0?)

This was one of the most commonly-occurring points of confusion with the API, so I've made it opt-in with \`flip: true\`:

\`\`\`javascript
const config = {
  open: {
    width: '100vw',
    height: '100vh',
    flip: true
  },
  close: {
    width: '100px',
    height: '100px',
    flip: true
  }
}
\`\`\`

The good news is that this shouldn't break any of your code. If left unchanged, Pose will simply animate the layout property, **unless**, as above, you're animating between two different unit types which Pose doesn't currently support (PRs welcome!)
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="20180521-pose-2-migration-guide"
    section="blog"
    undefined
    title="What's new in Pose 2.0"
    description="A quick overview of what's new in Pose and React Pose 2.0, and how to migrate"
    published="29 May 18"
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
