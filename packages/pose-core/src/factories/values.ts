import {
  AncestorValueList,
  Props,
  Pose,
  ValueMap,
  PoseMap,
  PassiveValueMap,
  ReadValue,
  CreateValue,
  ConvertValue
} from '../types';
import { getPoseValues } from '../inc/selectors';
import { resolveProp } from './setter';

type ValueFactoryProps<V, A> = {
  poses: PoseMap<A>;
  passive?: PassiveValueMap;
  ancestorValues: AncestorValueList<V>;
  readValue: ReadValue<V>;
  createValue: CreateValue<V>;
  convertValue: ConvertValue<V>;
  userSetValues: { [key: string]: V };
  initialPose?: string | string[];
  props: Props;
};

const isScale = (key: string) => key.includes('scale');

const getInitialValue = <A>(
  poses: PoseMap<A>,
  key: string,
  initialPose: string | string[],
  props: Props
) => {
  const posesToSearch = Array.isArray(initialPose)
    ? initialPose
    : [initialPose];
  const pose = posesToSearch.find(
    name => poses[name] && poses[name][key] !== undefined
  );

  return pose ? resolveProp(poses[pose][key], props) : isScale(key) ? 1 : 0; // Hook for renderer inspection?
};

const createValues = <V, A>(
  values: ValueMap<V>,
  {
    userSetValues,
    createValue,
    convertValue,
    initialPose,
    poses,
    props
  }: ValueFactoryProps<V, A>,
  pose: Pose<A>
) => (key: string) => {
  if (values.has(key)) return;

  let value: V;

  // If this user has explicitly created a value, use that
  if (userSetValues && userSetValues[key] !== undefined) {
    value = convertValue(userSetValues[key], key, props);

    // Or create a new value
  } else {
    console.log(poses, key, initialPose);
    const initValue = getInitialValue(poses, key, initialPose, props);
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
    createValues<V, A>(values, props, pose)
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
    passiveParent: valueToBind,
    passiveProps,
    props
  });

  values.set(key, newValue);
};

const createValueMap = <V, A>(props: ValueFactoryProps<V, A>): ValueMap<V> => {
  const { poses, passive } = props;
  const values: ValueMap<V> = new Map();

  // Scrape values from poses
  Object.keys(poses).forEach(scrapeValuesFromPose<V, A>(values, props));

  // Initiate passive values
  if (passive)
    Object.keys(passive).forEach(bindPassiveValues<V, A>(values, props));

  return values;
};

export default createValueMap;
