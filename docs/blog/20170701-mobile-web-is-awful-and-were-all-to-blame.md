---
title: The mobile web is awful, and we're all to blame
description: From browser to front end developers, everyone but your nan is to blame for the state of the mobile web.
published: 201707xx
draft: true
---

# The mobile web is awful, and we're all to blame

Today at work, we were discussing the future direction of the website vs the app. The concern being, unaddressed the website would continue to be "the desktop version and much, much poorer version of the app".

Now, as the front end lead, that stung. For a start, a single "much" would have sufficed.

Worse, it was an indictment that my personal mission, in both my career and with Popmotion, was failing. I've set out to prove with both that the web experience can be as enjoyable and as polished as the app experience, and yet here we all were, sat around talking about the "scope" of the clearly inferior web.

Now, the use-case of an app vs the mobile web might well be different. This is fine and I'm looking forward to exploring what will best serve each audience.

Yet, all too often this lack of ambition seems to stem that making things good on the mobile web is hard, if not impossible (yes, and no). Or, increasingly, the statistically-grounded assertion that app users are more engaged and stickier than web users.

The problem is, these attitudes become a self-fulfilling prophecy. We get so many things for free on the web platform that app developers have had to put in the work for, and maybe app users are more engaged **because** you've gimped your website.

So here I am now, to blame everyone: me, you, browser vendors, Business People, the Google AMP team, everyone.

## Browsers Know Best

Browser vendors, god. Who are you? Why are you doing this to us? You are the Nanny State of target platforms.

Let's start with Safari. A search for "Safari is the new IE" brings up enough articles and comments **refuting** the statement, that there's at least a vibe.

It's not surprising that a team of isolated Apple engineers working out of their space bunker would drag their heels over implementing new standards like Service Workers. This sense of lethargy is compounded by a release schedule bizarrely bound to that of macOS and iOS.

### Specifically

Now we live in the future and the outrageous size of phones means they can't be safely touched in their upper halves, design guidelines are increasingly recommending putting app navigation at the bottom of the screen.

Except the greedy Apple bastards went and took that real estate for themselves. The bottom 40-ish pixels of the site are reserved magic space - tap there and the Safari nav pops back in.

So you can't put a nav there, or an action button, or a link or or a chat box or whatever. Not without resorting to the now-canonical hack detailed on [this god-given Eventbrite blog post](https://www.eventbrite.com/engineering/mobile-safari-why/), rightfully titled "Mobile Safari (Whyyyy?)". Yet no hack goes unpunished.

No, because we're dirty web peasants, we have to put our nav at the top, where no one can ever reach it. Good, I'm sure.

### Get over here

Chrome isn't blameless either.

