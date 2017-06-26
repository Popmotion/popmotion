import styled from 'styled-components';
import Link from 'next/link';
import { A, Strong } from '~/templates/global/primatives';
import { GetStartedLink } from './primatives';
import { fontSize } from '~/styles/fonts';
import { cols, media, verticalGradient, PURPLE, PURPLE_BURN } from '~/styles/vars';
import routes from '~/data/route-paths.json';

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

  ${media.medium`
    padding: ${cols(1)};
    flex: 0 0 100%;
  `}
`;

const USPHeader = styled.h2`
  flex: 0 0 100%;
  ${fontSize(36)}
  margin-bottom: ${cols(1)};
  margin-top: ${cols(3)};
  text-align: center;

  ${media.medium`${fontSize(28)}`}
`;

const Header = styled.h3`
  ${fontSize(28)}
  margin-bottom: ${cols(1)};

  ${media.medium`${fontSize(18)}`}
`;

const Description = styled.p`
  ${fontSize(18)}
  line-height: 24px;
  margin-bottom: ${cols(1)};

  ${media.medium`${fontSize(14)}`}
`;

const FooterGetStartedLink = GetStartedLink.extend`
  a {
    background: ${verticalGradient(PURPLE_BURN, PURPLE)};
    margin: ${cols(1)} auto 0;
    text-align: center;
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
        <Description>Cross-platform CSS, SVG and SVG `path` renderers are included for use both in and outside of animations.</Description>
      </USP>
      <USP>
        <Header>Composable</Header>
        <Description>Every action can be chained, staggered, cross-faded, and combined to build complex motion systems from simple functions.</Description>
      </USP>
      <USP>
        <Header>Powerful</Header>
        <Description>Discrete render step scheduling allows full control over each frame.</Description>
      </USP>
    </USPContainer>
    <FooterGetStartedLink>
      <Link href={routes.learn}>
        <a>Get started</a>
      </Link>
    </FooterGetStartedLink>
  </Container>
);
