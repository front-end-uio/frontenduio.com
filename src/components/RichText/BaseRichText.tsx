import React from 'react';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { Document, INLINES } from '@contentful/rich-text-types';
import InlineHyperlink from './CustomInlines/CustomHyperLink';

interface IBlogRichText {
  document: Document;
}

const BaseRichText: React.FC<IBlogRichText> = ({ document }) => {
  const options: Options = {
    renderNode: {
      [INLINES.HYPERLINK]: InlineHyperlink,
    },
  };
  return <>{documentToReactComponents(document, options)}</>;
};

export default BaseRichText;
