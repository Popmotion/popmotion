import { Fragment } from 'react';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';
import MenuPage from '~/templates/content/MenuPage';

export default () => (
  <GlobalTemplate
    title="API | Popmotion Pure"
    description="Popmotion Pure is a functional, flexible JavaScript motion library."
    theme="pure"
  >
    <ContentPage section="api">
      <Section>
        <PageHeader>API</PageHeader>
        <MenuPage section="api" />
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
