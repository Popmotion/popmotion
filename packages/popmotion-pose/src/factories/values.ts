import {
  ValuesAndTypes,
  ValuesFactoryProps,
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

const bindPassiveValues = (
  values: ValueMap,
  { passive, parentValues, styler }: ValuesFactoryProps
) => (key: string) => {
  const [valueKey, transform, fromParent] = passive[key];
  const valueToBind =
    fromParent && parentValues && parentValues.has(valueKey)
      ? parentValues.get(valueKey)
      : values.has(valueKey) ? values.get(valueKey) : false;

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
