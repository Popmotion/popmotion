import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { cols, BLACK, LIGHT_GREY } from '~/styles/vars';
import { htmlUnencode } from '~/utils/string';

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

export const Img = ({ className, alt, ...props}) => (
  <ImgFrame className={className} {...props}>
    <Image {...props} />
    {alt ? <Caption>{htmlUnencode(alt)}</Caption> : null}
  </ImgFrame>
);
