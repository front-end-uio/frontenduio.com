import React from 'react';
import Hero from '../Hero';
import Sponsors from '../Sponsors';
import Collaborators from '../Collaborators ';
import Members from '../Members';

interface IContentBlocks {
  [key: string]: React.FC;
}

const ContentBlocks: IContentBlocks = {
  Hero: Hero,
  Sponsors: Sponsors,
  Collaborators: Collaborators,
  Members: Members,
};

export default ContentBlocks;
