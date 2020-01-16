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

export function Tween() {
  const ref = useRef();

  useEffect(() => {}, []);

  return <Box ref={ref} />;
}
