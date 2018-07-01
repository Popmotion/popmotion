
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
# When it comes to adhering to a project's coding style, follow the golden rule.

I just finished reading Ben Nadel's blog post, titled [After 3 Months Of JavaScript Linting, It's Pretty Much All Pain And No Gain](https://www.bennadel.com/blog/3312-after-3-months-of-javascript-linting-it-s-pretty-much-all-pain-and-no-gain.htm). It makes the argument that linting for maintaining a consistent style is burdensome.

I couldn't disagree more. In fact, I wouldn't disagree more even if the post was titled "2 plus 2 actually equals 5", a 500 word rebuttal of a hard, rudimentary, objective fact.

For both solo, pet projects, and sprawling codebases with multiple contributors, linting for maintaining style is essential.

Popmotion itself is just under 3,000 lines of code, I'm the primary contributor, and linting is useful even to keep just my messy self in check.

If anything, I'd argue it doesn't go far enough. The number of times I've argued with myself about whether I should declare as a \`function\` or an arrow function \`const\`, in different situations, and decided **different things**... I would to deprecate that from my life.

At work, five of us sit on about 100,000 lines of code. To you, this might be relatively big, or relatively small. It's all relative. Here, linting is one of many tools (types, tests) that have helped keeps us sane, for reasons we'll explore.

> [...] the goal of consistency is a complete charade.

A charade? Well it isn't a charade in the sense that linting does a great job of achieving that goal. To use Ben's own examples, indentation, quotes etc are easily kept consistent. So it's a slightly self-defeating argument.

One example given is \`let\` vs \`const\`. I don't understand how this is stealth-bundled in amongst actual stylistic choices. There is a right way and a wrong way to use these, they have semantic and practical meaning and a linter helps here, too.

But I suppose his question is, why would you want to? The following quotes are, with varying quantities of melodrama, essentially saying **because I don't want to**.

> [...] my approach to code formatting is the best. If it weren't, I wouldn't use it.

And a doozy:

> When I'm asked to change my style, I am - quite literally - asked to deny a fundamental Truth of my being.

Me, I know best, you do it your way, I do it my way. But my way's the best way.

This attitude simply isn't very team-like. One of the nice things about code consistency is simply the human interaction that leads you to your linting settings. It is team bonding. Not as bonding as oversharing at the pub, but certainly bonding, learning how to compromise and sharing ownership.

When we originally set up linting at work, I insisted on semicolons. The team didn't feel strongly either way, fine, semicolons. The team liked two space indentations. Despite my preference for four, I compromised on two. I now like two. And safely refactoring Popmotion to also use two was a simple as changing - yes - my linting config.

On a more practical note, this discussion settles the argument early. You don't "ugh" when you inevitably stumble across four-space indentations and you don't get passive-aggressive PRs back-and-forthing over indentation.

The thought hurts my brain a little. Are there seriously projects out there where lines are written by Bobbie Two-Spaces, interleaved with heathen lines written by Four-Space Jimmy?

If we remember to consider that our own stylistic **preferences** are **not** a "fundamental Truth of [our] being", we'll immediately arrive at a more collaborative, less combative mindset and thus workplace.

It's fine. Nobody is dying today.

The sober point comes a little later:

> [...] code is so much more than indentation and quotation choices.

It is true that code is an expression, even an artistic one. If the one thing we can all agree on is that indentation and quotation choices are essentially petty, then we won't feel so precious about them and start to trust that our character will come through in the actual solutions we choose and invent.

We're not selling out through compromise.

It doesn't make things hard, it doesn't make things painful. It is a collaborative effort and an act of imposed self-discipline. It's the act of letting go of ego, a little, and acting as a team. Because we're not all fucking "peacocks". We're just assholes, trying to do something cool.

---

Popmotion is a 9kb JavaScript motion engine, and way better than this daft nonsense. Create awesome interactions with tweens, physics and input tracking.

[Make things lovely](/learn/get-started) and/or [send us your stupid abuse on Twitter](https://twitter.com/popmotionjs)

`);

const Page = ({ section }) => (
  <ContentTemplate
    id="20170803-coding-style-dont-be-a-dick"
    section="blog"
    undefined
    title="Adhering to a project's coding style: Don't be a dick"
    description="null"
    published="3 Aug 17"
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
