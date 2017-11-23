import { Centered } from '~/templates/global/grid';

const FrameContainer = Centered.withComponent('div');

export default ({ id }) => (
  <FrameContainer>
    <iframe height='447' scrolling='no' title='Rotating dial with spin momentum - made with Popmotion ' src={`https://codepen.io/popmotion/embed/${id}/?height=447&theme-id=17364&default-tab=result&embed-version=2`} frameborder='no' allowtransparency='true' allowfullscreen='true' style={{ width: '100%'}} />
  </FrameContainer>
);
