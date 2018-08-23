import React from 'react';
import { Container, Content, P, Support } from './styled';
import Link from 'next/link';

export default ({ children }) => (
  <Container>
    <Content>
      <P>
        Hey! Did you find this article useful? Popmotion relies on contributions
        from the community to operate.
      </P>
      <Support>
        <Link href="/support">Support us</Link>
      </Support>
    </Content>
  </Container>
);
