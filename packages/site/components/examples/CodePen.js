import { Centered } from '~/templates/global/grid';
import { cols, LIGHT_GREY } from '~/styles/vars';
import styled from 'styled-components';

const FrameContainer = styled(Centered.withComponent('div'))`
  margin-top: ${cols(2)};
  margin-bottom: ${cols(2)};
  border: 2px solid ${LIGHT_GREY};
`;

export default ({ id, height = 447 }) => (
  <FrameContainer>
    <iframe
      height={height}
      scrolling="no"
      title=""
      src={`https://codepen.io/popmotion/embed/${id}/?height=${height}&theme-id=17364&default-tab=result&embed-version=2`}
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{ width: '100%' }}
    />
  </FrameContainer>
);
