import React from 'react';
import styled from 'styled-components';
import { media } from '~/styles/vars';
import { tween, physics, css, svg, easing } from 'popmotion';
import { LiveProvider, LiveEditor, LivePreview } from 'react-live';
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

export default ({ children, template, id }) => {
  const Component = templates[template];

  return (
    <StyledLiveContainer
      transformCode={injectRender}
      code={stripFirstReturn(children)}
      scope={{ tween, physics, css, svg, easing, Component, id }}
      mountStylesheet={false}
      noInline={true}
    >
      <StyledLiveEditor />
      <StyledLivePreview />
    </StyledLiveContainer>
  );
};
