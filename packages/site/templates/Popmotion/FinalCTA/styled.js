import styled from 'styled-components';
import { Centered } from '~/templates/global/grid';
import { cols, LIGHT_GREY } from '~/styles/vars';

export const Container = styled.section`
  padding-top: ${cols(4)};
  border-top: ${LIGHT_GREY} 1px solid;
  border-bottom: none;
`;

export const ContentContainer = Centered.extend`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
