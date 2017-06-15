import styled from 'styled-components';
import { verticalGradient, MAIN, MAIN_FADE, WHITE, cols, media } from '~/styles/vars';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${cols(1)} ${cols(16)} ${cols(56)} 1fr;
  grid-template-rows: 75px auto;
  grid-template-areas:
    "left-margin header header header"
    "left-margin content-nav content right-margin";
  grid-row-gap: 65px;
  min-height: 100vh;

  ${media.large`
    grid-template-columns: ${cols(1)} ${cols(12)} 1fr 0;
  `}

  ${media.medium`
    grid-template-columns: 5px 1fr;
    grid-template-areas:
      "left-margin header"
      "left-margin content-nav"
      "left-margin content";
    grid-row-gap: ${cols(2)};
  `}
`;

export const LeftMargin = styled.div`
  background: ${verticalGradient(MAIN_FADE, MAIN)};
  grid-area: left-margin;
`;

export const RightMargin = styled.div`
  background: ${WHITE};
  grid-area: right-margin;
`;

export const HeaderArea = styled.div`
  grid-area: header;
`;

export const ContentArea = styled.article`
  grid-area: content;
  padding: 0 ${cols(3)} ${cols(3)} ${cols(1)};

  ${media.medium`
    padding: 0 ${cols(1)} ${cols(1)};
  `}
`;

export const ContentNavArea = styled.div`
  grid-area: content-nav;
  padding: 0 ${cols(2)} ${cols(3)};

  ${media.medium`
    padding: 0 ${cols(1)};
  `}
`;
