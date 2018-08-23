import styled from 'styled-components';
import { fontSize, fontBold } from '~/styles/fonts';
import { cols, BLACK, LIGHT_GREY, BRAND, media } from '~/styles/vars';
import { htmlUnencode } from '~/utils/string';
import SiteLink from '~/components/layout/SiteLink';
import { Centered } from '~/templates/global/grid';
import posed from 'react-pose';

export const Container = styled.div`
  position: relative;
  margin: 75px 0;
  display: flex;
  justify-content: space-between;

  ${media.large`display: block;`};
`;

export const ContentArea = styled(
  posed.div({
    flip: {
      transition: { type: 'spring', stiffness: 1000, damping: 35 }
    }
  })
)`
  width: calc(100% - (100vw - ${cols(48)}) / 2);

  ${media.large`width: 100%;`};
`;

const ImgFrame = styled.span`
  max-width: ${cols(43)};
  border-bottom: 1px solid ${LIGHT_GREY};
  display: block;
  padding: ${cols(1)} 0 ${cols(2)};
`;

const Image = styled.img`
  margin: 0 auto;
  display: block;
  max-width: 90vw;
`;

const Caption = styled.span`
  ${fontSize(14)}
  color: ${BLACK};
  display: block;
  text-align: center;
  margin-top: ${cols(1)};
`;

export const Img = ({ className, alt, ...props }) => (
  <ImgFrame className={className} {...props}>
    <Image {...props} />
    {alt ? <Caption>{htmlUnencode(alt)}</Caption> : null}
  </ImgFrame>
);

export const NextLinkContainer = styled(Centered)`
  border-top: 1px ${BRAND} solid;
  margin-top: ${cols(2)};
  padding-top: ${cols(2)};
  padding-bottom: ${cols(2)};
  display: flex;
  justify-content: flex-end;

  a {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 28px;
    ${fontBold};

    span {
      font-size: 18px;
      font-weight: normal;
    }
  }
`;

export const NextLink = styled(SiteLink)`
  display: block;
`;

export const NextLinkSmall = styled.span``;
