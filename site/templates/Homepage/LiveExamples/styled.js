import styled from 'styled-components';
import { fontBold, fontSize } from '~/styles/fonts';
import { cols, WHITE, ENTITY, SUPER_LIGHT_GREY, LIGHT_GREY, SKEW, UNSKEW } from '~/styles/vars';
import { ExampleContainer } from '../USPs/styled';

export const Container = styled.div`
  background: ${SUPER_LIGHT_GREY};
  margin: ${cols(2)} 0 ${cols(4)};
  display: flex;
`;

export const LiveExampleContainer = styled.div`
  flex: 50%;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  min-height: 250px;
`;

export const ExamplePositioning = styled.div`
  flex: 0 1 450px;
  display: flex;
`;

export const AlignCenter = ExamplePositioning.extend`
  align-items: center;
  justify-content: center;
`;

export const VerticalCenter = ExamplePositioning.extend`
  align-items: center;
`;

export const TopLeft = ExamplePositioning.extend`
  justify-content: flex-start;
  padding-top: ${cols(1)};
`;

export const BottomCenter = ExamplePositioning.extend`
  align-items: flex-end;
  justify-content: center;
`;

export const CodeContainer = styled.div`
  background: ${LIGHT_GREY};
  border-left: 2px solid ${ENTITY};
  transform: skewX(${SKEW});
  flex: calc(50% + 30px);
  margin-right: -30px;
  padding-left: ${cols(1)};
  display: flex;
  align-items: center;
  
  pre {
    transform: skewX(${UNSKEW});
  }
`;

export const Box = styled.div`
  width: 80px;
  height: 80px;
  background: ${ENTITY};
`;

export const Ball = styled.div`
  width: 100px;
  height: 100px;
  background: ${ENTITY};
  border-radius: 50%;
  color: ${WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  ${fontSize(18)}
  ${fontBold}
  margin: 0 auto;
  cursor: default;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: stretch;
  height: 150px;
  position: relative;
`;

export const Item = styled.div`
  background: ${ENTITY};
  border-radius: 5px;
  margin-right: ${cols(1)};
  flex: 0 0 110px;
`;
