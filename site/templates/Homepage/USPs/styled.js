import styled from 'styled-components';
import { cols, media } from '~/styles/vars';
import { fontSize, lineHeight, fontBold } from '~/styles/fonts';

const MAX_WIDTH = cols(60);

export const Container = styled.section`
  padding-top: ${cols(4)};
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.medium`
    padding-top: ${cols(2)};
  `}
`;

export const Blurb = styled.p`
  ${fontSize(24)}
  ${lineHeight(32)}
  max-width: ${cols(30)};
  text-align: center;
  margin-bottom: ${cols(4)};
  
  ${media.medium`
    ${fontSize(18)}
    ${lineHeight(26)}
    padding: ${cols(1)};
    margin-bottom: ${cols(2)};
  `}
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: ${cols(2)};
  overflow-x: hidden;
`;

export const SectionHeader = styled.h2`
  ${fontSize(48)}
  ${fontBold}
  text-align: center;
  margin-bottom: ${cols(2)};

  ${media.medium`
    ${fontSize(36)}
  `}
  
  ${media.small`
    ${fontSize(28)}
  `}
`;

export const ExampleContainer = styled.div`
  margin-bottom: ${cols(2)};
`;

export const ExampleHeader = styled.h3`
  ${fontSize(28)}
  ${lineHeight(28)}
  ${fontBold}
  margin-bottom: ${cols(1)};
  display: block;
  width: 100%;

  a {
    ${fontBold}
  }

  ${media.medium`
    ${fontSize(22)}
    ${lineHeight(22)}
  `}
  
  ${media.small`
    ${fontSize(18)}
    ${lineHeight(18)}
  `}
`;

export const Description = styled.p`
  ${fontSize(18)}
  ${lineHeight(28)}
  width: 50%;

  ${media.medium`
    width: 100%;
  `}
  
  ${media.small`
    ${fontSize(14)}
    ${lineHeight(22)}
    width: 100%;
  `}
`;

export const LiveContainer = styled.div``;

export const CenteredContent = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${media.large`
    margin: 0 ${cols(1)}
  `}
`;

