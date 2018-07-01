import { Fragment } from 'react';
import BlogItem from './components/BlogItem';
import { withTheme } from 'styled-components';

const BlogList = ({ theme, numItems }) => {
  const content = theme.data.content.blog;
  const menu = theme.data.menus.blog.slice(0, numItems);

  return (
    <ul>
      {menu.map(({ id, title }) => (
        <BlogItem
          id={id}
          key={id}
          title={title}
          description={content[id].description}
          published={content[id].published}
        />
      ))}
    </ul>
  );
};

export default withTheme(BlogList);
