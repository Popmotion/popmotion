import { Container as MastheadContainer } from '../Masthead/styled';
import { Blurb as USPBlurb } from '../USPs/styled';
import { cols, LIGHT_GREY } from '~/styles/vars';

export const Container = MastheadContainer.extend`
  padding-top: ${cols(4)};
  border-top: ${LIGHT_GREY} 1px solid;
  border-bottom: none;
`;

export const Blurb = USPBlurb.extend`
  max-width: ${cols(40)};
  padding-bottom: ${cols(2)};
  margin: 0 auto;
`;
