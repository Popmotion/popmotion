import styled from 'styled-components';
import { color, media } from '~/styles/vars';
import Nav from '~/templates/global-new/Nav';
import GlobalTemplate from '~/templates/global/Template';
import { Container, ContentContainer } from '~/templates/global-new/styled';

const HeaderContainer = styled.header`
  padding: 30px;

  ${media.large`padding: 20px;`};
  ${media.small`padding: 10px;`};
`;

export default ({ title, description, theme, Header, children }) => (
  <GlobalTemplate title={title} description={description} theme={theme}>
    <Container>
      <HeaderContainer>
        <Nav isWhite />
        <Header />
      </HeaderContainer>
      <ContentContainer noHeader>{children}</ContentContainer>
    </Container>
  </GlobalTemplate>
);
