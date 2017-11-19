import styled from 'styled-components';
import { WHITE, BLACK, ACTION_GRADIENT, LIGHT_GREY, UNSKEW, SKEW, cols } from '~/styles/vars';
import { fontSize, fontBold } from '~/styles/fonts';
import PopmotionLogo from '~/components/icons/Logo';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
  text-align: center;
  border-bottom: ${LIGHT_GREY} 1px solid;
  margin: 0 ${cols(4)};
  padding-bottom: ${cols(4)};
`;

export const Title = styled.h1`
  overflow: hidden;
  margin-bottom: ${cols(1)};
`;

export const Logo = styled(PopmotionLogo)`
  width: 283px;
  height: 64px;
`;

export const LogoText = styled.div`
  width: 0px;
  height: 0px;
  text-indent: -9999px;
`;

export const Blurb = styled.h2`
  ${fontSize(24)}
  ${fontBold}
  margin-bottom: ${cols(3)};
`;

export const CTA = styled.div`
  background: ${ACTION_GRADIENT};
  box-shadow: 0 1px 0 0 ${BLACK};
  margin: 0 auto;
  display: flex;
  transform: skewX(${SKEW});

  a {
    ${fontSize(24)}
    ${fontBold}
    color: ${WHITE};
    text-decoration: none;
    padding: ${cols(1)} ${cols(2)};
    transform: skewX(${UNSKEW});
  }
`;
