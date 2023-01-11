import { Suspense } from 'react';

import { Skeletons, Typography } from '@/components';
import { caller } from '@/server/routes';

import Residents from './Residents/Residents';

interface LocationsPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 0;
export const dynamic = 'force-dynamic';
const LocationPage = async ({ params }: LocationsPageProps) => {
  const locationResponse = await caller.getLocation({ params: { id: +params.id } });
  const location = locationResponse.response;

  return (
    <>
      <Typography variant='title-1' tag='h1'>
        {location.name} - {location.type}
      </Typography>
      <Typography variant='title-2' tag='p'>
        Residents
      </Typography>

      <Suspense
        fallback={
          <ul className='entities_container'>
            {Array.from({ length: 4 }).map((_element, index) => (
              <Skeletons.Card key={index} />
            ))}
          </ul>
        }
      >
        {/*@ts-ignore */}
        <Residents residents={location.residents} />
      </Suspense>
    </>
  );
};

export default LocationPage;
