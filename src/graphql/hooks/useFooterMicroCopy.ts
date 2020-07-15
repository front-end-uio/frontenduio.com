import { graphql, useStaticQuery } from 'gatsby';
import { FooterMicroCopyQuery } from '../../../gatsby-graphql';

const useFooterMicroCopy = () => {
  const data = useStaticQuery<FooterMicroCopyQuery>(graphql`
    query FooterMicroCopy {
      contentfulMicroCopy(slug: { eq: "footer-copy" }) {
        copy {
          json
        }
      }
    }
  `);
  return data.contentfulMicroCopy;
};

export default useFooterMicroCopy;
