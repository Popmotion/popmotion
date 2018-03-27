import * as React from 'react';
import { ReactElement } from 'react';
import { PoseElement, PoseParentContext } from './components/PoseElement';
import {
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement.types';
import { PoserProps } from 'popmotion-pose';

// TODO: Something is wrong with the TypeScript React bindings here,
// I've had to typecast a component as a Component a couple times now.
const PoseElementComponent = PoseElement as React.PureComponent;

type ComponentFactory = (
  poseProps: PoserProps
) => (props: PoseElementProps) => ReactElement<any>;

const componentCache = new Map<string, ComponentFactory>();

const createComponentFactory = (key: string) => {
  const componentFactory: ComponentFactory = (poseProps = {}) => ({
    withParent = true,
    ...props
  }) =>
    !withParent || props.parentValues ? (
      <PoseElementComponent
        poseProps={poseProps}
        elementType={key}
        {...props}
      />
    ) : (
      <PoseParentContext.Consumer>
        {(parentCtx: PoseContextProps) => (
          <PoseElementComponent
            poseProps={poseProps}
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

const getComponentFactory = (key: string) =>
  componentCache.has(key)
    ? componentCache.get(key)
    : createComponentFactory(key);

export default new Proxy(
  {},
  {
    get: (target, key: string) => getComponentFactory(key)
  }
);
