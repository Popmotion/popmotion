import styled from 'styled-components';
import { Strong } from '~/templates/global/primatives';
import { fontSize } from '~/styles/fonts';
import { cols } from '~/styles/vars';

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

const Header = styled.h3`
  ${fontSize(28)}
  margin-bottom: ${cols(1)};
`;

const Description = styled.p`
  ${fontSize(18)}
  line-height: 24px;
  margin-bottom: ${cols(1)};
`;

export default () => (
  <USPContainer>
    <USP>
      <Header>Motion</Header>
      <Description>Tweens, physics, friction, spring</Description>
    </USP>
    <USP>
      <Header>Size matters</Header>
      <Description>At ~8kb, it's <Strong>75% smaller</Strong> than Greensock TweenMax.</Description>
      <Description>Smaller files = quicker downloads = increased user engagement.</Description>
    </USP>
    <USP>
      <Header>Seamless motion</Header>
      <Description>Easily query the velocity of any action and pass to our physics engine.</Description>
      <Description>So an animation or a swipe can naturally transition into a momentum scroll or spring-powered snap.</Description>
    </USP>
    <USP>
      <Header>Gone in 60 frames per second</Header>
      <Description>Comparable performance to Greensock and Web Animations API in extreme stress tests.</Description>
      <Description>Buttery 60fps motion back in the real-world.</Description>
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
  </USPContainer>
);
