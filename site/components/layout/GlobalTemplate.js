import Head from 'next/head';
import { injectGlobal } from 'styled-components';
import LogoContainer from './LogoContainer';
import Nav from './Nav';
import ContentNav from './ContentNav';
import { Container, LeftMargin, RightMargin, ContentArea } from '~/components/layout/grid';
import reset from '~/styles/reset';
import settings from '~/data/settings.json';

injectGlobal`${reset}`;

export default ({ children, id, title, section }) => {
  const pageTitle = `${title ? `${title} | ` : ''}${settings.siteName}`;

  return (
    <Container>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LogoContainer />
      <Nav section={section} />
      <ContentNav section={section} id={id} />
      <ContentArea>
        {children}
      </ContentArea>
      <LeftMargin />
      <RightMargin />
    </Container>
  );
};
