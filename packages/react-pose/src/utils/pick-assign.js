export function pickAssign(testFn, target) {
  let i = 2;
  let length = arguments.length;
  for (; i < length; i++) {
    let source = arguments[i];
    let key;
    for (key in source) {
      if (testFn(key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
