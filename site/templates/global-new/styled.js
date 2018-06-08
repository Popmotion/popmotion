import styled from 'styled-components';
import { color, font, media } from '~/styles/vars';

export const P = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.2px;

  em {
    font-weight: bold;
  }

  ${media.medium`
    font-size: 16px;
    line-height: 22px;
  `};
`;

export const ActionButton = styled.button`
  ${({ theme }) => `
    background-image: linear-gradient(-180deg, ${theme.color.base} 0%, ${
    theme.color.twist
  } 100%);
    box-shadow: 0 1px 0 0 ${
      theme.color.baseShadow
    }, 0 2px 3px 0 rgba(0,0,0,0.22);
    text-shadow: 0 -1px 0 ${theme.color.baseShadow};

    &:active {
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.22);
      transform: translateY(1px);
    }
  `};
  border-radius: 300px;
  color: ${color.white};
  font-size: 18px;
  ${font.body};
  ${font.bold};
  letter-spacing: -0.2px;
  cursor: pointer;
  padding: 10px 30px;
`;
