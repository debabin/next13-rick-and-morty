import React from 'react';

import Layout from '@/components/layout';
import { ROUTES } from '@/utils/constants';
import { caller } from '@/server/routes';

interface LocationsLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

const LocationLayout = async ({ children, params }: LocationsLayoutProps) => {
  const locationResponse = await caller.getLocation({ params: { id: +params.id } });
  const location = locationResponse.response;

  return (
    <section className='page'>
      <Layout.Breadcrumbs
        current={{ label: location.name }}
        items={[
          { label: 'Main', href: ROUTES.ROOT },
          { label: 'Locations', href: ROUTES.LOCATIONS }
        ]}
      />
      {children}
    </section>
  );
};

export default LocationLayout;
