import { SectionContainer, SectionHeader } from './styled';

export default ({ title, children }) => (
  <SectionContainer>
    <SectionHeader>{title}</SectionHeader>
    {children}
  </SectionContainer>
);