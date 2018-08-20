import { Container, List, Item, Link, Header } from './styled';

const generateSection = list => <List>{list.map(generateLink)}</List>;

const generateLink = ({ title, id, children, level }) => (
  <Item key={id}>
    <Link href={`#${id}`}>{title}</Link>
    {children && generateSection(children)}
  </Item>
);

export default ({ toc }) => (
  <Container>
    <Header>Contents</Header>
    {generateSection(toc[0].children)}
  </Container>
);
