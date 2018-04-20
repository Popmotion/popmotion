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

export type ChildPosers<V, A, P> = Set<Poser<V, A, P>>;

export type PoseMap<A> = {
  [key: string]: Pose<A>;
};

export type PoserFactory<V, A, P> = (
  config: PoserConfig<V, A>
) => Poser<V, A, P>;

export interface Poser<V, A, P> {
  set: (next: string, props?: Props) => Promise<any>;
  get: (key: string) => V;
  has: (key: string) => boolean;
  destroy: () => void;
  _addChild: (
    config: PoserConfig<V, A>,
    factory: PoserFactory<V, A, P>
  ) => Poser<V, A, P>;
  removeChild: (child: Poser<V, A, P>) => void;
  clearChildren: () => void;
}

export type PoserState<V, A, P> = {
  activeActions: ActiveActions<A>;
  activePoses: ActivePoses;
  children: ChildPosers<V, A, P>;
  values: ValueMap<V>;
  props: Props;
};

export type PoserConfig<V, A> = {
  label?: string;
  props?: Props;
  values: { [key: string]: V };
  parentValues?: ValueMap<V>;
  ancestorValues?: AncestorValueList<V>;
  poses?: PoseMap<A>;
  onChange?: OnChangeCallbacks;
  passive: PassiveValueMap;
  initialPose: string | string[];
};

export type ReadValue<V> = (value: V) => any;

export type ResolveTarget<V> = (value: V, target: any) => any;

export type CreateValueProps = any;

export type CreateValue<V> = (init: any, props?: CreateValueProps) => V;

export type StartAction<A> = (action: A, complete: Function) => A;

export type StopAction<A> = (action: A) => any;

export type GetInstantTransition<V, A> = (value: V, target: any) => A;

export type AddTransitionDelay<A> = (delay: number, transition: A) => A;

export type ExtendAPI<V, A, P> = (
  api: Poser<V, A, P>,
  state: PoserState<V, A, P>
) => Poser<V, A, P>;

export type GetTransitionProps<V> = (value: V, target: number) => Props;

export type PoseFactoryConfig<V, A, P> = {
  getDefaultProps?: (config: PoserConfig<V, A>) => Props;
  defaultTransitions?: Map<string, TransitionFactory<A>>;
  bindOnChange: (
    values: ValueMap<V>,
    onChange: OnChangeCallbacks
  ) => (key: string) => any;
  readValue: ReadValue<V>;
  createValue: CreateValue<V>;
  resolveTarget: ResolveTarget<V>;
  getTransitionProps: GetTransitionProps<V>;
  startAction: StartAction<A>;
  stopAction: StopAction<A>;
  getInstantTransition: GetInstantTransition<V, A>;
  addActionDelay: AddTransitionDelay<A>;
  selectValueToRead: (value: V) => any;
  extendAPI: ExtendAPI<V, A, P>;
};
