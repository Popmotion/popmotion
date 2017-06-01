import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ContentNavArea } from '~/components/layout/grid';
import { fontSize } from '~/styles/fonts';
import { MAIN, cols } from '~/styles/vars';
import menus from '~/data/menus.json';

const CategoryContainer = styled.li`
  margin-bottom: ${cols(2)}
`;

const CategoryHeader = styled.h2`
  ${fontSize(20)};
  margin-bottom: 0.8rem;
`;

const MenuItem = styled.li`
  ${({ level=1 }) => (level === 1)
    ? (`
      ${fontSize(20)}
      margin-bottom: 0.8rem;
    `)
    : (`
      ${fontSize(18)}
      margin-bottom: 0.8rem;
      margin-left: ${cols(1)};
    `)
  }
  ${({ isSelected }) => (isSelected) && css`
    position: relative;

    &:after {
      display: block;
      content: '';
      background: ${MAIN};
      width: 2px;
      position: absolute;
      top: 0;
      bottom: 0;
      left: -${cols(1)};
    }
  `}

  a {
    text-decoration: none;

    &:hover {
      color: ${MAIN};
    }
  }
`;

const Item = ({ id, title, contentId, section, level }) => (
  <MenuItem level={level} isSelected={id === contentId}>
    <Link href={`/${section}/${id}`}>
      <a>{title}</a>
    </Link>
  </MenuItem>
);

const Category = ({ title, contentId, posts, section }) => (
  <CategoryContainer>
    <CategoryHeader>{title}</CategoryHeader>
    <ul>
      {posts.map((post) => <Item key={post.id} {...post} contentId={contentId} section={section} level={2} />)}
    </ul>
  </CategoryContainer>
);

export default ({ section, id }) => {
  const menu = menus[section];

  return (
    <ContentNavArea>
      <ul>
      {menu.map(
        ({ posts, ...itemData }) => (posts)
          ? <Category key={itemData.id} posts={posts} {...itemData} contentId={id} section={section} />
          : <Item key={itemData.id} {...itemData} contentId={id} section={section} isLink />
      )}
      </ul>
    </ContentNavArea>
  );
};
