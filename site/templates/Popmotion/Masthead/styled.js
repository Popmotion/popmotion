import styled, { css } from "styled-components";
import {
  WHITE,
  BLACK,
  ACTION_GRADIENT,
  ACTION_BURN,
  LIGHT_GREY,
  UNSKEW,
  SKEW,
  cols,
  media,
  color
} from "~/styles/vars";
import { fontSize, fontBold } from "~/styles/fonts";

export const Container = styled.section`
  background: ${({ theme }) => theme.mastheadBackground};
  z-index: 0;

  svg path {
    fill: ${WHITE};
  }
`;

export const MastheadContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-align: center;
  justify-content: center;
  text-align: center;
  margin: 0 ${cols(4)};
  padding-bottom: ${cols(4)};
  position: relative;
  z-index: 1;

  ${media.medium`
    margin: 0 ${cols(2)};
    padding-bottom: ${cols(2)};
  `};
`;

export const Title = styled.h1`
  display: block;
  overflow: hidden;
  margin-bottom: ${cols(1)};
`;

export const LogoContainer = styled.div`
  svg {
    ${({ width, height }) => `
      width: ${width}px!important; // eugh
      height: ${height}px!important;
    `};
  }

  ${media.medium`
    svg {
      ${({ width, height }) => `
        width: ${width * 0.75}px!important;
        height: ${height * 0.75}px!important;
      `}
    }
  `};

  ${media.small`
    svg {
      ${({ width, height }) => `
        width: ${width * 0.6}px!important;
        height: ${height * 0.6}px!important;
      `}
    }
  `};
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
  color: ${WHITE};
  
  ${media.medium`
    ${fontSize(18)}
    margin-bottom: ${cols(2)};
  `}
`;

export const CTA = styled.div`
  background: ${WHITE};
  margin: 0 auto;
  display: flex;
  transform: skewX(${SKEW});
  transition: transform 100ms cubic-bezier(.17,.67,.34,1.54);
  box-shadow: 0 2px 0 0 black;

  &:hover {
    transform: skewX(${SKEW}) scale(1.1);
  }

  a, button {
    ${fontSize(24)}
    ${fontBold}
    color: ${BLACK};
    cursor: pointer;
    text-decoration: none;
    padding: ${cols(1)} ${cols(2)};
    transform: skewX(${UNSKEW});
  }

  ${media.medium`
    a {
      ${fontSize(18)}
    }
  `}
  
  ${props =>
    props.brandFill &&
    css`
      background: ${props.theme.actionColor};

      a {
        color: ${color.white};
      }
    `};
`;
