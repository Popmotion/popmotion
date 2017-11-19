import {
  Container,
  LiveExampleContainer,
  CodeContainer,
  AlignCenter
} from './styled';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting'; 

registerLanguage('javascript', js);

export default ({ children, code }) => (
  <Container>
    <LiveExampleContainer>
      {children}
    </LiveExampleContainer>
    <CodeContainer>
      <SyntaxHighlighter language="javascript" style={codeThemeLarge}>
        {code}
      </SyntaxHighlighter>
    </CodeContainer>
  </Container>
);