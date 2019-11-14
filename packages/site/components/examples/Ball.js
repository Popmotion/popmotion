import styled from 'styled-components';
import { ActionButton } from '~/templates/global/styled';
import { verticalGradient, PINK, PINK_BURN, cols } from '~/styles/vars';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  padding: ${cols(1)};
`;

const Box = styled.span`
  width: 50px;
  height: 50px;
  background: ${verticalGradient(PINK, PINK_BURN)};
  border-radius: 50px;
`;

export default ({ autostart, start, id }) => (
  <Container id={id} ref={autostart ? start : null}>
    <Box className="ball" />
    {!autostart ? <ActionButton onClick={start}>Start</ActionButton> : null}
  </Container>
);
