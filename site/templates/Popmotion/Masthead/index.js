import { withTheme } from 'styled-components';
import SiteLink from '~/components/layout/SiteLink';
import {
  Container,
  MastheadContainer,
  Title,
  Logo,
  LogoContainer,
  LogoText,
  Blurb,
  CTA
} from './styled';
import Link from 'next/link';

const Masthead = ({ children, theme, getStarted = true }) => (
  <Container>
    {children}
    <MastheadContainer>
      <Title>
        <LogoText>{theme.name}</LogoText>
        <LogoContainer {...theme.homepageLogoSize}>
          <theme.Logo id="homepage-logo" />
        </LogoContainer>
      </Title>
      <Blurb>{theme.tagline}</Blurb>
      {getStarted ? (
        <CTA>
          <SiteLink href="/learn/get-started" prefetch>
            Quick start
          </SiteLink>
        </CTA>
      ) : null}
    </MastheadContainer>
  </Container>
);

export default withTheme(Masthead);
