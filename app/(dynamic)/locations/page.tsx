'use client';
import React from 'react';

import { IconButton, Locations, Skeletons, Typography } from '@/components';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';
import { trpc } from '@/src/utils';

import { Filter } from './Filter/Filter';

interface LocationsPageProps {
  searchParams?: {
    name?: string;
    type?: string;
  };
}

const LocationsPage: React.FC<LocationsPageProps> = ({ searchParams }) => {
  const [filters, setFilters] = React.useState({
    name: searchParams?.name ?? '',
    type: searchParams?.type ?? ''
  });
  const [page, setPage] = React.useState(1);
  const getLocationsQuery = trpc.getLocations.useQuery(
    {
      params: { page },
      filters: { ...filters }
    },
    { keepPreviousData: true }
  );

  const showPreviousPagination = !!getLocationsQuery.data?.response.info?.prev;
  const showNextPagination = !!getLocationsQuery.data?.response.info?.next;
  const showPagination = showPreviousPagination || showNextPagination;

  const isLoading = getLocationsQuery.isLoading;
  const locations = getLocationsQuery.data?.response.results;

  return (
    <section className='page'>
      {showPagination && (
        <div className='pagination'>
          {showPreviousPagination && (
            <IconButton
              onClick={() => setPage(page - 1)}
              icon={<ArrowLeftIcon />}
              disabled={isLoading}
            />
          )}
          {showNextPagination && (
            <IconButton
              onClick={() => setPage(page + 1)}
              icon={<ArrowRightIcon />}
              disabled={isLoading}
            />
          )}
        </div>
      )}

      <Filter
        form={{
          initialValues: { ...filters },
          onSubmit: (values) => {
            setPage(1);
            setFilters(values);
          }
        }}
        isLoading={isLoading}
      />
      <ul className='entities_container'>
        {isLoading &&
          Array.from({ length: 8 }).map((_element, index) => <Skeletons.Card key={index} />)}
        {!isLoading &&
          locations &&
          locations.map((location) => (
            <li key={location.id}>
              <Locations.Card location={location} />
            </li>
          ))}
        {!locations?.length && (
          <Typography variant='sub-title-1'>Ops, not found locations</Typography>
        )}
      </ul>
    </section>
  );
};

export default LocationsPage;
