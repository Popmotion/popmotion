import Homepage from '~/templates/homepage';
import Header from './Header';
import USPs from './USPs';
import Footer from '~/templates/global-new/Footer';

export default () => (
  <Homepage
    title="Pose | A truly simple animation library for React, React Native, and Vue"
    theme="pose"
    Header={Header}
  >
    <USPs />
    <Footer />
  </Homepage>
);
