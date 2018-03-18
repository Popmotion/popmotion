import Link from 'next/link';
import styled, { withTheme } from 'styled-components';
import SectionNav from './SectionNav';
import Logo from '~/components/icons/Logo';
import Icon from '~/components/icons/PopmotionIcon';
import GitHub from '~/components/icons/GitHub';
import Twitter from '~/components/icons/Twitter';
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
  background: ${props => props.isHomepage ? 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0))' : 'none'};
  
  ${media.medium`
    margin-bottom: ${cols(2)};
    height: 87px;
  `}

  ${media.small`
    padding: ${cols(1)};
    height: 62px;
  `}
`;

const NavArea = styled.nav`
  display: flex;
  align-items: center;
  ${props => !props.isHomepage && 'position: absolute;'}
  top: 50%;
  transform: translateY(-50%);
`;

const LogoArea = NavArea.extend`
  left: ${cols(2)};
  ${media.large`position: static;`}
  ${props => props.isHomepage && `display: none;`}
`;

const SectionNavArea = Centered.extend`
  width: 100%;
  ${media.medium`margin-left: ${cols(1)};`}

  ${props => props.isHomepage && `
    margin: 0;
  `}
`;

const SocialArea = NavArea.extend`
  right: ${cols(2)};
  
  ${media.small`
    right: ${cols(1)};
  `}
`;

const IconLink = styled.a`
  margin-left: ${cols(1)};
`;

const TwitterLink = IconLink.extend`
  margin-left: none;
  transform: translateY(2px);
`;

const GitHubIcon = styled(GitHub)``;
const TwitterIcon = styled(Twitter)``;

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
      <TwitterLink href={settings.twitterUrl} name="Popmotion Twitter">
        <TwitterIcon />
      </TwitterLink>
      <IconLink href={settings.githubUrl} name="Popmotion GitHub">
        <GitHubIcon />
      </IconLink>
    </SocialArea>
  </HeaderContainer>
);

export default withTheme(Header);
