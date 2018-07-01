import styled, { withTheme } from 'styled-components';
import SiteLink from '~/components/layout/SiteLink';
import { fontSize, fontBold } from '~/styles/fonts';
import { ACTION, ENTITY, WHITE, BLACK, cols, media, SKEW } from '~/styles/vars';
import sectionNames from '~/data/section-names.json';
import routes from '~/data/route-paths.json';

const MenuItem = styled.li`
  ${fontSize(18)} display: inline;
  padding-bottom: 4px;
  margin-right: ${cols(2)};
  position: relative;

  &:last-child {
    margin-right: 0;
  }

  ${({ isSelected }) =>
    isSelected &&
    `
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
  `} ${media.large`
    ${fontSize(16)}
    margin-right: ${cols(1)};
  `} a {
    color: ${props => (props.isHomepage ? WHITE : BLACK)};
    text-decoration: none;
    ${fontBold};
  }
`;

const SectionNav = ({ section, theme, isHomepage }) => (
  <ul>
    {theme.sections.map(name => (
      <MenuItem
        key={name}
        isSelected={section === name}
        isHomepage={isHomepage}
      >
        <SiteLink href={routes[name]} name={sectionNames[name]}>
          {sectionNames[name]}
        </SiteLink>
      </MenuItem>
    ))}
  </ul>
);

export default withTheme(SectionNav);
