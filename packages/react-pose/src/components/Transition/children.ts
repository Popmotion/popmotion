import { Children, cloneElement, createElement, ReactElement } from 'react';
import { Props, State } from './types';
import { invariant, warning } from 'hey-listen';

const getKey = (child: ReactElement<any>): string => {
  invariant(
    child && child.key !== null,
    'Every child of Transition must be given a unique key'
  );

  const childKey =
    typeof child.key === 'number' ? child.key.toString() : child.key;

  return childKey.replace('.$', '');
};

const prependProps = (
  element: ReactElement<any>,
  props: { [key: string]: any; }
) =>
  // avoid extra copying in cloneElement
  createElement(element.type, {
    key: element.key,
    ref: element.ref,
    ...props,
    ...element.props,
  })

const handleTransition = (
  {
    children: targetChildren,
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
    indexedChildren: prevChildren,
    scheduleChildRemoval,
  }: State
) => {
  targetChildren = makeChildList(targetChildren);

  const nextState: Partial<State> = {
    displayedChildren: []
    indexedChildren: {},
  }

  if (process.env.NODE_ENV !== 'production') {
    warning(
      !propsForChildren.onPoseComplete,
      `<Transition/> (or <PoseGroup/>) doesn't accept onPoseComplete prop.`,
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

  const leaving = [];
  const newlyLeaving = {};
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
  })

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
    const newChildProps = {};

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

    const newChild = cloneElement(child, newChildProps);
    nextState.indexedChildren[child.key] = newChild;
    nextState.displayedChildren.push(
      hasPropsForChildren
        ? prependProps(newChild, propsForChildren)
        : newChild
    );
  });

  leaving.forEach(key => {
    const child = prevChildren[key];

    const newChild = newlyLeaving[key]
      ? cloneElement(child, {
          _pose: exitPose,
          onPoseComplete: pose => {
            scheduleChildRemoval(key)

            const { onPoseComplete } = child.props
            onPoseComplete && onPoseComplete(pose)
          },
          popFromFlow: flipMove,
        })
      : child;

    const insertionIndex = prevKeys.indexOf(key);

    // We might have had new items added before this item in the same
    // render. So here we find the correct item to anchor to. This is
    // a pretty shitty algo. But it is also the one we have
    // if (insertionIndex) {
    // TODO: Write a shitty algo
    // }

    nextState.indexedChildren[child.key] = newChild;
    nextState.displayedChildren.splice(
      insertionIndex,
      0,
      hasPropsForChildren
        ? prependProps(newChild, propsForChildren)
        : newChild
    );
  });

  return nextState;
};

export default (props: Props, state: State) => ({
  hasInitialized: true,
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
