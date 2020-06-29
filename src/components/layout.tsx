import React from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => <StyledMain>{children}</StyledMain>;

const StyledMain = styled.main`
  min-height: 100vh;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
