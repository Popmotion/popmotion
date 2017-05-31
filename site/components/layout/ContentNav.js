import Link from 'next/link';
import styled from 'styled-components';
import { ContentNavArea } from './grid';
import { fontSize } from '~/styles/fonts';
import { MAIN } from '~/styles/vars';
import menus from '~/data/menus.json';

const CategoryHeader = styled.h2`
  ${fontSize(24)};
  margin-bottom: 1.1rem;
`;

const MenuItem = styled.li`
  ${({ level=1 }) => (level === 1)
    ? (`
      ${fontSize(24)}
      margin-bottom: 1.1rem;
    `)
    : (`
      ${fontSize(18)}
      margin-bottom: 1.1rem;
      margin-left: 12px;
    `)
  }
  ${({ isSelected }) => (isSelected) && `border-left: 1px solid ${MAIN}`}
`;

const Item = ({ id, title, contentId, section, level }) => (
  <MenuItem level={level} isSelected={id === contentId}>
    <Link href={`/${section}/${id}`}>
      <a>{title}</a>
    </Link>
  </MenuItem>
);

const Category = ({ id, title, contentId, posts, section }) => (
  <li>
    <CategoryHeader>{title}</CategoryHeader>
    <ul>
      {posts.map((post) => <Item {...post} contentId={contentId} section={section} level={2} />)}
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