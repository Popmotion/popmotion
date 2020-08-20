import * as React from 'react';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { animate, inertia } from 'popmotion';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #09f;
  border-radius: 10px;
`;

export function Keyframes() {
  const ref = useRef();

  useEffect(() => {
    inertia({
      // bounceDamping: 10,
      // bounceStiffness: 200,
      max: 240.5,
      min: 240.5,
      // restDelta: 1,
      // restSpeed: 10,
      timeConstant: 750,
      velocity: -200,
      onUpdate: v => {
        console.log(v);
        ref.current.style.transform = `translateX(${v}px)`;
      }
    });
    // animate({
    //   from: 0,
    //   to: 300,
    //   type: 'spring',
    //   repeat: Infinity,
    //   repeatType: 'mirror',
    //   onUpdate: v => {
    //     ref.current.style.transform = `translateX(${v}px)`;
    //   }
    // });
  });

  return <Box ref={ref} />;
}
