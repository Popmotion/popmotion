import styled from 'styled-components';
import { Strong } from '~/templates/global/primatives';

const USPContainer = styled.div`
  display: flex;
`;

const USP = styled.div`
  flex: 0 0 50%;
`;

const Header = styled.h2``;

const Description = styled.p``;

export default () => (
  <USPContainer>
    <USP>
      <Header>Size matters</Header>
      <Description>At ~8kb, it's <Strong>75% smaller</Strong> than Greensock TweenMax.</Description>
      <Description>Smaller files === quicker downloads.</Description>
      <Description>Quicker downloads === increased user engagement.</Description>
    </USP>
    <USP>
      <Header>Seamless motion</Header>
      <Description>
        <code>{`getVelocity()`}</code>
        {` is available on every action, ready to pass to our physics engine.`}
      </Description>
      <Description>So an animation or a swipe can naturally transition into a momentum scroll or spring-powered snap.</Description>
    </USP>
    <USP>
      <Header>Gone in 60 frames per second</Header>
      <Description>Comparable performance to Greensock and Web Animations API in extreme stress tests.</Description>
      <Description>Buttery 60fps motion back in the real-world.</Description>
    </USP>
    <USP>
      <Header>Lego, for motion</Header>
      <Description>Every action can be chained, staggered, cross-faded, controlled in parallel or combined to create complex values.</Description>
    </USP>
    <USP>
      <Header>Write once, render anywhere</Header>
      <Description>We include CSS, SVG and SVG Path renderers, out of the box.</Description>
      <Description>Renderers leverage Popmotion's scheduled update/render loop to provide top performance even outside animations.</Description>
    </USP>
    <USP>
      <Header>Transformers</Header>
      <Description>Create declarative value transformation pipelines with in-built and custom pure functions.</Description>
      <Description>These can be used standalone, or shared, reused and further composed.</Description>
    </USP>
  </USPContainer>
);
