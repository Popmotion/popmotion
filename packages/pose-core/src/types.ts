export type Props = { [key: string]: any };

export type ValueMap<V> = Map<string, V>;
export type AncestorValue<V> = {
  label: string,
  value: V
};

export type Poser = {

};

export type PoserConfig<V> = {
  parentValues?: ValueMap<V>;
  ancestorValues?: Array<AncestorValue<V>>;
};

export type PoserFactory<V> = (config: PoserConfig<V>) => Poser;

export type PoseFactoryConfig = {

};

export type PoseFactoryConfigurator = <V>(config: PoseFactoryConfig) => PoserFactory<V>;
