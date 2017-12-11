import { Container, Blurb } from './styled';
import { CTA } from '../Masthead/styled';
import Link from 'next/link';

export default () => (
  <Container>
    <Blurb>
      Pick and choose any part of Popmotion by importing modules individually.
    </Blurb>
    <Blurb>
      Or take it all for 11.5kb<br />(That's 66% smaller than Greensock TweenMax!)
    </Blurb>
    <CTA>
      <Link href="/learn/get-started" prefetch><a>Get started</a></Link>
    </CTA>
  </Container>
);
