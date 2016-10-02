// class Value {
//   constructor(current = 0, type) {
//     this.type = type;
//     this.listeners = [];
//     this.numListeners = 0;
//     this.action = undefined;

//     this.set(current);

//     this.onUpdate = this.onUpdate.bind(this);
//   }

//   set(current) {
//     this.current = current;
//     this.onUpdate();

//     return this;
//   }

//   getRaw() {
//     return this.current;
//   }

//   get() {
//     if (this.type && this.type.output) {
//       return this.type.output(this.current);
//     } else {
//       return this.current;
//     }
//   }

//   onUpdate() {
//     for (let i = 0; i < this.numListeners; i++) {
//       this.listeners[i](this);
//     }

//     return this;
//   }

//   addListener(callback) {
//     this.listeners.push(callback);
//     this.numListeners++;
//     return this;
//   }

//   removeListener(callback) {
//     const listenerIndex = this.listeners.indexOf(callback);
//     if (listenerIndex > -1) {
//       this.listeners.splice(listenerIndex, 1);
//       this.numListeners--;
//     }
//     return this;
//   }
// }


// function value(current, type) {

// }


// class ValueGroup {
//   constructor(values) {
//     this.set(values);
//     this.state = {};
//   }

//   set(values) {
//     for (let key in values) {
//       this[key] = this[key] ? this[key].set(values[key]) : new Value(values[key]);
//       // add listener
//     }
//   }

//   get() {
//     for () {
//       this.state[key] = value.get();
//     }

//     return this.state;
//   }
// }

// export default (values) => new ValueGroup(values);


// class CompositeValue extends Value {
//   constructor(current, type) {




//     super(current, type);

//     this.valueProps = {};
//     this.valueKeys = [];
//     this.numValueKeys = 0;

//     const valueProps = type.parse(current);

//     for (let key in valueProps) {
//       const prop = valueProps[key];
//       this[key] = new Value(prop, type.childTypes[key])
//         .addListener(this.hasUpdated);
//       this.valueKeys.push(key);
//       this.numValueKeys++;
//     }
//   }

//   get() {
//     for (let i = 0; i < this.numValueKeys; i++) {
//       const key = this.valueKeys[i];
//       const value = this[key];
//       this.current[key] = value.get();
//     }

//     return (this.type && this.type.output) ? this.type.output(this.current) : this.current;
//   }

//   set(value) {
//     const valueProps = this.type.parse(value);

//     this.current = value;
    
//     for (let key in valueProps) {
//       value.set(valueProps[key]);
//     }

//     return this;
//   }
// }


// import { onFrameRender, timeSinceLastFrame } from '../framesync/render-loop';

// class Value {
//   constructor(initialValue) {
//     this.state = {
//       current: initialValue,
//       velocity: 0
//     };

//     this.listeners = [];
//   }

//   update(latest) {
//     const { current } = this.state;
//     this.state.current = latest;
//     this.state.velocity = speedPerSecond(latest - current, timeSinceLastFrame());

//     if (this.state.velocity) {
//       this.hasChanged();
//     }
//   }

//   bind(action) {
//     if (this.action) {
//       this.action.unsubscribe(this.update);
//     }

//     this.action = action;
//     this.action.subscribe(this.update);

//   }

//   subscribe(callback) {
//     if (this.listeners.indexOf(callback) === -1) {
//       this.listeners.push(callback);
//     }
//   }

//   unsubscribe(callback) {
//     const indexOfCallback = this.listeners.indexOf(callback)
//     if (indexOfCallback !== -1) {
//       this.listeners.splice(indexOfCallback, 1);
//     }
//   }

//   hasChanged() {
//     const numListeners = this.listeners.length;
//     for (let i = 0; i < numListeners; i++) {
//       this.listeners[i](this);
//     }
//   }

//   set(v) {
//     this.state.current = v;
//     this.hasChanged();
//   }

//   get() {
//     return this.state.current;
//   }

//   getVelocity() {
//     return this.state.velocity;
//   }
// }

// export default function value(initialValue, onUpdate) {
//   return new Value(initialValue, onUpdate);
// }


// // Value usage
// // 

// const foo = value(`rgba(255, 255, 0)`, rgba);
// foo.red.set(100);

// const interpolator = interpolate([255, 0], [0, 1]);
// interpolator(foo.red.get());

// const animation = tween(`rgba(255, 255, 0)`, `rgba(0, 255, 0)`);

// slider = renderCSS(document.querySelector('.slider'), {
//   x: value(0)
// }, true);

// tween(slider.x, 300);
// interpolator(slider.x, slider.y)

// const animation = tween(0, 1);
// animation.interpolate()

// const transitions = {

// };

// class StateMachine extends React.Children {
//   componentDidMount() {
//     this.dom = findDOMNode(this);
//   }

//   componentWillReceiveProps({ state }) {
//     const currentState = this.props.state;

//     if (state !== currentState) {

//     }
//   }

//   render() {
//     return this.props.children(this.actions);
//   }
// }

// // states: rest, dragging, draggingOutsideLimits, seek, seekOutsideLimits


// const REST = 'rest';
// const IS_DRAGGING = 'isDragging';
// const IS_DRAGGING_OUTSIDE_LIMITS = 'isDraggingOutsideLimits';
// const IS_SCROLLING = 'isScrolling';

// const stateConditions = {
//   [REST]: {
//     isDragging: false,
//     isScrolling: false,
//     isOutsideBounds: true
//   },
//   [IS_DRAGGING]: {
//     isDragging: true,
//     isOutsideBounds: false
//   },
//   [IS_DRAGGING_OUTSIDE_BOUNDS]: {
//     isDragging: true,
//     isOutsideBounds: true
//   },
//   [IS_SCROLLING]: {
//     isScrolling: true,
//     isOutsideBounds: false
//   },
//   [IS_SCROLLING_OUTSIDE_BOUNDS]: {
//     isScrolling: true,
//     isOutsideBounds: false
//   },
//   [SEEKING]: {
//     isDragging: false,
//     isScrolling: false
//   }
// };

// const state -= {
//   [IS_DRAGGING]: {
//     action: STOP_DRAG,
//     to: SEEKING
//   }
// }

// // const transitions = {
// //   [IS_DRAGGING]: {
// //     entry: (dom, prevState) => {
// //       physics().on(dom).start();
// //     },
// //     exit: () => {}
// //   }
// //   [REST]: {
// //   }
// // };

// // Actions
// const START_DRAG = 'startDrag';
// const STOP_DRAG = 'stopDrag';
// const SCROLL = 'scroll';
// const NEXT_PAGE = 'nextPage';
// const PREV_PAGE = 'prevPage';
// const OUT_OF_BOUNDS = 'outOfBounds';

// // States
// const DRAGGING = 'dragging';
// const SCROLLING = 'scrolling';
// const SEEKING = 'seeking';

// // Transitions
// const stateTransitions = {
//   [REST]: {
//     [START_DRAG]: DRAGGING
//   },
//   [IS_DRAGGING]: {
//     [STOP_DRAG]: SEEKING
//   }
// };

// <UIStateMachine
//   stateTransitions={stateTransitions}
//   actions={[START_DRAG, STOP_DRAG, SCROLL, NEXT_PAGE, PREV_PAGE]}
//   initalState={REST}
// >
//   {({ startDrag, stopDrag, scroll, nextPage, prevPage }) => (
//     <div className={styles.container} onWheel={scroll} onTouchStart={startDrag} onTouchEnd={stopDrag}>
//       <button onClick={nextPage} />
//       <button onClick={prevPage} />
//       <ul></ul>
//     </div>
//   )}
// </UIStateMachine>

