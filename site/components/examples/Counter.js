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

export default ({ start, id }) => (
  <CounterContainer id={id}>
    <Counter className="counter">0</Counter>
    <ActionButton onClick={start}>Start example</ActionButton>
  </CounterContainer>
);
