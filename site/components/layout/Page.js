import 'isomorphic-fetch';
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
