import styled from 'styled-components';
import Link from 'next/link';
import Logo from '~/components/layout/Logo';
import { verticalGradient, MAIN, MAIN_FADE, WHITE } from '~/styles/vars';

const HeaderContainer = styled.div`
  background: ${verticalGradient(MAIN, MAIN_FADE)};
  padding: 50px;
  align-items: center;
`;

const HomepageLogo = styled(Logo)`
  margin: 0 auto;
`;

const MainLine = styled.h1``;

const SecondaryLine = styled.p``;

const GetStartedLink = styled.span`
  
`;

export default () => (
  <HeaderContainer>
    <HomepageLogo from={WHITE} to={WHITE} />
    <MainLine>The JavaScript motion engine.</MainLine>
    <SecondaryLine>Mix tweens, physics, and user input actions to create delightful interactions on the web.</SecondaryLine>
    <GetStartedLink>
      <Link prefetch href="/guides/get-started">
        <a>Get Started</a>
      </Link>
    </GetStartedLink>
  </HeaderContainer>
);