import React from 'react';

import Layout from '@/components/layout';
import { ROUTES } from '@/utils/constants';

interface EpisodesLayoutProps {
  children: React.ReactNode;
}

const EpisodesLayout = async ({ children }: EpisodesLayoutProps) => (
  <section className='page'>
    <Layout.Breadcrumbs
      current={{ label: 'Episodes' }}
      items={[{ label: 'Main', href: ROUTES.ROOT }]}
    />
    {children}
  </section>
);

export default EpisodesLayout;
