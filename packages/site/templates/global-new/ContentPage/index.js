import { Fragment } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container, ContentContainer } from '../styled';

export default ({ children, section }) => (
  <Container>
    <ContentContainer>
      <Header section={section} />
      {children}
      <Footer />
    </ContentContainer>
  </Container>
);
