import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animate, workletReady } from 'popmotion';

CSS.animationWorklet.addModule('popmotion-worklet.js').then(workletReady);

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #09f;
  border-radius: 10px;
`;

export function Tween() {
  const ref = useRef();

  useEffect(() => {
    animate(ref.current, { x: 100 }, { duration: 3000 });
  }, []);

  return <Box ref={ref} />;
}