In Chrome 56, because Browsers Know Best, the Chrome team set `touch` events to `{ passive: true }` by default. They [excuse themselves in this blog post](https://developers.google.com/web/updates/2017/01/scrolling-intervention).

`passive: true` allows a developer to reassure the browser that the page will not be calling `e.preventDefault()`, which would block page scroll. This allows the browser to respond immediately to scroll, which at risk of singing its praises, I don't remember ever being an issue in Safari.

### A classic 

`hover` events. Why are they ever fired on a touch device? Browsers Know Best: when the web was written for mouse pointers, key functionality was (daftly) put behind `hover` events. So to unbreak the web on mobile, browsers started emulating `hover` on the very `mousedown`-looking `touchstart`. Now we're stuck with it.

So we end up with weird interactions, like having to double-tap something that rely on hover, or CSS hover events firing on a click, or "sticky" hover states when you were simply trying to scroll the page.

If Apple were brave enough to break Flash websites, why did they never the same bravery with hover interactions? Just break it, the web will fix itself. A decade later and we still resort to hacks like scoping `:hover` effects to `html.is-touch-device`. The mobile web feeling tacky by default.

## Business People are people too

Whether the interests of the business and of the user are polarised or harmonised is a debate much older than software.

As a wide-eyed UX-minded front end dev, I'm predisposed to believing the latter. But all it takes is one analyst, one henchman to the business people, to find the inevitable stat that shows app users are more engaged than web users and decisions begin to be made on behalf of the bottom line.

I won't get into the debate over whether converting a web to an app user makes them stickier, or more engaged, or whatever. It sounds about right? The point I want to make is decisions made with this mentality invariably become user hostile.

## Reddit

For example. I used the Reddit app, specifically I use Alien Blue and am slowly dipping my toe into the new Reddit app. I also use the desktop and mobile web version - sometimes it's just quicker to hit the address bar, type "sta" and have the Star Trek subreddit preloaded for you. The point: I ain't going anywhere.

So why is it that every time I go to the mobile website I'm greeted with this popover?

<insert screenshot>

That's **despite** using Reddit on four different platforms, **despite** clicking "I'm sorry today I'd like to be web scum" every single time.

What the fuck is that?

And the USP's - "50% faster", by what metric? "Infinite scrolling", infinite scrolling feeds are not difficult, either the devs are lazy, incompetent, or **most likely** the Business People needed a bullet point to whack on the pop-up to bag themselves a conversion.

### Facebook

Relatively speaking that's small beans, at least the pop-up can be dismissed (multiple times!) That's nothing compared to the violence of Facebook Messenger.

I had the Facebook app, once. Then because an analyst got a whiff that messenger had higher engagement on the stand-alone app, the Business People decided to force users to download that. Once that was downloaded, the analyst got a whiff that users were stickier when push notifications were enabled. So the Business People forced users to turn those on. So I deleted it and used the web instead.

The mobile messages worked perfectly. I was quite happy not to have Facebook on my phone - despite lacking a messenger, it's hundreds of meg. The mobile site loaded near-instantly with just a couple hundred of kb.

**Sniff**

<insert screenshot>

Now, when we click the "new messages" icon, we're treated to a splash screen telling us to download Messenger (or we were, there's presently a bug so it does literally nothing). This purposeful degradation of a perfectly capable website is totally anti-user.

It is wild. I am wild.

## AMP

A lot has been made of the ill-comings of AMP (Accelerated Mobile Pages) recently. My favourite is this [surgical take-down by The Register](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/).

The complaints are usually the same; it's proprietary, Google is using you for your content, homogeneous, opaque, maintaining two views.

My biggest is the flagrant abuse of power where Google has a special AMP section at the top of their search results, where AMP results get a nice picture. It's labeled "news", but don't be fooled.



There's no denying that AMP pages are faster than the majority of the net. Outside of Google favouritism, they're not magic though. There's nothing there that couldn't be achieved by the rest of us. We just don't. We left that goal wide open and AMP is the web's collective punishment for being lazy and not prioritising performance. 

Which brings us to the mobile web's biggest problem:

## You

Well, and me. I'll take a bit of this blame. You can take the rest.There's no excuse for bloated downloads and far too many developers carelessly import the whole of libraries like Lodash and Moment without thinking about their user's performance budget.

## Do we even deserve redemption

John Gruber of [Daring Fireball](https://daringfireball.net) has been banging on recently about how JavaScript was a mistake, that the web would load in under a second if it didn't exist.

Well, maybe. It's an interesting thought experiment. In the majority of cases JS does make things slower, but with care we can also make things quicker and JS is crucial in making that possible.

Off the bat, a lean website loads infinitely quicker than an app. The address bar is an power user app-launcher, the top result is preloaded and we can do it all from the browser. No context-switching, or sloshing about with Apple's horrific search, or waiting for a hotspot to download a 500mb social app. No investment, no need to delete, to arrange.

Indeed, with server-side rendering, many web sites **show** something to a user as quickly as if they didn't use JavaScript. Downloading and executing a lean JS file on top of that brings time-to-interactive speeds will within your average app splash screen.

## Things. Can only get betteeerrr.

Well actually they can get worse. Browsers Still Know Best, and keep releasing breaking changes that we get to hack around. Business interests will always inexplicably collide with user interests. Google will always want control.

And you'll always be lazy. Me, too, a bit. Mostly you.

Let's be optimistic though. JavaScript, for all Gruber's delicious tears, isn't going anywhere. Nor should it. It's important that there's a democratic and open platform, and in the world of closed devices the web is it.

It's essential this platform remains open, and continues to become more and more capable.

We're getting WebAssembly, so it'll get faster. WebGL is gaining adoption and we'll see improved AR and VR support, so it'll become more capable.

We just need, as developers, to make the time, and space, and discipline, to dedicate to polish and performance, rather blindly belting along the features treadmill.

