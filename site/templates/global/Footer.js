import styled from 'styled-components';
import Logo from '~/components/icons/Logo';
import { fontSize } from '~/styles/fonts';
import { BRAND, cols } from '~/styles/vars';

const YEAR = new Date().getFullYear();

const PopmotionLogo = styled(Logo)`
  width: 159px;
  height: 36px;
  margin-bottom: 5px;
`;

const Container = styled.div`
  border-top: 1px solid ${BRAND};
  padding: ${cols(2)} ${cols(2)} ${cols(6)};
  ${fontSize(14)}
`;

export default () => (
  <Container>
    <PopmotionLogo id="footer-logo" />
    <p>{`© Copyright 2015-${YEAR} Matt Perry`}</p>
  </Container>
);
