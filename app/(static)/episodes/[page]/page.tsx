import Link from 'next/link';

import { IconButton, Episodes } from '@/components';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';
import { ROUTES } from '@/utils/constants';
import { caller } from '@/server/routes';

export const generateStaticParams = async () => {
  const episodesPages = (await caller.getEpisodes()).response.info.pages;

  return Array.from({ length: episodesPages }, (_: any, index: number) => index + 1).map(
    (page) => ({
      page: page.toString()
    })
  );
};

interface EpisodesPageProps {
  params: {
    page: string;
  };
}

const EpisodesPage = async ({ params }: EpisodesPageProps) => {
  const [episodesPages, episodesResponse] = await Promise.all([
    (await caller.getEpisodesInfo()).response.info.pages,
    await caller.getEpisodes({ params: { page: +params.page } })
  ]);

  const episodes = episodesResponse.response.results;

  const showPreviousPagination = !!(+params.page - 1 !== 0);
  const showNextPagination = +params.page + 1 === episodesPages;

  return (
    <>
      <div className='pagination'>
        {showPreviousPagination && (
          <Link href={`${ROUTES.EPISODES}/${+params.page - 1}`}>
            <IconButton icon={<ArrowLeftIcon />} />
          </Link>
        )}
        {showNextPagination && (
          <Link href={`${ROUTES.EPISODES}/${+params.page + 1}`}>
            <IconButton icon={<ArrowRightIcon />} />
          </Link>
        )}
      </div>
      <ul className='entities_container'>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Episodes.Card episode={episode} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default EpisodesPage;
