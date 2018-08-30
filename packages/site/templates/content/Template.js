import {
  Container,
  ContentArea,
  NextLink,
  NextLinkContainer,
  NextLinkSmall,
  EmptyCol
} from './styled';
import { Content } from '~/templates/global/grid';
import ContentNav from './ContentNav';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import ContentCTA from './ContentCTA';
import PostDetails from './PostDetails';
import themes from '~/styles/themes';
import authorData from '~/data/authors.json';

export default class Template extends React.PureComponent {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };

  render() {
    const {
      children,
      title,
      id,
      description,
      section,
      published,
      author,
      theme,
      next
    } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <GlobalTemplate
        title={`${title} | ${themes[theme].name}`}
        description={description}
        theme={theme}
      >
        <ContentPage section={section}>
          <Container>
            {section !== 'blog' ? (
              <ContentNav
                isOpen={isMenuOpen}
                toggleMenu={this.toggleMenu}
                section={section}
                id={id}
              />
            ) : (
              <EmptyCol />
            )}
            <ContentArea pose="flip">
              <Content>
                {published || authorData[author] ? (
                  <PostDetails
                    published={published}
                    name={
                      author && authorData[author] && authorData[author].name
                    }
                    avatar={
                      author && authorData[author] && authorData[author].avatar
                    }
                  />
                ) : null}
                {children}
                {next && themes[theme].data.content[section][next] ? (
                  <NextLinkContainer>
                    <NextLink href={`/${section}/${next}`}>
                      <NextLinkSmall>Next</NextLinkSmall>
                      {themes[theme].data.content[section][next].title}
                    </NextLink>
                  </NextLinkContainer>
                ) : null}
              </Content>
              <ContentCTA />
            </ContentArea>
          </Container>
        </ContentPage>
      </GlobalTemplate>
    );
  }
}
