import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { LINK, LIGHT_GREY, cols } from '~/styles/vars';

export const A = styled.a`
  color: ${LINK};
`;

export const H1 = styled.h1`
  ${fontSize(36)}
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
  margin-bottom: ${cols(2)};
`;

export const H2 = styled.h2`
  ${fontSize(24)}
  margin: ${cols(3)} 0 ${cols(1)};
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
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
  background: #f9f9f9;
  padding: 2px 5px;
`;

export const Ul = styled.ul`
  list-style-type: disc;
  padding-left: ${cols(2)};
`;

export const Li = styled.li`
  line-height: 1.5;
  padding-bottom: 10px;
`;
