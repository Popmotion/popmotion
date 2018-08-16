import { MajorCentered } from '~/templates/global/grid';
import { cols, LIGHT_GREY } from '~/styles/vars';

const FrameContainer = MajorCentered.withComponent('div').extend`
  margin-top: ${cols(2)};
  margin-bottom: ${cols(2)};
`;

export default ({ id, height = 500 }) => (
  <FrameContainer>
    <iframe
      height={height}
      scrolling="no"
      title=""
      src={`https://codesandbox.io/embed/${id}`}
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{ width: '100%' }}
    />
  </FrameContainer>
);
