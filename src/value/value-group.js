// import { Value } from './value';

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

//     this.valueKeys = [];

//     const valueProps = type.parse(current);

//     for (let key in valueProps) {
//       const prop = valueProps[key];
//       this[key] = new Value(prop, type.childTypes[key]);
//     }
//   }

//   get() {
//     return super.get();
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

// export default CompositeValue;

// const box = valueGroup({

// });

// const box = renderCSS(document.getElementById('box'), {
//   x: 0,
//   y: 0,
//   opacity: 0
// });


// box.set({
//   color: 'rgba(255,0,0,0)'
// });

// box.color.red.set(255);
// box.color.set('rgba(255,0,0,0)');

// box.opacity.set(0);

// box.x.getVelocity()
// 
