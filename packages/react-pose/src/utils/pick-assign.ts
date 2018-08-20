type TestString = (key: string) => boolean;
type Props = { [key: string]: any };

export const pickAssign = (shouldPick: TestString, sources: Props[]) =>
  sources.reduce((picked, source) => {
    for (const key in source) {
      if (shouldPick(key)) {
        picked[key] = source[key];
      }
    }
    return picked;
  }, {});
