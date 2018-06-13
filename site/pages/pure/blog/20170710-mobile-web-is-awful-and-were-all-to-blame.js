
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
# The mobile web is awful, and everyone's to blame

At work today, we were discussing the future direction of the website and app. A concern was raised that, without a clear mandate, the website would "continue to be a great desktop version, and a much poorer version of the app."

As the front end lead, that stung. I felt like the "much" was undeserved.

I took the point. It's worth imagining that the use-case of the app and website may well be different.

However, the comment came as a response to a mini-moan that it'd taken me a couple hours to get an input field to stick to the bottom of the page and still be tappable in mobile Safari. A simple task made difficult.

It was an indictment that I haven't yet changed perceptions about the capabilities of the mobile web. Maybe those perceptions don't deserve to be changed.

I've long held that the web experience **can** be just as performant and polished as native. It's only for a lack of time and ambition that it isn't. That belief is the reason I wrote Popmotion in the first place.

So I began to think, it's usually easy and quite enjoyable to make a great desktop experience. Yet developing for mobile is a constant headache.

With some mobile Geekbench scores approaching laptops, the technical argument is diminishing. So why?

I realised that everyone is to blame. Browser vendors, Business People, every member of the Google AMP team, you reading this, me writing this: Everyone.

## Browsers Know Best

Implementing simple design features like overlays or bottom navigation on mobile browsers invariably involves trawling through blogs and forums to find that special hack that worked for that one guy that one day in June.

As every developer knows, no good hack goes unpunished. Testing cross-browser serves a specific cocktail; a nostalgic blend of heart palpitations, dream-like confusion and a palpable sense of impending disappointment. It takes you right back to '99.

It usually comes down to the same problem. Browsers Know Best. In their infinite wisdom, browser vendors implement novel or specific behaviour, ostensibly to aid performance and accessibility.

It's a noble aim but developing for browsers is already quite chaotic enough, thankyouverymuch. The absolute last thing the internet needs is more platform-specific behaviour. Let's take a look at some examples.

### Safari

A search for "Safari is the new IE" brings up enough results **refuting** that statement that there is, at the very least, a **vibe**.

It also wouldn't be surprising that a team of self-isolated Apple engineers working out of their space bunker would be susceptible to Browsers Know Best (BKB).

They've historically dragged their moonboots over implementing new performance-enhancing standards and APIs (like Service Workers), and what progress they do make is diminished by a lethargic release schedule intimately coupled with iOS and macOS.

Which is fine on desktop because virtually nobody gives a shit about desktop Safari. On mobile, however, the demographics are different, and this holds up progress.

### Bottom navigation

The behaviour that inspired this 2000-word rant.

Now we live in the future, the outrageous size of phones means they can't be safely touched in their upper halves. Reflecting this shift, design guidelines are increasingly recommending putting app navigation at the bottom of the screen.

Except, the greedy gits at Apple have colonised the bottom 40-ish pixels and used it as invisible magic space. Touch this, and the app navigation reappears.

In exchange for this genius piece of UX, you can't put a nav there, or an action button, or a link or or a chat box or whatever.

No, because we're dirty web peasants, we have to put our nav at the top, where no one can ever reach it. Unless, of course, we resort to the now-canonical hack detailed on [this god-given Eventbrite blog post](https://www.eventbrite.com/engineering/mobile-safari-why/), rightfully titled "Mobile Safari (Whyyyy?)". BKB.

