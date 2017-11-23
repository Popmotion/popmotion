import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import MenuPage from '~/templates/content/MenuPage';

export default () => (
  <GlobalTemplate title="API | Popmotion" description="Popmotion is a functional, reactive JavaScript motion library.">
    <Header section="api" />
    <MenuPage section="api" title="API" menu={menus.api} content={content.api} />
    <Footer />
  </GlobalTemplate>
);
