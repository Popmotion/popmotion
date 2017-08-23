import { calc, tween, easing, transform } from 'popmotion';
const { getProgressFromValue } = calc;
const { clamp } = transform;
const clampProgress = clamp(0, 1);

/*
  Flatten arrays, which denote parallel or staggered tweens,
  into a flat set of instructions which reset the playhead
  after each tween.
 */
function flattenArraysToSequence(sequence, segment) {
  if (segment.constructor === Array) {
    const lastArg = segment[segment.length - 1];
    const isStaggered = typeof lastArg === 'number';
    const tweens = isStaggered ? segment.slice(0, -1) : segment;
    const numTweens = tweens.length;
    let offset = 0;

    tweens.forEach((item, i) => {
      sequence.push(item);

      if (i !== numTweens - 1) {
        const duration = item.getProp('duration');
        offset += isStaggered ? lastArg : 0;
        sequence.push(`-${duration - offset}`);
      }
    });
  } else {
    sequence.push(segment);
  }

  return sequence;
}

export default function timeline(sequence, props) {
  let playhead = 0;
  let duration = 0;

  const markers = sequence
    .reduce(flattenArraysToSequence, [])
    // Convert sequence to relative timings
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

      if (output.get) {
        acc.initialValues[targetIndex] = output.get();
      }

      return acc;
    }, { initialValues: [], targets: [], fragments: [] });

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
        let tweenHasStarted = false;
        let j = 0;

        while (!foundActiveFragment && j < numFragments) {
          const fragment = fragments[j];
          const progress = getProgressFromValue(fragment.from, fragment.to, v);

          // Found an active fragment, execute
          if (progress >= 0 && progress <= 1) {
            foundActiveFragment = true;
            fragment.tween.seek(progress);
          } else {
            if (progress > 1) {
              tweenHasStarted = true;

              const distance = (progress < 0) ? Math.abs(progress) : progress - 1;

              if (distance < prevProgressDistance) {
                prevProgressDistance = distance;
                closestProgress = clampProgress(progress);
                closestIndex = j;
              }
            }
          }

          j++;
        }

        if (!foundActiveFragment) {
          const target = markers.targets[i];

          if (tweenHasStarted || !target.set) {
            if (fragments[closestIndex].tween.progress !== closestProgress) fragments[closestIndex].tween.seek(closestProgress);
          } else if (!tweenHasStarted && target.set) {
            if (target.get() !== markers.initialValues[i]) target.set(markers.initialValues[i]);
          }
        }
      }
    }
  });
}