Or what do \`100%\` and \`100vh\` mean in a viewport that constantly changes and never seems to report the right size? BKB.

Or why is it so difficult to lock page scroll when displaying an overlay, or prevent the page from scrolling to the top when you **do** manage to lock it, or or or. BKB.

### Get over here

Chrome isn't blameless, either.

In Chrome 56, the Chrome team set \`touch\` events to \`{ passive: true }\` by default. They [excuse themselves in this blog post](https://developers.google.com/web/updates/2017/01/scrolling-intervention).

\`passive: true\` allows a developer to reassure the browser that the page will not be calling \`e.preventDefault()\`, which would block page scroll. This allows the browser to respond immediately to scroll, which at risk of singing its praises, I don't remember ever being an issue in Safari. Is this an Android thing?

Either way, it's broken every instance of a draggable DOM element I've implemented, and every virtual DOM event-handler abstraction like those found in React. Thanks, Chrome team.

### A decade of this

It's been ten years of this shit.

Take \`hover\` events. A hover event **obviously** has no place firing on a touch device. Originally though, large parts of the web weren't written as an input-agnostic place. As a result, key functionality was hidden behind hover events.

To unbreak the web on mobile, browsers starting emulating \`hover\` on the very \`mousedown\`-looking \`touchstart\`.

So, we end up with very weird interactions, like having to double-tap to open menus that rely on hover. Or CSS hover styles enabling on taps. Or sticky hover states when you're merely trying to scroll the page. Or or or...

If Apple had the bravery to break Flash websites, where was this bravery with hover interactions? Just break them, stick to a standard, the web will fix itself. 

Now, ten years later, we're still stuck with this. Scoping \`:hover\` effects to special capability classes and yet another esoteric behavior that's difficult to grok and embarrassing to explain to newcomers. "Well you see, in 2007..."

BKB.

## Business has feelings too

Whether the interests of business and user are polarised or harmonised is a debate much older than software.

As a wide-eyed, UX-minded front end dev, I'm predisposed to thinking the latter. I think most people **believe** they are.

Interests are hard to quantify. It's easy, then, for a business person to frame a stat in a way that makes interests look aligned.

In my own experience it's been an obvious, and incidentally statistical truth, that app users are stickier and more engaged with the product than mobile web users.

Somehow it then leads that it's in the user's interests to be sticky and engaged, which then leads into all manner of poor choices for the mobile web user's experience.

### Reddit

For example. I have installed two Reddit apps - Alien Blue and the official app. I usually use the desktop web version. Periodically, I'll be mid-surf and it'll be easier to hit the address bar, type "sta" and spent the next five minutes browsing the preloaded Star Trek subreddit.

My point is, as a user, **I'm engaged**. So why is it that I'm occasionally given the ol' mobile fuck you:

![What on earth](/static/images/reddit-popover.png)

The USPs are mind-bending.

- **50% faster:** By what metric?
- **Infinite scrolling:** Infinite scrolling isn't difficult to implement, so why isn't it? Either the devs are lazy and/or incompetent, or much more likely the Business People needed another bullet point to whack on the pop-up and bag themselves a cheeky conversion. So there was a specific choice to make the web version worse.
- **Autoplay gifs:** BKB.

### Facebook

I had the Facebook app, once. Then, because an analyst got a whiff that Messenger had higher engagement on the stand-alone app, the Business People decided to force users to download that. Once that was downloaded, the analyst got a whiff that users were stickier when push notifications were enabled. So the Business People forced users to turn those on. So I deleted it and used the web instead.

The mobile messages worked perfectly. I was quite happy not to have Facebook on my phone - despite lacking a messenger, it's half a gig. The mobile site loaded near-instantly with just a couple hundred of progressively downloaded kb.

Sniff.

**Sniff.**

![What on earth](/static/images/facebook-messenger.jpg)

Now, when we click the "new messages" icon, we're treated to a splash screen telling us to download Messenger (or we were, there's presently a bug so it does literally nothing). This is purposeful degradation of a perfectly capable website and it is totally anti-user.

It is wild. I am wild.

## AMP

A lot has been made of the ill-comings of AMP (Accelerated Mobile Pages) recently, so I won't go too deep. My favourite is this [mic drop by The Register](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/).

The complaints are usually the same; it's proprietary, Google is using you for your content, homogeneous, opaque, maintaining two views. Etc.

IMO the biggest problem is the flagrant abuse of power. Google has a special AMP section at the top of their search results, where AMP results get a nice picture. It's labeled "Top stories", but realistically it's just a carousel of sell-outs. Not that you can blame them.

Mobile browser usage is, on some sites, far higher than desktop. Yet can you imagine if Google created a special standard for desktop sites and showcased those at the top of their results? There'd be outrage. It'd be a clear power play. But this is just the shitty mobile web, so who cares, right?

Now, there's no denying that AMP pages are faster than the majority of the net and this definitely has some value for the user. AMP isn't magic though, and if a normal site is fast enough to be featured, why not include those, too?

We can't complain, though. AMP is our fault, yours and mine.

## Mostly you

I'll take a bit of this blame. You can take the rest.

Ultimately we're in this position because the mobile web is slow. We develop sites on our fancy Macbook Pros and fiber connections and then serve those sites to low-end Android phones on Edge networks.

When we're not being mindful of our user, this is our fault.

Or when we include expansive libraries like Lodash or Moment in their entirety, this is our fault.

Or when we serve a site without server-side rendering, this is our fault.

Or when we don't split our bundles, this is our fault.

Or or or.

## Do we even deserve redemption

John Gruber of [Daring Fireball](https://daringfireball.net) has been banging on recently about how JavaScript was a mistake, that the web would load in under a second if it didn't exist.

Well, maybe. It's an interesting thought experiment. Practically, JS does make things slower in the majority of cases. A little bit of power.

With care, and \`fetch\`, and code sharding, it can theoretically also make things quicker.

It can also be the case that a server-side rendered website with a JS payload of 100kb can belt down the network and render **quicker** than a bloated 500mb app can load into memory. There is opportunity here.

The address bar is an app launcher of power user speeds, and browsers can preload pages while the user is still thinking. No context-switching, or sloshing about with Apple's horrific app search, no need to delete, to arrange.

There's opportunity here, too.

## Proceed with caution

Browsers Still Know Best, and keep releasing breaking changes that we have to learn to hack around. Business interests will always inexplicably collide with user interests. Google will always want control.

And you'll always be lazy. Me, too, a bit. Mostly you.

Let's be optimistic though. JavaScript, for all Gruber's delicious tears, isn't going anywhere. Nor should it. It's important that there's a democratic and open platform, and in the emerging world of closed devices the **web is it**.

It's essential this platform remains open, and continues to become more and more capable.

We're getting WebAssembly, so it'll get faster. WebGL is gaining adoption and we'll see improved AR and VR support, so it'll become more capable.

Already, we can use tools like Webpack and [bundlesize](https://github.com/siddharthkp/bundlesize) to code split and maintain size budgets.

Tools like [Next.js](https://github.com/zeit/next.js/) makes SSR trivial to implement.

Hopefully, [Popmotion](/learn/get-started) can help create delightful, high-quality interactions.

We just need to have the opportunity to create the time and space to dedicate to polish and performance, rather blindly belting along the Business People's feature treadmill. Then next time there won't be a "much" in sight.

---

Popmotion is a 9kb JavaScript motion engine. Create awesome interactions with tweens, physics and input tracking.

[Make the mobile web marginally better](/learn/get-started) or [follow us on Twitter](https://twitter.com/popmotionjs)
`);

const Page = ({ section }) => (
  <ContentTemplate
    id="20170710-mobile-web-is-awful-and-were-all-to-blame"
    section="blog"
    undefined
    title="The mobile web is awful, and everyone's to blame"
    description="From browser vendors to front end developers, everyone is implicated in the state of the mobile web."
    published="10 Jul 17"
    theme="pure"
    undefined
  >
    {content.tree}
  </ContentTemplate>
);

export default Page;
