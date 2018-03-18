import React from 'react';
import {
  PoseElement,
  PoseParentContext,
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement';
import { PoserProps } from 'popmotion-pose';

type ComponentCache = {
  [key: string]: React.Node;
};

type ComponentFactory = (name: string) => React.Node;

const componentCache: ComponentCache = {};

const createComponent: ComponentFactory = (name: string) => {
  const Component: React.Node = (poseProps: PoserProps) =>
    React.forwardRef(
      ({ newTree, ...props }: PoseElementProps, ref: (el: Element) => any) =>
        newTree ? (
          <PoseElement
            poseProps={poseProps}
            elementType={name}
            {...props}
            innerRef={ref}
          />
        ) : (
          <PoseParentContext.Consumer>
            {(parentCtx: PoseContextProps) => (
              <PoseElement
                poseProps={poseProps}
                elementType={name}
                {...props}
                {...parentCtx}
                innerRef={ref}
              />
            )}
          </PoseParentContext.Consumer>
        )
    );

  componentCache[name] = Component;

  return Component;
};

const getComponent = (element: string) =>
  componentCache[element] || createComponent(element);

export default new Proxy(
  {},
  {
    get: (target, key: string) => getComponent(key)
  }
);
