import * as React from 'react';
import { ReactElement } from 'react';
import { PoseElement, PoseParentContext } from './components/PoseElement';
import {
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement.types';
import { DomPopmotionConfig } from 'popmotion-pose/lib/types';
import { warning } from 'hey-listen';

// TODO: Something is wrong with the TypeScript React bindings here,
// I've had to typecast a component as a Component a couple times now.
const PoseElementComponent = PoseElement as React.PureComponent;

export type ComponentFactory = (
  poseConfig?: DomPopmotionConfig
) => (props: PoseElementProps) => ReactElement<any>;

export type Posed = {
  (component: React.Component): ComponentFactory;
  [key: string]: ComponentFactory;
};

const componentCache = new Map<string | React.Component, ComponentFactory>();

const createComponentFactory = (key: string | React.Component) => {
  const componentFactory: ComponentFactory = (poseConfig = {}) => ({
    withParent = true,
    ...props
  }) =>
    !withParent || props.parentValues ? (
      <PoseElementComponent
        poseConfig={poseConfig}
        elementType={key}
        {...props}
      />
    ) : (
      <PoseParentContext.Consumer>
        {(parentCtx: PoseContextProps) => (
          <PoseElementComponent
            poseConfig={poseConfig}
            elementType={key}
            {...props}
            {...parentCtx}
          />
        )}
      </PoseParentContext.Consumer>
    );

  componentCache.set(key, componentFactory);

  return componentFactory;
};

const getComponentFactory = (key: string | React.Component) =>
  componentCache.has(key)
    ? componentCache.get(key)
    : createComponentFactory(key);

let posed = ((component: React.Component) =>
  getComponentFactory(component)) as Posed;

if (typeof Proxy !== 'undefined') {
  posed = new Proxy(posed, {
    get: (target, key: string) => getComponentFactory(key),
    apply: (target, thisArg, argumentsList) =>
      getComponentFactory(argumentsList[0])
  });

  // If the browser doesn't support Proxy, offer a subselection of element types.
  // This gets killed in 2019 yeah
} else {
  warning(
    false,
    `You're seeing this message because you're testing in a browser that doesn't support Proxy. If you need to support this browser, you can only use posed.div, posed.span, posed.a, posed.li and posed.button`
  );
  ['div', 'span', 'a', 'button', 'li'].reduce((acc, key) => {
    acc[key] = getComponentFactory(key);
    return acc;
  }, posed);
}

export default posed;
