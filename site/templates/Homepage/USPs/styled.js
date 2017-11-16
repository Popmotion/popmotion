import styled from 'styled-components';
import { fontSize, fontBold } from '~/styles/fonts';
import { ACTION, cols } from '~/styles/vars';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${cols(5)} 0;
`;

export const Blurb = styled.p`
  ${fontSize(24)}
  max-width: ${cols(30)};
  text-align: center;
  margin-bottom: ${cols(4)};
`;

export const SectionContainer = styled.section``;

export const SectionHeader = styled.h2`
  ${fontSize(48)}
  ${fontBold}
  text-align: center;
  margin-bottom: ${cols(4)};
`;

export const ExampleContainer = styled.div``;

export const ExampleHeader = styled.h3`
  ${fontSize(24)}
  ${fontBold}

  a {
    color: ${ACTION};
    ${fontBold}
  }
`;

export const Description = styled.p`
  max-width: 50%;
  ${fontSize(18)}
`;

export const LiveContainer = styled.div``;

export const Code = styled.code``;
