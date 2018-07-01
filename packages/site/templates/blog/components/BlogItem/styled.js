import styled from 'styled-components';
import { font, media } from '~/styles/vars';
import { P } from '~/templates/global-new/styled';

export const Container = styled.li`
  margin-bottom: 40px;

  a:visited {
    opacity: 0.75;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  ${font.bold};
  letter-spacing: -0.1px;
  ${({ theme }) => `color: ${theme.color.action}`};
  display: inline;
  margin-bottom: 10px;
  margin-right: 6px;

  ${media.medium`
    font-size: 20px;
  `};
`;

export const Date = styled.span`
  opacity: 0.6;
  ${media.medium`
    display: block;
    margin-top: 4px;
    font-size: 14px;
  `};
`;

export const Description = P.extend`
  margin-top: 5px;
`;
