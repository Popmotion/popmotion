type TestString = (key: string) => boolean;
type Props = { [key: string]: any };

export const pickAssign = (shouldPick: TestString, source: Props) => {
  const picked: Props = {};

  for (const key in source) {
    if (source.hasOwnProperty(key) && shouldPick(key)) {
      picked[key] = source[key];
    }
  }

  return picked;
};
