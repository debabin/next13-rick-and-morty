import React from 'react';

import Layout from '@/components/layout';
import { caller } from '@/server/routes';
import { ROUTES } from '@/utils/constants';

interface EpisodeLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

const EpisodeLayout = async ({ children, params }: EpisodeLayoutProps) => {
  const episodeResponse = await caller.getEpisode({ params: { id: +params.id } });
  const episode = episodeResponse.response;

  return (
    <section className='page'>
      <Layout.Breadcrumbs
        current={{ label: episode.name }}
        items={[
          { label: 'Main', href: ROUTES.ROOT },
          { label: 'Episodes', href: ROUTES.LOCATIONS }
        ]}
      />
      {children}
    </section>
  );
};

export default EpisodeLayout;
