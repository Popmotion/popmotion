import { Content } from '~/templates/global/grid';
import GlobalTemplate from '~/templates/global/Template';
import { DatePublished } from '~/templates/global/styled';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';

export default ({ children, title, description, section, published}) => (
  <GlobalTemplate title={`${title} | Popmotion`} description={description}>
    <Header section={section} />
    {/* content nav */}
    <Content>
      {published && <DatePublished>{published}</DatePublished>}
      {children}
    </Content>
    <Footer />
  </GlobalTemplate>
);

//       {section !== 'blog' ? (
//         <ContentNav section={section} id={id} />
//       ) : null}