import React from 'react';
import SiteLink from '~/components/layout/SiteLink';
import styled, { css, withTheme } from 'styled-components';
import { Centered } from '~/templates/global/grid';
import DropDownArrow from '~/components/icons/DropDownArrow';
import { fontSize, fontBold, lineHeight } from '~/styles/fonts';
import { ENTITY, cols, media } from '~/styles/vars';
import sectionNames from '~/data/section-names.json';

export const ContentNavArea = styled.div`
  width: ${cols(14)};
  margin-top: ${cols(1)};
  z-index: 2;

  ${media.large`
    position: relative;
    width: auto;
    border: 1px solid ${ENTITY};
    margin-top: 0;
    margin-bottom: ${cols(2)};
  `};
`;

const CategoryContainer = styled.li`
  margin-bottom: ${cols(2)};
`;

const selectable = ({ isSelected }) =>
  isSelected &&
  css`
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
      color: #0866C2;
    }
  }
`;

const MenuItem = styled.li`
  ${fontSize(14)} ${lineHeight(18)}
  margin-bottom: 5px;
  margin-left: ${cols(1)};
  ${selectable} a {
    text-decoration: none;

    &:hover {
      color: #0866c2;
    }
  }
`;

const MenuToggle = styled.div`
  position: relative;
  ${fontSize(18)}
  ${fontBold}
  border-bottom: 1px solid ${({ theme }) => theme.color.base};
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
  ${media.large`
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    padding: ${cols(1)};
  `};
`;

const DropDownMenuIcon = styled(DropDownArrow)`
  position: absolute;
  right: ${cols(1)};
  top: 50%;
  margin-top: -5px;
  ${({ isOpen }) => isOpen && 'transform: rotate(180deg);'} display: none;
  ${media.large`display: block;`};
`;

const Item = ({ id, title, contentId, section, draft }) => (
  <MenuItem isSelected={id === contentId}>
    <SiteLink href={`/${section}/${id}`}>{title}</SiteLink>
  </MenuItem>
);

const Category = ({ id, title, contentId, content, section, posts }) => (
  <CategoryContainer>
    <CategoryTitle isSelected={id === contentId}>
      {content[id] ? (
        <SiteLink href={`/${section}/${id}`}>{title}</SiteLink>
      ) : (
        title
      )}
    </CategoryTitle>
    {posts ? (
      <ul>
        {posts.map(
          post =>
            !content[post.id].draft && (
              <Item
                key={post.id}
                {...post}
                contentId={contentId}
                section={section}
              />
            )
        )}
      </ul>
    ) : null}
  </CategoryContainer>
);

class ContentNav extends React.PureComponent {
  render() {
    const { section, id, theme, isOpen, toggleMenu } = this.props;
    const menu = theme.data.menus[section];
    const content = theme.data.content[section];

    return (
      <ContentNavArea pose={isOpen ? 'open' : 'closed'}>
        <MenuToggle onClick={toggleMenu}>
          {sectionNames[section]}
          <DropDownMenuIcon isOpen={isOpen} />
        </MenuToggle>
        <Menu isOpen={isOpen}>
          {menu.map(category => (
            <Category
              key={category.id}
              {...category}
              content={content}
              contentId={id}
              section={section}
            />
          ))}
        </Menu>
      </ContentNavArea>
    );
  }
}

export default withTheme(ContentNav);
