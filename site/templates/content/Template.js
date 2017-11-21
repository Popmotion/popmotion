import { Content } from '~/templates/global/grid';
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


// import styled from 'styled-components';
import GlobalTemplate from '~/templates/global/Template';
// import Header from '~/templates/global/Header';
// import Footer from '~/templates/global/Footer';
// import ContentNav from './ContentNav';
// import { Container, LeftMargin, RightMargin, ContentArea, HeaderArea } from '~/components/layout/grid';



// export default ({ children, id, title, description, section, published }) => (
//   <GlobalTemplate title={`${title} | Popmotion`} description={description}>
//     <Container>
//       <HeaderArea>
//         <Header section={section} />
//       </HeaderArea>
//       {section !== 'blog' ? (
//         <ContentNav section={section} id={id} />
//       ) : null}
//       <ContentArea>
//         {(published) ? (
//           <DatePublished>{published}</DatePublished>
//         ) : null}
//         {children}
//       </ContentArea>
//       <LeftMargin />
//       <RightMargin />
//       <Footer />
//     </Container>
//   </GlobalTemplate>
// );
