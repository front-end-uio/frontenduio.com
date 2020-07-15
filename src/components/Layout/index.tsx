import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import Seo, { ISeoProps } from '../Seo';

type ILayout = ISeoProps;

const Layout: React.FC<ILayout> = ({ children, seoData, lang }) => (
  <>
    <GlobalStyles />
    <Seo {...{ seoData, lang: 'es' || lang }} />
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </>
);

const StyledMain = styled.main`
  min-height: 100vh;
`;

export default Layout;
