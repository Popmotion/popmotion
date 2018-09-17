import {
  AncestorValueList,
  Props,
  ValueMap,
  PoseMap,
  PassiveValueMap,
  ReadValue,
  ReadValueFromSource,
  CreateValue,
  ConvertValue,
  ActivePoses,
  SetValueNative
} from '../types';
import { getPoseValues } from '../inc/selectors';
import { resolveProp } from './setter';
import { Pose } from '..';

type ValueFactoryProps<V, A> = {
  poses: PoseMap<A>;
  passive?: PassiveValueMap;
  ancestorValues: AncestorValueList<V>;
  readValue: ReadValue<V>;
  createValue: CreateValue<V>;
  convertValue: ConvertValue<V>;
  userSetValues: { [key: string]: V };
  initialPose?: string | string[];
  readValueFromSource?: ReadValueFromSource;
  setValueNative: SetValueNative;
  activePoses: ActivePoses;
  props: Props;
};

export const DEFAULT_INITIAL_POSE = 'init';

const isScale = (key: string) => key.includes('scale');
const defaultReadValueFromSource = (key: string) => (isScale(key) ? 1 : 0);

/**
 * This is a prime candidate for refactoring, possibly in combination
 * with the `posesToSearch.find()` function.
 */
const readValueFromPose = <A>(pose: Pose<A>, key: string, props: Props) => {
  const valueToResolve =
    pose.applyAtEnd && pose.applyAtEnd[key] !== undefined
      ? pose.applyAtEnd[key]
      : pose[key] !== undefined
        ? pose[key]
        : pose.applyAtStart && pose.applyAtStart[key] !== undefined
          ? pose.applyAtStart[key]
          : 0;

  return resolveProp(valueToResolve, props);
};

const getPosesToSearch = (pose: string | string[]) => {
  const posesToSearch = Array.isArray(pose) ? pose : [pose];
  posesToSearch.push(DEFAULT_INITIAL_POSE);
  return posesToSearch;
};

const getInitialValue = <A>(
  poses: PoseMap<A>,
  key: string,
  initialPose: string | string[],
  props: Props,
  readValueFromSource: ReadValueFromSource = defaultReadValueFromSource,
  activePoses: ActivePoses
) => {
  const posesToSearch = getPosesToSearch(initialPose);

  const pose: string = posesToSearch.filter(Boolean).find((name: string) => {
    const thisPose: Pose<A> = poses[name];

    return (
      thisPose &&
      (thisPose[key] !== undefined ||
        (thisPose.applyAtStart && thisPose.applyAtStart[key] !== undefined) ||
        (thisPose.applyAtEnd && thisPose.applyAtEnd[key] !== undefined))
    );
  });

  // Prime active values array with found pose as first item
  // TODO: Instead of priming with 'init' if no pose found, create
  // a unique pose with the readValueFromSource return value
  activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);

  return pose
    ? readValueFromPose(poses[pose], key, props)
    : readValueFromSource(key, props);
};

const createValues = <V, A>(
  values: ValueMap<V>,
  {
    userSetValues,
    createValue,
    convertValue,
    readValueFromSource,
    initialPose,
    poses,
    activePoses,
    props
  }: ValueFactoryProps<V, A>
) => (key: string) => {
  if (values.has(key)) return;

  let value: V;

  // If this user has explicitly created a value, use that
  if (userSetValues && userSetValues[key] !== undefined) {
    value = convertValue(userSetValues[key], key, props);

    // Or create a new value
  } else {
    const initValue = getInitialValue(
      poses,
      key,
      initialPose,
      props,
      readValueFromSource,
      activePoses
    );

    value = createValue(initValue, key, props);
  }

  values.set(key, value);
};

const scrapeValuesFromPose = <V, A>(
  values: ValueMap<V>,
  props: ValueFactoryProps<V, A>
) => (key: string) => {
  const pose = props.poses[key];
  Object.keys(getPoseValues<A>(pose)).forEach(
    createValues<V, A>(values, props)
  );
};

const getAncestorValue = <V>(
  key: string,
  fromParent: boolean | string,
  ancestors: AncestorValueList<V>
): V => {
  if (fromParent === true) {
    return ancestors[0] && ancestors[0].values.get(key);
  } else {
    const foundAncestor = ancestors.find(({ label }) => label === fromParent);
    return foundAncestor && foundAncestor.values.get(key);
  }
};

const bindPassiveValues = <V, A>(
  values: ValueMap<V>,
  {
    passive,
    ancestorValues,
    createValue,
    readValue,
    props
  }: ValueFactoryProps<V, A>
) => (key: string) => {
  const [valueKey, passiveProps, fromParent] = passive[key];
  const valueToBind =
    fromParent && ancestorValues.length
      ? getAncestorValue<V>(valueKey, fromParent, ancestorValues)
      : values.has(valueKey) ? values.get(valueKey) : false;

  if (!valueToBind) return;

  const newValue = createValue(readValue(valueToBind), key, props, {
    passiveParentKey: valueKey,
    passiveParent: valueToBind,
    passiveProps
  });

  values.set(key, newValue);
};

const setNativeValues = <V, A>({
  setValueNative,
  initialPose,
  props,
  poses
}: ValueFactoryProps<V, A>) => {
  const valuesHaveSet = new Set();

  const setValues = (pose: Pose<A>, propKey: string) => {
    if (pose[propKey]) {
      for (const key in pose[propKey]) {
        if (!valuesHaveSet.has(key)) {
          valuesHaveSet.add(key);
          setValueNative(key, resolveProp(pose[propKey][key], props), props);
        }
      }
    }
  };

  getPosesToSearch(initialPose).forEach(poseKey => {
    const pose = poses[poseKey];
    if (pose) {
      setValues(pose, 'applyAtEnd');
      setValues(pose, 'applyAtStart');
    }
  });
};

const createValueMap = <V, A>(props: ValueFactoryProps<V, A>): ValueMap<V> => {
  const { poses, passive } = props;
  const values: ValueMap<V> = new Map();

  // Scrape values from poses
  Object.keys(poses).forEach(scrapeValuesFromPose<V, A>(values, props));

  // Set any remaining values that won't be animated but need to be set initially
  // An optimisation here might be to have a mutative value in props or some other flag
  // so we know if we've found `applyAtStart` or `applyAtEnd` during value scraping
  setNativeValues(props);

  // Initiate passive values
  if (passive)
    Object.keys(passive).forEach(bindPassiveValues<V, A>(values, props));

  return values;
};

export default createValueMap;
