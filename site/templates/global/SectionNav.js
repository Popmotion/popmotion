import styled, { withTheme } from 'styled-components';
import SiteLink from '~/components/layout/SiteLink';
import { fontSize, fontBold } from '~/styles/fonts';
import { ACTION, ENTITY, BLACK, cols, media, SKEW } from '~/styles/vars';
import sectionNames from '~/data/section-names.json';
import routes from '~/data/route-paths.json';

const MenuItem = styled.li`
  ${fontSize(18)}
  display: inline;
  padding-bottom: 4px;
  margin-right: ${cols(2)};
  position: relative;

  ${({ isSelected }) => isSelected && `
    &:after {
      content: '';
      display: block;
      background: ${ENTITY};
      position: absolute;
      bottom: -3px;
      right: 0;
      left: 0;
      height: 4px;
      transform: skewX(${SKEW});
    }
  `}

  ${media.medium`
    ${fontSize(16)}
    margin-right: ${cols(1)};
  `}

  a {
    color: ${BLACK};
    text-decoration: none;
    ${fontBold}

    &:hover {
      color: ${ACTION};
    }
  }
`;

const SectionNav = ({ section, theme }) => (
  <ul>
    {theme.sections.map((name) => (
      <MenuItem key={name} isSelected={(section === name)}>
        <SiteLink href={routes[name]} name={sectionNames[name]}>
          {sectionNames[name]}
        </SiteLink>
      </MenuItem>
    ))}
  </ul>
);

export default withTheme(SectionNav);
