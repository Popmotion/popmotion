import { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import reset from '~/styles/reset';
import nprogressStyles from '~/styles/nprogress';
import { BRAND } from '~/styles/vars';
import themes from '~/styles/themes';
import settings from '~/data/settings.json';
import * as popmotion from 'popmotion';

if (typeof window !== 'undefined') {
  console.log(
    'Hey explorer! You can play around with Popmotion right from your console, by using window.popmotion.'
  );
  window.popmotion = popmotion;
}

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => {
  if (typeof window !== 'undefined' && typeof window.Prism !== 'undefined') {
    window.Prism.highlightAll();
  }
  NProgress.done();
};
Router.onRouteChangeError = () => NProgress.done();

const Global = createGlobalStyle`
  ${reset}
  ${nprogressStyles}
`;

export default ({ children, title, theme, description, image }) => (
  <Fragment>
    <Global />
    <Head>
      <meta name="theme-color" content={BRAND} />
      <meta name="msapplication-navbutton-color" content={BRAND} />
      <meta name="apple-mobile-web-app-title" content={settings.siteName} />
      <meta property="og:site_name" content={settings.siteName} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || themes[theme].tagline}
      />
      <meta property="og:image" content={image || themes[theme].shareImage} />
      <meta property="twitter:site" content={settings.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || themes[theme].shareImage} />
      <title>{title}</title>
    </Head>
    <ThemeProvider theme={themes[theme]}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  </Fragment>
);
