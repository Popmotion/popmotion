// import smooth from '../smooth';
// import sync from 'framesync';

// TODO: Investigate why this test hangs CircleCI
// test('smooth', () => {
//   const smoother = smooth();

//   return new Promise(resolve => {
//     sync.update(() => {
//       expect(smoother(100)).toBe(100);

//       sync.update(() => {
//         expect(smoother(200)).toBeGreaterThan(100);
//         resolve();
//       });
//     });
//   });
// });
