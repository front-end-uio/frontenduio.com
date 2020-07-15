import React from 'react';
import Hero from '../Hero';
import Sponsors from '../Sponsors';
import Collaborators from '../Collaborators ';

interface IContentBlocks {
  [key: string]: React.FC;
}

const ContentBlocks: IContentBlocks = {
  Hero: Hero,
  Sponsors: Sponsors,
  Collaborators: Collaborators,
};

export default ContentBlocks;
