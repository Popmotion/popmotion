import { Children, ReactElement, cloneElement } from 'react';
import { Props, State } from './types';
import { CurrentPose } from '../../types';
import { invariant } from 'hey-listen';

const getKey = (child: ReactElement<any>): string => {
  invariant(
    child && child.key !== null,
    'Every child of Transition must be given a unique key'
  );

  const childKey =
    typeof child.key === 'number' ? child.key.toString() : child.key;

  return childKey.replace('.$', '');
};

const getKeys = (
  children: React.ReactElement<any> | Array<React.ReactElement<any>>
): string[] =>
  Children.toArray(children)
    .filter(Boolean)
    .map(getKey);

const handleTransition = (
  {
    children: targetChildren,
    preEnterPose,
    enterPose,
    exitPose,
    animateOnMount,
    enterAfterExit,
    popFromLayoutOnExit,
    flipMove,
    ...props
  }: Props,
  {
    children: displayedChildren,
    leaving,
    scheduleChildRemoval,
    hasMounted
  }: State
) => {
  const displayedKeys = getKeys(displayedChildren);
  const targetKeys = getKeys(targetChildren);

  const enteringKeys = new Set(
    targetKeys.filter(key => {
      const isEntering =
        displayedKeys.indexOf(key) === -1 || leaving[key] === false;

      if (isEntering) delete leaving[key];

      return isEntering;
    })
  );
  const leavingKeys = displayedKeys.filter(
    key => targetKeys.indexOf(key) === -1
  );

  const children: Array<ReactElement<any>> = [];

  Children.forEach(targetChildren, (child: ReactElement<any>) => {
    if (!child) return;
    const isEntering = enteringKeys.has(getKey(child));
    const baseProps = {
      flipMove,
      measureSelf: popFromLayoutOnExit
    };

    if (isEntering && (enterAfterExit && leavingKeys.length)) return;

    const cloneProps: { [key: string]: any } = isEntering
      ? {
          initialPose: animateOnMount || hasMounted ? preEnterPose : undefined,
          pose: enterPose,
          onPoseComplete: null,
          ...baseProps,
          ...props
        }
      : {
          ...baseProps,
          ...props
        };

    children.push(cloneElement(child, cloneProps));
  });

  leavingKeys.forEach(key => {
    leaving[key] = false;

    const child = displayedChildren.find(
      (c: ReactElement<any>) => getKey(c) === key
    );

    const newChild = cloneElement(child as ReactElement<any>, {
      pose: exitPose,
      onPoseComplete: (pose: CurrentPose) => {
        scheduleChildRemoval(key);

        const { onPoseComplete } = child.props;
        onPoseComplete && onPoseComplete(pose);
      },
      popFromLayout: popFromLayoutOnExit || flipMove,
      ...props
    });

    const insertionIndex = displayedKeys.indexOf(key);

    children.splice(insertionIndex, 0, newChild);
  });

  return { children };
};

export default (props: Props, state: State) => ({
  hasMounted: true,
  ...handleTransition(props, state)
});

// Prevent the idiotic TS error loop of "using private type
// React.ReactElement" and complaining about including ReactElement
// without using it.
export { ReactElement };
