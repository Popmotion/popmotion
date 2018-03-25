import { Fragment } from "react";
import Header from "~/templates/global/Header";
import Footer from "~/templates/global/Footer";
import GlobalTemplate from "~/templates/global/Template";
import MenuPage from "~/templates/content/MenuPage";

export default () => (
  <GlobalTemplate
    title="Blog | Popmotion"
    description="Popmotion is a functional, reactive JavaScript motion library."
    theme="popmotion"
  >
    <Header section="blog" />
    <MenuPage section="blog" title="Blog" />
    <Footer />
  </GlobalTemplate>
);
