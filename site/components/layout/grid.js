import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 1000px 2fr;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "left-margin header-logo nav right-margin"
    "left-margin content-nav content right-margin";
  grid-column-gap: 20px;
  grid-row-gap: 100px;
  min-height: 100vh;
`;

export const LeftMargin = styled.div`
  background-color: red;
  grid-area: left-margin;
`;

export const RightMargin = styled.div`
  background-color: red;
  grid-area: right-margin;
`;

export const LogoArea = styled.div`
  grid-area: header-logo;
`;

export const NavArea = styled.nav`
  grid-area: nav;
`;

export const ContentArea = styled.div`
  grid-area: content;
`;

export const ContentNavArea = styled.div`
  grid-area: content-nav;
`;
