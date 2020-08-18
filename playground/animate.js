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
      to: 300,
      type: 'spring',
      repeat: Infinity,
      repeatType: 'mirror',
      onUpdate: v => {
        ref.current.style.transform = `translateX(${v}px)`;
      }
    });
  });

  return <Box ref={ref} />;
}
