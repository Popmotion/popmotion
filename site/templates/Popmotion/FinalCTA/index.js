import { Container, ContentContainer } from './styled';
import { BlurbText } from '~/templates/Popmotion/USPs/styled';
import { CTA } from '../Masthead/styled';
import Link from 'next/link';

export default () => (
  <Container>
    <ContentContainer>
      <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
        Pick and choose any part of Popmotion by importing modules individually.
      </BlurbText>
      <BlurbText style={{ marginBottom: 40, maxWidth: '600px' }}>
        Or take it all for 11kb!
      </BlurbText>
      <CTA brandFill>
        <Link href="/learn/get-started" prefetch>
          <a>Get started</a>
        </Link>
      </CTA>
    </ContentContainer>
  </Container>
);
