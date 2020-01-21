import Homepage from '~/templates/homepage';
import Header from './Header';
import USPs from './USPs';
import Footer from '~/templates/global-new/Footer';
import ExampleSection from '~/templates/Popmotion/USPs/ExampleSection';

import styled from 'styled-components';

const Notice = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 20px auto 50px;
  background: #f4f4f4;
  border-left: 4px solid #ff1c68;
  padding: 20px;

  h2 {
    font-weight: 800;
    margin-bottom: 20px;
    font-size: 24px;
  }
`;

export default () => (
  <Homepage
    title="Pose | A truly simple animation library for React, React Native, and Vue"
    theme="pose"
    Header={Header}
  >
    <Notice>
      <h2>⚠️ Notice</h2>
      <p>
        React Pose for web has been <strong>deprecated</strong> by{' '}
        <a href="https://framer.com/motion">Framer Motion</a>.
      </p>
    </Notice>
    <USPs />
    <Footer />
  </Homepage>
);
