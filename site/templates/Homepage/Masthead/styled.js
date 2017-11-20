import styled from 'styled-components';
import { WHITE, BLACK, ACTION_GRADIENT, ACTION_BURN, LIGHT_GREY, UNSKEW, SKEW, cols, media } from '~/styles/vars';
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

  ${media.medium`
    margin: 0 ${cols(2)};
    padding-bottom: ${cols(2)};
  `}
`;

export const Title = styled.h1`
  overflow: hidden;
  margin-bottom: ${cols(1)};
`;

export const Logo = styled(PopmotionLogo)`
  width: 283px;
  height: 64px;
  
  ${media.medium`
    width: 175px;
    height: 38px;
  `}
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
  
  ${media.medium`
    ${fontSize(18)}
    margin-bottom: ${cols(2)};
  `}
`;

export const CTA = styled.div`
  background: ${ACTION_GRADIENT};
  box-shadow: 0 1px 0 0 ${BLACK};
  text-shadow: 0 -1px 0 ${ACTION_BURN};
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

  ${media.medium`
    a {
      ${fontSize(18)}
    }
  `}
`;
