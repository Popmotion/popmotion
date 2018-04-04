import { Fragment } from 'react';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import MenuPage from '~/templates/content/MenuPage';

export default () => (
  <GlobalTemplate title="API | Stylefire" theme="stylefire">
    <Header section="api" />
    <MenuPage section="api" title="API" />
    <Footer />
  </GlobalTemplate>
);
