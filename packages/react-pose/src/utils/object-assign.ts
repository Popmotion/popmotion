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

export const filterBy = (obj: Props, keys: string[]) =>
  Object.keys(obj)
    .filter(key => keys.indexOf(key) === -1)
    .reduce(
      (acc, key) => {
        acc[key] = obj[key];
        return acc;
      },
      {} as Props
    );
