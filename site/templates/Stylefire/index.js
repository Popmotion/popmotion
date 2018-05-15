import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import Masthead from '~/templates/Popmotion/Masthead';
import { createElement } from 'react';
import settings from '~/data/settings.json';
import docs from '~/docs/stylefire/index.md';
import marksy from 'marksy/components';
import CodePen from '~/components/examples/CodePen';
import {
  A,
  H1,
  H2,
  H3,
  H4,
  P,
  Li,
  Ol,
  Ul,
  Hr,
  Code,
  Blockquote,
  ArticleHeader,
  Video
} from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';

const convertMarkdown = marksy({
  createElement,
  elements: {
    a: A,
    h1: ArticleHeader,
    h2: H2,
    h3: H3,
    h4: H4,
    p: P,
    code: Code,
    li: Li,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote
  },
  components: {
    CodePen
  }
});

const { tree, toc } = convertMarkdown(docs);

export default () => (
  <GlobalTemplate
    title={`Stylefire - A style setter for HTML and SVG, optimised for animation`}
    theme="stylefire"
  >
    <Masthead getStarted={false}>
      <Header isHomepage={true} />
    </Masthead>
    <div>{tree}</div>
    <Footer />
  </GlobalTemplate>
);
