export type Props = { [key: string]: any };

export type NumberPropFactory = (props: Props) => number;
export type BooleanPropFactory = (props: Props) => boolean;
export type StaggerDirectionPropFactory = (props: Props) => 1 | -1;
export type TransitionFactory<A> = (props: Props) => A | false;

export type Pose<A> = {
  transition?: TransitionFactory<A>;
  delay?: number | NumberPropFactory;
  delayChildren?: number | NumberPropFactory;
  staggerChildren?: number | NumberPropFactory;
  staggerDirection?: 1 | -1 | StaggerDirectionPropFactory;
  beforeChildren?: boolean | BooleanPropFactory;
  afterChildren?: boolean | BooleanPropFactory;
  preTransform?: () => any;
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

export type ActivePoses = Map<string, string>;

export type ChildPosers<V, A, C, P> = Set<Poser<V, A, C, P>>;

export type PoseMap<A> = {
  [key: string]: Pose<A>;
};

export type PoserFactory<V, A, C, P> = (
  config: PoserConfig<V>
) => Poser<V, A, C, P>;

export interface Poser<V, A, C, P> {
  set: (next: string, props?: Props) => Promise<any>;
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
  props?: CreateValueProps
) => V;

export type StartAction<V, A, C> = (
  value: V,
  action: A,
  complete: Function
) => C;

export type StopAction<C> = (controls: C) => any;

export type GetInstantTransition<V, A> = (value: V, target: any) => A;

export type AddTransitionDelay<A> = (delay: number, transition: A) => A;

export type ExtendAPI<V, A, C, P> = (
  api: Poser<V, A, C, P>,
  state: PoserState<V, A, C, P>
) => Poser<V, A, C, P>;

export type GetTransitionProps<V> = (value: V, target: number) => Props;

export type SelectValueToRead<V> = (value: V) => any;

export type TransformPose<A> = (pose: Pose<A>, key: string) => Pose<A>;

export type PoseFactoryConfig<V, A, C, P> = {
  getDefaultProps?: (config: PoserConfig<V>) => Props;
  defaultTransitions?: Map<string, TransitionFactory<A>>;
  bindOnChange: (
    values: ValueMap<V>,
    onChange: OnChangeCallbacks
  ) => (key: string) => any;
  readValue: ReadValue<V>;
  createValue: CreateValue<V>;
  resolveTarget: ResolveTarget<V>;
  getTransitionProps: GetTransitionProps<V>;
  startAction: StartAction<V, A, C>;
  stopAction: StopAction<C>;
  getInstantTransition: GetInstantTransition<V, A>;
  addActionDelay: AddTransitionDelay<A>;
  selectValueToRead: SelectValueToRead<V>;
  extendAPI: ExtendAPI<V, A, C, P>;
  transformPose?: TransformPose<A>;
};
