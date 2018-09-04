import {
  Container,
  LiveExampleContainer,
  CodeContainer,
  ExampleContainer,
  CodePenLink,
  TabsContainer,
  Tab
} from './styled';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/dist/languages/javascript';
import { codeThemeLarge } from '~/styles/syntax-highlighting';

registerLanguage('javascript', js);

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const Tabs = ({ current, setTo }) => (
  <TabsContainer>
    {Object.keys(setTo)
      .sort()
      .map(key => (
        <Tab key={key} onClick={setTo[key]} isActive={current === key}>
          {capitalize(key)}
        </Tab>
      ))}
  </TabsContainer>
);

export default ({
  children,
  code,
  hideOverflow,
  codepen,
  setExampleTo,
  currentExample
}) => {
  const multi = typeof code !== 'string';

  return (
    <div>
      <Container hideOverflow={hideOverflow}>
        <ExampleContainer>
          <LiveExampleContainer>{children}</LiveExampleContainer>
          <CodeContainer>
            <SyntaxHighlighter language="javascript" style={codeThemeLarge}>
              {multi ? code[currentExample] : code}
            </SyntaxHighlighter>
          </CodeContainer>
        </ExampleContainer>
        {codepen && (
          <CodePenLink href={codepen} target="blank">
            <span>Fork on CodePen</span>
          </CodePenLink>
        )}
        {multi && <Tabs current={currentExample} setTo={setExampleTo} />}
      </Container>
    </div>
  );
};
