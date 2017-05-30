import styled from 'styled-components';
import Link from 'next/link';
import { NavArea } from './grid';
import { fontSize } from '~/styles/fonts';
import { MAIN, BLACK } from '~/styles/vars';

const MenuItem = styled.li`
  ${fontSize(20)}
  display: inline;
  margin-right: 15px;

  ${({ isSelected }) => isSelected && `
    border-bottom: 3px solid ${MAIN};
  `}

  a {
    color: ${BLACK};
    text-decoration: none;
  }
`;

export default ({ section }) => (
  <NavArea>
    <ul>
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
    </ul>
  </NavArea>
);
