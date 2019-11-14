import styled from 'styled-components';
import { fontSize, fontBold, lineHeight } from '~/styles/fonts';
import {
  LIGHT_GREY,
  WHITE,
  cols,
  color,
  media,
  GREEN,
  PURPLE,
  ENTITY
} from '~/styles/vars';
import {
  Centered,
  MajorCentered,
  ArticleHeader as ArticleHeaderPrimitive
} from './grid';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting';

registerLanguage('javascript', js);

export const Strong = styled.strong`
  ${fontBold};
`;

export const A = styled.a`
  color: #0866c2;
  text-decoration: none;

  &:hover {
    color: #064fb5;
  }
`;

export const H1 = styled.h1`
  ${fontSize(48)}
  ${lineHeight(54)}
  ${fontBold}
  text-align: left;

  ${media.medium`
    ${fontSize(36)}
    ${lineHeight(42)}
  `}
  ${media.small`
    ${fontSize(28)}
    ${lineHeight(32)}
  `}
`;

export const H2 = styled(Centered.withComponent('h2'))`
  ${fontSize(36)}
  ${fontBold}
  margin-top: ${cols(4)};
  margin-bottom: ${cols(2)};
  border-bottom: 1px solid ${LIGHT_GREY};
  padding-bottom: ${cols(1)};
  ${media.medium`
    ${fontSize(28)}
    ${lineHeight(32)}
    margin-top: ${cols(2)};
    margin-bottom: ${cols(1)};
  `}
  ${media.small`
    ${fontSize(24)}
    ${lineHeight(28)}
  `}

  a {
    ${fontBold}
  }
`;

export const H3 = styled(Centered.withComponent('h3'))`
  ${fontSize(24)}
  ${lineHeight(32)}
  ${fontBold}
  margin-top: ${cols(2)};
  margin-bottom: ${cols(1)};
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

export const H4 = styled(Centered.withComponent('h4'))`
  ${fontSize(20)}
  margin-top: 2.2rem;
  margin-bottom: 1.1rem;
  font-weight: 600;
  ${media.medium`${fontSize(16)}`}
`;

export const H5 = styled(Centered.withComponent('h5'))`
  ${fontSize(18)}
  margin-top: 2.2rem;
  margin-bottom: 1.1rem;
  font-weight: 600;
  ${media.medium`${fontSize(14)}`}
`;

export const P = styled(Centered.withComponent('p'))`
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

export const Blockquote = styled(MajorCentered.withComponent('blockquote'))`
  border-left: 1px solid ${color.lightGrey};
  background: ${color.superLightGrey};
  padding: ${cols(1)};
  margin-bottom: ${cols(2)};

  p {
    margin: 0;
  }
`;

export const CodeTag = styled.code`
  background: #f9f9f9;
  padding: 2px 5px;
`;

export const CodeBlock = styled(MajorCentered)`
  background: ${color.superLightGrey};
  border-left: 1px solid ${ENTITY};
  margin-bottom: ${cols(3)};

  ${media.medium`
    margin-left: 0;
    margin-right: 0;

    pre {
      padding-right: 0!important;
      width: 100%!important;
    }
  `};
`;

export const Code = ({ language, children, code }) =>
  children ? (
    <CodeTag>{children}</CodeTag>
  ) : (
    <CodeBlock>
      <SyntaxHighlighter language={language} style={codeThemeLarge}>
        {code}
      </SyntaxHighlighter>
    </CodeBlock>
  );

export const Ol = styled(Centered.withComponent('ol'))`
  list-style-type: decimal;
  padding-left: ${cols(2)};
  max-width: ${cols(43)};
  margin-bottom: 1.1rem;
`;

export const Ul = styled(Centered.withComponent('ul'))`
  list-style-type: disc;
  padding-left: ${cols(2)};
  max-width: ${cols(43)};
  margin-bottom: 1.1rem;
`;

export const Li = styled.li`
  line-height: 1.7;
  margin-bottom: 0.5rem;
  ${fontSize(18)} ${media.medium`${fontSize(14)}`};
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: ${LIGHT_GREY};
  margin: ${cols(2)} 0;
`;

const Button = styled.button`
  background: ${GREEN};
  border-radius: 0;
  padding: ${cols(1)} ${cols(2)};
  cursor: pointer;
  margin: 0 auto;
`;

const ButtonContent = styled.span`
  color: ${WHITE};
  ${fontBold} display: block;
`;

export const ActionButton = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    <ButtonContent>{children}</ButtonContent>
  </Button>
);

export const ArticleHeader = ({ children }) => (
  <ArticleHeaderPrimitive>
    <H1>{children}</H1>
  </ArticleHeaderPrimitive>
);

export const Video = ({ src, height = 320 }) => (
  <Centered>
    <video autoPlay height={height} controls muted>
      <source src={src} type="video/mp4" />
    </video>
  </Centered>
);
