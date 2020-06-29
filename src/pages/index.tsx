import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {
  Logo,
  SlackIcon,
  FacebookIcon,
  MeetupIcon,
  GithubIcon,
} from '../icons';

const IndexPage: React.FC = () => (
  <Layout>
    <Seo />
    <Container>
      <StyledLogo />
      <p>
        Somos la primera comunidad de FrontEnd developers en Quito. Nos
        apasionan las nuevas tecnologías, las buenas prácticas y las amistades.
        Buscamos construir una red de developers que comparta conocimientos,
        aciertos y errores.
      </p>
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
    </Container>
  </Layout>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 2rem;
  max-width: 548px;
  margin: auto;
  p {
    text-align: center;
  }
`;

const StyledLogo = styled(Logo)`
  max-width: 100%;
  margin-bottom: 2rem;
`;

const IconsContainer = styled.div`
  display: flex;
  svg {
    height: 24px;
    fill: #383838;
    margin: 2rem 0.5rem;
  }
`;

export default IndexPage;
