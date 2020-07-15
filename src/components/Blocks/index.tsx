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
          <div key={`${contentBlock?.__typename}-${index}`}>
            <div id={block.slug as string} />
            <Component
              key={`${contentBlock?.__typename}-${index}`}
              {...contentBlock}
            />
          </div>
        );
      })
    )}
  </>
);

export default Blocks;
