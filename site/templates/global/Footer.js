import styled from 'styled-components';
import Logo from '~/components/icons/Logo';
import { fontSize, fontBold } from '~/styles/fonts';
import { cols, color, media } from '~/styles/vars';
import themes from '~/styles/themes';
import { CenteredContent } from '../Popmotion/USPs/styled';
import SocialLinks from '~/templates/global/SocialLinks';

const YEAR = new Date().getFullYear();

const Container = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  background: linear-gradient(#262e34, #101416);
  margin-top: ${cols(4)};

  p,
  h2 {
    ${fontBold};
    color: ${color.white};
    text-align: center;
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    background: #3f4d56;
    flex: 1;
    height: 1px;
  }

  ${media.small`
    display: block;
    span {
      display: none;
    }
  `};
`;

const HeaderText = styled.h2`
  font-size: 24px;
  flex-shrink: 0;
  padding-left: ${cols(1)};
  padding-right: ${cols(1)};
`;

const LibraryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: ${cols(4)};
  margin-bottom: ${cols(2)};
`;

const LibraryContainer = styled.li`
  flex: 50% 0 0;
  overflow: hidden;
  margin-bottom: ${cols(4)};

  ${media.medium`
    flex: 100% 0 0;
  `} p {
    max-width: 50%;
    text-align: center;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`;

const Copyright = styled.p`
  font-size: 14px;
`;

const MadeInfo = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
`;

const SocialLinksContainer = styled.div`
  margin: ${cols(2)} auto 0;
  path {
    fill: white;
  }
`;

const Library = ({ library }) => {
  const { title, url, tagline, Logo, footerLogoSize } = library;
  return (
    <LibraryContainer>
      <a href={url} alt={title}>
        <LogoContainer>
          <Logo {...footerLogoSize} />
        </LogoContainer>
        <p>{tagline}</p>
      </a>
    </LibraryContainer>
  );
};

export default () => (
  <Container>
    <CenteredContent>
      <Header>
        <span />
        <HeaderText>Libraries to move the web</HeaderText>
        <span />
      </Header>
      <LibraryList>
        {Object.keys(themes).map(key => <Library library={themes[key]} />)}
      </LibraryList>
      <MadeInfo>{`Made in London with 🌯`}</MadeInfo>
      <Copyright>{`© 2014-2018 Matt Perry`}</Copyright>
      <SocialLinksContainer>
        <SocialLinks />
      </SocialLinksContainer>
    </CenteredContent>
  </Container>
);
