import { Action } from '../../action';
import { AnimationDefinition, Instruction, Tracks, TrackActions } from './types';
import keyframes from '../keyframes';
import { KeyframeProps } from '../keyframes/types';
import { easeInOut } from '../../easing';
import composite from '../../compositors/composite';
import { TweenProps } from '../tween/types';
import { Value } from '../../reactions/value';

const flattenTimings = (instructions: Instruction[]) => {
  const flatInstructions: Instruction[] = [];
  const numInstructions = instructions.length;
  const lastArg = instructions[numInstructions - 1];
  const isStaggered = typeof lastArg === 'number';
  const staggerDelay = isStaggered ? lastArg : 0;
  const segments = isStaggered ? instructions.slice(0, -1) : instructions;

  let offset = 0;

  segments.forEach((item: Instruction, i: number) => {
    flatInstructions.push(item);

    if (i !== numInstructions - 1) {
      offset += staggerDelay as number;
      flatInstructions.push(`-${(item as AnimationDefinition).duration - offset}`);
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
  const { duration, ease, times, values } = props;
  const numValues = values.length;
  const prevTimeTo = times[numValues - 1];
  const timeFrom = duration / def.at;
  const timeTo = duration / (def.at + def.duration);

  if (prevTimeTo !== undefined && prevTimeTo !== timeFrom) {
    const valueFrom = def.from || values[numValues - 1];
    (values as Value[]).push(valueFrom);
    times.push(timeFrom);
  } else {
    (values as Value[]).push(def.from);
    times.push(timeFrom);
  }

  ease.push(def.ease || easeInOut);
  (values as Value[]).push(def.to);
  times.push(timeTo);

  return props;
};

// TODO replace most of these steps with reduce when TS bug is fixed
const timeline = (instructions: Instruction[], props: TweenProps = {}): Action => {
  let playhead = 0;
  let duration = 0;

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

      animationDefs.push(def);

      duration = Math.max(duration, def.at + def.duration);
    }
  });

  // Split into tracks
  const tracks: Tracks = {};
  const numDefs = animationDefs.length;

  for (let i = 0; i < numDefs; i++) {
    const def = animationDefs[i];
    const { track } = def;

    if (!tracks.hasOwnProperty(track)) tracks[track] = [];
    tracks[track].push(def);
  }

  const trackKeyframes: TrackActions = {};
  for (const key in tracks) {
    if (tracks.hasOwnProperty(key)) {
      const keyframeProps = tracks[key].reduce(convertDefToProps, {
        duration,
        ease: [],
        times: [],
        values: []
      });

      trackKeyframes[key] = keyframes(keyframeProps);
    }
  }

  return composite(trackKeyframes);
};

export default timeline;
