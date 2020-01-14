import { Fragment } from 'react';
import Homepage from '~/templates/homepage';
import BlogList from '~/templates/blog';
import Footer from '~/templates/global-new/Footer';
import Link from 'next/link';
import themes from '~/styles/themes';
import { color, font, media } from '~/styles/vars';
import { ActionButton, P } from '~/templates/global-new/styled';
import styled, {
  ThemeProvider,
  withTheme,
  createGlobalStyle
} from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { keyframes, tween, easing, calc } from 'popmotion';

const Global = createGlobalStyle`
@font-face {
  font-family: 'Popmotion Headline';
  src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2');
  font-weight: normal;
  font-style: normal;
}
`;

const HeaderContainer = styled.div`
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.medium`height: 180px;`} ${media.small`height: 140px;`};
`;

const MoreLink = styled.a`
  text-align: center;
  margin: 0 auto;
`;

const dropEasing = easing.createReversedEasing(easing.createBackIn(3));
const letterEasing = easing.cubicBezier(0, 0.25, 1, 0.75);
const Char = styled(
  posed.span({
    exit: { opacity: 0, scaleY: 0.5, y: 25 },
    enter: {
      y: 0,
      opacity: 1,
      scaleY: 1,
      delay: ({ i, total }) =>
        letterEasing(calc.getProgressFromValue(0, total - 1, i)) * 500,
      transition: {
        y: ({ from, to }) =>
          keyframes({
            values: [from, -8, to],
            easings: [easing.easeOut, dropEasing],
            times: [0, 0.3, 1],
            duration: 500
          }),
        scaleY: ({ from, to }) =>
          keyframes({
            values: [from, 1.2, to],
            easings: [easing.easeOut, dropEasing],
            times: [0, 0.3, 1],
            duration: 500
          }),
        opacity: props => tween({ ...props, duration: 500 * 0.6 })
      }
    }
  })
)`
  color: ${color.white};
  font-size: 36px;
  font-family: Popmotion Headline;
  letter-spacing: -2px;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  opacity: 0;
  display: inline-block;
  transform-origin: 0% 100%;

  ${media.medium`
  font-size: 28px;
  letter-spacing: -1.5px;`} ${media.small`
  font-size: 24px;
  letter-spacing: -1px;`};
`;

const Word = styled(posed.span({}))`
  display: inline-block;
`;

// TODO make a new npm module for this
class AnimatedText extends React.Component {
  constructor(props) {
    super(props);
    this.words = props.text.split(' ');
    this.chars = this.words.map(word => word.split(''));
    this.numChars = this.words.reduce((count, word) => count + word.length, 0);
  }

  render() {
    let i = -1;
    return (
      <h2>
        <Global />
        <PoseGroup animateOnMount>
          {this.words.map((word, wordIndex) => (
            <Word key={wordIndex}>
              {this.chars[wordIndex].map(char => {
                i++;
                return (
                  <Char i={i} key={i} total={this.numChars}>
                    {char}
                  </Char>
                );
              })}
              {`\u00A0`}
            </Word>
          ))}
        </PoseGroup>
      </h2>
    );
  }
}

const Header = () => (
  <HeaderContainer>
    <AnimatedText text="Simple libraries for delightful interfaces" />
  </HeaderContainer>
);

const Container = styled.ul`
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

const ProductContainer = styled.li`
  flex: 0 0 50%;
  padding: 20px;
  text-align: center;

  ${media.medium`flex: 0 0 100%;`};
`;

const LogoContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LearnMore = styled(ActionButton)`
  display: block;
  margin: 20px auto 0;
`;

const Product = withTheme(({ title, children, theme, prefetch }) => (
  <ProductContainer>
    <Link prefetch={prefetch} href={title.url}>
      <a>
        <LogoContainer>
          <title.Logo {...theme.homepageLogoSize} />
        </LogoContainer>
        {children}
        <LearnMore>Learn more</LearnMore>
      </a>
    </Link>
  </ProductContainer>
));

const Section = styled.section`
  padding-top: 75px;
  max-width: 650px;
  border-top: 1px solid ${color.lightGrey};
  margin: 75px auto;

  ${media.small`
    margin: 40px auto;
  `};
`;

const SectionHeader = styled.h2`
  font-size: 36px;
  color: ${color.black};
  ${font.bold};
  letter-spacing: -1.1px;
  text-align: center;
  margin-bottom: 40px;

  ${media.small`
    font-size: 24px;
    letter-spacing: -0.5px;
  `};
`;

export default () => (
  <Homepage
    title="Popmotion | JavaScript animation libraries for delightful interfaces"
    description="Popmotion makes simple and powerful JavaScript animation libraries for HTML, SVG, React and React Native."
    theme="popmotion"
    Header={Header}
  >
    <SectionHeader>Open source</SectionHeader>
    <Container>
      <ThemeProvider theme={themes.framerMotion}>
        <Product title={themes.framerMotion}>
          <P>
            A truly simple <em>React</em>
            <br />
            animation library
          </P>
        </Product>
      </ThemeProvider>
      <ThemeProvider theme={themes.pure}>
        <Product title={themes.pure}>
          <P>A low-level, flexible animation toolset.</P>
        </Product>
      </ThemeProvider>
      <ThemeProvider theme={themes.stylefire}>
        <Product title={themes.stylefire}>
          <P>
            <em>CSS</em> and <em>SVG</em> styler optimised for animation
          </P>
        </Product>
      </ThemeProvider>
      <ThemeProvider theme={themes.framesync}>
        <Product title={themes.framesync}>
          <P>
            Unity-inspired <em>render loop</em>
            <br />
            for browsers
          </P>
        </Product>
      </ThemeProvider>
    </Container>
    <Section>
      <SectionHeader>Latest blog posts</SectionHeader>
      <BlogList numItems={5} />
      <Link href="/blog">
        <MoreLink>See all posts</MoreLink>
      </Link>
    </Section>
    <Footer />
  </Homepage>
);
