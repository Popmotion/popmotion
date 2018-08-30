import styled from 'styled-components';
import { color, font, media, cols } from '~/styles/vars';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.large`
    margin: 0 20px;
  `}

  ${media.medium`
    flex-wrap: wrap;

    > a,
    > ul {
      flex: 0 0 100%;
      display: flex;
      justify-content: center;
    }
  `} ${({ isWhite }) =>
  isWhite &&
  `
    path {
      fill: ${color.white};
    }

    a,
    a:hover {
      color: ${color.white};
      font-weight: bold;
    }
  `};

  ${media.small`margin: 0;`}
`;

export const Links = styled.ul`
  display: flex;

  ${media.medium`margin-top: 20px`};

  li {
    margin-left: 30px;

    ${media.medium`margin-left: 20px`};

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const NavItem = styled.li`
  ${({ isSelected, theme }) =>
    isSelected &&
    `
    position: relative;

    a {
      color: ${theme.color.base};
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 3px;
      background-color: ${theme.color.base};
      left: 0;
      right: 0;
      bottom: -5px;
    }
  `};
`;
