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
  label?: string,
  values: ValueMap<V>
};

export type AncestorValueList<V> = Array<AncestorValue<V>>;

export type Transformer = (v: any) => any;

export type PassiveValueMap = {
  [key: string]: [string, Transformer, boolean | string | void]
};

export type OnChangeCallbacks = {
  [key: string]: (v: any) => any
};

export type ActiveActions<A> = Map<string, A>;

export type ActivePoses = Map<string, string>;

export type ChildPosers = Set<Poser>;

export type PoseMap<A> = {
  [key: string]: Pose<A>
};

export type Poser = {

};

export type PoserConfig<V, A> = {
  label?: string;
  props?: Props;
  parentValues?: ValueMap<V>;
  ancestorValues?: AncestorValueList<V>;
  poses?: PoseMap<A>;
};

export type ReadValue<V> = (value: V) => any;

type CreateValueProps = any;

export type CreateValue<V> = (init: any, props: CreateValueProps) => V;

export type PoseFactoryConfig<V, A> = {
  getDefaultProps?: (config: PoserConfig<V, A>) => Props;
  defaultTransitions?: Map<string, TransitionFactory<A>>;
  bindOnChange: (values: ValueMap<V>, onChange: OnChangeCallbacks) => (key: string) => any;
  readValue: ReadValue<V>
  createValue: CreateValue<V>
  //createPoses?: (config: PoserConfig<V, A>) => PoseMap<A>;
};
