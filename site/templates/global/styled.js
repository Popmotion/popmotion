import styled from 'styled-components';
import { fontSize, fontBold, lineHeight } from '~/styles/fonts';
import { LINK, LINK_BURN, LIGHT_GREY, WHITE, cols, media, verticalGradient, PURPLE_BURN, GREEN, PURPLE, SKEW, UNSKEW, ENTITY } from '~/styles/vars';
import { Centered, MajorCentered, ArticleHeader as ArticleHeaderPrimitive } from './grid';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting'; 

registerLanguage('javascript', js);

export const Strong = styled.strong`
  ${fontBold}
`;

export const A = styled.a`
  color: ${LINK};
  text-decoration: none;

  &:hover {
    color: ${LINK_BURN};
  }
`;

export const H1 = styled.h1`
  ${fontSize(48)}
  ${lineHeight(54)}
  ${fontBold}
  ${media.medium`
    ${fontSize(36)}
    ${lineHeight(42)}
  `}
  ${media.small`
    ${fontSize(28)}
    ${lineHeight(32)}
  `}
`;

export const H2 = Centered.withComponent('h2').extend`
  ${fontSize(36)}
  ${fontBold}
  margin-top: ${cols(3)};
  margin-bottom: ${cols(1)};
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
  ${media.medium`
    ${fontSize(28)}
    ${lineHeight(32)}
  `}
  ${media.small`
    ${fontSize(24)}
    ${lineHeight(28)}
  `}

  a {
    ${fontBold}
  }
`;

export const H3 = Centered.withComponent('h3').extend`
  ${fontSize(24)}
  ${lineHeight(32)}
  ${fontBold}
  ${media.medium`
    ${fontSize(24)}
    ${lineHeight(30)}
  `}
  ${media.small`
    ${fontSize(18)}
    ${lineHeight(28)}
  `}

  a {
    ${fontBold}
  }
`;

export const H4 = styled.h4`
  ${fontSize(18)}
  margin-top: 2.2rem;
  margin-bottom: 1.1rem;
  font-weight: 600;
  ${media.medium`${fontSize(14)}`}
`;

export const P = Centered.withComponent('p').extend`
  ${fontSize(18)}
  ${lineHeight(26)}
  line-height: 1.5;
  margin-bottom: 1.1rem;
  word-break: break-word;
  ${media.medium`
    ${fontSize(14)}
    ${lineHeight(22)}
  `}
`;

export const CodeTag = styled.code`
  background: #f9f9f9;
  padding: 2px 5px;
`;

export const CodeBlock = MajorCentered.extend`
  background: ${LIGHT_GREY};
  border-left: 2px solid ${ENTITY};
  transform: skewX(${SKEW});
  transform-origin: 0 0;
  margin-bottom: ${cols(3)};

  pre {
    transform: skewX(${UNSKEW});
  }
`;

export const Code = ({ language, children, code }) => (children
  ? <CodeTag>{children}</CodeTag>
  : (
    <CodeBlock>
      <SyntaxHighlighter language={language} style={codeThemeLarge}>
        {code}
      </SyntaxHighlighter>
    </CodeBlock>
  )
);

export const Ul = styled.ul`
  list-style-type: disc;
  padding-left: ${cols(2)};
  max-width: ${cols(43)};
  margin-bottom: 1.1rem;
`;

export const Li = styled.li`
  line-height: 1.7;
  margin-bottom: 0.5rem;
  ${fontSize(18)}
  ${media.medium`${fontSize(14)}`}
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${LIGHT_GREY};
  margin: ${cols(2)} 0;
`;

export const Blockquote = styled.blockquote`
  border-left: 2px solid ${PURPLE};
  background: ${LIGHT_GREY};
  padding: ${cols(1)} ${cols(1)} 8px;
  margin-bottom: ${cols(2)};
`;

const Button = styled.button`
  background: ${GREEN};
  border-radius: 0;
  padding: ${cols(1)} ${cols(2)};
  transform: skewX(${SKEW});
  cursor: pointer;
  margin: 0 auto;
`;

const ButtonContent = styled.span`
  color: ${WHITE};
  ${fontBold}
  display: block;
  transform: skewX(${UNSKEW});
`;

export const ActionButton = ({ children, onClick }) => (
  <Button onClick={onClick}>
    <ButtonContent>{ children }</ButtonContent>
  </Button>
);

export const DatePublished = styled.p`
  font-size: ${fontSize(12)};
  margin-bottom: ${cols(1)};
`;

export const ArticleHeader = ({ children }) => (
  <ArticleHeaderPrimitive>
    <H1>API</H1>
  </ArticleHeaderPrimitive>
); 
