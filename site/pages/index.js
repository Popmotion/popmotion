import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import HomepageHeader from '~/templates/homepage/Header';
import USPs from '~/templates/homepage/USPs';
import settings from '~/data/settings.json';

export default () => {
  return (
    <GlobalTemplate title={`${settings.siteName} - A functional JavaScript motion library`}>
      <Header />
      <HomepageHeader />
      <USPs />
      <Footer />
    </GlobalTemplate>
  );
};
