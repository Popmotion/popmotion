import { MajorCentered } from '~/templates/global/grid';
import { cols } from '~/styles/vars';

const FrameContainer = MajorCentered.withComponent('div').extend`
  margin-top: ${cols(2)};
  margin-bottom: ${cols(2)};
`;

export default ({ id, example, height = 500 }) => (
  <FrameContainer>
    <iframe
      height={height}
      scrolling="no"
      title=""
      src={`https://codesandbox.io/embed/${example ? `github/Popmotion/popmotion/tree/master/examples/${example}` : id}`}
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{ width: '100%' }}
    />
  </FrameContainer>
);
