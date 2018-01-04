import { injectGlobal } from 'styled-components';
import NProgress from 'nprogress';
import Head from 'next/head';
import Router from 'next/router';
import reset from '~/styles/reset';
import nprogressStyles from '~/styles/nprogress';
import { BRAND } from '~/styles/vars';
import settings from '~/data/settings.json';
import * as popmotion from 'popmotion';

if (typeof window !== 'undefined') {
  console.log('Hey explorer! You can play around with Popmotion right from your console, by using window.popmotion.')
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

injectGlobal`
  ${reset}
  ${nprogressStyles}
`;

const TWITTER_CARD = 'https://popmotion.io/static/images/twitter-card.png';

export default ({ children, title, description=settings.siteDescription }) => (
  <div>
    <Head>
      <meta name="theme-color" content={BRAND} />
      <meta name="msapplication-navbutton-color" content={BRAND} />
      <meta name="apple-mobile-web-app-title" content={settings.siteName} />
      <meta property="og:site_name" content={settings.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={TWITTER_CARD} />
      <meta property="twitter:site" content={settings.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={TWITTER_CARD} />
      <title>{title}</title>
    </Head>
    {children}
  </div>
);
