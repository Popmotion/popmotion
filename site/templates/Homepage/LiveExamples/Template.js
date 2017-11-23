import {
  Container,
  LiveExampleContainer,
  CodeContainer,
  ExampleContainer,
  CodePenLink
} from './styled';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting'; 

registerLanguage('javascript', js);

export default ({ children, code, hideOverflow, codepen }) => (
  <div>
    <Container hideOverflow={hideOverflow}>
      <ExampleContainer>
        <LiveExampleContainer>
          {children}
        </LiveExampleContainer>
        <CodeContainer>
          <SyntaxHighlighter language="javascript" style={codeThemeLarge}>
            {code}
          </SyntaxHighlighter>
        </CodeContainer>
      </ExampleContainer>
      {codepen && (
        <CodePenLink href={codepen} target="blank">
          <span>Fork on CodePen</span>
        </CodePenLink>
      )}
    </Container>
  </div>
);