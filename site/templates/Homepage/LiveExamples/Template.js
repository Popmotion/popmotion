import {
  Container,
  LiveExampleContainer,
  CodeContainer
} from './styled';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting'; 

registerLanguage('javascript', js);

export default ({ children, code, hideOverflow }) => (
  <Container hideOverflow={hideOverflow}>
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