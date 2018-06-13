import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';
import Link from 'next/link';

export default () => (
  <GlobalTemplate
    title="Lost? | Popmotion"
    description="Popmotion is a functional, reactive JavaScript motion library."
    theme="popmotion"
  >
    <ContentPage>
      <Section>
        <PageHeader>Page not found</PageHeader>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
