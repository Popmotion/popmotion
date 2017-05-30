import GlobalTemplate from '~/components/layout/GlobalTemplate';

export default ({ children, id, category, title, description }) => (
  <GlobalTemplate
    title={title}
    description={description}
  >
    {children}
  </GlobalTemplate>
);
