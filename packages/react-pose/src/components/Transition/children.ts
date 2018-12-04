import * as React from 'react';
import { Props, State } from './types';
import { CurrentPose } from '../PoseElement/types';
import { invariant, warning } from 'hey-listen';

const getKey = (child: React.ReactElement<any>): string => {
  invariant(
    child && child.key !== null,
    'Every child of Transition must be given a unique key'
  );

  const childKey =
    typeof child.key === 'number' ? child.key.toString() : child.key;

  return childKey.replace('.$', '');
};

const prependProps = (
  element: React.ReactElement<any>,
  props: { [key: string]: any }
) =>
  // avoid extra copying in cloneElement
  React.createElement(element.type, {
    key: element.key,
    ref: (element as any).ref,
    ...props,
    ...element.props
  });

const handleTransition = (
  {
    children: incomingChildren,
    preEnterPose,
    enterPose,
    exitPose,
    animateOnMount,
    enterAfterExit,
    flipMove,
    onRest,
    ...propsForChildren
  }: Props,
  {
    displayedChildren,
    finishedLeaving,
    hasInitialized,
    indexedChildren,
    scheduleChildRemoval
  }: State
) => {
  const targetChildren = makeChildList(incomingChildren as React.ReactNode);

  const nextState: Partial<State> = {
    displayedChildren: []
  };

  if (process.env.NODE_ENV !== 'production') {
    warning(
      !propsForChildren.onPoseComplete,
      "<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop."
    );
  }

  const prevKeys = displayedChildren.map(getKey);
  const nextKeys = targetChildren.map(getKey);

  const hasPropsForChildren = Object.keys(propsForChildren).length !== 0;

  const entering = new Set(
    nextKeys.filter(
      key => finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1
    )
  );
  entering.forEach(key => delete finishedLeaving[key]);

  const leaving: string[] = [];
  const newlyLeaving: { [key: string]: boolean } = {};
  prevKeys.forEach(key => {
    if (entering.has(key)) {
      return;
    }

    const isLeaving = finishedLeaving.hasOwnProperty(key);

    if (!isLeaving && nextKeys.indexOf(key) !== -1) {
      return;
    }

    leaving.push(key);

    if (!isLeaving) {
      finishedLeaving[key] = false;
      newlyLeaving[key] = true;
    }
  });

  const moving = new Set(
    prevKeys.filter((key, i) => {
      if (entering.has(key)) {
        return false;
      }

      const nextIndex = nextKeys.indexOf(key);
      return nextIndex !== -1 && i !== nextIndex;
    })
  );

  targetChildren.forEach(child => {
    const newChildProps: { [key: string]: any } = {};

    if (entering.has(child.key as string)) {
      if (hasInitialized || animateOnMount) {
        newChildProps.initialPose = preEnterPose;
      }
      // TODO: Remove _pose and merge with child.props.pose
      newChildProps._pose = enterPose;
    } else if (moving.has(child.key as string) && flipMove) {
      newChildProps._pose = [enterPose, 'flip'];
    } else {
      newChildProps._pose = enterPose;
    }

    const newChild = React.cloneElement(child, newChildProps);
    indexedChildren[child.key] = newChild;
    nextState.displayedChildren.push(
      hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild
    );
  });

  leaving.forEach(key => {
    const child = indexedChildren[key];
    const newChild = newlyLeaving[key]
      ? React.cloneElement(child, {
          _pose: exitPose,
          onPoseComplete: (pose: CurrentPose) => {
            scheduleChildRemoval(key);

            const { onPoseComplete } = child.props;
            if (onPoseComplete) onPoseComplete(pose);
          },
          popFromFlow: flipMove
        })
      : child;

    const insertionIndex = prevKeys.indexOf(key);

    // We might have had new items added before this item in the same
    // render. So here we find the correct item to anchor to. This is
    // a pretty shitty algo. But it is also the one we have
    // if (insertionIndex) {
    // TODO: Write a shitty algo
    // }

    indexedChildren[child.key] = newChild;
    nextState.displayedChildren.splice(
      insertionIndex,
      0,
      hasPropsForChildren ? prependProps(newChild, propsForChildren) : newChild
    );
  });

  return nextState;
};

export default (props: Props, state: State) => {
  const newState = handleTransition(props, state);
  newState.hasInitialized = true;
  return newState;
};

const makeChildList = (children: React.ReactNode) => {
  const list: Array<React.ReactElement<any>> = [];
  React.Children.forEach(
    children,
    child => child && list.push(child as React.ReactElement<any>)
  );
  return list;
};
