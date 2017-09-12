
// const merge = (...streams) => {
//   return createStream(({ update }) => {
//     const subs = streams.map((stream) => stream.subscribe((v) => update(v)));
//     return () => subs.forEach((sub) => sub.unsubscribe());
//   });
// };

// const combine = (...streams) => {
//   const output = new Array(streams.length);
//   return createStream(({ update }) => {
//     const subs = streams.map((stream, i) => stream.subscribe((v) => {
//       output[i] = v;
//       // Only emit if all have been fired
//       update(output);
//     }));
//     return () => subs.forEach((sub) => sub.unsubscribe());
//   });
// 
// 
// 

