import { Container, List, Item, Link, Header } from './styled';

const generateSection = (list, maxLevel) => (
  <List>{list.map((item) => generateLink(item, maxLevel))}</List>
);

const generateLink = ({ title, id, children, level }, maxLevel) => {
  return maxLevel !== undefined && level > maxLevel ? null : (
    <Item key={id}>
      <Link href={`#${id}`}>{title}</Link>
      {children && generateSection(children, maxLevel)}
    </Item>
  );
};

export default ({ toc, maxLevel }) => (
  <Container>
    <Header>Contents</Header>
    {generateSection(toc[0].children, maxLevel)}
  </Container>
);
