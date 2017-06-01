import styled from 'styled-components';
import { verticalGradient, MAIN, MAIN_FADE, cols } from '~/styles/vars';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr ${cols(16)} ${cols(56)} 9fr;
  grid-template-rows: 75px auto;
  grid-template-areas:
    "left-margin header header right-margin"
    "left-margin content-nav content right-margin";
  grid-row-gap: 65px;
  min-height: 100vh;
`;

export const LeftMargin = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  grid-area: left-margin;
`;

export const RightMargin = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  grid-area: right-margin;
`;

export const HeaderArea = styled.div`
  grid-area: header;
`;

export const ContentArea = styled.article`
  grid-area: content;
  padding: 0 ${cols(3)} ${cols(3)} ${cols(1)};
`;

export const ContentNavArea = styled.div`
  grid-area: content-nav;
  padding: 0 ${cols(2)} ${cols(3)};
`;
