import React from 'react';
import styled from 'styled-components';
import { media } from '~/styles/vars';
import {
  action,
  reaction,
  style,
  value,
  decay,
  keyframes,
  onFrame,
  physics,
  spring,
  tween,
  pointer,
  mouse,
  touch,
  composite,
  parallel,
  calc,
  easing,
  transform
} from 'popmotion';
import styler from 'stylefire';
import { MotionValue } from 'popmotion-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import templates from './templates';

const StyledLiveContainer = styled(LiveProvider)`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLiveEditor = styled(LiveEditor)`
  height: 300px;
  max-height: 300px;
  overflow-y: scroll;
  flex: 0 0 50%;
  ${media.medium`
    flex: 0 0 100%;
  `}
`;

const StyledLivePreview = styled(LivePreview)`
  flex: 0 0 50%;
  ${media.medium`
    flex: 0 0 100%;
  `}
`;

const stripFirstReturn = (code) => code.replace(/[\n\r]+/, '');

const injectRender = (code) => `
  function start() {
    ${code}
  }
  render(<Component start={start} id={id} />);
`;

export default ({ children, template, id, isReactComponent=false }) => {
  const Component = templates[template];

  return (
    <StyledLiveContainer
      transformCode={isReactComponent ? undefined : injectRender}
      code={stripFirstReturn(children)}
      scope={{
        action,
        reaction,
        style,
        value,
        decay,
        keyframes,
        onFrame,
        physics,
        spring,
        tween,
        pointer,
        mouse,
        touch,
        composite,
        parallel,
        calc,
        easing,
        transform,
        styler,
        Component,
        id,
        MotionValue
      }}
      mountStylesheet={false}
      noInline={!isReactComponent}
    >
      <StyledLiveEditor />
      <StyledLivePreview />
      <LiveError />
    </StyledLiveContainer>
  );
};
