import styled from 'styled-components';
import Link from 'next/link';
import LavaLampHeader from './LavaLampHeader';
import AnimatedLogo from '~/components/layout/AnimatedLogo';
import { fontSize } from '~/styles/fonts';
import { WHITE, cols, media } from '~/styles/vars';
import { GetStartedLink } from './primatives';
import routes from '~/data/route-paths.json';

const HomepageLogo = styled(AnimatedLogo)`
  margin: 0 auto;
  width: 212px;
  height: 48px;
  margin-bottom: 40px;

  ${media.medium`
    width: 120px;
    height: 30px;
    margin-bottom: ${cols(1)};
  `}
`;

const MainLine = styled.h1`
  ${fontSize(28)}
  color: ${WHITE};
  margin-bottom: 12px;

  ${media.medium`
    ${fontSize(24)}
  `}
`;

const SecondaryLine = styled.p`
  ${fontSize(18)}
  color: ${WHITE};
  margin-bottom: 40px;
  line-height: 1.4;

  ${media.medium`
    ${fontSize(14)}
    margin-bottom: ${cols(1)};
  `}
`;

export default () => (
  <LavaLampHeader>
    <HomepageLogo />
    <MainLine>The JavaScript motion engine</MainLine>
    <SecondaryLine>Create delightful interactions with input<br />tracking, animations and physics</SecondaryLine>
    <GetStartedLink>
      <Link href={routes.learn}>
        <a>Get started</a>
      </Link>
    </GetStartedLink>
  </LavaLampHeader>
);
