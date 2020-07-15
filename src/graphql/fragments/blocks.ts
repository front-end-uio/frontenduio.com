import { graphql } from 'gatsby';

export const heroFragment = graphql`
  fragment Hero on ContentfulHero {
    background {
      fluid(
        maxWidth: 1080
        quality: 80
        cropFocus: CENTER
        resizingBehavior: FILL
      ) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    body {
      json
    }
  }
`;
