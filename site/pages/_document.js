import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class PageTemplate extends Document {
  render() {
    const stylesheet = new ServerStyleSheet();
    const main = stylesheet.collectStyles(<Main />);
    const styleTags = stylesheet.getStyleElement();

    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Inconsolata:400|Source+Sans+Pro:300" rel="stylesheet" />
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
