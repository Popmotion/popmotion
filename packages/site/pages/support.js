import { Fragment } from 'react';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';

export default () => (
  <GlobalTemplate
    title="Support us | Popmotion"
    description="Popmotion is a functional, reactive JavaScript motion library."
    theme="popmotion"
  >
    <ContentPage section="support">
      <Section>
        <PageHeader>Support</PageHeader>
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
