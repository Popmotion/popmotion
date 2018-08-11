import { Fragment } from 'react';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';
import BlogList from '~/templates/blog';

export default () => (
  <GlobalTemplate
    title="Blog | Popmotion"
    description="Popmotion makes simple and powerful JavaScript animation libraries for HTML, SVG, React and React Native."
    theme="popmotion"
  >
    <ContentPage section="blog">
      <Section>
        <PageHeader>Blog</PageHeader>
        <BlogList />
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
