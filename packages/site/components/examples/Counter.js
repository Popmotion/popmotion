import styled from 'styled-components';
import { ActionButton } from '~/templates/global/styled';
import { fontBold } from '~/styles/fonts';

const CounterContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
`;
const Counter = styled.span`
  font-size: 42px;
  text-align: center;
  ${fontBold}
`;

export default ({ code, autostart, start, id }) => (
  <CounterContainer id={id} innerRef={autostart ? start : null}>
    <Counter className="counter">0</Counter>
    {!autostart ? (
      <ActionButton onClick={start}>Start</ActionButton>
    ) : null}
  </CounterContainer>
);
