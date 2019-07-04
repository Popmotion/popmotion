import {
  color,
  complex,
  percent,
  degrees,
  vh,
  vw,
  px
} from 'style-value-types';
import { mixColor, mixComplex } from '@popmotion/popcorn';
import { Action } from './';

/**
 * # Types
 */
export type Props = {
  [key: string]: any;
};

export type ActionFactory = (props: Props) => Action;

export type TypeTest = (v: any) => boolean;
export type TypeTestMap = { [key: string]: TypeTest };
export type ActionMap = { [key: string]: Action };

export type VectorActionFactory = (
  init: ActionFactory,
  typeTests: TypeTestMap
) => ActionFactory;

type VectorTestFactory = (
  typeTests: TypeTestMap
) => {
  getVectorKeys: (props: Props) => string[];
  testVectorProps: (props: Props) => boolean;
};

type CreateVectorAction = (
  init: ActionFactory,
  props: Props,
  vectorKeys?: string[]
) => Action;

/**
 * ## Create vector tests
 *
 * Takes an object of tests, each one testing a different prop to see whether
 * it's of standard or special type.
 *
 * For instance an `ease` test will check if the provided `ease` is a function.
 * If it isn't, we know that it's a special value type (for instance an array).
 *
 * It returns two functions:
 *
 * ### `getVectorKeys`
 * This returns the keys of every prop that has been defined as a special type
 *
 * ### `testVectorProps`
 * This returns whether **any** prop has been set as a vector type.
 */
const createVectorTests: VectorTestFactory = typeTests => {
  const testNames = Object.keys(typeTests);
  const isVectorProp = (prop: any, key: string) =>
    prop !== undefined && !typeTests[key](prop);

  const getVectorKeys = (props: Props) =>
    testNames.reduce((vectorKeys, key) => {
      if (isVectorProp(props[key], key)) vectorKeys.push(key);
      return vectorKeys;
    }, []);

  const testVectorProps = (props: Props) =>
    props && testNames.some(key => isVectorProp(props[key], key));

  return { getVectorKeys, testVectorProps };
};

// Unit type utils
const unitTypes = [px, percent, degrees, vh, vw];
const findUnitType = (prop: any) => unitTypes.find(type => type.test(prop));

const isUnitProp = (prop: any) => Boolean(findUnitType(prop));

/**
 * # Action creators
 */

/**
 * ## Create action
 *
 * Simply takes a normal action, props, and returns.
 */
const createAction: CreateVectorAction = (action, props) => action(props);

/**
 * ## Create unit action
 *
 * Creates an action that animates between two unit values of the same type,
 * ie `0px` and `10px`. Could probably use `complex` for this use-case to reduce
 * file-size but it isn't as performant.
 */
const createUnitAction: CreateVectorAction = (
  action,
  { from, to, ...props }
) => {
  const unitType = findUnitType(from) || findUnitType(to);
  const { transform, parse } = unitType;

  return action({
    ...props,
    from: typeof from === 'string' ? parse(from) : from,
    to: typeof to === 'string' ? parse(to) : to
  }).pipe(transform);
};

/**
 * Takes mixers that interpolate from `0` to `1` and output values like shadow etc
 */
type Mixer<T> = (a: T, b: T) => (v: number) => T;
const createMixerAction = <T>(mixer: Mixer<T>): CreateVectorAction => (
  action,
  { from, to, ...props }
) => {
  return action({
    ...props,
    from: 0,
    to: 1
  }).pipe(mixer(from, to));
};

/**
 * ## Create color action
 *
 * Accepts hex, rgb, rgba, hsl and hsla color types.
 *
 * Replaces `from` and `to` props with `0` and `1` and uses
 * the output value to blend between both colors based on the included
 * linear RGB blending algo
 */
const createColorAction = createMixerAction(mixColor);

/**
 * ## Create complex action
 *
 * Creates an animation from a combination value type, ie `0px 0px inset #f00`
 *
 * Rather than creating a seperate action for each individual value, we
 * make a template from the string, and then convert it into a `from`/`to` array
 * of numerical or color values.
 *
 * Using a `from` and `to` of `0`-`1` we use the output to transition between the two
 * arrays.
 */
const createComplexAction = createMixerAction(mixComplex as Mixer<any>);

/**
 * ## Create vector action
 *
 * Converts an action, that's designed to take purely numerical values,
 * into one that can accept strings, units, objects, arrays and colors.
 *
 * For instance, the tween action is written to accept numbers like this:
 *
 * tween({ from: 0, to: 1 })
 *
 * By passing `tween` to `vectorAction`, it can accept:
 *
 * Colors
 * tween({ from: '#f00', to: '#000' })
 *
 * Units
 * tween({ from: '0px', to: '1px' })
 *
 * Combination strings
 * tween({
 *  from: '0px 0px inset #f00',
 *  to: '5px 5px inset #000'
 * })
 *
 * Objects
 * tween({
 *  from: { x: 0, y: 0 },
 *  to: { x: 100, y: 100 }
 * })
 *
 * Arrays
 * tween({
 *  from: [0, 1],
 *  to: [300, 500]
 * })
 *
 * And objects/arrays with mixes of the previous value types:
 * tween({
 *  from: {
 *    x: 0,
 *    boxShadow: '0px 0px inset #f00'
 *  },
 *  to: {
 *    x: 10,
 *    boxShadow: '5px 5px inset #000'
 *  }
 * })
 */
const createVectorAction: VectorActionFactory = (action, typeTests) => {
  const { testVectorProps, getVectorKeys } = createVectorTests(typeTests);

  const vectorAction = (props: Props) => {
    const isVector = testVectorProps(props);

    // If the user isn't requesting a vector action, initialise the action as usual
    if (!isVector) return action(props);

    const vectorKeys = getVectorKeys(props);

    // Get a prop to test what kind of special value we're dealing with
    const [testKey] = vectorKeys;
    const testProp = props[testKey];

    return getActionCreator(testProp)(action, props, vectorKeys);
  };

  return vectorAction;
};

// Accepts a test prop, and returns a function with which to create an action
const getActionCreator = (prop: any) => {
  // Pattern matching would be quite lovely here

  if (typeof prop === 'number') {
    return createAction;
  } else if (isUnitProp(prop)) {
    return createUnitAction;
  } else if (color.test(prop)) {
    return createColorAction;
  } else if (complex.test(prop)) {
    return createComplexAction;
  } else {
    return createAction;
  }
};

export default createVectorAction;
