import styled from 'styled-components';
import Link from 'next/link';
import { A, Strong } from '~/templates/global/primatives';
import { fontSize } from '~/styles/fonts';
import { cols, media, verticalGradient, WHITE, PURPLE, PURPLE_BURN } from '~/styles/vars';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${cols(60)};
  padding-bottom: 72px;
`;

const USPContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const USP = styled.div`
  flex: 0 0 50%;
  padding: ${cols(2)} ${cols(1)} ${cols(1)};
`;

const USPHeader = styled.h2`
  flex: 0 0 100%;
  ${fontSize(36)}
  margin-bottom: ${cols(1)};
  margin-top: ${cols(3)};
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
    padding: ${cols(1)} 20px;
    margin: ${cols(1)} auto 0;
    text-decoration: none;
    text-align: center;
    color: ${WHITE};
  }
`;

export default () => (
  <Container>
    <USPHeader>Why Popmotion?</USPHeader>
    <USPContainer>
      <USP>
        <Header>Flexible</Header>
        <Description>Animate with tweens, input tracking, springs and momentum physics.</Description>
      </USP>
      <USP>
        <Header>Tiny</Header>
        <Description>At ~9kb, it's <Strong>75% smaller</Strong> than Greensock TweenMax. Great for users on slower connections.</Description>
      </USP>
      <USP>
        <Header>Blazing Fast</Header>
        <Description>Popmotion bangs out 60 frames a second in real-world use and stands up to alternatives <A href="https://codepen.io/popmotion/pen/zNYXmR">under extreme stress</A>.</Description>
      </USP>
      <USP>
        <Header>Compatible</Header>
        <Description>Cross-platform CSS and SVG renderers are included for use both in and outside of animations.</Description>
      </USP>
      <USP>
        <Header>Composable</Header>
        <Description>Every action can be chained, staggered, cross-faded, and combined to build complex motion systems from simple functions.</Description>
      </USP>
      <USP>
        <Header>Powerful</Header>
        <Description>Descrete render step scheduling allows full control over each frame.</Description>
      </USP>
    </USPContainer>
    <FooterGetStartedLink>
      <Link href="/guides/get-started">
        <a>Get started</a>
      </Link>
    </FooterGetStartedLink>
  </Container>
);
