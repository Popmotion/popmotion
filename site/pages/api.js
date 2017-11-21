import Link from 'next/link';
import styled from 'styled-components';
import Header from '~/templates/global/Header';
import Footer from '~/templates/global/Footer';
import content from '~/data/content.json';
import menus from '~/data/menus.json';
import GlobalTemplate from '~/templates/global/Template';
import MenuPage from '~/templates/content/MenuPage';
import { H1, H2, H3, P } from '~/templates/global/styled';
import { LINK, LIGHT_GREY, cols } from '~/styles/vars';

const apiMenu = menus.api;
const apiContent = content.api;

export default () => (
  <GlobalTemplate title="API | Popmotion" description="Popmotion is a functional, reactive JavaScript motion library.">
    <Header section="api" />
    <MenuPage title="API" menu={menus.api} content={content.api} />
    <Footer />
  </GlobalTemplate>
);
