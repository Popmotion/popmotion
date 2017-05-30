import Link from 'next/link';
import { ContentNavArea } from './grid';
import menus from '~/data/menus.json';

const Item = ({ id, title, contentId, section }) => (
  <li>
    <Link href={`/${section}/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Category = ({ id, title, contentId, posts, section }) => (
  <li>
    <h2>{title}</h2>
    <ul>
      {posts.map((post) => <Item {...post} contentId={contentId} section={section} />)}
    </ul>
  </li>
);

export default ({ section, id }) => {
  const menu = menus[section];

  return (
    <ContentNavArea>
      <ul>
      {menu.map(
        ({ posts, ...itemData }) => (posts)
          ? <Category posts={posts} {...itemData} contentId={id} section={section} />
          : <Item {...itemData} contentId={id} section={section} isLink />
      )}
      </ul>
    </ContentNavArea>
  );
};