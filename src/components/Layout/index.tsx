import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import Seo, { ISeoProps } from '../Seo';
import { GenericPageBlocksFragment } from '../../../gatsby-graphql';

interface ILayout extends ISeoProps {
  nav: GenericPageBlocksFragment['nav'];
}

const Layout: React.FC<ILayout> = ({ children, seoData, lang, nav }) => (
  <>
    <GlobalStyles />
    <Seo {...{ seoData, lang: 'es' || lang }} />
    <Header nav={nav} />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

const StyledMain = styled.main`
  min-height: 100vh;
`;

export default Layout;
