import React from 'react';
import styled from 'styled-components';
import { fontBold } from '~/styles/fonts';
import { GREEN, UNSKEW, media, cols } from '~/styles/vars';
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
  listen,
  tween,
  pointer,
  mouse,
  multitouch,
  multicast,
  composite,
  parallel,
  calc,
  easing,
  transform
} from 'popmotion';
import styler from 'stylefire';
import { MotionValue } from 'popmotion-react';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
import templates from './templates';
import {
  Container,
  LiveExampleContainer,
  CodeContainer as CodeContainerPrimitive
} from '~/templates/Popmotion/LiveExamples/styled';

const StyledLiveContainer = Container.withComponent(LiveProvider).extend`
  justify-content: flex-end;
`;

const CodeContainer = CodeContainerPrimitive.extend`
  border-color: ${GREEN};
  padding: ${cols(2)};

  ${media.large`
    border-color: ${GREEN};
    padding: ${cols(2)};
    margin-right: 0;
  `}
`;

const LiveEditorWrapper = styled.div`
  height: 300px;
  max-height: 300px;
  width: 100%;
  overflow: scroll;

  pre {
    transform-origin: 0 0;
  }
`;

const StyledLivePreview = LiveExampleContainer.withComponent(LivePreview).extend`
  flex: 0 1 450px;
  justify-content: center;
`;

const LiveEditorHeader = styled.h4`
  color: ${GREEN};
  ${fontBold}
  transform: skewX(${UNSKEW});
  transform-origin: 0 0;
  display: block;
  margin-bottom: ${cols(1)};
`;

const stripFirstReturn = ([ code ]) => {
  return code.replace(/[\n\r]+/, '');
}

const injectRender = (code) => `
  function start() {
    ${code}
  }

  render(<Component
    key={Math.random()}
    autostart={autostart}
    start={start}
    id={id}
  />);
`;

export default ({ children, template, id, autostart, isReactComponent=false }) => {
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
        listen,
        pointer,
        mouse,
        multitouch,
        multicast,
        composite,
        parallel,
        calc,
        easing,
        transform,
        styler,
        Component,
        id,
        autostart,
        MotionValue
      }}
      mountStylesheet={false}
      noInline={!isReactComponent}
    >
      <StyledLivePreview />
      <CodeContainer>
        <LiveEditorWrapper>
          <LiveEditorHeader>Live editor</LiveEditorHeader>
          <LiveEditor />
        </LiveEditorWrapper>
      </CodeContainer>
    </StyledLiveContainer>
  );
};
