import Action from './Action';
import { currentTime } from '../inc/utils';

const MAX_ELAPSED = 33;

class Clock extends Action {
  onStart() {
    this.current = currentTime();
  }

  onUpdate(framestamp) {
    const elapsed = Math.min(framestamp - this.current, MAX_ELAPSED) * this.dilate;
    this.current += elapsed;
  }
}

Clock.defaultProps = {
  dilate: 1
};

export default function clock(props) {
  return new Clock(props);
};

function flatten() {

}

// // http://www.gamasutra.com/view/feature/131863/animation_blending_achieving_.php
// class CompositeAction extends Action {
//   constructor(props) {
//     super(props);
//     this.children = [];
//     this.numChildren = 0;
//     this.flattenList = [];
//   }

//   addAction(action) {
//     this.children.push({
//       action,
//       force,
//       weight: 0
//     });

//     this.numChildren++;
//   }

//   removeAction(action) {

//   }

//   onUpdate(framestamp) {
//     const numChildren = this.children.length;

//     for (let i = 0; i < numChildren; i++) {
//       this.children[i].onUpdate(framestamp);
//     }

//     flatten(this);

//     //blend
//     let currentWeight = 0;

//     for (i = 0; i < this.flattenList.length; i++) {
//       const item = this.flattenList[i];
//       if (item.blendWeight) {
//         currentWeight += item.blendWeight;
//         const interpolation = item.blendWeight / currentWeight;
//         blendChannels(buffer, item, interpolation);
//       }
//     }

//     function blendTwoTweens(a, b) {
//       const aEasedProgress
//       const bEasedProgress
//       const [aEasedProgress, 1] -> [0, 1]
//       const [bEasedProgress, 1] -> [0, 1]
//       const 
//     }
//   }
// }

