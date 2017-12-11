import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Analytics from '~/templates/global/Analytics';

export default class PageTemplate extends Document {
  render() {
    const stylesheet = new ServerStyleSheet();
    const main = stylesheet.collectStyles(<Main />);
    const styleTags = stylesheet.getStyleElement();

    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="og:locale" property="og:locale" content="en_US" />
          <link href="https://fonts.googleapis.com/css?family=Inconsolata:400|PT+Sans:400,700" rel="stylesheet" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon-16x16.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@popmotionjs" />
          <link rel="shortcut icon" href="/static/images/favicon.ico" />
          {styleTags}
          <Analytics />
        </Head>
        <body id="root">
          {main}
          <NextScript />
        </body>
      </html>
    );
  }
}
