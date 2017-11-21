import Link from 'next/link';
import { List, Content, Category, ArticleHeader, ItemContainer } from '~/templates/global/grid';
import { H1, H2, H3, P } from '~/templates/global/styled';
import { SectionContainer } from '../global/grid';

export default ({ content, menu }) => (
  <Content>
    <ArticleHeader>
      API
    </ArticleHeader>
    <ul>
      {menu.map((tl) => (
        <SectionContainer key={tl.id}>
          {content[tl.id]
            ? (
              <div>
                <H2>
                  <Link href={`/api/${tl.id}`}>
                    <a>{tl.title}</a>
                  </Link>
                </H2>
                <P>{content[tl.id].description}</P>
              </div>
            )
            : <H2>{tl.title}</H2>
          }
          <ul>
          {tl.posts ? tl.posts.map((sl) => (
            <ItemContainer key={sl.id}>
              <H3>
                <Link href={`/api/${sl.id}`}>
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
