import styled from 'styled-components';
import Link from 'next/link';
import { color, font } from '~/styles/vars';
import { P } from '~/templates/global-new/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 75px;
  width: 100%;
  border-top: 1px solid ${color.lightGrey};
`;

export const Section = styled.nav`
  width: 200px;

  &:last-child {
    text-align: right;
    margin-left: auto;
  }
`;

export const Header = styled.h2`
  ${font.bold};
  font-size: 18px;
  margin-bottom: 10px;
`;

export const NavItem = styled.li`
  margin-bottom: 7px;
`;

export const MadeIn = P.extend`
  margin-top: 7px;
`;

export const Copyright = P.extend`
  font-size: 14px;
  margin-bottom: 10px;
`;
