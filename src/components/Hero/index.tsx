import React from 'react';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { BaseContainer } from '../BaseComponents';
import { HeroFragment } from '../../../gatsby-graphql';
import { colors, mq, sizes } from '../../styles/theme';

const Hero: React.FC<HeroFragment> = ({ body, background }) => (
  <Section>
    <Container>
      <BodyContainer>
        <div>{documentToReactComponents(body?.json, {})}</div>
      </BodyContainer>
      <ImageContainer>
        <StyledGatsbyImage
          fluid={background?.fluid as FluidObject}
          draggable={false}
        />
        <ImageBackDrop />
      </ImageContainer>
    </Container>
  </Section>
);

const Section = styled.section`
  width: 100%;
  display: flex;
  padding-top: 4rem;
  padding-bottom: 1.5rem;
  ${mq.desktop} {
    min-height: calc(100vh - ${sizes.headerDesktopHeight});
    padding-top: 0;
    padding-bottom: 0;
    align-items: center;
  }
`;

const Container = styled(BaseContainer)`
  width: 100%;
  display: grid;
  ${mq.tablet} {
    grid-template-columns: 6fr 5fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-right: 1.5rem;
  align-self: flex-start;
  ${mq.tablet} {
    height: 400px;
  }
  ${mq.desktop} {
    height: 600px;
  }
`;

const ImageBackDrop = styled.div`
  position: absolute;
  background-color: ${colors.blue.secondary};
  right: 0;
  bottom: -1.5rem;
  width: calc(100% - 1.5rem);
  height: 100%;
  border-radius: ${sizes.borderRadius};
`;

const StyledGatsbyImage = styled(GatsbyImage)`
  z-index: 1;
  border-radius: ${sizes.borderRadius};
  height: 100%;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${colors.blue.primary};
    font-size: 1.75rem;
    ${mq.tablet} {
      font-size: 1.5rem;
    }
    ${mq.desktop} {
      font-size: 2.25rem;
    }
  }
  ${mq.tablet} {
    & > div {
      max-width: 460px;
    }
  }
`;

export default Hero;
