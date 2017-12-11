import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import MenuPage from '~/templates/content/MenuPage';

const menu = menus.blog.reverse();

export default () => (
  <GlobalTemplate title="Blog | Popmotion" description="Popmotion is a functional, reactive JavaScript motion library.">
    <Header section="blog" />
    <MenuPage section="blog" title="Blog" menu={menu} content={content.blog} />
    <Footer />
  </GlobalTemplate>
);
