import { injectGlobal } from 'styled-components';
import Head from 'next/head';
import Analytics from './Analytics';
import reset from '~/styles/reset';
import { MAIN } from '~/styles/vars';
import settings from '~/data/settings.json';

injectGlobal`${reset}`;

export default ({ children, title, description=settings.siteDescription }) => {
  const pageTitle = `${title ? `${title} | ` : ''}${settings.siteName}`;

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content={MAIN} />
        <meta name="msapplication-navbutton-color" content={MAIN} />
        <meta name="apple-mobile-web-app-title" content={settings.siteName} />
        <meta property="og:site_name" content={settings.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="twitter:site" content={settings.twitterUsername} />
        <meta name="og:locale" property="og:locale" content="en_US" />
        <link rel="icon" type="image/png" href="static/images/favicon.png" />
        <link rel="icon" type="image/png" href="static/images/android-favicon.png" sizes="192x192" />
        <title>{pageTitle}</title>
        <Analytics />
      </Head>
      {children}
    </div>
  );
};
