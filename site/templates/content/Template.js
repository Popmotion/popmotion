import styled from 'styled-components';
import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import ContentNav from './ContentNav';
import { Container, LeftMargin, RightMargin, ContentArea, HeaderArea } from '~/components/layout/grid';

const DatePublished = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
`;

export default ({ children, id, title, description, section, published }) => (
  <GlobalTemplate title={`${title} | Popmotion`} description={description}>
    <Container>
      <HeaderArea>
        <Header section={section} />
      </HeaderArea>
      {section !== 'blog' ? (
        <ContentNav section={section} id={id} />
      ) : null}
      <ContentArea>
        {(published) ? (
          <DatePublished>{published}</DatePublished>
        ) : null}
        {children}
      </ContentArea>
      <LeftMargin />
      <RightMargin />
      <Footer />
    </Container>
  </GlobalTemplate>
);
