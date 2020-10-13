import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
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
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const controls = animate({
      type: 'spring',
      from: 0,
      to: 400,
      duration: 300,
      mass: 1,
      velocity: 20,
      dampingRatio: 1,
      onUpdate: (v) => {
        ref.current.style.transform = `translateX(${v}px) translateZ(0)`;
        // if (v > 20) controls.stop();
      },
    });

    return () => controls.stop();
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
  }, [opacity]);

  return <Box ref={ref} onClick={() => setOpacity(opacity ? 0 : 1)} />;
}
