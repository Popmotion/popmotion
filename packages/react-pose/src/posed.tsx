import React, { forwardRef, ComponentType, HTMLProps } from 'react';
import { PoseElement, PoseParentConsumer } from './components/PoseElement';
import supportedElements from './utils/supported-elements';
import {
  PoseElementProps,
  PoseContextProps
} from './components/PoseElement/types';
import { DomPopmotionConfig } from 'popmotion-pose';
import { warning } from 'hey-listen';

type DomPopmotionConfigFactory<T> = (
  props: PoseElementProps & T
) => DomPopmotionConfig;

export type ComponentFactory<T> = (
  poseConfig?: DomPopmotionConfig | DomPopmotionConfigFactory<T>
) => ComponentType<any>;

export type Posed = {
  <T>(component: ComponentType<T>): ComponentFactory<T>;
  [key: string]: ComponentFactory<HTMLProps<any>>;
};

const componentCache = new Map<string | ComponentType, ComponentFactory<any>>();

const createComponentFactory = (key: string | ComponentType) => {
  const componentFactory: ComponentFactory<any> = (poseConfig = {}) => {
    // TODO: Replace functional context with new class property API
    return forwardRef(({ withParent = true, ...props }, ref) => {
      warning(
        props.innerRef === undefined,
        'innerRef is deprecated. Please use ref instead.'
      );

      return !withParent || props.parentValues ? (
        <PoseElement
          poseConfig={poseConfig}
          innerRef={ref}
          elementType={key}
          {...props}
        />
      ) : (
        <PoseParentConsumer>
          {(parentCtx: PoseContextProps) => (
            <PoseElement
              poseConfig={poseConfig}
              elementType={key}
              innerRef={ref}
              {...props}
              {...parentCtx}
            />
          )}
        </PoseParentConsumer>
      );
    });
  };

  componentCache.set(key, componentFactory);

  return componentFactory;
};

const getComponentFactory = (key: string | ComponentType) =>
  componentCache.has(key)
    ? componentCache.get(key)
    : createComponentFactory(key);

const posed = ((component: ComponentType | string) =>
  getComponentFactory(component)) as Posed;

supportedElements.reduce((acc, key) => {
  acc[key] = createComponentFactory(key);
  return acc;
}, posed);

export default posed;
