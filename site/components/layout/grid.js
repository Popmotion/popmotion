import styled from 'styled-components';
import { verticalGradient, MAIN, MAIN_FADE } from '~/styles/vars';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 209px 645px 9fr;
  grid-template-rows: 75px auto;
  grid-template-areas:
    "left-margin header-logo nav right-margin"
    "left-margin content-nav content right-margin";
  grid-column-gap: 40px;
  grid-row-gap: 75px;
  min-height: 100vh;
`;

export const LeftMargin = styled.div`
  background: ${verticalGradient(MAIN, MAIN_FADE)};
  grid-area: left-margin;
`;

export const RightMargin = styled.div`
  background: ${verticalGradient(MAIN, MAIN_FADE)};
  grid-area: right-margin;
`;

export const LogoArea = styled.div`
  align-self: end;
  grid-area: header-logo;
`;

export const NavArea = styled.nav`
  align-self: end;
  grid-area: nav;
  padding-bottom: 10px;
`;

export const ContentArea = styled.div`
  grid-area: content;
`;

export const ContentNavArea = styled.div`
  grid-area: content-nav;
`;
