import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import Link from 'next/link';
import GlobalTemplate from '~/templates/global/Template';
import { ArticleHeader, P } from '~/templates/global/styled';

export default () => (
  <GlobalTemplate title="Lost? | Popmotion" description="Popmotion is a functional, reactive JavaScript motion library.">
    <Header />
    <ArticleHeader>Page Not Found</ArticleHeader>
    <P>You were probably looking for the <a href="https://github.com/Popmotion/popmotion/tree/b4c3a6d296ba58bd99a95ad116f4223ecf47360f/docs">Popmotion 7 docs</a>.</P>
    <P>Or, if you're ready to upgrade, check out our <Link href="/blog/20180101-popmotion-8-upgrade-guide" prefetch><a>Popmotion 8 upgrade guide</a></Link>!</P>
  </GlobalTemplate>
);
