---
title: How to manually set scrollTop during an iOS momentum bounce
description: Why does existence hurt so much
published: 20170804
---

# How to manually set scrollTop during an iOS momentum bounce

Here's one to file under [the mobile is web is awful](/blog/20170710-mobile-web-is-awful-and-were-all-to-blame).

I've been writing a Slack-esque chat that lazy-loads new messages as you scroll up. The adventure of reliably anchoring scroll position as these new messages are added to the DOM is probably a blog post in itself, but there's a specific issue on iOS that I'd like to share solution to.

## The problem

Here's the code to restore a previous scroll position, (which has to be recalculated to accommodate the newly-loaded messages):

```javascript
node.scrollTop = node.scrollHeight - prevScrollTop;
```

Works great in every browser, except of course the modern-day IE:

![Knew this wouldn't be so simple](/images/chat-without-hack.gif)

As you can see, the scroll position stays at the top, almost as if we never manually reset the scroll position at all.

The problem, as I began to understand, was that if you try and manually set a node's (and probably the viewport's) scroll position **while iOS is doing it's out-of-bounds bouncy thing**, that scroll position will be immediately overridden by the rest of the bounce animation.

## The fix

To fix, we simply disable momentum scrolling on that element, restore scroll position, and then re-enable momentum scrolling:

```javascript
node.style['-webkit-overflow-scrolling'] = 'auto';
node.scrollTop = node.scrollHeight - prevScrollTop;
node.style['-webkit-overflow-scrolling'] = 'touch';
```

Here's how that looks:

![Better](/images/chat-with-hack.gif)

Not as graceful as I'd prefer, but looking at the timestamps the user is still left on the correct message. It also avoids funny residual momentum effects, so I presume this technique can also be used to kill scroll momentum when a pointer moves from one overflowing node to another.

---

Popmotion is a 9kb JavaScript motion engine, and it'll give you way less bother than mobile Safari. Create awesome interactions with tweens, physics and input tracking.

[Excite your users with Popmotion](/learn/get-started) and/or [excite us with 140 characters](https://twitter.com/popmotionjs)

