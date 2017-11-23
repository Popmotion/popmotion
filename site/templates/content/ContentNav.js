import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Centered } from '~/templates/global/grid';
import DropDownArrow from '~/components/icons/DropDownArrow';
import { fontSize, fontBold, lineHeight } from '~/styles/fonts';
import { LINK, ENTITY, cols, media } from '~/styles/vars';
import menus from '~/data/menus.json';
import content from '~/data/content.json';
import sectionNames from '~/data/section-names.json';

export const ContentNavArea = Centered.extend`
  position: absolute;
  left: 0;
  width: ${cols(14)};
  margin-top: ${cols(1)};

  ${media.large`
    position: relative;
    width: auto;
    border: 1px solid ${ENTITY};
    margin-top: 0;
    margin-bottom: ${cols(2)};
  `}
`;

const CategoryContainer = styled.li`
  margin-bottom: ${cols(2)}
`;

const selectable = ({ isSelected }) => (isSelected) && css`
  a {
    ${fontBold}
    color: ${ENTITY};
  }
`;

const CategoryTitle = styled.h2`
  ${fontSize(18)}
  margin-bottom: ${cols(1)};
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
  ${lineHeight(18)}
  margin-bottom: 5px;
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
  position: relative;
  padding-left: ${cols(2)};
  ${fontSize(18)}
  ${fontBold}
  border-bottom: 1px solid ${ENTITY};
  width: 100%;
  padding-bottom: ${cols(1)};
  margin-bottom: ${cols(2)};

  ${media.large`
    cursor: pointer;
    position: relative;
    border: none;
    ${fontSize(18)}
    padding: ${cols(1)};
    margin-bottom: 0;
  `}
`;

const Menu = styled.ul`
  padding-left: ${cols(2)};
  ${media.large`
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    padding-top: ${cols(1)};
  `}
`;

const DropDownMenuIcon = styled(DropDownArrow)`
  position: absolute;
  right: ${cols(1)};
  top: 50%;
  margin-top: -5px;
  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'}

  display: none;
  ${media.large`display: block;`}
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
          {sectionNames[section]}
          <DropDownMenuIcon isOpen={isOpen} />
        </MenuToggle>
        <Menu isOpen={isOpen}>
          {menu.map((category) => <Category key={category.id} {...category} contentId={id} section={section} />)}
        </Menu>
      </ContentNavArea>
    );
  }
}
