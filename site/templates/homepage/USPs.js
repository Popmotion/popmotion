import styled from 'styled-components';
import Link from 'next/link';
import { Strong } from '~/templates/global/primatives';
import { fontSize } from '~/styles/fonts';
import { cols, media, verticalGradient, WHITE, PURPLE, PURPLE_BURN } from '~/styles/vars';

const USPContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: ${cols(60)};
  padding-bottom: 72px;
`;

const USP = styled.div`
  flex: 0 0 50%;
  padding: ${cols(3)} ${cols(1)} ${cols(1)};
`;

const USPHeader = styled.h2`
  flex: 0 0 100%;
  ${fontSize(36)}
  margin-bottom: ${cols(1)};
  margin-top: ${cols(2)};
  text-align: center;
`;

const Header = styled.h3`
  ${fontSize(28)}
  margin-bottom: ${cols(1)};
`;

const Description = styled.p`
  ${fontSize(18)}
  line-height: 24px;
  margin-bottom: ${cols(1)};
`;

const FooterGetStartedLink = styled.span`
  a {
    display: block;
    background: ${verticalGradient(PURPLE_BURN, PURPLE)};
    border: 2px solid ${WHITE};
    border-radius: 500px;
    width: 190px;
    ${fontSize(24)}
    padding: 15px 20px;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    color: ${WHITE};
  }
`;

export default () => (
  <USPContainer>
    <USPHeader>Why Popmotion?</USPHeader>
    <USP>
      <Header>Animator's toolbox</Header>
      <Description>Animate with tweens, velocity, input tracking, springs, friction and momentum.</Description>
    </USP>
    <USP>
      <Header>Size matters</Header>
      <Description>At ~9kb, it's <Strong>75% smaller</Strong> than Greensock TweenMax. Smaller downloads = engaged users.</Description>
    </USP>
    <USP>
      <Header>Gone in 60 frames per second</Header>
      <Description>Popmotion bangs out 60fps in real-world use and stands up to Greensock and Web Animations API under extreme stress.</Description>
    </USP>
    <USP>
      <Header>Lego, for motion</Header>
      <Description>Every action can be chained, staggered, cross-faded, and combined to build complex motion systems from simple functions.</Description>
    </USP>
    <USP>
      <Header>Write once, render anywhere</Header>
      <Description>We include CSS, SVG and SVG Path renderers, out of the box.</Description>
      <Description>Renderers leverage Popmotion's scheduled update/render loop to provide top performance even outside animations.</Description>
    </USP>
    <USP>
      <Header>Write once, render anywhere</Header>
      <Description>We include CSS, SVG and SVG Path renderers, out of the box.</Description>
      <Description>Renderers leverage Popmotion's scheduled update/render loop to provide top performance even outside animations.</Description>
    </USP>
    <FooterGetStartedLink>
      <Link href="/guides/get-started">
        <a>Get started</a>
      </Link>
    </FooterGetStartedLink>
  </USPContainer>
);
