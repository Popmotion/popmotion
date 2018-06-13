import Link from 'next/link';
import { Container, Links, NavItem } from './styled';
import { withTheme } from 'styled-components';

const Nav = ({ theme, isWhite, section }) => (
  <Container isWhite={isWhite}>
    <Link href={theme.url}>
      <a>
        <theme.Logo {...theme.headerLogoSize} />
      </a>
    </Link>
    <Links>
      {theme.headerNavLinks.map(({ href, isExternal, label, id }) => (
        <NavItem isSelected={section === id} key={id}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </NavItem>
      ))}
    </Links>
  </Container>
);

export default withTheme(Nav);
