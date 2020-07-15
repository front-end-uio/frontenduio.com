import React from 'react';
import { Hyperlink } from '@contentful/rich-text-types';
import styled from 'styled-components';

const InlineHyperlink = (node: {}) => {
  const {
    data: { uri },
    content,
  }: Hyperlink = node as Hyperlink;
  const title = content[0] && content[0].value;
  return (
    <StyledHyperLink href={uri} target="_blank" rel="noopener noreferrer">
      {title}
    </StyledHyperLink>
  );
};

const StyledHyperLink = styled.a`
  color: inherit;
`;

export default InlineHyperlink;
