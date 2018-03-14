import {
  ValuesAndTypes,
  ValuesFactoryProps,
  ValueMap,
  TypesMap,
  Pose,
  OnChangeMap
} from '../types';
import { getPoseValues } from '../inc/selectors';
import { number, degrees, percent, px, ValueType } from 'style-value-types';
import { pipe } from 'popmotion/transformers';
import value from 'popmotion/reactions/value';

export type ValuesAndTypesFactory = (props: ValuesFactoryProps) => ValuesAndTypes;

const valueTypeTests = [number, degrees, percent, px];
const testValueType = (v: any) => (type: ValueType) => type.test(v);

const createValues = (values: ValueMap, types: TypesMap, { initialPose, poses, styler }: ValuesFactoryProps, pose: Pose) => (key: string) => {
  if (values.has(key)) return;

  const type = valueTypeTests.find(testValueType(pose));

  const rawInitialValue = (initialPose && poses[initialPose] && poses[initialPose][key] !== undefined)
    ? poses[initialPose][key]
    : styler.get(key);

  const initialValue = type ? type.parse(rawInitialValue) : rawInitialValue;

  const thisValue = type ? value(initialValue) : value(initialValue).pipe(type.transform);

  values.set(key, thisValue);

  thisValue.subscribe((v: any) => styler.set(key, v));

  if (type) types.set(key, type);
};

const scrapeValuesFromPose = (values: ValueMap, types: TypesMap, props: ValuesFactoryProps) => (key: string) => {
  const pose = props.poses[key];
  Object.keys(getPoseValues(pose)).forEach(createValues(values, types, props, pose));
};

const bindPassiveValues = (values: ValueMap, { passive, parentValues, styler }: ValuesFactoryProps) => (key: string) => {
  const [valueKey, transform, fromParent] = passive[key];
  const valueToBind = (fromParent && parentValues && parentValues.has(valueKey))
    ? parentValues.get(valueKey)
    : (values.has(valueKey))
      ? values.get(valueKey)
      : false;

  if (!valueToBind) return;

  const newValue = value(valueToBind.get(), pipe(transform, (v: any) => styler.set(key, v)));
  valueToBind.subscribe(newValue);
  values.set(key, newValue);
};

const bindOnChange = (values: ValueMap, onChange: OnChangeMap) => (key: string) => {
  if (values.has(key)) values.get(key).subscribe(onChange[key]);
};

/**
 * Create value and types map from pose props
 */
const createValuesAndTypes: ValuesAndTypesFactory = (props) => {
  const { passive, poses, onChange } = props;
  const values: ValueMap = new Map();
  const types: TypesMap = new Map();

  // Scrape values from poses
  Object.keys(poses).forEach(scrapeValuesFromPose(values, types, props));

  // Initiate passive values
  if (passive) Object.keys(passive).forEach(bindPassiveValues(values, props));

  // Append onChange callbacks
  Object.keys(onChange).forEach(bindOnChange(values, onChange));

  return { values, types };
};

export default createValuesAndTypes;
