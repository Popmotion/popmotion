let warning = (check: boolean, message: string): void => undefined;
let invariant = (check: boolean, message: string): void => undefined;

if (process.env.NODE_ENV !== 'production') {
  warning = (check: boolean, message: string) => {
    if (!check && typeof console !== 'undefined') {
      console.warn(message);
    }
  };

  invariant = (check: boolean, message: string) => {
    if (!check) throw new Error(message);
  };
}

export { warning, invariant };
