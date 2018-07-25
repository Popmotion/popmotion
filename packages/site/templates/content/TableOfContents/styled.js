import styled from 'styled-components';
import { Centered } from '~/templates/global/grid';
import { color, cols, font } from '~/styles/vars';

export const Container = Centered.withComponent('nav').extend`
  margin-top: 40px;
  margin-bottom: 20px;
  padding: 20px;
  background: ${color.superLightGrey};
`;

export const Header = styled.h2`
  ${({ theme }) => `
    border-bottom: 1px solid ${theme.color.base};
  `};

  padding: 0 0 10px;
  margin-bottom: 20px;
  ${font.bold};
`;

export const List = styled.ul``;

export const Item = styled.li`
  li {
    padding-left: ${cols(1)};
  }
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Link = styled.a``;
