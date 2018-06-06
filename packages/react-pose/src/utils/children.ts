import * as React from 'react';
import { ReactElement } from 'react';
import { CurrentPose } from '../components/PoseElement.types';
import { Props, State } from '../components/PoseGroup';
const { Children, cloneElement } = React;

type MergeChildrenProps = Props &
  State & { displayedChildren: Array<ReactElement<any>> };

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
  displayedChildren,
  isLeaving,
  removeFromTree,
  preEnterPose,
  enterPose,
  exitPose,
  flipMove
}: MergeChildrenProps) => {
  const children: Array<ReactElement<any>> = [];

  const prevKeys = displayedChildren.map(getKey);
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
    const newChildProps = entering.has(child.key as string)
      ? { initialPose: preEnterPose, _pose: enterPose }
      : moving.has(child.key as string) && flipMove
        ? { _pose: [enterPose, 'flip'] }
        : { _pose: enterPose };

    children.push(cloneElement(child, newChildProps));
  });

  leaving.forEach(key => {
    const child = displayedChildren.find(c => c.key === key);
    const newChild = cloneElement(child, {
      _pose: exitPose,
      onPoseComplete: removeFromTree(key),
      popFromFlow: flipMove
    });

    let insertionIndex = prevKeys.indexOf(key);

    // We might have had new items added before this item in the same
    // render. So here we find the correct item to anchor to. This is
    // a pretty shitty algo. But it is also the one we have
    if (insertionIndex) {
      // TODO: Write a shitty algo
    }

    children.splice(insertionIndex, 0, newChild);
  });

  return children;
};

export const handleIncomingChildren = (props: MergeChildrenProps) => {
  const {
    displayedChildren,
    incomingChildren,
    animateOnMount,
    preEnterPose,
    enterPose
  } = props;

  // If initial mount and we're animating
  if (!displayedChildren && animateOnMount) {
    return animateChildrenList(incomingChildren, enterPose, preEnterPose);

    // If subsequent render
  } else if (displayedChildren) {
    return mergeChildren(props);

    // If initial mount and we're not animating
  } else {
    return animateChildrenList(incomingChildren, enterPose);
  }
};

export const makeChildList = (children: Array<ReactElement<any>>) => {
  const list: Array<ReactElement<any>> = [];
  Children.forEach(
    children,
    child => child && list.push(child as ReactElement<any>)
  );
  return list;
};

export const removeFromChildren = (children, key) =>
  children.filter(child => child.key !== key);
