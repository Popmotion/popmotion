import { injectGlobal } from 'styled-components';
import Head from 'next/head';
import reset from '~/styles/reset';
import { MAIN } from '~/styles/vars';
import settings from '~/data/settings.json';

injectGlobal`${reset}`;

export default ({ children, title, description=settings.siteDescription }) => {
  const pageTitle = `${title ? `${title} | ` : ''}${settings.siteName}`;

  return (
    <div>
      <Head>
        <meta name="theme-color" content={MAIN} />
        <meta name="msapplication-navbutton-color" content={MAIN} />
        <meta name="apple-mobile-web-app-title" content={settings.siteName} />
        <meta property="og:site_name" content={settings.siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="twitter:site" content={settings.twitterUsername} />
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};
