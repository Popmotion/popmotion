export type Props = { [key: string]: any };

export type NumberPropFactory = (props: Props) => number;
export type BooleanPropFactory = (props: Props) => boolean;
export type StaggerDirectionPropFactory = (props: Props) => 1 | -1;
export type TransitionFactory<A> = (
  props: Props
) => TransitionDefinition | A | false;

export type ApplyResolve = (props: Props) => string | number;
export type ApplyMap = {
  [key: string]: ApplyResolve | string | number;
};

export type TransitionDefinition = {
  [key: string]: any;
};

export type TransitionMap<A> = {
  [key: string]: TransitionDefinition | TransitionFactory<A>;
};

export type Pose<A> = {
  transition?: TransitionMap<A> | TransitionFactory<A>;
  delay?: number | NumberPropFactory;
  delayChildren?: number | NumberPropFactory;
  staggerChildren?: number | NumberPropFactory;
  staggerDirection?: 1 | -1 | StaggerDirectionPropFactory;
  beforeChildren?: boolean | BooleanPropFactory;
  afterChildren?: boolean | BooleanPropFactory;
  preTransform?: () => any;
  applyAtStart?: ApplyMap;
  applyAtEnd?: ApplyMap;
  [key: string]: any;
};

export type ValueMap<V> = Map<string, V>;

export type AncestorValue<V> = {
  label?: string;
  values: ValueMap<V>;
};

export type AncestorValueList<V> = Array<AncestorValue<V>>;

export type Transformer = (v: any) => any;

export type PassiveValueMap = {
  [key: string]: [string, any, boolean | string | void];
};

export type OnChangeCallbacks = {
  [key: string]: (v: any) => any;
};

export type ActiveActions<A> = Map<string, A>;

export type ActivePoses = Map<string, string[]>;

export type ChildPosers<V, A, C, P> = Set<Poser<V, A, C, P>>;

export type PoseMap<A> = {
  [key: string]: Pose<A>;
};

export type PoserFactory<V, A, C, P> = (
  config: PoserConfig<V>
) => Poser<V, A, C, P>;

export interface Poser<V, A, C, P> {
  set: (next: string, props?: Props) => Promise<any>;
  unset: (toUnset: string, props?: Props) => Promise<any>;
  get: (key?: string) => any;
  has: (key: string) => boolean;
  setProps: (props: Props) => void;
  destroy: () => void;
  _addChild: (
    config: PoserConfig<V>,
    factory: PoserFactory<V, A, C, P>
  ) => Poser<V, A, C, P>;
  removeChild: (child: Poser<V, A, C, P>) => void;
  clearChildren: () => void;
}

export type PoserState<V, A, C, P> = {
  activeActions: ActiveActions<C>;
  activePoses: ActivePoses;
  children: ChildPosers<V, A, C, P>;
  values: ValueMap<V>;
  props: Props;
};

export type PoserConfig<V> = {
  [key: string]: any;
  label?: string;
  props?: Props;
  values?: { [key: string]: V };
  parentValues?: ValueMap<V>;
  ancestorValues?: AncestorValueList<V>;
  onChange?: OnChangeCallbacks;
  passive?: PassiveValueMap;
  initialPose?: string | string[];
};

export type ReadValue<V> = (value: V) => any;

export type ResolveTarget<V> = (value: V, target: any) => any;

export type CreateValueProps = any;

export type CreateValue<V> = (
  init: any,
  key: string,
  props: Props,
  createValueProps?: CreateValueProps
) => V;

export type ConvertValue<V> = (value: any, key: string, props: Props) => V;

export type StartAction<V, A, C> = (
  value: V,
  action: A,
  complete: () => any
) => C;

export type StopAction<C> = (controls: C) => any;

export type GetInstantTransition<V, A> = (value: V, props: Props) => A;

export type AddTransitionDelay<A> = (delay: number, transition: A) => A;

export type ExtendAPI<V, A, C, P> = (
  api: Poser<V, A, C, P>,
  state: PoserState<V, A, C, P>,
  config: PoserConfig<V>
) => Poser<V, A, C, P>;

export type GetTransitionProps<V> = (
  value: V,
  target: number,
  props: Props
) => Props;

export type SelectValueToRead<V> = (value: V) => any;

export type TransformPose<V, A, C, P> = (
  pose: Pose<A>,
  key: string,
  state: PoserState<V, A, C, P>
) => Pose<A>;

export type ReadValueFromSource = (key: string, props: Props) => any;

export type SetValue<V> = (v: V, value: any) => void;
export type SetValueNative = (key: string, value: any, props: Props) => void;

export type ConvertTransitionDefinition<V, A> = (
  value: V,
  transitionDef: TransitionDefinition,
  props: Props
) => A;

export type PoseFactoryConfig<V, A, C, P> = {
  getDefaultProps?: (config: PoserConfig<V>) => Props;
  defaultTransitions?: Map<string, TransitionMap<A> | TransitionFactory<A>>;
  bindOnChange: (
    values: ValueMap<V>,
    onChange: OnChangeCallbacks
  ) => (key: string) => any;
  readValue: ReadValue<V>;
  readValueFromSource?: ReadValueFromSource;
  setValue: SetValue<V>;
  setValueNative: SetValueNative;
  createValue: CreateValue<V>;
  convertValue: ConvertValue<V>;
  resolveTarget: ResolveTarget<V>;
  getTransitionProps: GetTransitionProps<V>;
  convertTransitionDefinition: ConvertTransitionDefinition<V, A>;
  startAction: StartAction<V, A, C>;
  stopAction: StopAction<C>;
  getInstantTransition: GetInstantTransition<V, A>;
  addActionDelay: AddTransitionDelay<A>;
  selectValueToRead: SelectValueToRead<V>;
  extendAPI: ExtendAPI<V, A, C, P>;
  transformPose?: TransformPose<V, A, C, P>;
  posePriority?: string[];
};
