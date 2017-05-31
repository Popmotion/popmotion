import GlobalTemplate from '~/components/templates/global/Template.js';
import LogoContainer from './LogoContainer';
import Nav from './Nav';
import ContentNav from './ContentNav';
import { Container, LeftMargin, RightMargin, ContentArea } from '~/components/layout/grid';

export default ({ children, id, title, description, section }) => (
  <GlobalTemplate title={title} description={description}>
    <Container>
      <LogoContainer />
      <Nav section={section} />
      <ContentNav section={section} id={id} />
      <ContentArea>
        {children}
      </ContentArea>
      <LeftMargin />
      <RightMargin />
    </Container>
  </GlobalTemplate>
);
