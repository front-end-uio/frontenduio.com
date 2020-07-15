import React from 'react';
import styled from 'styled-components';
import { sizes } from '../../styles/theme';
import { BaseContainer } from '../BaseComponents';
import { Logo } from '../../icons';

const Header: React.FC = () => (
  <Container>
    <InnerContainer>
      <StyledLogo />
    </InnerContainer>
  </Container>
);

const Container = styled.div`

`;

const InnerContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${sizes.headerDesktopHeight};
  padding-top: 2rem;
`;

const StyledLogo = styled(Logo)`
  height: 26px;
`;

export default Header;
