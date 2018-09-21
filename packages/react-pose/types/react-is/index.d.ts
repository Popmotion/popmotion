declare module 'react-is' {
  export as namespace ReactIs;
  export function typeOf(value: any): symbol | undefined;
  export function isValidElementType(value: any): boolean;

  export function isContextConsumer(value: any): boolean;
  export function isContextProvider(value: any): boolean;
  export function isElement(value: any): boolean;
  export function isFragment(value: any): boolean;
  export function isPortal(value: any): boolean;
  export function isStrictMode(value: any): boolean;
  export function isForwardRef(value: any): boolean;
}
