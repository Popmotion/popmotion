import styled from 'styled-components';
import { fontSize } from '~/styles/fonts';
import { WHITE } from '~/styles/vars';

export const GetStartedLink = styled.span`
  a {
    display: block;
    background: rgba(0, 0, 0, 0.25);
    border: 2px solid ${WHITE};
    border-radius: 500px;
    width: 190px;
    ${fontSize(24)}
    padding: 15px 20px;
    margin: 0 auto;
    text-decoration: none;
    color: ${WHITE};
  }
`;
