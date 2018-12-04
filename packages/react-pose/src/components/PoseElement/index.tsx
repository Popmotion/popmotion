import React, { PureComponent, createContext, createElement } from 'react';
import poseFactory, {
  DomPopmotionPoser,
  DomPopmotionConfig
} from 'popmotion-pose';
import {
  ChildRegistration,
  CurrentPose,
  PoseContextProps,
  PoseElementInternalProps,
  PopStyle
} from './types';
import isValidProp from '@emotion/is-prop-valid';
import { invariant, warning } from 'hey-listen';
import { hasChanged } from '../../utils/has-changed';
import { pickAssign } from '../../utils/pick-assign';

type ExcludesVoid = <T>(x: T | void) => x is T;

const {
  Consumer: PoseParentConsumer,
  Provider: PoseParentProvider
} = createContext({});
export { PoseParentConsumer };

const calcPopFromFlowStyle = (el: HTMLElement): PopStyle => {
  const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = el;

  return {
    position: 'absolute',
    top: offsetTop,
    left: offsetLeft,
    width: offsetWidth,
    height: offsetHeight
  };
};

const hasPose = (pose: CurrentPose, key: string) =>
  Array.isArray(pose) ? pose.indexOf(key) !== -1 : pose === key;

const objectToMap = (obj: { [key: string]: any }): Map<string, any> =>
  Object.keys(obj).reduce((map, key) => {
    map.set(key, { raw: obj[key] });
    return map;
  }, new Map());

const testAlwaysTrue = () => true;

const filterProps = ({
  elementType,
  poseConfig,
  onValueChange,
  innerRef,
  _pose,
  pose,
  initialPose,
  poseKey,
  onPoseComplete,
  getParentPoseConfig,
  registerChild,
  onUnmount,
  getInitialPoseFromParent,
  popFromFlow,
  values,
  parentValues,
  onDragStart,
  onDragEnd,
  onPressStart,
  onPressEnd,
  ...props
}: PoseElementInternalProps) => props;

class PoseElement extends PureComponent<PoseElementInternalProps> {
  props: PoseElementInternalProps;
  poser: DomPopmotionPoser;
  poseConfig: DomPopmotionConfig;
  ref: Element;
  styleProps: { [key: string]: any };
  shouldForwardProp: (key: string) => boolean;
  children: Set<ChildRegistration> = new Set();
  popStyle?: PopStyle;

  /**
   * Children handlers
   * =============================================
   */
  private childrenHandlers: PoseContextProps = {
    registerChild: (props: ChildRegistration) => {
      this.children.add(props);
      if (this.poser) this.flushChildren();
    },
    onUnmount: (child: DomPopmotionPoser) => this.poser.removeChild(child),
    getParentPoseConfig: () => this.poseConfig,
    getInitialPoseFromParent: () => this.getInitialPose()
  };

  /**
   * Lifecycle
   * =============================================
   */
  constructor(props: PoseElementInternalProps) {
    super(props);
    this.shouldForwardProp =
      typeof this.props.elementType === 'string' ? isValidProp : testAlwaysTrue;

    const { poseConfig } = this.props;

    this.poseConfig =
      typeof poseConfig === 'function'
        ? poseConfig(filterProps(props))
        : poseConfig;
  }

  getInitialPose(): CurrentPose | void {
    const { getInitialPoseFromParent, pose, _pose, initialPose } = this.props;

    if (initialPose) {
      return initialPose;
    } else {
      const parentPose = getInitialPoseFromParent && getInitialPoseFromParent();
      const initialPoses = (Array.isArray(parentPose)
        ? parentPose
        : [parentPose]
      )
        .concat(pose, _pose)
        .filter((Boolean as any) as ExcludesVoid);

      return initialPoses.length > 0 ? initialPoses : undefined;
    }
  }

  getFirstPose(): CurrentPose | void {
    const { initialPose, pose, _pose } = this.props;
    // If don't have an initial pose explicitly defined, return early
    if (!initialPose) return;

    const firstPose = (Array.isArray(pose) ? pose : [pose])
      .concat(_pose)
      .filter(Boolean);

    return firstPose.length === 1 ? firstPose[0] : firstPose;
  }

