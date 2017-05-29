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
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}
