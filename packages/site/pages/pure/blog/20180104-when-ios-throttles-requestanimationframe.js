
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
# When iOS throttles requestAnimationFrame to 30fps

> **TL;DR:** iOS throttles \`requestAnimationFrame\` to 30fps in cross-origin iframes and low power mode.

Yesterday I was looking at the examples on the [Popmotion homepage](https://popmotion.io) with my iPhone. They looked odd, clearly suffering a sluggish stutter, the cruel affliction of (**gasp**) 30 frames per second.

Here's an artificially-throttled example:

<CodePen id="dJzaMo" />

I'd seen this illness once before. If you're looking at the example above on an iOS browser, check out this unthrottled example:

<CodePen id="WXOPWX" />

Looks the same, right? To other readers, this second example runs at a silky 60fps. Animation as the gods intended.

I found that it was only affecting animations running on CodePen. The reason was initially unclear.

I assumed that CodePen itself was doing **something** weird in the background that caused the stuttering. They helpfully pointed me to the Debug View, which runs the pen without the iframe.

It worked. 60fps on iOS. It wasn't CodePen after all.

My first discovery:

## iOS throttles \`requestAnimationFrame\` in iframes

Specifically, it turns out, **cross-origin iframes**. Which is every CodePen embed, even the ones hosted on CodePen's own site (as the live panel is served on a subdomain).

As detailed in this [WebKit changelog](https://trac.webkit.org/changeset/215070/webkit), the throttling is cleared once a user interacts with the iframe.

Try it for yourself. If you're on iOS, take a look at the tween animation again:

<CodePen id="WXOPWX" />

This time, tap anywhere within the frame and watch as the 30fps eye-thrashing is replaced by the soft caress of 60fps.

### But... why?

I haven't found a stated reason for this behaviour. But that doesn't stop semi-educated speculation.

Iframes are commonly used for advertising. Adverts are fairly liberal with your CPU cycles. So I imagine the throttling is an attempt to prevent adverts from eating your battery.

The performance cap is cleared once the user interacts with the iframe and indicates that the advert (or other embedded content) isn't unwelcome.

An alternative solution might be to throttle iframes that lie outside the current viewport (maybe pause execution entirely), and unthrottle when they enter. This current solution feels heavy-handed.

### The remaining mystery

Back to the present, this didn't explain why the examples on the homepage were stuttering. They're part of the page itself, no iframes.

As the myriad of known and unknown potential causes flashed before my eyes, a familiar feeling of nausea set in.

Standing on the precipice of a rabbit hole of unknown depth, I began the ritual.

Opened my MacBook. Chrome. Performance tab. Throttled CPU... 60fps.

Checked my partner's phone, same OS, same make and model... 60fps.

Googled for bugs with iOS 11.2.1 and 30fps rAF... Nothing. What the fuuuuuu...

I stared at my phone, dumbfounded. Maybe I needed to reset my phone. Maybe it was because my phone was the wrong colour. Maybe I simply needed to be kinder to Siri.

Luckily, I saw it, and I knew I'd found the culprit. The nausea lifted. Relief settled:

![Take me from this earth](/images/low-power-mode.png)

Low power mode. Though part of me wouldn't believe it until I toggled it on and off and saw the difference with my own eyes, it made sense.

My second discovery:

## iOS throttles \`requestAnimationFrame\` in low power mode

As detailed in this [WebKit bug](https://bugs.webkit.org/show_bug.cgi?id=168837), iOS throttles \`requestAnimationFrame\` to 30fps whilst low power mode is active.

I have mixed feelings about this.

First, there's no doubt that it's very clever. It is, in the short-term, a boon for users.

In the long-term, I'm not so sure. I've already covered in detail why the [mobile web is a dreadful platform](https://popmotion.io/blog/20170710-mobile-web-is-awful-and-were-all-to-blame/) to develop for.

This is yet another unpredictable tributary feeding into a much larger river of unpredictable nonsense that we have to put up with.

The salmon will get tired. It's a self-perpetuating cycle. Horizons, ambitions and standards will drop. Further emboldening mobile browser vendors to push for clever solutions to improve user experience and degrade the developer one.

On iOS, the app developers themselves are given the responsibility to [respond to low power mode](https://developer.apple.com/library/content/documentation/Performance/Conceptual/EnergyGuide-iOS/LowPowerMode.html), whereas WebKit still hasn't implemented the [Battery Status API](https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API). It's a familiar story, and a shame.

A clever, battery-saving shame.

---

If you still have any energy left in your tired little salmon fins, make the mobile web an app-quality kinda place with [Popmotion](https://popmotion.io). Alternatively, throw your opinions in my stupid salmon face [on Twitter](https://twitter.com/popmotionjs)
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="20180104-when-ios-throttles-requestanimationframe"
    section="blog"
    undefined
    title="When iOS throttles requestAnimationFrame to 30fps"
    description="In specific situations, iOS throttles rAF to 30fps. Here's when, and why it's wrong."
    published="4 Jan 18"
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
