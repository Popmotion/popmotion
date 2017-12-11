import styled from 'styled-components';
import { fontBold, fontSize, lineHeight } from '~/styles/fonts';
import { cols, WHITE, ENTITY, GREEN, ACTION, BRAND, SUPER_LIGHT_GREY, LIGHT_GREY, SKEW, UNSKEW, media } from '~/styles/vars';

export const Container = styled.div`
  background: ${SUPER_LIGHT_GREY};
  display: flex;
  margin: ${cols(2)} 0 ${cols(4)};
  position: relative;
`;

export const ExampleContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;

  ${media.large`flex-wrap: wrap;`}
`;

export const LiveExampleContainer = styled.div`
  flex: 0 0 50%;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  min-height: 250px;

  ${media.large`
    flex: 0 0 100%;
  `}
`;

export const ExamplePositioning = styled.div`
  flex: 0 1 450px;
  max-width: 450px;
  display: flex;
  perspective: 500px;
  transform-style: preserve-3d;
  
  ${media.large`
    flex: 0 0 100%;
  `}
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

export const StackedLeft = ExamplePositioning.extend`
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
`;

export const CodePenLink = styled.a`
  position: absolute;
  background: ${ACTION};
  bottom: ${cols(1)};
  right: ${cols(1)};
  transform: skewX(${SKEW});
  padding: 5px 8px;
  
  span {
    color: white;
    display: block;
    transform: skewX(${UNSKEW});
  }
`;

export const CodeContainer = styled.div`
  background: ${LIGHT_GREY};
  border-left: 2px solid ${ENTITY};
  transform: skewX(${SKEW});
  flex: 0 0 calc(50% + 30px);
  margin-right: -30px;
  padding-left: ${cols(1)};
  display: flex;
  align-items: center;
  
  pre {
    transform: skewX(${UNSKEW});
    line-height: 18px;
  }

  ${media.large`
    flex: 0 0 100%;
    transform: none;
    padding-left: 0;
    border: none;
    border-top: 2px solid ${ENTITY};

    pre {
      transform: none;
      line-height: 18px;
    }
  `}
`;

export const ExampleItem = styled.div`
  background: ${ENTITY};
  color: ${WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  ${fontSize(18)}
  ${fontBold}
  cursor: default;
  text-align: center;
`;

export const Box = ExampleItem.extend`
  width: 80px;
  height: 80px;
`;

export const Ball = ExampleItem.extend`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  transform-origin: 50% 100%;

  ${media.medium`
    width: 80px;
    height: 80px;
  `}
`;

export const Carousel = styled.div`
  background: rgba(0,0,0,0);
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
  
  &:nth-child(4n + 2) {
    background: ${GREEN};
  }
  
  &:nth-child(4n + 3) {
    background: ${BRAND};
  }
  
  &:nth-child(4n + 4) {
    background: ${ACTION};
  }
`;

export const SmallBall = Ball.extend`
  width: 50px;
  height: 50px;
  margin: 0;
  
  ${media.medium`
    width: 50px;
    height: 50px;
  `}
`;

export const MediumBall = Ball.extend`
  width: 75px;
  height: 75px;
  margin-right: 15px;
  background: ${BRAND};
  
  &:nth-child(4n + 2) {
    background: ${GREEN};
  }
  
  &:nth-child(4n + 3) {
    background: ${ACTION};
  }
  
  &:nth-child(4n + 4) {
    background: ${ENTITY};
  }
`;

export const ColorPanel = styled.div`
  width: 250px;
  height: 175px;
  border-radius: 5px;
`;

export const ThreeContainer = ExamplePositioning.extend`
  height: 100%;
  min-height: 300px;
`;

export const ModalShade = styled.div`
  opacity: 0;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.4) 0, rgba(0,0,0,0.8) 100%);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  will-change: opacity;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Modal = styled.div`
  opacity: 0;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  background: white;
  border-radius: 5px;
  padding: 30px 45px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalActions = styled.div`
  align-self: flex-end;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: ${ACTION};
  font-size: 24px;
  border: none;
  padding: 20px 25px;
`;

export const ModalCancel = ModalButton.extend`
  background-color: white;
  color: ${BRAND};
`;

export const ModalOk = ModalButton.extend`
  background-color: ${GREEN};
`;

export const ModalHeader = styled.h2`
  ${fontSize(48)}
  ${lineHeight(54)}
  ${fontBold}
  margin-bottom: 20px;
`;
