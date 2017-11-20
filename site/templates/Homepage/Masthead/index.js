import { Container, Title, Logo, LogoText, Blurb, CTA } from './styled';
import Link from 'next/link';

export default () => (
  <Container>
    <Title>
      <LogoText>Popmotion</LogoText>
      <Logo id="homepage-logo" />
    </Title>
    <Blurb>
      A functional JavaScript motion library
    </Blurb>
    <CTA>
      <Link href="/learn/get-started/" prefetch>Quick start</Link>
    </CTA>
  </Container>
);
