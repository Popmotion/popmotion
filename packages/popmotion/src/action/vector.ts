import { color } from 'style-value-types';
import composite from '../compositors/composite';
import parallel from '../compositors/parallel';
import { blendColor } from '../transformers';
import { Action } from './';

// TODO: Clean this shit up

const isColor = color.test;

export type Props = {
  [key: string]: any
};

export type ActionFactory = (props: Props) => Action;

export type TypeTest = (v: any) => boolean;
export type TypeTestMap = { [key: string]: TypeTest };
export type ActionMap = { [key: string]: Action };

export type VectorActionFactory = (
  init: ActionFactory,
  typeTests: TypeTestMap
) => (props: Props) => Action;

type VectorTestFactory = (typeTests: TypeTestMap) => {
  getVectorKeys: (props: Props) => string[];
  test: (props: Props) => boolean;
};

type CreateVectorAction = (init: ActionFactory, props: Props, vectorKeys: string[]) => Action;

const convertToColorAction = (init: ActionFactory, props: Props) => (
  typeof props.from === 'string' && isColor(props.from) &&
  typeof props.to === 'string' && isColor(props.to)
) ? init({
    ...props,
    from: 0,
    to: 1
  }).pipe(
    blendColor(props.from, props.to),
    color.transform
  )
  : init(props);

const createVectorTests: VectorTestFactory = (typeTests) => {
  const testNames = Object.keys(typeTests);

  return {
    getVectorKeys: (props: Props) => testNames.reduce((vectorKeys: string[], key: string) => {
      if (props[key] !== undefined && !typeTests[key](props[key])) {
        vectorKeys.push(key);
      }
      return vectorKeys;
    }, []),
    test: (props: Props) => props && testNames.reduce((isVector, key) => {
      return isVector || (props[key] !== undefined && !typeTests[key](props[key]));
    }, false)
  };
};

const reduceArrayValue = (i: number) => (props: Props, key: string) => {
  // Note: Type coercion makes this inefficient
  props[key] = props[key][i];
  return props;
};

const createArrayVector: CreateVectorAction = (init, props, vectorKeys) => {
  const [ firstVectorKey ] = vectorKeys;
  const actionList: Action[] = props[firstVectorKey].map((v: any, i: number) => {
    return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), { ...props }));
  });

  return parallel(...actionList);
};

const reduceObjectValue = (key: string) => (props: Props, propKey: string) => {
  // Note: Type coercion makes this inefficient
  props[propKey] = props[propKey][key];
  return props;
};

const createObjectVector: CreateVectorAction = (init, props, vectorKeys) => {
  const [ firstVectorKey ] = vectorKeys;
  const actionMap: ActionMap = Object.keys(props[firstVectorKey]).reduce((map: ActionMap, key) => {
    map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), { ...props }));
    return map;
  }, {});

  return composite(actionMap);
};

const createColorVector: CreateVectorAction = (init, props) => convertToColorAction(init, props);

const vectorAction: VectorActionFactory = (init, typeTests) => {
  const { test, getVectorKeys } = createVectorTests(typeTests);

  return (props) => {
    const isVector = test(props);
    if (!isVector) return init(props);

    const vectorKeys = getVectorKeys(props);
    const [ testKey ] = vectorKeys;
    const testProp = props[testKey];

    if (Array.isArray(testProp)) {
      return createArrayVector(init, props, vectorKeys);
    } else if (typeof testProp === 'string' && isColor(testProp)) {
      return createColorVector(init, props, vectorKeys);
    } else {
      return createObjectVector(init, props, vectorKeys);
    }
  };
};

export default vectorAction;
