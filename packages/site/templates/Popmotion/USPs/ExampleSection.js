import { SectionContainer, SectionHeader } from './styled';

export default ({ title, children }) => (
  <SectionContainer>
    {title && <SectionHeader>{title}</SectionHeader>}
    {children}
  </SectionContainer>
);