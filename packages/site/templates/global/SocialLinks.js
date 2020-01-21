import React from 'react';
import styled from 'styled-components';
import GitHub from '~/components/icons/GitHub';
import Twitter from '~/components/icons/Twitter';
import settings from '~/data/settings.json';
import { cols, media } from '~/styles/vars';

const IconLink = styled.a`
  margin-left: ${cols(1)};
`;

const TwitterLink = styled(IconLink)`
  margin-left: none;
  transform: translateY(2px);
`;

const GitHubIcon = styled(GitHub)``;
const TwitterIcon = styled(Twitter)``;

export default () => (
  <React.Fragment>
    <TwitterLink href={settings.twitterUrl} name="Popmotion Twitter">
      <TwitterIcon />
    </TwitterLink>
    <IconLink href={settings.githubUrl} name="Popmotion GitHub">
      <GitHubIcon />
    </IconLink>
  </React.Fragment>
);
