import ContentTemplate from '~/templates/content/Template';
import { Centered } from '~/templates/global/grid';
import styled from 'styled-components';
import { color } from '~/styles/vars';

const Choose = Centered.withComponent('h2').extend`
  color: #333;
  margin: 0 auto;
  display: block;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  border: 2px dashed #333;
  margin-top: 50px;
  padding: 40px;
  border-radius: 20px;
`;

export default () => (
  <ContentTemplate
    title="Examples"
    theme="pose"
    description="Interactive examples for the Pose animation library"
    section="examples"
  >
    <Choose>Choose an example from the menu</Choose>
  </ContentTemplate>
);
