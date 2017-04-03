import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Page from '../components/layout/Page';

const Title = styled.h1`
  color: blue
`;

export default () => {
  return (
    <Page>
      <Head>
        <title>Popmotion</title>
      </Head>
      <Title>Hello world</Title>
    </Page>
  );
};
