import { onFrameRender, timeSinceLastFrame } from '../framesync/render-loop';

class Value {
  constructor(initialValue) {
    this.state = {
      current: initialValue,
      velocity: 0
    };

    this.listeners = [];
  }

  update(latest) {
    const { current } = this.state;
    this.state.current = latest;
    this.state.velocity = speedPerSecond(latest - current, timeSinceLastFrame());

    if (this.state.velocity) {
      this.hasChanged();
    }
  }

  bind(action) {
    if (this.action) {
      this.action.unsubscribe(this.update);
    }

    this.action = action;
    this.action.subscribe(this.update);

  }

  subscribe(callback) {
    if (this.listeners.indexOf(callback) === -1) {
      this.listeners.push(callback);
    }
  }

  unsubscribe(callback) {
    const indexOfCallback = this.listeners.indexOf(callback)
    if (indexOfCallback !== -1) {
      this.listeners.splice(indexOfCallback, 1);
    }
  }

  hasChanged() {
    const numListeners = this.listeners.length;
    for (let i = 0; i < numListeners; i++) {
      this.listeners[i](this);
    }
  }

  set(v) {
    this.state.current = v;
    this.hasChanged();
  }

  get() {
    return this.state.current;
  }

  getVelocity() {
    return this.state.velocity;
  }
}

export default function value(initialValue, onUpdate) {
  return new Value(initialValue, onUpdate);
}

const renderMenu = renderDOM(document.getElementById(), {
  x: value(),
  y: chain(
    getValue('x'),
    map([0, 100], [0, 200])
  )
})

tween(renderMenu.x, {
  to: 300,
  duration: 100,
  ease: ease.fuckYouo
}).start();

velocity(value.x).start()

const mouseInput = input(e);
track(renderMenu.x, mouseInput.x).start()
track({
  input: mouseInput.x,
  to: renderMenu.x,
  output: (v) => v*2 
})


class Action {
  start(target) {
    on
  }
}
