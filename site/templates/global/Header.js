import Link from 'next/link';
import styled from 'styled-components';
import SectionNav from './SectionNav';
import Logo from '~/components/icons/Logo';
import Icon from '~/components/icons/PopmotionIcon';
import GitHub from '~/components/icons/GitHub';
import Twitter from '~/components/icons/Twitter';
import settings from '~/data/settings.json';
import { cols, media } from '~/styles/vars';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px ${cols(2)};
  margin-bottom: ${cols(4)};
`;

const NavArea = styled.nav`
  display: flex;
  align-items: center;
`;

const IconLink = styled.a`
  margin-left: ${cols(1)};
`;

const TwitterLink = IconLink.extend`
  margin-left: none;
  transform: translateY(2px);
`;

const PopmotionLogo = styled(Logo)`
  ${props => props.isHomepage && `display: none;`}
  width: 159px;
  height: 36px;

  ${media.medium`
    display: none;
  `}
`;

const PopmotionIcon = styled(Icon)`
  ${props => !props.isHomepage && `display: none;`}

  ${media.medium`
    display: block;
    width: 35px;
    height: 32px;
  `}
`;

const GitHubIcon = styled(GitHub)``;
const TwitterIcon = styled(Twitter)``;

export default ({ section, isHomepage }) => (
  <HeaderContainer>
    <NavArea>
      <Link href="/" name="Homepage">
        <a>
          <PopmotionLogo isHomepage={isHomepage} />
          <PopmotionIcon isHomepage={isHomepage} />
        </a>
      </Link>
      <SectionNav section={section} />
    </NavArea>
    <NavArea>
      <TwitterLink href={settings.twitterUrl} name="Popmotion Twitter">
        <TwitterIcon />
      </TwitterLink>
      <IconLink href={settings.githubUrl} name="Popmotion GitHub">
        <GitHubIcon />
      </IconLink>
    </NavArea>
  </HeaderContainer>
);
