import React from "react";
import { currentFrameTime } from "framesync";
import { BaseAnimation } from "./inc";
import { tween, value } from "../packages/popmotion/lib";

export class TweenBasic extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: "radial-gradient(circle at 50% 100%, #e66465, #9198e5)",
      to: "radial-gradient(circle at 50% 0%, #e66465, #9198e5)",
      loop: Infinity,
      duration: 3000
    }).start(v => styler.set("background-image", v));
}

export class TweenLoop extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 50,
      to: 300,
      loop: Infinity,
      duration: 1000
    }).start(v => styler.set("x", v));
}

export class TweenFlip extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 50,
      to: 300,
      flip: Infinity,
      duration: 1000
    }).start(v => styler.set("x", v));
}

export class TweenYoyo extends BaseAnimation {
  getAnimation = styler =>
    tween({
      from: 50,
      to: 300,
      yoyo: Infinity,
      duration: 1000
    }).start(v => {
      styler.set("x", v);
    });
}

export class TweenWithVelocity extends BaseAnimation {
  getAnimation = styler => {
    const val = value(0).subscribe(v => styler.set("x", v));
    return tween({
      loop: Infinity,
      to: 300,
      duration: 3000
    }).start(val);
  };
}
