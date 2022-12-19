import React from 'react';

import { Skeletons } from '@/components';

const CharactersLoading = () => (
  <ul className='entities_container'>
    {Array.from({ length: 8 }).map((_element, index) => (
      <Skeletons.Card key={index} />
    ))}
  </ul>
);

export default CharactersLoading;
