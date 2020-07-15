import React from 'react';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import { Document, INLINES } from '@contentful/rich-text-types';
import InlineHyperlink from './CustomInlines/CustomHyperLink';

interface IBlogRichText {
  document: Document;
  className?: string;
}

const BaseRichText: React.FC<IBlogRichText> = ({ document, className }) => {
  const options: Options = {
    renderNode: {
      [INLINES.HYPERLINK]: InlineHyperlink,
    },
  };
  return (
    <div className={className}>
      {documentToReactComponents(document, options)}
    </div>
  );
};

export default BaseRichText;
