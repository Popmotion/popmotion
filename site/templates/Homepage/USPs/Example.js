import {
  ExampleContainer,
  ExampleHeader,
  Description,
  LiveContainer,
  Code
} from './styled';
import Link from 'next/link';
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { theme } from '~/styles/syntax-highlighting'; 


registerLanguage('javascript', js);

export default ({ title, children, link, description, code }) => (
  <ExampleContainer>
    <ExampleHeader>
      <Link href={link}><a>{title}</a></Link>
    </ExampleHeader>
    <Description>{description}</Description>
    <LiveContainer>
      {children}
      <SyntaxHighlighter language='javascript' style={theme}>
        {code}
      </SyntaxHighlighter>
    </LiveContainer>
  </ExampleContainer>
);