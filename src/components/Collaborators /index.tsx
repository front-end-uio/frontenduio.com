import React from 'react';
import styled from 'styled-components';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { CollaboratorsFragment } from '../../../gatsby-graphql';
import { BaseContainer } from '../BaseComponents';
import BaseRichText from '../RichText/BaseRichText';
import { colors, fonts, mq } from '../../styles/theme';

type ICollaboratorsProps = CollaboratorsFragment;

const Collaborators: React.FC<ICollaboratorsProps> = ({ copy, list }) => (
  <Container>
    <BaseContainer>
      <StyledBaseRichText document={copy?.json} />
      <CollaboratorsContainer>
        {list?.map((collaborator) => (
          <div key={collaborator?.id}>
            <ImageContainer>
              <GatsbyImage
                draggable={false}
                fluid={collaborator?.image?.fluid as FluidObject}
              />
            </ImageContainer>
            <CollaboratorName>{collaborator?.name}</CollaboratorName>
          </div>
        ))}
      </CollaboratorsContainer>
    </BaseContainer>
  </Container>
);

const Container = styled.section`
  padding-top: 4rem;
  ${mq.desktop} {
    padding-top: 0rem;
  }
`;

const StyledBaseRichText = styled(BaseRichText)`
  text-align: center;
  h2 {
    color: ${colors.blue.primary};
    font-size: 1.75rem;
    ${mq.tablet} {
      font-size: 1.5rem;
    }
    ${mq.desktop} {
      font-size: 1.75rem;
    }
  }
`;

const CollaboratorsContainer = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: repeat(1, 1fr 1fr);
  gap: 2rem;
  ${mq.desktop} {
    grid-template-columns: repeat(1, 1fr 1fr 1fr);
  }
`;

const ImageContainer = styled.div`
  width: 70%;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 auto;
  border: 2px solid ${colors.blue.secondary};
  ${mq.desktop} {
    width: 60%;
  }
`;

const CollaboratorName = styled.div`
  text-align: center;
  margin: 1.25rem 0 0;
  font-family: ${fonts.sansSerif};
  color: ${colors.blue.primary};
`;

export default Collaborators;
