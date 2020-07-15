import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { SeoDataQuery, SeoFragment } from '../../../gatsby-graphql';

export interface ISeoProps {
  seoData?: SeoFragment['seo'] | null;
  lang?: string;
}

const Seo: React.FC<ISeoProps> = ({ lang, seoData }) => {
  const { site } = useStaticQuery<SeoDataQuery>(
    graphql`
      query SeoData {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  const metaDescription = seoData?.description as string;
  const metaTitle = seoData?.title as string;
  const metaImage = seoData?.image?.file?.url as string;
  const metaAuthor = site?.siteMetadata?.author as string;

  const title = metaTitle ? `${metaTitle} | FrontEnd uio` : 'FrontEnd uio';

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
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
          property: `og:image`,
          content: metaImage,
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
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ]}
    />
  );
};

Seo.defaultProps = {
  lang: `es`,
};

export default Seo;
