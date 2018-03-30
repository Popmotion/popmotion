import { withTheme } from 'styled-components';
import Link from 'next/link';
import { Content, ItemContainer } from '~/templates/global/grid';
import {
  H2,
  H3,
  P,
  ArticleHeader,
  DatePublished
} from '~/templates/global/styled';
import SiteLink from '~/components/layout/SiteLink';
import { SectionContainer } from '../global/grid';

const MenuPage = ({ theme, title, section }) => {
  const { generateSiteUrl } = theme.data;
  const content = theme.data.content[section];
  const menu = theme.data.menus[section];

  return (
    <Content>
      <ArticleHeader>{title}</ArticleHeader>
      <ul>
        {menu.map(tl => (
          <SectionContainer key={tl.id}>
            {content[tl.id] ? (
              <div>
                <H2>
                  <SiteLink href={`/${section}/${tl.id}`}>{tl.title}</SiteLink>
                </H2>
                {content[tl.id].published && (
                  <DatePublished>{content[tl.id].published}</DatePublished>
                )}
                <P>{content[tl.id].description}</P>
              </div>
            ) : (
              <H2>{tl.title}</H2>
            )}
            <ul>
              {tl.posts
                ? tl.posts.map(sl => (
                    <ItemContainer key={sl.id}>
                      <H3>
                        <SiteLink href={`/${section}/${sl.id}`}>
                          {sl.title}
                        </SiteLink>
                      </H3>
                      <P>{content[sl.id].description}</P>
                    </ItemContainer>
                  ))
                : null}
            </ul>
          </SectionContainer>
        ))}
      </ul>
    </Content>
  );
};

export default withTheme(MenuPage);
