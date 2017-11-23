import React from 'react';
import styled from 'styled-components';
import { GREEN, media, cols } from '~/styles/vars';
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
import {
  Container,
  LiveExampleContainer,
  CodeContainer as CodeContainerPrimitive,
  AlignCenter
} from '~/templates/homepage/LiveExamples/styled';

const StyledLiveContainer = Container.withComponent(LiveProvider);

const CodeContainer = CodeContainerPrimitive.extend`
  border-color: ${GREEN};
  padding: ${cols(2)};

  ${media.large`
    border-color: ${GREEN};
    padding: ${cols(2)};
  `}
`;

const LiveEditorWrapper = styled.div`
  height: 300px;
  max-height: 300px;
  width: 100%;
  overflow: scroll;
`;

const StyledLivePreview = LiveExampleContainer.withComponent(LivePreview).extend`
  justify-content: center;
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
          <LiveEditor />
        </LiveEditorWrapper>
      </CodeContainer>
    </StyledLiveContainer>
  );
};
