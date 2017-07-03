---
title: React
description: Popmotion animation, tweening and input tracking - in React!
category: plugins
---

# Popmotion x React

Popmotion x React provides a simple interface to bring Popmotion's tweening, physics and input tracking capabilities to any React component.

It uses the "function as children" pattern, which means you can use declarative interactions with any React renderer. This is a simple way to power DOM, SVG, Three.js, A-Frame, Pixi... **anything**.

## Install

```
npm install --save popmotion-react
```

## Usage

```marksy
<Example isReactComponent={true}>{`
<MotionValue
  initialState="rest"
  v={{ x: 0, y: 0 }}
  onStateChange={{
    rest: ({ x, y }) => {
      tween({to: 200,onUpdate: x}).start()
    },
    isDragging: ({ x, y }, currentState, e) => {
      const trackPointer = pointer(e).start();

      trackOffset(trackPointer.x, {
        from: x.get(),
        onUpdate: x
      }).start();

      trackOffset(trackPointer.y, {
        from: y.get(),
        onUpdate: y,
        onStop: () => trackPointer.stop()
      }).start();
    }
  }}
>
  {({ v, setStateTo }) => {
  console.log(v)
    return (
      <div
        onMouseDown={setStateTo.isDragging}
        onTouchStart={setStateTo.isDragging}
        onMouseUp={setStateTo.rest}
        onTouchEnd={setStateTo.rest}
        style={{
          transform: 'translate(' + v.x + 'px, ' + v.y + 'px)',
          width: '100px',
          height: '100px',
          background: 'red'
        }}
      />
    );
  }}
</MotionValue>
`}
</Example>
```
## Examples
