import { Action } from '../../action';
import { AnimationDefinition, Instruction, Tracks, TrackActions } from './types';
import keyframes from '../keyframes';
import { KeyframeProps } from '../keyframes/types';
import { easeInOut, linear } from '@popmotion/easing';
import composite from '../../compositors/composite';
import { TweenProps } from '../tween/types';
import { Value } from '../../reactions/value';

const DEFAULT_DURATION = 300;

const flattenTimings = (instructions: Instruction[]) => {
  const flatInstructions: Instruction[] = [];
  const lastArg = instructions[instructions.length - 1];
  const isStaggered = typeof lastArg === 'number';
  const staggerDelay = isStaggered ? lastArg : 0;
  const segments = isStaggered ? instructions.slice(0, -1) : instructions;
  const numSegments = segments.length;

  let offset = 0;

  segments.forEach((item: Instruction, i: number) => {
    flatInstructions.push(item);

    if (i !== numSegments - 1) {
      const duration = (item as AnimationDefinition).duration || DEFAULT_DURATION;
      offset += staggerDelay as number;
      flatInstructions.push(`-${duration - offset}`);
    }
  });

  return flatInstructions;
};

const flattenArrayInstructions = (instructions: Instruction[], instruction: Instruction) => {
  Array.isArray(instruction)
    ? instructions.push(...flattenTimings(instruction))
    : instructions.push(instruction);

  return instructions;
};

const convertDefToProps = (props: KeyframeProps, def: AnimationDefinition, i: number) => {
  const { duration, easings, times, values } = props;
  const numValues = values.length;
  const prevTimeTo = times[numValues - 1];
  const timeFrom = def.at === 0 ? 0 : def.at / duration;
  const timeTo = (def.at + def.duration) / duration;

  // If first item, add from
  if (i === 0) {
    (values as Value[]).push(def.from);
    times.push(timeFrom);

  } else {
    // If we need to patch an interim tween
    if (prevTimeTo !== timeFrom) {
      if (def.from !== undefined) {
        (values as Value[]).push(values[numValues - 1]);
        times.push(timeFrom);
        easings.push(linear);
      }

      const from = def.from !== undefined ? def.from : values[numValues - 1];
      (values as Value[]).push(from);
      times.push(timeFrom);
      easings.push(linear);

    } else if (def.from !== undefined) {
      (values as Value[]).push(def.from);
      times.push(timeFrom);
      easings.push(linear);
    }
  }

  // Add to and easing
  (values as Value[]).push(def.to);
  times.push(timeTo);
  easings.push(def.ease || easeInOut);

  return props;
};

// TODO replace most of these steps with reduce when TS bug is fixed
const timeline = (
  instructions: Instruction[],
  { duration, elapsed, ease, loop, flip, yoyo }: TweenProps = {}
): Action => {
  let playhead = 0;
  let calculatedDuration = 0;

  const flatInstructions = instructions.reduce(flattenArrayInstructions, []);

  const animationDefs: AnimationDefinition[] = [];
  flatInstructions.forEach((instruction: Instruction) => {
    // If relative timestamp
    if (typeof instruction === 'string') {
      playhead += parseFloat(instruction);

    // If absolute timestamp
    } else if (typeof instruction === 'number') {
      playhead = instruction;

    // If animation definition, apply playhead
    } else {
      const def: AnimationDefinition = {
        ...instruction as AnimationDefinition,
        at: playhead
      };

      // TODO: Apply defaults in a cleaner fashion
      def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;

      animationDefs.push(def);
      playhead += def.duration;
      calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
    }
  });

  // Split into tracks
  const tracks: Tracks = {};
  const numDefs = animationDefs.length;

  for (let i = 0; i < numDefs; i++) {
    const def = animationDefs[i];
    const { track } = def;

    if (track === undefined) {
      throw new Error('No track defined');
    }

    if (!tracks.hasOwnProperty(track)) tracks[track] = [];
    tracks[track].push(def);
  }

  // Create keyframe animations
  const trackKeyframes: TrackActions = {};
  for (const key in tracks) {
    if (tracks.hasOwnProperty(key)) {
      const keyframeProps = tracks[key].reduce(convertDefToProps, {
        duration: calculatedDuration,
        easings: [],
        times: [],
        values: []
      });

      trackKeyframes[key] = keyframes({
        ...keyframeProps,
        duration: duration || calculatedDuration,
        ease,
        elapsed,
        loop,
        yoyo,
        flip
      });
    }
  }

  return composite(trackKeyframes);
};

export default timeline;