  getSetProps() {
    const props = filterProps(this.props);

    // If we're popping this element out from the DOM flow, build
    // and apply position: absolute styles that visually match the previous
    // location in the DOM
    if (this.props.popFromFlow && this.ref && this.ref instanceof HTMLElement) {
      if (!this.popStyle) {
        props.style = {
          ...props.style,
          ...calcPopFromFlowStyle(this.ref as HTMLElement)
        };
        this.popStyle = props.style;
      } else {
        props.style = this.popStyle;
      }
    } else {
      this.popStyle = null;
    }

    return props;
  }

  setRef = (ref: Element | null) => {
    warning(
      ref === null || (ref instanceof Element && this.ref === undefined),
      'ref must be provided to the same DOM component for the entire lifecycle of a posed component.'
    );

    this.ref = ref;

    // Update user-provided `innerRef` property. (Externalised as `ref`)
    const { innerRef } = this.props;
    if (!innerRef) return;

    if (typeof innerRef === 'function') {
      innerRef(ref);
    } else {
      innerRef.current = ref;
    }
  };

  componentDidMount() {
    invariant(
      this.ref instanceof Element,
      "No valid DOM ref found. If you're converting an existing component via posed(Component), you must ensure you're passing the ref to the host DOM node via the React.forwardRef function."
    );

    const {
      onValueChange,
      registerChild,
      values,
      parentValues,
      onDragStart,
      onDragEnd,
      onPressStart,
      onPressEnd
    } = this.props;

    const config: DomPopmotionConfig = {
      ...this.poseConfig,
      initialPose: this.getInitialPose(),
      values: values || this.poseConfig.values,
      parentValues: parentValues ? objectToMap(parentValues) : undefined,
      props: this.getSetProps(),
      onDragStart,
      onDragEnd,
      onPressStart,
      onPressEnd,
      onChange: onValueChange
    };

    // If first in tree
    if (!registerChild) {
      this.initPoser(poseFactory(this.ref, config));
    } else {
      registerChild({
        element: this.ref,
        poseConfig: config,
        onRegistered: (poser: DomPopmotionPoser) => this.initPoser(poser)
      });
    }
  }

  getSnapshotBeforeUpdate(): null {
    const { pose, _pose } = this.props;
    if (hasPose(pose, 'flip') || hasPose(_pose, 'flip')) this.poser.measure();
    return null;
  }

  componentDidUpdate(prevProps: PoseElementInternalProps) {
    const { pose, _pose, poseKey } = this.props;
    this.poser.setProps(this.getSetProps());

    if (
      poseKey !== prevProps.poseKey ||
      hasChanged(prevProps.pose, pose) ||
      pose === 'flip'
    ) {
      this.setPose(pose);
    }

    // Internal use only. Must be a nicer way to reconcile internally and externally-set
    // poses from children.ts which uses cloneElement. Answers on a postcard.
    if (_pose !== prevProps._pose || _pose === 'flip') this.setPose(_pose);
  }

  componentWillUnmount() {
    if (!this.poser) return;
    const { onUnmount } = this.props;
    if (onUnmount) onUnmount(this.poser);
    this.poser.destroy();
  }

  initPoser(poser: DomPopmotionPoser) {
    this.poser = poser;
    this.flushChildren();

    const firstPose = this.getFirstPose();
    if (firstPose) this.setPose(firstPose);
  }

  setPose(pose: CurrentPose) {
    const { onPoseComplete } = this.props;
    const poseList: string[] = Array.isArray(pose) ? pose : [pose];

    Promise.all(poseList.map(key => key && this.poser.set(key))).then(
      () => onPoseComplete && onPoseComplete(pose)
    );
  }

  flushChildren() {
    this.children.forEach(({ element, poseConfig, onRegistered }) =>
      onRegistered(this.poser.addChild(element, poseConfig))
    );

    this.children.clear();
  }

  render() {
    const { elementType } = this.props;

    return (
      <PoseParentProvider value={this.childrenHandlers}>
        {createElement(
          elementType,
          pickAssign(this.shouldForwardProp, [
            this.getSetProps(),
            { ref: this.setRef }
          ])
        )}
      </PoseParentProvider>
    );
  }
}

export { PoseElement };
