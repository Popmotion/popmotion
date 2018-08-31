import Homepage from '~/templates/homepage';
import Header from './Header';
import USPs from './USPs';
import Footer from '~/templates/global-new/Footer';

export default () => (
  <Homepage
    title="Pose | A declarative animation library for React and React Native"
    theme="pose"
    Header={Header}
  >
    <USPs />
    <Footer />
  </Homepage>
);
