import {
  ExampleContainer,
  ExampleHeader,
  Description,
  LiveContainer,
  CenteredContent
} from './styled';
import Link from 'next/link';

export default ({ title, children, link, description }) => (
  <ExampleContainer>
    <CenteredContent>
      <ExampleHeader>
        {link ? (
          <Link href={link}><a>{title}</a></Link>
        ) : title}
      </ExampleHeader>
      <Description>{description}</Description>
    </CenteredContent>
    {children}
  </ExampleContainer>
);