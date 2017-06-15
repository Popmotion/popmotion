import styled from 'styled-components';
import { PINK_BURN, WHITE, cols } from '~/styles/vars';

const YEAR = new Date().getFullYear();

const Container = styled.div`
  background: ${PINK_BURN};
  padding: ${cols(1)};
`;

const Spacer = styled.p`
  color: ${WHITE};
  margin: 0 auto;
  max-width: ${cols(58)};
`;

export default () => (
  <Container>
    <Spacer>
      {`© 2015-${YEAR} Matt Perry`}
    </Spacer>
  </Container>
);
