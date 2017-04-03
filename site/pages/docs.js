import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import MTRC from 'markdown-to-react-components';
import frontMatter from 'front-matter';
import regeneratorRuntime from 'regenerator-runtime/runtime';
import 'isomorphic-fetch';

const Title = styled.h1`
  color: blue
`;

MTRC.configure({
  h1: Title
});

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

    return {
      title,
      description,
      body
    };
  }

  render() {
    const { title, description, body } = this.props;
    const content = MTRC(body).tree;

    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        {content}
      </div>
    );
  }
}
