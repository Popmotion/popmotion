import Link from 'next/link';
import { Content, ItemContainer } from '~/templates/global/grid';
import { H2, H3, P, ArticleHeader, DatePublished } from '~/templates/global/styled';
import { SectionContainer } from '../global/grid';

export default ({ content, menu, title, section }) => (
  <Content>
    <ArticleHeader>
      {title}
    </ArticleHeader>
    <ul>
      {menu.map((tl) => (
        <SectionContainer key={tl.id}>
          {content[tl.id]
            ? (
              <div>
                <H2>
                  <Link href={`/${section}/${tl.id}`}>
                    <a>{tl.title}</a>
                  </Link>
                </H2>
                {content[tl.id].published && (
                  <DatePublished>{content[tl.id].published}</DatePublished>
                )}
                <P>{content[tl.id].description}</P>
              </div>
            )
            : <H2>{tl.title}</H2>
          }
          <ul>
          {tl.posts ? tl.posts.map((sl) => (
            <ItemContainer key={sl.id}>
              <H3>
                <Link href={`/${section}/${sl.id}`}>
                  <a>{sl.title}</a>
                </Link>
              </H3>
              <P>{content[sl.id].description}</P>
            </ItemContainer>
          )) : null}
          </ul>
        </SectionContainer>
      ))}
    </ul>
  </Content>
);
