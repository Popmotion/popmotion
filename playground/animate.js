import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animate } from 'popmotion';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #09f;
  border-radius: 10px;
`;

export function Keyframes() {
  const ref = useRef();

  useEffect(() => {
    animate({
      from: 0,
      velocity: 100,
      power: 0.8,
      type: 'decay',
      modifyTarget: v => (console.log('taget', v * 2), v * 2),
      onUpdate: v => console.log('latest', v)
    });
  }, []);

  return <Box ref={ref} />;
}
