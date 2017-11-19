import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { cols, ENTITY, SUPER_LIGHT_GREY, LIGHT_GREY, SKEW, UNSKEW } from '~/styles/vars';

export const Container = styled.div`
  background: ${SUPER_LIGHT_GREY};
  margin: ${cols(2)} 0;
  display: flex;
  overflow-x: hidden;
`;

export const LiveExampleContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ExamplePositioning = styled.div`
  flex: 0 1 450px;
`;

export const CodeContainer = styled.div`
  background: ${LIGHT_GREY};
  border-left: 2px solid ${ENTITY};
  transform: skewX(${SKEW});
  flex: calc(50% + 30px);
  margin-right: -30px;
  padding-left: ${cols(1)};
  
  pre {
    transform: skewX(${UNSKEW});
  }
`;

export const Box = styled.div`
  width: 80px;
  height: 80px;
  background: ${ENTITY};
`;
