import styled from 'styled-components';
import Link from 'next/link';
import Logo from '~/components/layout/Logo';
import { fontSize } from '~/styles/fonts';
import { verticalGradient, MAIN, MAIN_FADE, WHITE } from '~/styles/vars';

const HeaderContainer = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  padding: 75px;
  text-align: center;
`;

const HomepageLogo = styled(Logo)`
  margin: 0 auto;
  width: 212px;
  height: 48px;
  margin-bottom: 40px;
`;

const MainLine = styled.h1`
  ${fontSize(28)}
  color: ${WHITE};
  margin-bottom: 12px;
`;

const SecondaryLine = styled.p`
  ${fontSize(18)}
  color: ${WHITE};
  margin-bottom: 40px;
  line-height: 1.4;
`;

const GetStartedLink = styled.span`
  a {
    display: block;
    background: rgba(0, 0, 0, 0.25);
    border: 2px solid ${WHITE};
    border-radius: 500px;
    width: 190px;
    ${fontSize(24)}
    padding: 15px 20px;
    margin: 0 auto;
    text-decoration: none;
    color: ${WHITE};
  }
`;

export default () => (
  <HeaderContainer>
    <HomepageLogo from={WHITE} to={WHITE} />
    <MainLine>The JavaScript motion engine</MainLine>
    <SecondaryLine>Create delightful interactions with user input,<br />animations and physics</SecondaryLine>
    <GetStartedLink>
      <Link prefetch href="/guides/get-started">
        <a>Get Started</a>
      </Link>
    </GetStartedLink>
  </HeaderContainer>
);
