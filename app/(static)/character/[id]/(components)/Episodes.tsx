'use client';
import { trpc } from '@/src/utils';

interface EpisodesProps {
  episode: Character['episode'];
}

const Episodes: React.FC<EpisodesProps> = ({ episode }) => {
  const episodesResponse = trpc.getEpisodes.useQuery({
    params: {
      multiple: episode
        .map((episodeLink) => episodeLink.replace('https://rickandmortyapi.com/api/episode/', ''))
        .join(',')
    }
  });

  if (!episodesResponse.data || episodesResponse.isLoading) {
    return <div>loading</div>;
  }

  const episodes = episodesResponse.data.response;

  return (
    <div>
      {episodes.map((episode) => (
        <div key={episode.id}>{episode.name}</div>
      ))}
    </div>
  );
};

export default Episodes;
