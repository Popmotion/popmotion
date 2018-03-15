import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import Masthead from './Masthead';
import FinalCTA from './FinalCTA';
import USPs from './USPs';
import settings from '~/data/settings.json';

export default () => (
  <GlobalTemplate title={`${settings.siteName} - A functional JavaScript motion library`} theme="popmotion">
    <Header isHomepage={true} />
    <Masthead />
    <USPs />
    <FinalCTA />
    <Footer />
  </GlobalTemplate>
);
