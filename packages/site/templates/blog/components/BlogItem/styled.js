import styled from 'styled-components';
import { font, media, color } from '~/styles/vars';
import { P } from '~/templates/global-new/styled';

export const Container = styled.li`
  margin-bottom: 40px;

  ${({ isSection }) =>
    isSection &&
    `
    border-bottom: 1px solid ${color.lightGrey};
  `} a:visited {
    opacity: 0.75;
  }

  a h2,
  a h3 {
    ${({ theme }) => `color: ${theme.color.action}`};
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  ${font.bold};
  letter-spacing: -0.1px;
  display: inline;
  margin-bottom: 10px;
  margin-right: 6px;
  ${({ theme }) => `color: ${color.black}`};

  ${media.medium`
    font-size: 20px;
  `};

  a {
    ${({ theme }) => `color: ${theme.color.action}`};
    ${font.bold};
  }
`;

export const Subtitle = styled(Title.withComponent('h3'))`
  font-size: 18px;

  ${media.medium`
    font-size: 14px;
  `};

  a {
    ${font.bold};
  }
`;

export const Date = styled.span`
  opacity: 0.6;
  ${media.medium`
    display: block;
    margin-top: 4px;
    font-size: 14px;
  `};
`;

export const Description = styled(P)`
  margin-top: 5px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 40px;
`;
