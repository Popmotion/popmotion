import styled from 'styled-components';
import { color } from '~/styles/vars';
import Nav from './Nav';
import GlobalTemplate from '~/templates/global/Template';

const Container = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.base};
    background-image: radial-gradient(120% 600px at 50% 200px, ${
      theme.color.base
    }, ${theme.color.twist} 120%);
    min-height: 100vh;
  `};
  padding: 10px;
`;

const Content = styled.div`
  background: ${color.white};
  padding: 75px 20px;
`;

const HeaderContainer = styled.header`
  padding: 20px;
`;

export default ({ title, description, theme, Header, children }) => (
  <GlobalTemplate title={title} description={description} theme={theme}>
    <Container>
      <HeaderContainer>
        <Nav isWhite />
        <Header />
      </HeaderContainer>
      <Content>{children}</Content>
    </Container>
  </GlobalTemplate>
);
