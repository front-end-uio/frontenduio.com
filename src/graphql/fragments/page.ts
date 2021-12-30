import { graphql } from 'gatsby';

export const SeoFragment = graphql`
  fragment Seo on ContentfulGenericPageTemplate {
    seo {
      title
      description
      image {
        file {
          url
        }
      }
    }
  }
`;

export const GenericPageBlocksFragment = graphql`
  fragment GenericPageBlocks on ContentfulGenericPageTemplate {
    nav: blocks {
      slug
      title
    }
    blocks {
      slug
      content {
        __typename
        ... on ContentfulHero {
          ...Hero
        }
        ... on ContentfulSponsors {
          ...Sponsors
        }
        ... on ContentfulCollaborators {
          ...Collaborators
        }
        ... on ContentfulMembers {
          ...Members
        }
      }
    }
  }
`;
