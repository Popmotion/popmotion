import styled from 'styled-components';
import Link from 'next/link';
import { fontSize } from '~/styles/fonts';
import { LINK, BLACK, cols, media } from '~/styles/vars';
import sectionNames from '~/data/section-names.json';

const Container = styled.ul`
  margin-left: ${cols(3)};

  ${media.medium`margin-left: ${cols(1)};`}
`;

const MenuItem = styled.li`
  ${fontSize(18)}
  display: inline;
  margin-right: ${cols(1)};

  ${({ isSelected }) => isSelected && `
    border-bottom: 3px solid ${LINK};
  `}

  ${media.medium`
    ${fontSize(16)}
  `}

  a {
    color: ${BLACK};
    text-decoration: none;

    &:hover {
      color: ${LINK};
    }
  }
`;

const routes = {
  api: '/api',
  guides: '/guides/get-started',
  blog: '/blog'
};

export default ({ section }) => (
  <Container>
    {Object.keys(sectionNames).map((name) => (
      <MenuItem isSelected={(section === name)}>
        <Link href={routes[name]}>
          <a>{sectionNames[name]}</a>
        </Link>
      </MenuItem>
    ))}
  </Container>
);
