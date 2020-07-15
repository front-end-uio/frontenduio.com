import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HomePageQuery } from '../../gatsby-graphql';
import Blocks from '../components/Blocks';

interface IGenericPageTemplateProps {
  data: HomePageQuery;
}

const GenericPageTemplate: React.FC<IGenericPageTemplateProps> = ({
  data: { page },
}) => (
  <Layout nav={page?.nav}>
    <Blocks blocks={page?.blocks} />
  </Layout>
);

export const pageQuery = graphql`
  query GenericPage($id: String!) {
    page: contentfulGenericPageTemplate(id: { eq: $id }) {
      ...Seo
      ...GenericPageBlocks
    }
  }
`;

export default GenericPageTemplate;
