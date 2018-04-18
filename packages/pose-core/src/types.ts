export type Props = { [key: string]: any };

// export type NumberPropFactory = (props: PoseSetterProps) => number;
// export type BooleanPropFactory = (props: PoseSetterProps) => boolean;
// export type StaggerDirectionPropFactory = (props: PoseSetterProps) => 1 | -1;

// export type Pose = {
//   transition?: Transition;
//   delay?: number | NumberPropFactory;
//   delayChildren?: number | NumberPropFactory;
//   staggerChildren?: number | NumberPropFactory;
//   staggerDirection?: 1 | -1 | StaggerDirectionPropFactory;
//   beforeChildren?: boolean | BooleanPropFactory;
//   afterChildren?: boolean | BooleanPropFactory;
//   [key: string]: any;
// };

export type TransitionFactory<A> = (props: Props) => A | false;

export type Pose<A> = {
  transition?: TransitionFactory<A>
};

export type ValueMap<V> = Map<string, V>;
export type AncestorValue<V> = {
  label?: string,
  values: ValueMap<V>
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
  ancestorValues?: Array<AncestorValue<V>>;
  poses?: PoseMap<A>;
};

export type PoseFactoryConfig<V, A> = {
  getDefaultProps?: (config: PoserConfig<V, A>) => Props;
  defaultTransitions?: Map<string, TransitionFactory<A>>;
  
  //createPoses?: (config: PoserConfig<V, A>) => PoseMap<A>;
};
