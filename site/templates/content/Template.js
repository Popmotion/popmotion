import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import ContentNav from './ContentNav';
import { Container, LeftMargin, RightMargin, ContentArea, HeaderArea } from '~/components/layout/grid';
import 'prismjs';

export default ({ children, id, title, description, section }) => (
  <GlobalTemplate title={`${title} | Popmotion`} description={description}>
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
