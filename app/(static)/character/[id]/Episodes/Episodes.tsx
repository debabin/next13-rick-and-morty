'use client';
import { trpc } from '@/src/utils';

import { Episodes, Skeletons } from '@/components';

interface EpisodesProps {
  episode: Character['episode'];
}

const CharacterEpisodes: React.FC<EpisodesProps> = ({ episode }) => {
  const getEpisodesMultipleQuery = trpc.getEpisodesMultiple.useQuery({
    params: {
      multiple: episode.map(
        (episodeLink) => +episodeLink.replace('https://rickandmortyapi.com/api/episode/', '')
      )
    }
  });

  const isLoading = getEpisodesMultipleQuery.isLoading;
  const episodes = getEpisodesMultipleQuery.data?.response;

  return (
    <div>
      <ul className='entities_container'>
        {isLoading &&
          Array.from({ length: 4 }).map((_element, index) => <Skeletons.Card key={index} />)}

        {!isLoading &&
          episodes &&
          episodes.map((episode) => (
            <li key={episode.id}>
              <Episodes.Card episode={episode} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CharacterEpisodes;
