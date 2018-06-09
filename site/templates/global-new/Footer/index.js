import PopmotionLogo from '~/components/icons/Logo';
import SocialLinks from '~/templates/global/SocialLinks';
import themes from '~/styles/themes';
import {
  Container,
  Section,
  Header,
  NavItem,
  MadeIn,
  Copyright
} from './styled';
import Link from 'next/link';

const openSource = [
  themes.pose,
  themes.pure,
  themes.stylefire,
  themes.framesync
];

export default () => (
  <Container>
    <Section>
      <Header>Site</Header>
      <ul>
        {themes.popmotion.headerNavLinks.map(({ href, label, isExternal }) => (
          <NavItem key={url}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </NavItem>
        ))}
      </ul>
    </Section>
    <Section>
      <Header>Open source</Header>
      <ul>
        {openSource.map(({ url, name }) => (
          <NavItem key={url}>
            <Link href={url}>
              <a>{name}</a>
            </Link>
          </NavItem>
        ))}
      </ul>
    </Section>
    <Section>
      <Link href="/">
        <a>
          <PopmotionLogo {...themes.popmotion.headerLogoSize} />
        </a>
      </Link>
      <MadeIn>{`Made in London with 🌯`}</MadeIn>
      <Copyright>{`© 2014-2018 Matt Perry`}</Copyright>
      <SocialLinks />
    </Section>
  </Container>
);
