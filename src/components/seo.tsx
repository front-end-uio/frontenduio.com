import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SeoDataQuery } from '../../gatsby-graphql';

interface ISeoProps {
  lang?: string;
}

const Seo: React.FC<ISeoProps> = ({ lang }) => {
  const { site } = useStaticQuery<SeoDataQuery>(
    graphql`
      query SeoData {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = site?.siteMetadata?.description as string;
  const metaTitle = site?.siteMetadata?.title as string;
  const metaAuthor = site?.siteMetadata?.author as string;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metaAuthor,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: `es`,
};

export default Seo;
