import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ContentNavArea } from '~/components/layout/grid';
import { fontSize } from '~/styles/fonts';
import { LINK, cols } from '~/styles/vars';
import menus from '~/data/menus.json';

const CategoryContainer = styled.li`
  margin-bottom: ${cols(2)}
`;

const selectable = ({ isSelected }) => (isSelected) && css`
  position: relative;

  &:after {
    display: block;
    content: '';
    background: ${LINK};
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -${cols(1)};
  }
`;

const CategoryTitle = styled.h2`
  ${fontSize(18)}
  margin-bottom: 0.8rem;
  ${selectable}

  a {
    text-decoration: none;

    &:hover {
      color: ${LINK};
    }
  }
`;

const MenuItem = styled.li`
  ${fontSize(14)}
  margin-bottom: 0.8rem;
  margin-left: ${cols(1)};
  ${selectable}

  a {
    text-decoration: none;

    &:hover {
      color: ${LINK};
    }
  }
`;

const Item = ({ id, title, contentId, section }) => (
  <MenuItem isSelected={id === contentId}>
    <Link href={`/${section}/${id}`}>
      <a>{title}</a>
    </Link>
  </MenuItem>
);

const Category = ({ id, title, contentId, section, posts }) => (
  <CategoryContainer>
    <CategoryTitle isSelected={id === contentId}>
      <Link href={`/${section}/${id}`}>
        <a>{title}</a>
      </Link>
    </CategoryTitle>
    {posts ? (
      <ul>
        {posts.map((post) => <Item key={post.id} {...post} contentId={contentId} section={section} />)}
      </ul>
    ) : null}
  </CategoryContainer>
);

export default ({ section, id }) => {
  const menu = menus[section];

  return (
    <ContentNavArea>
      <ul>
        {menu.map((category) => <Category key={category.id} {...category} contentId={id} section={section} />)}
      </ul>
    </ContentNavArea>
  );
};
