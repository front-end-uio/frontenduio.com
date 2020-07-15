import React from 'react';
import styled from 'styled-components';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { SponsorsFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../BaseComponents';
import { colors, fonts, mq } from '../../styles/theme';
import BaseRichText from '../RichText/BaseRichText';

type ISponsorsProps = SponsorsFragment;

const Sponsors: React.FC<ISponsorsProps> = ({ list, copy }) => (
  <Container>
    <BaseContainer>
      <StyledBaseRichText document={copy?.json} />
      <SponsorsContainer>
        {list?.map((sponsor) => (
          <SponsorCard
            key={sponsor?.id}
            href={sponsor?.url as string}
            target="_blank"
            rel="noreferrer"
          >
            <SponsorImageContainer>
              <StyledGatsbyImage fluid={sponsor?.logo?.fluid as FluidObject} />
            </SponsorImageContainer>
            <SponsorName>{sponsor?.name}</SponsorName>
          </SponsorCard>
        ))}
      </SponsorsContainer>
    </BaseContainer>
  </Container>
);

const Container = styled.section`
  background-color: ${colors.blue.secondary};
  padding: 4rem 0;
  margin-top: 4rem;
`;

const StyledBaseRichText = styled(BaseRichText)`
  color: ${colors.surface};
  text-align: center;
  h2 {
    font-size: 1.75rem;
    ${mq.tablet} {
      font-size: 1.5rem;
    }
    ${mq.desktop} {
      font-size: 1.75rem;
    }
  }
`;

const SponsorsContainer = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(1, 1fr 1fr);
  column-gap: 2rem;
  ${mq.desktop} {
    grid-template-columns: repeat(1, 1fr 1fr 1fr);
  }
`;

const SponsorCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-decoration: none;
`;

const SponsorImageContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  background-color: ${colors.surface};
  border-radius: 100%;
  padding: 2rem;
  img {
    margin: 0;
    width: 100%;
  }
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  width: 100%;
`;

const SponsorName = styled.p`
  font-family: ${fonts.sansSerif};
  color: ${colors.surface};
  margin: 1rem 0 0;
`;

export default Sponsors;
