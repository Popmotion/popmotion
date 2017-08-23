import styled from 'styled-components';
import Link from 'next/link';
import { fontSize } from '~/styles/fonts';
import { LINK, BLACK, cols, media } from '~/styles/vars';
import sectionNames from '~/data/section-names.json';
import routes from '~/data/route-paths.json';

const Container = styled.ul`
  margin-left: ${cols(3)};

  ${media.medium`margin-left: ${cols(1)};`}
`;

const MenuItem = styled.li`
  ${fontSize(18)}
  display: inline;
  margin-right: ${cols(2)};

  ${({ isSelected }) => isSelected && `
    border-bottom: 3px solid ${LINK};
  `}

  ${media.medium`
    ${fontSize(16)}
    margin-right: ${cols(1)};
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
    {Object.keys(sectionNames).map((name) => (
      <MenuItem key={name} isSelected={(section === name)}>
        <Link href={routes[name]}>
          <a name={sectionNames[name]}>{sectionNames[name]}</a>
        </Link>
      </MenuItem>
    ))}
  </Container>
);
