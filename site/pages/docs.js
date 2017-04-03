import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import MTRC from 'markdown-to-react-components';
import frontMatter from 'front-matter';
import 'isomorphic-fetch';
import 'regenerator-runtime/runtime';

const Title = styled.h1`
  color: blue
`;

export default class extends React.Component {
  static async getInitialProps({ query: { id }}) {
    const request = new Request(
      'https://raw.githubusercontent.com/Popmotion/popmotion/master/docs/api/calc.md',
      {
        headers: new Headers({
          'Content-Type': 'text/plain'
        })
      }
    );
    const response = await fetch(request);
    const doc = await response.text();
    const { attributes, body } = frontMatter(doc);
    const { title, description } = attributes;
    const pageContent = MTRC(body).tree;

    return {
      title,
      description,
      pageContent
    };
  }

  render(props) {
    console.log(props)
    return (
      <div>
        <Head>
          <title>test</title>
        </Head>
        <Title>Docs</Title>
      </div>
    );
  }
}
