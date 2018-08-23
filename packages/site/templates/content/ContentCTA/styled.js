import styled from 'styled-components';
import { color } from '~/styles/vars';
import { Centered } from '~/templates/global/grid';
import { P as Paragraph } from '~/templates/global/styled';

export const Container = Centered.extend`
  background-image: linear-gradient(-180deg, #fff51c 0%, #e88003 100%);
  padding: 5px;
  margin-top: 80px;
`;

export const Content = styled.div`
  background: ${color.white};
  padding: 20px;
`;

export const P = Paragraph.extend`
  margin: 0;
`;

export const Support = styled.div`
  margin-top: 20px;

  a {
    font-size: 22px;
    font-weight: bold;
  }
`;
