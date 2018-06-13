import styled from 'styled-components';
import { color, font, media } from '~/styles/vars';

export const Container = styled.div`
  ${({ theme }) => `
    background-color: ${theme.color.base};
    background-image: radial-gradient(120% 600px at 50% 200px, ${
      theme.color.base
    }, ${theme.color.twist} 120%);
    min-height: 100vh;
  `};
  padding: 10px;
`;

export const ContentContainer = styled.div`
  background: ${color.white};
  padding: ${({ noHeader }) => (noHeader ? '75px' : '30px')} 30px;

  ${media.large`padding: ${({ noHeader }) =>
    noHeader ? '30px' : '30px'} 20px;`};
  ${media.small`padding: ${({ noHeader }) =>
    noHeader ? '10px' : '30px'} 10px;`};

  a {
    color: ${({ theme }) => theme.color.action};

    &:hover {
      color: ${({ theme }) => theme.color.actionHighlight};
    }
  }
`;

export const Section = styled.section`
  margin: 75px auto;
  max-width: 650px;
`;

export const PageHeader = styled.h1`
  font-size: 36px;
  color: ${color.black};
  ${font.bold};
  letter-spacing: -1.1px;
  text-align: center;
  margin-bottom: 40px;

  ${media.medium`
    font-size: 24px;
    letter-spacing: -0.5px;
  `};
`;

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
