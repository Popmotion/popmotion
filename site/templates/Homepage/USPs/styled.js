import styled from 'styled-components';
import { ACTION, cols } from '~/styles/vars';
import { fontSize, lineHeight, fontBold } from '~/styles/fonts';

export const Container = styled.section`
  padding-top: ${cols(4)};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Blurb = styled.p`
  ${fontSize(24)}
  ${lineHeight(32)}
  max-width: ${cols(30)};
  text-align: center;
  margin-bottom: ${cols(4)};
`;

export const SectionContainer = styled.section`
  width: 100%;
`;

export const SectionHeader = styled.h2`
  ${fontSize(48)}
  ${fontBold}
  text-align: center;
  margin-bottom: ${cols(2)};
`;

export const ExampleContainer = styled.div`
`;

export const ExampleHeader = styled.h3`
  ${fontSize(28)}
  ${lineHeight(28)}
  ${fontBold}
  margin-bottom: ${cols(1)};

  a {
    ${fontBold}
  }
`;

export const Description = styled.p`
  ${fontSize(18)}
  ${lineHeight(28)}
  width: 50%;
`;

export const LiveContainer = styled.div``;

