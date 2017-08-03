import { onFrameUpdate, cancelOnFrameUpdate, timeSinceLastFrame } from 'framesync';
import { speedPerSecond } from 'inc/calc';

interface LifecycleCallback {
  (action: Action): void;
}

interface UpdateFunction {
  (v: number, action: Action): void;
}

interface ActionProps {
  [propNames: string]: any;
  onStart?: LifecycleCallback;
  _onStart?: LifecycleCallback;
  onStop?: LifecycleCallback;
  _onStop?: LifecycleCallback;
  onComplete?: LifecycleCallback;
  _onComplete?: LifecycleCallback;
  onUpdate?: UpdateFunction | Action;
  passive: boolean;
}

export default class Action { // lawsuit - sorry
  // Internal vars
  protected props: ActionProps;
  protected lastUpdated: number = 0;
  protected prev: number;
  protected current: number;
  protected listeners?: UpdateFunction[];
  protected numListeners: number = 0;

  private _isActive: boolean = false;

  // Optionally extended methods
  protected update?: Function;
  protected onStart?: Function;
  protected onStop?: Function;
  protected onComplete?: Function;
  protected isActionComplete?: Function;
  protected registerAction?: Function;

  protected constructor(props: ActionProps = {
    passive: false
  }) {
    this.setProps(props);
    this.prev = this.current = props.current || props.from || 0;
  }

  start() {
    const { onStart, _onStart, passive } = this.props;

    if (!passive) {
      this._isActive = true;
      onFrameUpdate(this.scheduledUpdate);
    }

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    return this;
  }

  stop() {
    const { onStop, _onStop, passive } = this.props;

    if (!passive) {
      this._isActive = false;
      cancelOnFrameUpdate(this.scheduledUpdate);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

    return this;
  }

  complete() {
    const { onComplete, _onComplete } = this.props;

    if (this.onComplete) this.onComplete();
    if (onComplete) onComplete(this);
    if (_onComplete) _onComplete(this);

    return this;
  }

  scheduledUpdate = () => {
    this.lastUpdated = timeSinceLastFrame();
    this.prev = this.current;

    const { onUpdate, passive } = this.props;

    if (this.update) {
      this.current = this.update(this.current);
    }

    if (onUpdate) {
      if (onUpdate instanceof Action) {
        onUpdate.set(this.get());
      } else {
        onUpdate(this.get(), this);
      }
    }

    this.fireListeners();

    if (!passive && this._isActive) {
      onFrameUpdate(this.scheduledUpdate);
    }

    if (this.isActionComplete && this.isActionComplete()) {
      this.complete();
    }

    return this;
  };

  setProps({ onUpdate, ...props }: ActionProps) {
    this.props = {
      ...this.props,
      ...props
    };

    if (onUpdate) this.output(onUpdate);

    return this;
  }

  output(func: UpdateFunction | Action): Action {
    this.props.onUpdate = func;
    if (func instanceof Action) {
      func.registerAction(this);
      func.set(this.get());
    }

    return this;
  }

  get() {
    const { transform } = this.props;
    return transform ? transform(this.current) : this.current;
  }

  getBeforeTransform() {
    return this.current;
  }

  set(v: number) {
    this.current = v;
    return this;
  }

  getProp(key: string) {
    return this.props[key];
  }

  getVelocity() {
    return speedPerSecond(this.current - this.prev, this.lastUpdated);
  }

  isActive() {
    return this._isActive;
  }

  addListener(listener: UpdateFunction) {
    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.numListeners++;
    }
    return this;
  }

  removeListener(listener: UpdateFunction) {
    const listenerIndex = (this.listeners) ? this.listeners.indexOf(listener) : -1;
    if (listenerIndex !== -1) {
      this.numListeners--;
      this.listeners.splice(listenerIndex, 1);
    }
    return this;
  }

  fireListeners() {
    const current = this.get();
    for (let i = 0; i < this.numListeners; i++) {
      this.listeners[i](current, this);
    }
    return this;
  }
};
