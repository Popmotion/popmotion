import * as React from 'react';
import { ReactElement } from 'react';
//import { CurrentPose } from '../PoseElement/types';
import { Props, State } from './types';
import { invariant } from 'hey-listen';
const { Children, cloneElement } = React;

const filterChildProps = ({
  children,
  _pose,
  onPoseComplete,
  popFromFlow,
  ...props
}: Props) => props;

// const animateChildrenList = (
//   incomingChildren: Array<ReactElement<any>>,
//   pose: CurrentPose,
//   initialPose?: CurrentPose
// ) => {
//   const children: Array<ReactElement<any>> = [];

//   Children.forEach(incomingChildren, (child: ReactElement<any>) =>
//     children.push(cloneElement(child, { pose, initialPose }))
//   );
//   return children;
// };

// const mergeChildren = ({
//   incomingChildren,
//   displayedChildren,
//   finishedLeaving,
//   scheduleChildRemoval,
//   groupProps
// }: MergeChildrenProps) =>

// export const handleIncomingChildren = (props: MergeChildrenProps) => {
//   const { displayedChildren, incomingChildren, groupProps } = props;
//   const { animateOnMount, preEnterPose, enterPose } = groupProps;

//   // If initial mount and we're animating
//   if (!displayedChildren && animateOnMount) {
//     return animateChildrenList(incomingChildren, enterPose, preEnterPose);

//     // If subsequent render
//   } else if (displayedChildren) {
//     return mergeChildren(props);

//     // If initial mount and we're not animating
//   } else {
//     return animateChildrenList(incomingChildren, enterPose);
//   }
// };

const getKey = (child: ReactElement<any>): string => {
  invariant(
    child && child.key !== null,
    'Every child of Transition must be given a unique key'
  );

  const childKey =
    typeof child.key === 'number' ? child.key.toString() : child.key;

  return childKey.replace('.$', '');
};

// const getKeys = (
//   children: React.ReactElement<any> | Array<React.ReactElement<any>>
// ): string[] =>
//   Children.toArray(children)
//     .filter(Boolean)
//     .map(getKey);

const handleTransition = (
  {
    children: targetChildren,
    preEnterPose,
    enterPose,
    exitPose,
    animateOnMount,
    enterAfterExit,
    flipMove,
    ...propsForChild
  }: Props,
  {
    children: displayedChildren,
    finishedLeaving,
    scheduleChildRemoval,
    hasMounted
  }: State
) => {
  targetChildren = makeChildList(targetChildren);

  const children: Array<ReactElement<any>> = [];

  const prevKeys = displayedChildren.map(getKey);
  const nextKeys = targetChildren.map(getKey);

  const entering = new Set(
    nextKeys.filter(
      key => finishedLeaving.hasOwnProperty(key) || prevKeys.indexOf(key) === -1
    )
  );
  entering.forEach(key => delete finishedLeaving[key]);

  const leaving = prevKeys.filter(
    key =>
      !entering.has(key) &&
      (finishedLeaving.hasOwnProperty(key) || nextKeys.indexOf(key) === -1)
  );

  leaving.forEach(key => (finishedLeaving[key] = false));

  const moving = new Set(
    prevKeys.filter((key, i) => {
      const nextIndex = nextKeys.indexOf(key);
      return !entering.has(key) && nextIndex !== -1 && i !== nextIndex;
    })
  );

  targetChildren.forEach(child => {
    const newChildProps = {
      ...propsForChild,
      ...filterChildProps(child.props)
    };

    if (entering.has(child.key as string)) {
      newChildProps.initialPose = preEnterPose;
      newChildProps._pose = enterPose;
    } else if (moving.has(child.key as string) && flipMove) {
      newChildProps._pose = [enterPose, 'flip'];
    } else {
      newChildProps._pose = enterPose;
    }

    children.push(cloneElement(child, newChildProps));
  });

  leaving.forEach(key => {
    const child = displayedChildren.find(c => c.key === key);
    const newChild = cloneElement(child, {
      _pose: exitPose,
      onPoseComplete: () => scheduleChildRemoval(key),
      popFromFlow: flipMove,
      ...propsForChild,
      ...filterChildProps(child.props)
    });

    const insertionIndex = prevKeys.indexOf(key);

    // We might have had new items added before this item in the same
    // render. So here we find the correct item to anchor to. This is
    // a pretty shitty algo. But it is also the one we have
    // if (insertionIndex) {
    // TODO: Write a shitty algo
    // }

    children.splice(insertionIndex, 0, newChild);
  });

  return { children };
};

export default (props: Props, state: State) => ({
  hasMounted: true,
  ...handleTransition(props, state)
});

const makeChildList = (
  children: Array<ReactElement<any>> | ReactElement<any>
) => {
  const list: Array<ReactElement<any>> = [];
  Children.forEach(
    children,
    child => child && list.push(child as ReactElement<any>)
  );
  return list;
};
