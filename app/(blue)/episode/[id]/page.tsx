import { Characters, Typography } from '@/components';
import { caller } from '@/server/routes';

export const generateStaticParams = async () => {
  const episodesCount = (await caller.getEpisodes()).response.info.count;

  return Array.from({ length: episodesCount }, (_: any, index: number) => index + 1).map((id) => ({
    id: id.toString()
  }));
};

interface EpisodesPageProps {
  params: {
    id: string;
  };
}

const EpisodePage = async ({ params }: EpisodesPageProps) => {
  const episodeResponse = await caller.getEpisode({ params: { id: +params.id } });
  const episode = episodeResponse.response;

  const characterResponse = await caller.getCharactersMultiple({
    params: {
      multiple: episode.characters.map(
        (characterLink) => +characterLink.replace('https://rickandmortyapi.com/api/character/', '')
      )
    }
  });

  const characters = characterResponse.response;

  return (
    <section className='page'>
      <Typography variant='title-1' tag='h1'>
        {episode.episode} - {episode.name}
      </Typography>

      <Typography variant='title-2' tag='p'>
        Characters
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

export default EpisodePage;
