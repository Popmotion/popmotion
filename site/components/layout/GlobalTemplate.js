import Head from 'next/head';
import { injectGlobal } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import reset from '~/styles/reset';
import settings from '~/data/settings.json';

injectGlobal`${reset}`;

export default ({ children, title, section }) => {
  const pageTitle = `${title ? `${title} | ` : ''}${settings.siteName}`;

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header section={section} />
      {children}
      <Footer />
    </div>
  );
};
