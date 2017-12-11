import { Centered } from '~/templates/global/grid';

const FrameContainer = Centered.withComponent('div');

export default ({ id, height=447 }) => (
  <FrameContainer>
    <iframe height={height} scrolling="no" title="" src={`https://codepen.io/popmotion/embed/${id}/?height=${height}&theme-id=17364&default-tab=result&embed-version=2`} frameBorder="no" allowTransparency="true" allowFullScreen="true" style={{ width: '100%' }} />
  </FrameContainer>
);
