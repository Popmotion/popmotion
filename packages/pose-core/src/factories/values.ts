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
  ActivePoses
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
  readValueFromSource?: ReadValueFromSource;
  activePoses: ActivePoses;
  props: Props;
};

export const DEFAULT_INITIAL_POSE = 'init';

const isScale = (key: string) => key.includes('scale');
const defaultReadValueFromSource = (key: string) => (isScale(key) ? 1 : 0);

const getInitialValue = <A>(
  poses: PoseMap<A>,
  key: string,
  initialPose: string | string[],
  props: Props,
  readValueFromSource: ReadValueFromSource = defaultReadValueFromSource,
  activePoses: ActivePoses
) => {
  const posesToSearch = Array.isArray(initialPose)
    ? initialPose
    : [initialPose];

  posesToSearch.push(DEFAULT_INITIAL_POSE);

  const pose = posesToSearch
    .filter(Boolean)
    .find(name => poses[name] && poses[name][key] !== undefined);

  // Prime active values array with found pose as first item
  // TODO: Instead of priming with 'init' if no pose found, create
  // a unique pose with the readValueFromSource return value
  activePoses.set(key, [pose || DEFAULT_INITIAL_POSE]);

  return pose
    ? resolveProp(poses[pose][key], props)
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
