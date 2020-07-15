import React from 'react';
import styled from 'styled-components';
import { colors, fonts, mq } from '../../styles/theme';
import { BaseContainer } from '../BaseComponents';
import useFooterMicroCopy from '../../graphql/hooks/useFooterMicroCopy';
import BaseRichText from '../RichText/BaseRichText';
import SocialIcons from '../SocialIcons';

const Footer: React.FC = () => {
  const microCopy = useFooterMicroCopy();
  return (
    <StyledFooter>
      <StyledBaseContainer>
        <div>
          <BaseRichText document={microCopy?.copy?.json} />
        </div>
        <SocialIcons />
      </StyledBaseContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  border-top: 1px solid ${colors.light.border};
  font-family: ${fonts.sansSerif};
  a {
    color: ${colors.blue.secondary};
  }
`;

const StyledBaseContainer = styled(BaseContainer)`
  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  p {
    text-align: center;
  }
  ${mq.tablet} {
    flex-direction: row;
    p {
      margin: 0;
      text-align: left;
    }
  }
`;

export default Footer;
