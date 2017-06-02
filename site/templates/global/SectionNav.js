import styled from 'styled-components';
import Link from 'next/link';
import { fontSize } from '~/styles/fonts';
import { LINK, BLACK } from '~/styles/vars';

const Container = styled.ul`
  margin-left: 45px;
`;

const MenuItem = styled.li`
  ${fontSize(18)}
  display: inline;
  margin-right: 15px;

  ${({ isSelected }) => isSelected && `
    border-bottom: 3px solid ${LINK};
  `}

  a {
    color: ${BLACK};
    text-decoration: none;

    &:hover {
      color: ${LINK};
    }
  }
`;

export default ({ section }) => (
  <Container>
    <MenuItem isSelected={(section === 'api')}>
      <Link href="/api">
        <a>API</a>
      </Link>
    </MenuItem>
    <MenuItem isSelected={(section === 'guides')}>
      <Link href="/guides">
        <a>Guides</a>
      </Link>
    </MenuItem>
  </Container>
);
