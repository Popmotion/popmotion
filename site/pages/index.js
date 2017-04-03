import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: blue
`;

export default () => {
  return (
    <div>
      <Head>
        <title>Popmotion</title>
      </Head>
      <Title>Hello world</Title>
    </div>
  );
};