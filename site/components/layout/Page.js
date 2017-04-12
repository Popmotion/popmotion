import 'isomorphic-fetch';
import React from 'react';
import regeneratorRuntime from 'regenerator-runtime/runtime';
import Header from './Header';
import Footer from './Footer';

export default ({children}) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);
