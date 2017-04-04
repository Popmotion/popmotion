import React from 'react';
import styled from 'styled-components';
import Page from '../components/layout/Page';

const Title = styled.h1`
  color: blue
`;

export default () => {
  return (
    <Page>
      <Title>Hello world</Title>
    </Page>
  );
};
