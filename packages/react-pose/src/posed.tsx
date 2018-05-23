import * as React from 'react';
import { ReactElement } from 'react';
import { PoseElement, PoseParentContext } from './components/PoseElement';
import {
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement.types';
import { DomPopmotionConfig } from 'popmotion-pose/lib/types';

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

const posed = ((component: React.Component | string) =>
  getComponentFactory(component)) as Posed;

export default posed;
