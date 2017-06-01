import Link from 'next/link';
import styled from 'styled-components';
import SectionNav from './SectionNav';
import PopmotionIcon from '~/components/icons/PopmotionIcon';
import GitHubIcon from '~/components/icons/GitHub';
import TwitterIcon from '~/components/icons/Twitter';
import settings from '~/data/settings.json';
import { cols } from '~/styles/vars';

const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${cols(1)};
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

export default ({ section }) => (
  <HeaderContainer>
    <NavArea>
      <Link href="/">
        <a>
          <PopmotionIcon />
        </a>
      </Link>
      <SectionNav section={section} />
    </NavArea>
    <NavArea>
      <TwitterLink href={settings.twitterUrl}>
        <TwitterIcon />
      </TwitterLink>
      <IconLink href={settings.githubUrl}>
        <GitHubIcon />
      </IconLink>
    </NavArea>
  </HeaderContainer>
);
