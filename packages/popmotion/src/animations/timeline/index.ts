// import tween from '../tween';
// import { TweenProps } from '../tween/types';
// import scrubber from '../tween/scrubber';
// import { linear } from '../../easing';
// import { Chunk, Segment, Timeline } from './types';

// const flattenArraysToSequence = (sequence: Segment[], segment: Segment) => {
//   if (Array.isArray(segment)) {
//     const lastArg = segment[segment.length - 1];
//     const isStaggered = typeof lastArg === 'number';
//     const segments = isStaggered ? segment.slice(0, -1) : segment;
//     const numSegments = segments.length;
//     let offset = 0;

//     segments.forEach((item, i) => {
//       sequence.push(item);

//       if (i !== numTweens - 1) {
//         offset += isStaggered ? lastArg : 0;
//         sequence.push(`-${item.duration - offset}`);
//       }
//     });
//   } else {
//     sequence.push(segment);
//   }

//   return sequence;
// };

// const timeline = (sequence: Segment[], props: TweenProps) => {
//   let playhead = 0;
//   let duration = 0;

//   const markers = sequence
//     // Find parallel and stagger arrays into a flat
//     // set of instructions which reset the playhead after each tween
//     .reduce(flattenArraysToSequence, [])
//     // Convert sequence into relative times
//     .reduce((acc: Playlist[], segment: Segment) => {
//       // If relative timestamp
//       if (typeof segment === 'string') {
//         playhead += parseFloat(segment);

//       // If absolute timestamp
//       } else if (typeof segment === 'number') {
//         playhead = segment;

//       // Or if tween, add marker
//       } else {
//         const to = playhead + (segment as Chunk).duration;

//         acc.push();
//       }

//       return acc;
//     }, []);

//   return tween({
//     duration,
//     ease: linear,
//     ...props
//   }).pipe();
// };

// export default timeline;
