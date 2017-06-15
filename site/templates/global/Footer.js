import styled from 'styled-components';
import { PINK_BURN, BLACK, cols } from '~/styles/vars';

const YEAR = new Date().getFullYear();

const Container = styled.div`
  border-top: 1px solid ${PINK_BURN};
  padding: ${cols(1)};
`;

const Spacer = styled.p`
  color: ${BLACK};
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
