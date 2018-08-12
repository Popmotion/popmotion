import * as React from 'react';
import { ReactElement } from 'react';
import { PoseElement, PoseParentContext } from './components/PoseElement';
import supportedElements from './utils/supported-elements';
import {
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement.types';
import { DomPopmotionConfig } from 'popmotion-pose/lib/types';

export type ComponentFactory = (
  poseConfig?: DomPopmotionConfig
) => (props: PoseElementProps) => ReactElement<any>;

export type Posed = {
  (component: React.ComponentType): ComponentFactory;
  [key: string]: ComponentFactory;
};

const componentCache = new Map<string | React.Component, ComponentFactory>();

const createComponentFactory = (key: string | React.Component) => {
  const componentFactory: ComponentFactory = (poseConfig = {}) => ({
    withParent = true,
    ...props
  }) =>
    !withParent || props.parentValues ? (
      <PoseElement poseConfig={poseConfig} elementType={key} {...props} />
    ) : (
      <PoseParentContext.Consumer>
        {(parentCtx: PoseContextProps) => (
          <PoseElement
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

supportedElements.reduce((acc, key) => {
  acc[key] = getComponentFactory(key);
  return acc;
}, posed);

export default posed;
