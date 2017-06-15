import Link from 'next/link';
import styled from 'styled-components';
import Header from '~/templates/global/Header';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import { Container, LeftMargin, ContentArea, HeaderArea } from '~/components/layout/grid';
import { H1, H2, H3, P } from '~/templates/global/primatives';
import { LINK, LIGHT_GREY, cols } from '~/styles/vars';

const apiMenu = menus.api;
const apiContent = content.api;

const CategoriesContainer = styled.ul`
  display: block;
`;

const Category = styled.li`
  a {
    color: ${LINK};
    text-decoration: none;
  }
`;

const PagesContainer = styled.ul`
  display: block;
  margin-bottom: ${cols(3)};
  border-left: 1px solid ${LIGHT_GREY};
  padding-left: ${cols(1)};
`;

const Page = styled.li``;

export default () => (
  <GlobalTemplate title="API" description="">
    <Container>
      <HeaderArea>
        <Header section="api" />
      </HeaderArea>
      <ContentArea>
        <H1>API</H1>
        <CategoriesContainer>
          {apiMenu.map((tl) => (
            <Category>
              <H2>
                <Link href={`/api/${tl.id}`}>
                  <a>{tl.title}</a>
                </Link>
              </H2>
              <P>{apiContent[tl.id].description}</P>
              {tl.posts ? (
                <PagesContainer>
                  {tl.posts.map((sl) => (
                    <Page>
                      <H3>
                        <Link href={`/api/${sl.id}`}>
                          <a>{sl.title}</a>
                        </Link>
                      </H3>
                      <P>{apiContent[sl.id].description}</P>
                    </Page>
                  ))}
                </PagesContainer>
              ) : null}
            </Category>
          ))}
        </CategoriesContainer>
      </ContentArea>
      <LeftMargin />
    </Container>
  </GlobalTemplate>
);
