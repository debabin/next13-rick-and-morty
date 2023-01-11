import React from 'react';

import { caller } from '@/server/routes';
import { Characters } from '@/src/components';

interface ResidentsProps {
  residents: Location['residents'];
}

export const Residents = async ({ residents }: ResidentsProps) => {
  const characterResponse = await caller.getCharactersMultiple({
    params: {
      multiple: residents.map(
        (residentLink) => +residentLink.replace('https://rickandmortyapi.com/api/character/', '')
      )
    }
  });

  const characters = characterResponse.response;

  return (
    <ul className='entities_container'>
      {characters.map((character) => (
        <li key={character.id}>
          <Characters.Card character={character} />
        </li>
      ))}
    </ul>
  );
};

export default Residents;
