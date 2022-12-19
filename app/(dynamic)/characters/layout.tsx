import React from 'react';

import Layout from '@/components/layout';
import { ROUTES } from '@/utils/constants';

interface CharactersLayoutProps {
  children: React.ReactNode;
}

const CharactersLayout = ({ children }: CharactersLayoutProps) => (
  <section className='page'>
    <Layout.Breadcrumbs
      current={{ label: 'Characters' }}
      items={[{ label: 'Main', href: ROUTES.ROOT }]}
    />
    {children}
  </section>
);

export default CharactersLayout;
