import React from 'react';
import Hero from '../Hero';
import Sponsors from '../Sponsors';

interface IContentBlocks {
  [key: string]: React.FC;
}

const ContentBlocks: IContentBlocks = {
  Hero: Hero,
  Sponsors: Sponsors,
};

export default ContentBlocks;
