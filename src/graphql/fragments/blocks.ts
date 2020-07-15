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

export const sponsorsFragment = graphql`
  fragment Sponsors on ContentfulSponsors {
    copy {
      json
    }
    list {
      id
      name
      url
      logo {
        fluid(
          maxWidth: 200
          resizingBehavior: FILL
          cropFocus: CENTER
          quality: 100
        ) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`;
