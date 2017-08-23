import styled from 'styled-components';
import { ActionButton } from '~/templates/global/primatives';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
`;
const Swatch = styled.div`
  flex: 0 0 30%;
`;

export default ({ start, id }) => (
  <Container id={id}>
    <Swatch className="swatch" />
    <ActionButton onClick={start}>Start</ActionButton>
  </Container>
);
