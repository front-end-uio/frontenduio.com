import React from 'react';
import styled from 'styled-components';
import { GithubIcon, MeetupIcon, FacebookIcon, SlackIcon } from '../../icons';

const SocialIcons: React.FC = () => (
  <IconsContainer>
    <a
      href="https://github.com/front-end-uio"
      target="_blank"
      rel="noreferrer"
      title="Github de FrontEnd uio"
    >
      <GithubIcon />
    </a>
    <a
      href="https://www.facebook.com/frontendquito"
      target="_blank"
      rel="noreferrer"
      title="Facebook de FrontEnd uio"
    >
      <FacebookIcon />
    </a>
    <a
      href="https://www.meetup.com/frontenduio/"
      target="_blank"
      rel="noreferrer"
      title="Meetup de FrontEnd uio"
    >
      <MeetupIcon />
    </a>
    <a
      href="https://join.slack.com/t/frontenduio/shared_invite/zt-euc12sq8-Gu6MscDTsaGld_0XdPnHVw"
      target="_blank"
      rel="noreferrer"
      title="Slack de FrontEnd uio"
    >
      <SlackIcon />
    </a>
  </IconsContainer>
);

const IconsContainer = styled.div`
  display: flex;
  svg {
    height: 24px;
    fill: #383838;
    margin: 0rem 0.5rem;
  }
`;

export default SocialIcons;
