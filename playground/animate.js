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
      to: 100,
      duration: 3000,
      repeat: 1,
      repeatType: 'reverse',
      onUpdate: v => console.log(v)
    });
  }, []);

  return <Box ref={ref} />;
}
