import {
  ValuesAndTypes,
  ValuesFactoryProps,
  AncestorValue,
  ValueMap,
  TypesMap,
  PoseMap,
  Pose,
  OnChangeMap,
  PoseSetterProps
} from '../types';
import { getPoseValues } from '../inc/selectors';
import { resolveProp } from './pose-setter';
import { number, degrees, percent, px, ValueType } from 'style-value-types';
import { pipe } from 'popmotion/transformers';
import value, { ValueReaction } from 'popmotion/reactions/value';
import { onFrameUpdate } from 'framesync';
import { Styler } from 'stylefire';

export type ValuesAndTypesFactory = (
  props: ValuesFactoryProps
) => ValuesAndTypes;

const valueTypeTests = [number, degrees, percent, px];
const testValueType = (v: any) => (type: ValueType) => type.test(v);

const getInitialValue = (
  poses: PoseMap,
  key: string,
  initialPose: string | string[],
  styler: Styler,
  props: PoseSetterProps
) => {
  const posesToSearch = Array.isArray(initialPose)
    ? initialPose
    : [initialPose];
  const pose = posesToSearch.find(
    name => poses[name] && poses[name][key] !== undefined
  );

  return pose ? resolveProp(poses[pose][key], props) : styler.get(key);
};

const createValues = (
  values: ValueMap,
  types: TypesMap,
  {
    initialPose,
    poses,
    styler,
    userSetValues,
    getTransitionProps
  }: ValuesFactoryProps,
  pose: Pose
) => (key: string) => {
  if (values.has(key)) return;

  let thisValue: ValueReaction;
  let type: ValueType;

  // If the user has provided a value, use that
  if (userSetValues && userSetValues[key] !== undefined) {
    thisValue = userSetValues[key];
    type = valueTypeTests.find(testValueType(thisValue.get()));

    // Else create a new value
  } else {
    const initialValue = getInitialValue(
      poses,
      key,
      initialPose,
      styler,
      getTransitionProps()
    );
    type = valueTypeTests.find(testValueType(pose[key]));
    thisValue = value(
      type === number ? type.parse(initialValue) : initialValue
    );
  }

  values.set(key, thisValue);
  thisValue.subscribe((v: any) => styler.set(key, v));
  if (type && type !== number) types.set(key, type);
};

const scrapeValuesFromPose = (
  values: ValueMap,
  types: TypesMap,
  props: ValuesFactoryProps
) => (key: string) => {
  const pose = props.poses[key];
  Object.keys(getPoseValues(pose)).forEach(
    createValues(values, types, props, pose)
  );
};

const getAncestorValueMap = (ancestors: AncestorValue[], ancestorKey: string | boolean) => {
  if (ancestorKey === true) {
    return ancestors[0] && ancestors[0].values;
  } else {
    const foundAncestor = ancestors.find(({ label }) => label === ancestorKey);
    return foundAncestor && foundAncestor.values;
  }
};

const getCompoundValue = (valueMap: ValueMap, keys: string[]) => {
  const initialValue = keys.reduce((acc: { [key: string]: any }, key) => {
    acc[key] = valueMap.get(key).get();
    return acc;
  }, {});

  const compoundValue = value(initialValue).applyMiddleware((update) => {
    let latest: any;
    const updateLatest = () => update(latest);
    return (v: any) => {
      latest = v;
      onFrameUpdate(updateLatest, true);
    };
  });

  keys.forEach((key) => {
    valueMap.get(key).subscribe((v: any) => {
      const latest: any = compoundValue.get();
      return { ...latest, [key]: v };
    });
  });

  return compoundValue;
};

const getValueFromValueMap = (valueMap: ValueMap, key: string) => {
  const valueKeys = key.split(' ');
  return (valueKeys.length === 1)
    ? valueMap.get(key)
    : getCompoundValue(valueMap, valueKeys);
};

const getValueToBind = (values: ValueMap, ancestorValues: AncestorValue[], valueKey: string, ancestorKey: string | boolean) => {
  const valueMap = ancestorKey ? getAncestorValueMap(ancestorValues, ancestorKey) : values;
  return getValueFromValueMap(valueMap, valueKey);
};

const bindPassiveValues = (
  values: ValueMap,
  { passive, ancestorValues, styler }: ValuesFactoryProps
) => (key: string) => {
  const [valueKey, transform, ancestorKey] = passive[key];
  const valueToBind = getValueToBind(values, ancestorValues, valueKey, ancestorKey);

  if (!valueToBind) return;

  const newValue = value(
    valueToBind.get(),
    pipe(transform, (v: any) => styler.set(key, v))
  );
  valueToBind.subscribe(newValue);
  values.set(key, newValue);
};

const bindOnChange = (values: ValueMap, onChange: OnChangeMap) => (
  key: string
) => {
  if (values.has(key)) values.get(key).subscribe(onChange[key]);
};

/**
 * Create value and types map from pose props
 */
const createValuesAndTypes: ValuesAndTypesFactory = props => {
  const { passive, poses, onChange } = props;
  const values: ValueMap = new Map();
  const types: TypesMap = new Map();

  // Scrape values from poses
  Object.keys(poses).forEach(scrapeValuesFromPose(values, types, props));

  // Initiate passive values
  if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));

  // Append onChange callbacks
  if (onChange) Object.keys(onChange).forEach(bindOnChange(values, onChange));

  return { values, types };
};

export default createValuesAndTypes;
