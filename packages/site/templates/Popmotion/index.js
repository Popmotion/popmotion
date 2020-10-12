import Homepage from '~/templates/homepage';
import Header from './Header';
import Footer from '~/templates/global-new/Footer';

export default () => (
  <Homepage
    title="Popmotion Pure | A functional, flexible JavaScript animation library"
    theme="pure"
    Header={Header}
  >
    <Footer />
  </Homepage>
);
