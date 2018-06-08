import Link from 'next/link';
import { color, font, media } from '~/styles/vars';
import styled, { withTheme } from 'styled-components';

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
`;

const Links = styled.ul`
  display: flex;

  ${media.medium`margin-top: 20px`};

  li {
    margin-left: 30px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

const Nav = ({ theme, isWhite }) => (
  <Container isWhite={isWhite}>
    <Link href={theme.url}>
      <a>
        <theme.Logo {...theme.headerLogoSize} />
      </a>
    </Link>
    <Links>
      {theme.headerNavLinks.map(({ href, isExternal, label }) => (
        <li>
          {isExternal ? (
            <a href={href}>{label}</a>
          ) : (
            <Link href={href}>{label}</Link>
          )}
        </li>
      ))}
    </Links>
  </Container>
);

export default withTheme(Nav);
