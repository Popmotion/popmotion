import * as React from 'react';
import { ReactElement } from 'react';
import { CurrentPose } from '../PoseElement/types';
import { MergeChildrenProps, Props } from './types';
const { Children, cloneElement } = React;

const getKey = (child: ReactElement<any>): string => child.key as string;

const animateChildrenList = (
  incomingChildren: Array<ReactElement<any>>,
  pose: CurrentPose,
  initialPose?: CurrentPose
) => {
  const children: Array<ReactElement<any>> = [];

  Children.forEach(incomingChildren, (child: ReactElement<any>) =>
    children.push(cloneElement(child, { pose, initialPose }))
  );
  return children;
};

const mergeChildren = ({
  incomingChildren,
  children,
  isLeaving,
  removeFromTree,
  groupProps
}: MergeChildrenProps) => {
  const {
    preEnterPose,
    enterPose,
    exitPose,
    flipMove,
  } = groupProps;
  const mergedChildren: Array<ReactElement<any>> = [];

  const prevKeys = children.map(getKey);
  const nextKeys = incomingChildren.map(getKey);

  const entering = new Set(
    nextKeys.filter(key => isLeaving.has(key) || prevKeys.indexOf(key) === -1)
  );
  entering.forEach(key => isLeaving.delete(key));

  const leaving = prevKeys.filter(
    key =>
      !entering.has(key) && (isLeaving.has(key) || nextKeys.indexOf(key) === -1)
  );

  leaving.forEach(key => isLeaving.add(key));

  const moving = new Set(
    prevKeys.filter((key, i) => {
      const nextIndex = nextKeys.indexOf(key);
      return !entering.has(key) && nextIndex !== -1 && i !== nextIndex;
    })
  );

  incomingChildren.forEach(child => {
    const newChildProps = {};

    if (entering.has(child.key as string)) {
      // If child is entering
      newChildProps.initialPose = preEnterPose;
      newChildProps._pose = enterPose; // TODO: Remove _pose and merge with child.props.pose
    } else if (moving.has(child.key as string) && flipMove) {
      // If child is moving and we're using `flip`
      newChildProps._pose = [enterPose, 'flip'];
    } else {
      // If child is moving
      newChildProps._pose = enterPose;
    }

    mergedChildren.push(cloneElement(child, newChildProps));
  });

  leaving.forEach(key => {
    const child = children.find(c => c.key === key);
    const removeChildFromTree = removeFromTree(key)

    const newChild = cloneElement(child, {
      _pose: exitPose,
      onPoseComplete: pose => {
        removeChildFromTree()
        const { onPoseComplete } = child.props
        // TODO: call original onPoseComplete prop also in react-pose-core, vue-pose
        onPoseComplete && onPoseComplete(pose)
      },
      popFromFlow: flipMove,
    });

    const insertionIndex = prevKeys.indexOf(key);

    // We might have had new items added before this item in the same
    // render. So here we find the correct item to anchor to. This is
    // a pretty shitty algo. But it is also the one we have
    // if (insertionIndex) {
    // TODO: Write a shitty algo
    // }

    mergedChildren.splice(insertionIndex, 0, newChild);
  });

  return mergedChildren;
};

export const handleIncomingChildren = (props: MergeChildrenProps) => {
  const { children, incomingChildren, groupProps } = props;
  const { animateOnMount, preEnterPose, enterPose } = groupProps;

  // If initial mount and we're animating
  if (!children && animateOnMount) {
    return animateChildrenList(incomingChildren, enterPose, preEnterPose);

    // If subsequent render
  } else if (children) {
    return mergeChildren(props);

    // If initial mount and we're not animating
  } else {
    return animateChildrenList(incomingChildren, enterPose);
  }
};

export const makeChildList = (
  children: Array<ReactElement<any>> | ReactElement<any>
) => {
  const list: Array<ReactElement<any>> = [];
  Children.forEach(
    children,
    child => child && list.push(child as ReactElement<any>)
  );
  return list;
};

export const removeFromChildren = (
  children: Array<ReactElement<any>>,
  key: string
) => children.filter(child => child.key !== key);
