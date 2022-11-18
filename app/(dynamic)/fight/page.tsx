import Image from 'next/image';

import { caller } from '@/server/routes';
import { Typography, CharacterStatus } from '@/src/components';

import styles from './page.module.scss';

interface CharactersPageProps {
  params: {
    id: string;
  };
}

const CharacterPage = async ({ params }: CharactersPageProps) => {
  const [firstCharacterResponses, secondCharacterResponses] = await Promise.all([
    caller.getCharacter({
      params: {
        id: 1
      }
    }),
    caller.getCharacter({
      params: {
        id: 2
      }
    })
  ]);

  //   const character = characterResponse.response;

  return (
    <section className='page'>
      <div>{firstCharacterResponses.response.name}</div>
      <div>{secondCharacterResponses.response.name}</div>
    </section>
  );
};

export default CharacterPage;
