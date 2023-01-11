import { Characters, Typography } from '@/components';
import { caller } from '@/server/routes';
import { getRandomCharactersIds } from '@/utils/helpers';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
const RootPage = async () => {
  const characterInfo = await caller.getCharactersInfo();
  const charactersIds = getRandomCharactersIds(8, characterInfo.response.info.count);

  const charactersResponse = await caller.getCharactersMultiple({
    params: { multiple: charactersIds }
  });

  const characters = charactersResponse.response;

  return (
    <section className='page'>
      <Typography variant='banner' tag='h1'>
        The Rick and Morty
      </Typography>

      <ul className='entities_container'>
        {characters.map((character) => (
          <li key={character.id}>
            <Characters.Card character={character} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RootPage;
