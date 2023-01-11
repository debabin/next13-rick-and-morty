import React from 'react';

import Layout from '@/components/layout';
import { ROUTES } from '@/utils/constants';

interface LocationsLayoutProps {
  children: React.ReactNode;
}

const LocationsLayout = ({ children }: LocationsLayoutProps) => (
  <section className='page'>
    <Layout.Breadcrumbs
      current={{ label: 'Locations' }}
      items={[{ label: 'Main', href: ROUTES.ROOT }]}
    />
    {children}
  </section>
);

export default LocationsLayout;
