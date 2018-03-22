import { NextLink, NextLinkContainer } from "./styled";
import { Fragment } from "react";
import { Content } from "~/templates/global/grid";
import ContentNav from "./ContentNav";
import GlobalTemplate from "~/templates/global/Template";
import { DatePublished } from "~/templates/global/styled";
import Header from "~/templates/global/Header";
import Footer from "~/templates/global/Footer";
import themes from "~/styles/themes";

export default ({
  children,
  title,
  id,
  description,
  section,
  published,
  theme,
  next
}) => (
  <GlobalTemplate
    title={`${title} | ${themes[theme].name}`}
    description={description}
    theme={theme}
  >
    <Header section={section} />
    <ContentNav section={section} id={id} />
    <Content>
      {published && <DatePublished>{published}</DatePublished>}
      {children}
      {next && themes[theme].data.content[section][next] ? (
        <NextLinkContainer>
          <NextLink href={`/${section}/${next}`}>
            Next: {themes[theme].data.content[section][next].title}
          </NextLink>
        </NextLinkContainer>
      ) : null}
    </Content>
    <Footer />
  </GlobalTemplate>
);
