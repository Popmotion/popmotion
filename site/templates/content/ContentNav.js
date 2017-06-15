import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ContentNavArea } from '~/components/layout/grid';
import DropDownArrow from '~/components/icons/DropDownArrow';
import { fontSize } from '~/styles/fonts';
import { LINK, cols, media } from '~/styles/vars';
import menus from '~/data/menus.json';
import content from '~/data/content.json';
import sectionNames from '~/data/section-names.json';

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

const MenuToggle = styled.div`
  cursor: pointer;
  display: none;
  position: relative;

  ${media.medium`
    display: block;
    border-bottom: 1px solid ${LINK};
    ${fontSize(18)}
    padding-bottom: 8px;
  `}
`;

const Menu = styled.ul`
  ${media.medium`
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'}
  `}
`;

const DropDownMenuIcon = styled(DropDownArrow)`
  position: absolute;
  right: 0;
  top: 5px;
  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}
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
      {(content[section][id]) ? (
        <Link href={`/${section}/${id}`}>
          <a>{title}</a>
        </Link>
      ) : title}
    </CategoryTitle>
    {posts ? (
      <ul>
        {posts.map((post) => <Item key={post.id} {...post} contentId={contentId} section={section} />)}
      </ul>
    ) : null}
  </CategoryContainer>
);

export default class extends React.Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen } = this.state;
    const { section, id } = this.props;
    const menu = menus[section];

    return (
      <ContentNavArea>
        <MenuToggle onClick={this.toggleMenu}>
          {`${sectionNames[section]} menu`}
          <DropDownMenuIcon isOpen={isOpen} />
        </MenuToggle>
        <Menu isOpen={isOpen}>
          {menu.map((category) => <Category key={category.id} {...category} contentId={id} section={section} />)}
        </Menu>
      </ContentNavArea>
    );
  }
}
