import { Fragment } from 'react';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';
import MenuPage from '~/templates/content/MenuPage';

export default () => (
  <GlobalTemplate
    title="API | Pose"
    description="Popmotion Pose is a declarative motion library for HTML, SVG and React"
    theme="pose"
  >
    <ContentPage section="api">
      <Section>
        <PageHeader>API</PageHeader>
        <MenuPage section="api" />
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
