import {
  Container,
  ContentArea,
  NextLink,
  NextLinkContainer,
  NextLinkSmall
} from './styled';
import { Content } from '~/templates/global/grid';
import ContentNav from './ContentNav';
import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { DatePublished } from '~/templates/global/styled';
import themes from '~/styles/themes';

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
            ) : null}
            <ContentArea pose="flip">
              <Content>
                {published && <DatePublished>{published}</DatePublished>}
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
            </ContentArea>
          </Container>
        </ContentPage>
      </GlobalTemplate>
    );
  }
}
