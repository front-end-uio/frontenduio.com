import React from 'react';
import Hero from '../Hero';

interface IContentBlocks {
  [key: string]: React.FC;
}

const ContentBlocks: IContentBlocks = {
  Hero: Hero,
};

export default ContentBlocks;
