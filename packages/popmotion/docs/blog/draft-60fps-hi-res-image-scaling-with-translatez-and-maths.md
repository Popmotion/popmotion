---
title: Achieve 4K 60fps image scaling animations with translateZ and maths
description: At high resolutions, image scaling in CSS can become sluggish. By using `translateZ` and maths, we can emulate `scale` at 60fps.
published: 20170710
author: Matt Perry
draft: true
---

# Achieve 4K 60fps image scaling animations with `translateZ` and maths

About a year ago I received a design to implement: a full-screen image slideshow, with a togglable sidebar.

I thought it'd be cool to have a transition where, rather than lay the sidebar **over** the image, the image itself would scale down to accommodate the sidebar. A little like this:

![Sidebar animation](/images/sidebar-effect.gif)

The function to achieve this effect is pretty simple. We first have to figure out, in pixels, how much of the sidebar to show at any given time. Then, figure out what percentage of the viewport that leaves us and use **that** for the image scale:

```javascript
(progress) => {
  const visibleSidebarWidth = sidebarWidth * progress;
  const imageScale = (viewportWidth - visibleSidebarWidth) / viewportWidth;

  sidebarRenderer.set('x', - visibleSidebarWidth + sidebarWidth);
  imageRenderer.set('scale', imageScale);
}
```

Initially, I thought this approach was working well. It looked 60fps by eye, and a quick look at the Chrome Performance panel output graphs like this:

![Low paint times = happy users](/images/scale-dev-small-screen.gif)

However, when I added high resolution images and increased the viewport to full screen on a 4K monitor, the framerate was so bad that I didn't need to see the graphs to know they'd probably look like this:

![High paint times = MY EYES](/images/scale-dev-small-screen.gif)

## Performance graphs explained

A quick aside for those who don't spend too much of their spare time in the Chrome dev tools.

In the images above, each shows two green graphs:
- The top, light green graph is FPS. Higher bars = higher fps.
- The bottom, dark green graph is actually made of three different colors. These are CPU resources, and the fact that yellow and purple are barely visible is good as it means we're not running a lot of JS and we're not causing the page to reflow. The massive green spikes means we're causing a lot of paints on the CPU.

This is odd: By default, Popmotion uses the `translateZ` force-GPU hack on `transform`. I had also set `will-change: transform` on the image itself, which would render this unnecessary. So CPU usage should be very low.

## The fix

I'd previously used `translateZ` to animate full-screen elements and thought that if we used it to physically "push" the image into the screen, we'd be able to make something that looked identical to a 2D scale.

The problem is knowing exactly **how far** to push the image into the screen in order to figure out

[Aldo Stracquadanio](https://twitter.com/astr4c)