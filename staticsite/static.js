import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import Homepage from './scenes/Homepage';
import Content from './scenes/Content';
import './styles/index.scss';

function globalTemplate(html, path, assets) {
  const metatags = Helmet.rewind();

  return `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <script src="/path/to/client.js" defer></script>
        <link href="https://fonts.googleapis.com/css?family=Cousine|Montserrat:400,700" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="styles.css">
        <link rel="canonical" href="${path}" />
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@popmotion"/>
        <meta name="twitter:domain" content="httsp://popmotion.io"/>
        <meta name="twitter:creator" content="@popmotion"/>

        <link rel="icon" type="image/png" href="assets/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="assets/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        ${metatags.title.toString()}
        ${metatags.link.toString()}
        ${metatags.meta.toString()}
      </head>
      <body>
        ${html}
      </body>
    </html>
  `;
}

function renderPage(path, siteContent) {
  const splitPath = path.split('/');
  splitPath.splice(0, 1);
  let renderedPage;

  // If route
  if (splitPath[0] === '') {
    renderedPage = (
      <Homepage />
    );
  } else {
    const [ section, category, topic ] = splitPath;
    switch (section) {
      case 'api':
        renderedPage = (
          <Content category={category} topic={topic} content={siteContent} />
        );
        break;
    }
  }

  return renderToString(renderedPage);
}

export default function render({ path, assets, siteContent }) {
  const html = renderPage(path, siteContent);
  return globalTemplate(html, path, assets);
}
