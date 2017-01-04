import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { RouterContext, match, applyRouterMiddleware } from 'react-router';
import { createLocation } from 'history';
import routes from './routes';

function globalTemplate(html, assets) {
  const metatags = Helmet.rewind();

  return `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <script src="/path/to/client.js" defer></script>
        <link rel="stylesheet" type="text/css" href="/path/to/site.css">
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

export default function render({ path, assets, siteMap }, callback) {
  const location = createLocation(path);

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    let { params, ...props } = renderProps;

    if (!params) {
      params = {};
    }
console.log(params)
    params.siteContent = siteMap;

    const html = renderToString(
      <RouterContext {...props} params={params} />
    );

    callback(null, globalTemplate(html, assets));
  });
}
