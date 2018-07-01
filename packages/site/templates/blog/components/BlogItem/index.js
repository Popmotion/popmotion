import Link from 'next/link';
import { Container, Title, Description, Date } from './styled';

export default ({ id, title, description, published }) => (
  <Container>
    <Link href={`/blog/${id}`}>
      <a>
        <Title>{title}</Title>
        <Date>{published}</Date>
        <Description>{description}</Description>
      </a>
    </Link>
  </Container>
);
