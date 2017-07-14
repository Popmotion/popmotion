import { calc, tween, easing, transform } from 'popmotion';
const { getProgressFromValue } = calc;
const { clamp } = transform;
const clampProgress = clamp(0, 1);

export default function timeline(sequence, props) {
  let playhead = 0;
  let duration = 0;

  const markers = sequence
    // Convert sequence
    .reduce((acc, segment) => {
      const typeOfSegment = typeof segment;

      // If relative timestamp
      if (typeOfSegment === 'string') {
        playhead += parseFloat(segment);

      // If absolute timestamp
      } else if (typeOfSegment === 'number') {
        playhead = segment;

      // Or if tween, add marker
      } else {
        const to = playhead + segment.getProp('duration');

        acc.push({
          tween: segment,
          from: playhead,
          to
        });

        playhead = to;
        duration = Math.max(duration, to);
      }

      return acc;
    }, [])
    // Split tweens by target, and convert absolute markers to progress markers
    .reduce((acc, marker) => {
      const output = marker.tween.getProp('onUpdate');
      let targetIndex = acc.targets.indexOf(output);

      if (targetIndex === -1) {
        acc.targets.push(output);
        acc.fragments.push([]);
        targetIndex = acc.fragments.length - 1;
      }

      const fragmentList = acc.fragments[targetIndex];

      fragmentList.push({
        tween: marker.tween,
        from: getProgressFromValue(0, duration, marker.from),
        to: getProgressFromValue(0, duration, marker.to)
      });

      return acc;
    }, { targets: [], fragments: [] });

  const numMarkers = markers.fragments.length;

  return tween({
    duration,
    ease: easing.linear,
    ...props,
    onUpdate: (v) => {
      // First iterate over output targets, and try to find an active tween 
      for (let i = 0; i < numMarkers; i++) {
        const fragments = markers.fragments[i];
        const numFragments = fragments.length;
        let foundActiveFragment = false;
        let prevProgressDistance = Infinity;
        let closestIndex = 0;
        let closestProgress = 0;
        let j = 0;

        while (!foundActiveFragment && j < numFragments) {
          const fragment = fragments[j];
          const progress = getProgressFromValue(fragment.from, fragment.to, v);

          // Found an active fragment, execute
          if (progress >= 0 && progress <= 1) {
            foundActiveFragment = true;
            fragment.tween.seek(progress);
          } else {
            const distance = (progress < 0) ? Math.abs(progress) : progress - 1;

            if (distance < prevProgressDistance) {
              prevProgressDistance = distance;
              closestProgress = clampProgress(progress);
              closestIndex = j;
            }
          }

          j++;
        }

        if (!foundActiveFragment) {
          console.log(fragments[closestIndex].tween, closestProgress);
          if (fragments[closestIndex].tween.progress !== closestProgress) fragments[closestIndex].tween.seek(closestProgress);
        }
      }
    }
  });
}
