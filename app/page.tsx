import { Typography } from '@components/Typography/Typography';
import { caller } from '@/server/routes';
import { getRandomCharactersPage } from '@/src/utils';
import { CharacterCard } from '@/src/components';

import styles from './page.module.scss';

const RootPage = async () => {
  const charactersResponse = await caller.getCharacters({
    params: { page: getRandomCharactersPage() }
  });
  const characters = charactersResponse.response.results.slice(0, 9);

  return (
    <section>
      <Typography variant='title-1' tag='h1'>
        The Rick and Morty
      </Typography>

      <ul className={styles.characters_container}>
        <li>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </li>
      </ul>
    </section>
  );
};

export default RootPage;
