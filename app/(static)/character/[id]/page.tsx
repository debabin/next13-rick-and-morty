import Image from 'next/image';

import { caller } from '@/server/routes';
import { Typography, Characters } from '@/src/components';

import styles from './page.module.scss';
import Episodes from './(components)/Episodes';

// export async function generateStaticParams() {
//   const charactersResponse = await caller.getCharacters();

//   return Array.from(Array(charactersResponse.response.info.pages).keys()).map((number) => ({
//     page: `${number + 1}`
//   }));
// }

interface CharactersPageProps {
  params: {
    id: string;
  };
}

const CharacterPage = async ({ params }: CharactersPageProps) => {
  const characterResponse = await caller.getCharacter({
    params: {
      id: +params.id
    }
  });
  const character = characterResponse.response;

  return (
    <section className='page'>
      <div className={styles.container}>
        <Typography tag='h1' variant='title-2'>
          {character.name}
        </Typography>

        <div className={styles.data}>
          <div className={styles.image_container}>
            <Image src={character.image} alt={character.name} fill />
          </div>

          <div>
            <div>
              <Characters.Status species={character.species} status={character.status} />
            </div>
            <div className={styles.info}>
              <Typography tag='span' variant='sub-title-2'>
                Last known location:
              </Typography>

              <Typography tag='span' variant='body-1'>
                <a href='#'>{character.location.name}</a>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Episodes episode={character.episode} />
    </section>
  );
};

export default CharacterPage;
