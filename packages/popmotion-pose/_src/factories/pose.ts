type Props = { [key: string]: any };

type PoserConfig = {
  props: Props
};

type PoserFactory<S> = (subject: S, config: PoserConfig) => void;

interface SubjectInterface {
  get: (key?: string) => any;
  set: (key: string, value: any) => any;
}

type PoseFactoryConfig<S> = {
  getSubjectInterface: (subject: S) => SubjectInterface,
  getDefaultProps: (subject: S, config: PoserConfig) => 
};

type PoseFactoryConfigurator = <S>(config: PoseFactoryConfig<S>) => PoserFactory<S>;

const poseFactory: PoseFactoryConfigurator = ({
  getSubjectInterface,
  getDefaultProps,
  addAPIMethods,
  stopAnimation
}) => (config) => {
  const { parentValues, ancestorValues } = config;
  const activeActions = new Map();
  const activePoses = new Map();
  const children = new Set();

  const state = {
  };

  let props = config.props || {};

  if (getDefaultProps) props = { ...props, ...getDefaultProps(config) }

  // Add manually-set parent values to ancestor chain
  if (parentValues) ancestorValues.unshift({ values: parentValues });

  // Create poses

  // Create values

  // Create setter

  let api = {
    set,
    setProps: nextProps => {
      props = { ...props, ...nextProps }
    },
    has: name => !!poses[name],

    // Children methods
    addChild: (childConfig) => {
      const child = pose({
        ...childConfig,
        ancestorValues: [{ label, values }, ...ancestorValues]
      });
      children.add(child);
      return child;
    },
    removeChild: child => children.delete(child),
    clearChildren: () => {
      children.forEach((c: Poser) => c.destroy());
      children.clear();
    },
    destroy: () => {
      activeActions.forEach(stopAnimation);
      children.forEach((c: Poser) => c.destroy());
    }
  };

  if (addAPIMethods) api = addAPIMethods(api, config);

  return api;
};


// import styler from 'stylefire';
// import { value } from 'popmotion';
// import createDimensions from './dimensions';

// const pose = poseFactory<Element>({
//   getSubjectInterface: (subject) => styler(subject, { preparseOutput: false }),
//   getDefaultProps: ({ subject }) => ({
//     dimensions: createDimensions(subject)
//   }),
//   createValue: (initialValue) => value(initialValue),
//   startAnimation: ({ animation, value, onComplete }) => animation.start(value),
//   stopAnimation: (value) => value.stop(),
//   addAPIMethods: (api, { values }, { dimensions }) => {
//     const poseApi = {
//       ...api,
//       measure: dimensions.measure,
//       flip: op => {
//         if (op) {
//           poseApi.measure();
//           op();
//         }

//         return poseApi.set('flip')
//       },
//       subscribe: (key, callback) =>
//         values.has(key) ? values.get(key).subscribe(callback) : false,
//       addChild: (subject, config) => api.addChild({
//         ...config,
//         subject
//       })
//     };

//     return poseApi;
//   }
// });


// const nativePose = poseFactory({
//   createValue: (initialValue) => new Animated.Value(initialValue),
//   startAnimation: ({ animation, onComplete }) => animation.start(onComplete),
//   stopAnimation: (value) => value.stopAnimation()
// })

