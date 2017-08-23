import GlobalTemplate from '~/components/layout/GlobalTemplate';

export default ({ children, id, section, category, title, description }) => (
  <GlobalTemplate
    id={id}
    title={title}
    description={description}
    section={section}
    category={category}
  >
    {children}
  </GlobalTemplate>
);
