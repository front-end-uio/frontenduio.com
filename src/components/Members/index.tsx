import React from 'react';
import { MembersFragment } from '../../../gatsby-graphql';

type IMembers = MembersFragment;

const Members: React.FC<IMembers> = ({ list }) => (
  <div>
    {list?.map((member) => (
      <div>{member?.name}</div>
    ))}
  </div>
);

export default Members;
