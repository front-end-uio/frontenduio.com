import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { HomePageQuery } from '../../gatsby-graphql';
import Blocks from '../components/Blocks';

interface IHomePageProps {
  data: HomePageQuery;
}

const IndexPage: React.FC<IHomePageProps> = ({ data: { page } }) => (
  <Layout seoData={page?.seo} nav={page?.nav}>
    <Blocks blocks={page?.blocks} />
  </Layout>
);

export const pageQuery = graphql`
  query HomePage {
    page: contentfulGenericPageTemplate(pathName: { eq: "/" }) {
      ...Seo
      ...GenericPageBlocks
    }
  }
`;

export default IndexPage;
