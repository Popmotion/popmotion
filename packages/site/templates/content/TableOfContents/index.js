import { Container, List, Item, Link, Header } from './styled';

const generateSection = list => <List>{list.map(generateLink)}</List>;

const generateLink = ({ title, id, children }) => (
  <Item>
    <Link href={`#${id}`}>{title}</Link>
    {children && generateSection(children)}
  </Item>
);

export default ({ toc }) => (
  <Container>
    <Header>Contents</Header>
    {generateSection(toc)}
  </Container>
);
