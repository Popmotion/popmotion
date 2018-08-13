import { Fragment } from 'react';
import SiteLink from '~/components/layout/SiteLink';
import {
  Container,
  Title,
  Description,
  Date,
  Subtitle,
  TitleContainer
} from '../../blog/components/BlogItem/styled';
import { withTheme } from 'styled-components';

const MenuItem = ({ id, title, content, section }) => (
  <Container>
    <Subtitle>
      <SiteLink href={`/${section}/${id}`}>{title}</SiteLink>
    </Subtitle>
    <Description>{content[id].description}</Description>
  </Container>
);

const MenuSection = ({ id, title, content, section, posts }) => (
  <Container isSection>
    <TitleContainer>
      {content[id] ? (
        <Fragment>
          <Title>
            <SiteLink href={`/${section}/${id}`}>{title}</SiteLink>
          </Title>
          <Description>{content[id].description}</Description>
        </Fragment>
      ) : (
        <Title>{title}</Title>
      )}
    </TitleContainer>
    {posts ? (
      <ul>
        {posts.map(sl => (
          <MenuItem
            id={sl.id}
            key={sl.id}
            title={sl.title}
            content={content}
            section={section}
          />
        ))}
      </ul>
    ) : null}
  </Container>
);

const BlogList = ({ theme, section }) => {
  const { generateSiteUrl } = theme.data;
  const content = theme.data.content[section];
  const menu = theme.data.menus[section];

  return (
    <ul>
      {menu.map(({ id, title, posts }) => (
        <MenuSection
          id={id}
          key={id}
          content={content}
          section={section}
          title={title}
          posts={posts}
        />
      ))}
    </ul>
  );
};

export default withTheme(BlogList);
