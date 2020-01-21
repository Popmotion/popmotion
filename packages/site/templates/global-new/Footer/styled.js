import styled from 'styled-components';
import Link from 'next/link';
import { color, font, media } from '~/styles/vars';
import { P } from '~/templates/global-new/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 75px;
  width: 100%;
  border-top: 1px solid ${color.lightGrey};

  ${media.small`
    flex-wrap: wrap;
  `};
`;

export const Section = styled.nav`
  width: 200px;
  flex: 200px 0 1;

  &:last-child {
    text-align: right;
    margin-left: auto;
  }

  ${media.small`
    flex: 100% 0 0;
    width: 100%;
    margin-bottom: 30px;

    &:last-child {
      text-align: left;
    }
  `};
`;

export const Header = styled.h2`
  ${font.bold};
  font-size: 18px;
  margin-bottom: 10px;
`;

export const NavItem = styled.li`
  margin-bottom: 7px;
`;

export const MadeIn = styled(P)`
  margin-top: 7px;
`;

export const Copyright = styled(P)`
  font-size: 14px;
  margin-bottom: 10px;
`;
