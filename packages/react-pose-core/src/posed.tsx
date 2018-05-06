import * as React from 'react';
import { PoseComponent, PoseParentContext } from './components/PoseComponent';
import {
  Posed,
  PosedComponentFactory,
  PosedComponentFactoryConfig,
  PoseContextProps
} from './types';

const posedFactory = ({
  componentMap,
  createAnimatedComponent,
  ...factoryConfig
}: PosedComponentFactoryConfig) => {
  const posedComponentFactory: PosedComponentFactory = (Component: any) => (
    poseConfig = {}
  ) => ({ withParent = true, ...props }) => {
    return !withParent || props.parentValues ? (
      <PoseComponent
        poseConfig={poseConfig}
        factoryConfig={factoryConfig}
        Component={Component}
        {...props}
      />
    ) : (
      <PoseParentContext.Consumer>
        {(parentCtx: PoseContextProps) => (
          <PoseComponent
            poseConfig={poseConfig}
            factoryConfig={factoryConfig}
            Component={Component}
            {...props}
            {...parentCtx}
          />
        )}
      </PoseParentContext.Consumer>
    );
  };

  const posedComponent: Posed = (Component?: any) =>
    posedComponentFactory(
      Component ? createAnimatedComponent(Component) : undefined
    );

  const posed: Posed = Object.keys(componentMap).reduce((acc, key) => {
    const Component = componentMap[key];
    acc[key] = posedComponentFactory(Component);
    return acc;
  }, posedComponent);

  return posed;
};

export default posedFactory;
