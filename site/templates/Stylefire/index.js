import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import Masthead from '~/templates/Popmotion/Masthead';
import settings from '~/data/settings.json';

export default () => (
  <GlobalTemplate
    title={`Stylefire - A style setter for HTML and SVG, optimised for animation`}
    theme="stylefire"
  >
    <Masthead>
      <Header isHomepage={true} />
    </Masthead>
    <Footer />
  </GlobalTemplate>
);
