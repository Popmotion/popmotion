import { Fragment } from 'react';

import GlobalTemplate from '~/templates/global/Template';
import ContentPage from '~/templates/global-new/ContentPage';
import { Section, PageHeader } from '~/templates/global-new/styled';
import { A, P, H2, Li, Ul } from '~/templates/global/styled';

export default () => (
  <GlobalTemplate
    title="Support us | Popmotion"
    description="Join the Popmotion Patreon or Open Collective to support its continued development"
    theme="popmotion"
  >
    <ContentPage section="support">
      <Section>
        <PageHeader>Support</PageHeader>
        <P>
          Popmotion makes animations libraries that are open source and free to
          use. It isn't sustainable without financial backing, which is why
          we've turned to the community for funding.
        </P>
        <H2>Recurring pledges</H2>
        <P>
          There's a range of support tiers suited to individuals and
          organisations alike.
        </P>
        <P>
          You can pledge any amount, but for $10 a month individuals will
          receive a special permissive, commercial license for premium React
          components, like{' '}
          <A href="/pose/api/react-pose-text">React Pose Text</A>.
        </P>
        <P>
          For $100 or more a month, companies can get this license for their
          entire team, as well as sponsoring the project publicly on our
          website.
        </P>
        <P>
          Finally, contributions of any amount are welcomed, and all will get
          your name on our{' '}
          <A href="https://github.com/Popmotion/popmotion/blob/master/BACKERS.md">
            official backers list
          </A>
          .
        </P>
        <Ul>
          <Li>
            <A href="https://patreon.com/popmotion">Patreon</A> (best for
            individuals)
          </Li>
          <Li>
            <A href="https://opencollective.com/popmotion">Open Collective</A>{' '}
            (best for organisations)
          </Li>
        </Ul>
      </Section>
    </ContentPage>
  </GlobalTemplate>
);
