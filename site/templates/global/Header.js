import Link from 'next/link';
import styled, { withTheme } from 'styled-components';
import SectionNav from './SectionNav';
import SocialLinks from '~/templates/global/SocialLinks';
import Logo from '~/components/icons/Logo';
import Icon from '~/components/icons/PopmotionIcon';
import settings from '~/data/settings.json';
import { cols, media } from '~/styles/vars';
import { Centered } from '~/templates/global/grid';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 25px ${cols(2)};
  margin-bottom: ${cols(4)};
  height: 91px;
  background: ${props =>
    props.isHomepage
      ? 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0))'
      : 'none'};

  ${media.large`
    margin-bottom: ${cols(2)};
    height: 87px;
  `} ${media.small`
    padding: ${cols(1)};
    height: auto;
    flex-direction: column;
    align-items: center;
  `};
`;

const NavArea = styled.nav`
  display: flex;
  align-items: center;
  ${props => !props.isHomepage && 'position: absolute;'} top: 50%;
  transform: translateY(-50%);
`;

const LogoArea = NavArea.extend`
  left: ${cols(2)};
  ${media.large`
    position: static;
    transform: none;
    margin-right: ${cols(2)};
  `} ${props => props.isHomepage && `display: none;`};

  ${media.small`
    display: block;
    position: static;
    margin: 0;
    margin-bottom: 5px;
  `};
`;

const SectionNavArea = Centered.extend`
  width: 100%;
  ${media.large`margin-left: ${cols(1)};`} ${props =>
    props.isHomepage &&
    `
    margin: 0;
  `};

  ${media.small`
    margin: 0;
    display: flex;
    justify-content: center;
  `};
`;

const SocialArea = NavArea.extend`
  right: ${cols(2)};

  ${media.medium`
    display: none;
  `};
`;

const Header = ({ section, isHomepage, theme }) => (
  <HeaderContainer isHomepage={isHomepage}>
    <LogoArea isHomepage={isHomepage}>
      {!isHomepage ? (
        <Link href={theme.data.rootUrl}>
          <a name="Homepage">
            <theme.Logo {...theme.headerLogoSize} />
          </a>
        </Link>
      ) : null}
    </LogoArea>
    <SectionNavArea isHomepage={isHomepage}>
      <SectionNav section={section} isHomepage={isHomepage} />
    </SectionNavArea>
    <SocialArea>
      <SocialLinks />
    </SocialArea>
  </HeaderContainer>
);

export default withTheme(Header);
