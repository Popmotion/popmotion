import { AncestorValueList, ValueMap, PoseMap, PassiveValueMap, ReadValue, CreateValue } from '../types';

type ValueFactoryProps<V, A> = {
  poses: PoseMap<A>,
  passive: PassiveValueMap,
  ancestorValues: AncestorValueList<V>,
  readValue: ReadValue<V>,
  createValue: CreateValue<V>
};

const scrapeValuesFromPose = <V, A>(
  values: ValueMap<V>,
  {  }: ValueFactoryProps<V, A>
) => (key) => {
  
};

const getAncestorValue = <V>(key: string, fromParent: boolean | string, ancestors: AncestorValueList<V>): V => {
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
    readValue
  }: ValueFactoryProps<V, A>
) => (key: string) => {
  const [valueKey, props, fromParent] = passive[key];
  const valueToBind = fromParent && ancestorValues.length
    ? getAncestorValue<V>(valueKey, fromParent, ancestorValues)
    : values.has(valueKey) ? values.get(valueKey) : false;

  if (!valueToBind) return;

  const newValue = createValue(readValue(valueToBind), {
    passiveParent: valueToBind,
    passiveProps: props,
    key
  });

  values.set(key, newValue);
};

const createValues = <V, A>(props: ValueFactoryProps<V, A>): ValueMap<V> => {
  const { poses, passive } = props;
  const values: ValueMap<V> = new Map();

  // Scrape values from poses
  Object.keys(poses).forEach(scrapeValuesFromPose<V, A>(values, props));

  // Initiate passive values
  if (passive) Object.keys(passive).forEach(bindPassiveValues<V, A>(values, props));

  return values;
};

export default createValues;