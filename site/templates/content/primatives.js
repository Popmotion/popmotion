import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { LINK } from '~/styles/vars';

export const A = styled.a`
  color: ${LINK};
`;

export const H1 = styled.h1`
  ${fontSize(42)}
  margin-bottom: 1.2rem;
`;

export const H2 = styled.h2`
  ${fontSize(28)}
  margin-top: 2.5rem;
  margin-bottom: 1.1rem;
`;

export const H3 = styled.h3`
  ${fontSize(20)}
  margin-top: 2.2rem;
  margin-bottom: 1.1rem;
`;

export const P = styled.p`
  ${fontSize(18)}
  line-height: 1.5;
  margin-bottom: 1.1rem;
`;

export const Code = styled.code`
`;

export const Ul = styled.ul``;

export const Li = styled.li``;
