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

const StyledLiveEditor = styled(LiveEditor)`
  height: 300px;
  max-height: 300px;
  overflow-y: scroll;
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
      <StyledLivePreview />
      <CodeContainer>
        <StyledLiveEditor />
      </CodeContainer>
    </StyledLiveContainer>
  );
};
