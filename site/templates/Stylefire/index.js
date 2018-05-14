import GlobalTemplate from '~/templates/global/Template';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import Masthead from '~/templates/Popmotion/Masthead';
import USPs from './USPs';
import settings from '~/data/settings.json';
import StylefireDocs from '~/docs/stylefire/docs.md';
import {
  A,
  H1,
  H2,
  H3,
  H4,
  P,
  Li,
  Ul,
  Hr,
  Code,
  Blockquote,
  ArticleHeader
} from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';

export default () => (
  <GlobalTemplate
    title={`Stylefire - A style setter for HTML and SVG, optimised for animation`}
    theme="stylefire"
  >
    <Masthead getStarted={false}>
      <Header isHomepage={true} />
    </Masthead>
    <StylefireDocs
      components={{
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
      }}
    />
    <Footer />
  </GlobalTemplate>
);
