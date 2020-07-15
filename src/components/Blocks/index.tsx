import React from 'react';
import { GenericPageBlocksFragment } from '../../../gatsby-graphql';
import ContentBlocks from './ContentBlocks';

interface IBlockProps {
  blocks: GenericPageBlocksFragment['blocks'];
}

const Blocks: React.FC<IBlockProps> = ({ blocks }) => (
  <>
    {blocks?.map((block) =>
      block?.content?.map((contentBlock, index) => {
        const ComponentName = contentBlock?.__typename.replace(
          'Contentful',
          ''
        );
        if (!ComponentName || !ContentBlocks[ComponentName]) return null;
        const Component = ContentBlocks[ComponentName];
        return (
          <Component
            key={`${contentBlock?.__typename}-${index}`}
            {...contentBlock}
          />
        );
      })
    )}
  </>
);

export default Blocks;
