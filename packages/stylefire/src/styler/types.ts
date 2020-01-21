export type State = {
  [key: string]: string | number | CustomTemplate | undefined;
};
export type ResolvedState = { [key: string]: string | number };
export type Props = { [key: string]: any };
export type ChangedValues = string[];

export type CustomTemplate = (state: ResolvedState, prebuilt: string) => string;

export type Config = {
  onRead: (key: string, props: Props) => any;
  onRender: (state: State, props: Props, changedValues: ChangedValues) => void;
  aliasMap?: { [key: string]: string };
  useCache?: boolean;
  uncachedValues?: Set<string>;
};

/**
 * @public
 */
export interface Styler {
  /**
   * Get the latest value of a given key.
   *
   * @param key - The name of the property to read.
   * @param forceRead - If `true`, will force a potentially expensive read. Defaults to `false`.
   */
  get: (key: string, forceRead?: boolean) => any;

  /**
   * Set a value or many values.
   *
   * This will trigger the scheduling of a render on the next available frame.
   *
   * @param key/state - Either the name of the prop to set, or an object map of values.
   * @param value - If `key` is a string, the value to set to that string.
   */
  set: (key: string | State, value?: any) => Styler;

  /**
   * Will immediately trigger render if any values have changed.
   *
   * Useful for synchronous write/measure operations.
   *
   * @param forceRender - If `true`, will force a render even if no values have changed.
   */
  render: (forceRender?: boolean) => Styler;
}
