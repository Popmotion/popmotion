import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { LINK, LIGHT_GREY, WHITE, cols, media, verticalGradient, PURPLE_BURN, PURPLE } from '~/styles/vars';

export const Strong = styled.strong`
  font-weight: 600;
`;

export const A = styled.a`
  color: ${LINK};
  text-decoration: none;
`;

export const H1 = styled.h1`
  ${fontSize(36)}
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
  margin-bottom: ${cols(2)};
  ${media.medium`${fontSize(24)}`}
`;

export const H2 = styled.h2`
  ${fontSize(24)}
  margin: ${cols(3)} 0 ${cols(1)};
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
  ${media.medium`${fontSize(20)}`}
`;

export const H3 = styled.h3`
  ${fontSize(20)}
  margin-top: 2.2rem;
  margin-bottom: 1.1rem;
  ${media.medium`${fontSize(18)}`}
`;

export const P = styled.p`
  ${fontSize(18)}
  line-height: 1.5;
  margin-bottom: 1.1rem;
  max-width: ${cols(43)};
  ${media.medium`${fontSize(14)}`}
  word-break: break-word;
`;

export const Code = styled.code`
  background: #f9f9f9;
  padding: 2px 5px;
`;

export const Ul = styled.ul`
  list-style-type: disc;
  padding-left: ${cols(2)};
  max-width: ${cols(43)};
  margin-bottom: 1.1rem;
`;

export const Li = styled.li`
  line-height: 1.7;
  margin-bottom: 0.5rem;
  ${fontSize(18)}
  ${media.medium`${fontSize(14)}`}
`;

export const ActionButton = styled.button`
  background: ${verticalGradient(PURPLE_BURN, PURPLE)};
  border: 2px solid ${WHITE};
  border-radius: 500px;
  cursor: pointer;
  ${fontSize(24)}
  padding: ${cols(1)} ${cols(2)};
  margin: 0 auto;
  text-decoration: none;
  color: ${WHITE};
`;
