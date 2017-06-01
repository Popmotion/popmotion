import GlobalTemplate from '~/templates/global/Template.js';
import Header from '~/templates/global/Header.js';
import ContentNav from './ContentNav';
import { Container, LeftMargin, RightMargin, ContentArea, HeaderArea } from '~/components/layout/grid';

export default ({ children, id, title, description, section }) => (
  <GlobalTemplate title={title} description={description}>
    <Container>
      <HeaderArea>
        <Header section={section} />
      </HeaderArea>
      <ContentNav section={section} id={id} />
      <ContentArea>
        {children}
      </ContentArea>
      <LeftMargin />
      <RightMargin />
    </Container>
  </GlobalTemplate>
);
