import Link from 'next/link';
import styled from 'styled-components';
import Header from '~/templates/global/Header';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import { Container, LeftMargin, ContentArea, HeaderArea } from '~/components/layout/grid';
import { H1, H3, P } from '~/templates/global/primatives';
import { LINK } from '~/styles/vars';

const blogMenu = menus.blog;
const blogContent = content.blog;

const CategoriesContainer = styled.ul`
  display: block;
`;

const Category = styled.li`
  a {
    color: ${LINK};
    text-decoration: none;
  }
`;

const Published = P.extend`
  font-size: 12px;
`;

export default () => (
  <GlobalTemplate title="API | Popmotion" description="">
    <Container>
      <HeaderArea>
        <Header section="api" />
      </HeaderArea>
      <ContentArea>
        <H1>Blog</H1>
        <CategoriesContainer>
          {blogMenu.map((tl) => (
            <Category key={tl.id}>
              <H3>
                <Link href={`/blog/${tl.id}`}>
                  <a>{tl.title}</a>
                </Link>
              </H3>
              <Published>{blogContent[tl.id].published}</Published>
            </Category>
          ))}
        </CategoriesContainer>
      </ContentArea>
      <LeftMargin />
    </Container>
  </GlobalTemplate>
);
