import React from 'react';
import styled from 'styled-components';
import { colors, fonts, mq, sizes } from '../../styles/theme';
import { BaseContainer } from '../BaseComponents';
import { Logo } from '../../icons';
import { GenericPageBlocksFragment } from '../../../gatsby-graphql';

interface IHeaderProps {
  nav: GenericPageBlocksFragment['nav'];
}

const Header: React.FC<IHeaderProps> = ({ nav }) => (
  <Container>
    <InnerContainer>
      <StyledLogo />
      <NavContainer>
        {nav?.map((item) => (
          <a href={`#${item?.slug}`} key={item?.slug as string}>
            {item?.title}
          </a>
        ))}
      </NavContainer>
    </InnerContainer>
  </Container>
);

const Container = styled.header``;

const InnerContainer = styled(BaseContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 2rem;
  ${mq.tablet} {
    flex-direction: row;
    height: ${sizes.headerDesktopHeight};
  }
`;

const StyledLogo = styled(Logo)`
  height: 26px;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  a {
    font-family: ${fonts.sansSerif};
    color: ${colors.blue.primary};
    text-decoration: none;
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  ${mq.tablet} {
    margin-top: 0;
  }
`;

export default Header;
