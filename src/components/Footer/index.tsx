import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../styles/theme';
import { BaseContainer } from '../BaseComponents';
import { GithubIcon, MeetupIcon, FacebookIcon, SlackIcon } from '../../icons';
import useFooterMicroCopy from '../../graphql/hooks/useFooterMicroCopy';
import BaseRichText from '../RichText/BaseRichText';

const Footer: React.FC = () => {
  const microCopy = useFooterMicroCopy();
  return (
    <StyledFooter>
      <StyledBaseContainer>
        <div>
          <BaseRichText document={microCopy?.copy?.json} />
        </div>
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
      </StyledBaseContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 1px solid ${colors.light.border};
  font-family: ${fonts.sansSerif};
  a {
    color: ${colors.blue.secondary};
  }
`;

const StyledBaseContainer = styled(BaseContainer)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconsContainer = styled.div`
  display: flex;
  svg {
    height: 24px;
    fill: #383838;
    margin: 0rem 0.5rem;
  }
`;

export default Footer;
