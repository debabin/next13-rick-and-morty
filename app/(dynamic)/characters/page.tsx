import { caller } from '@/server/routes';
import { Characters, Pagination, Filter } from '@/components';

import { ROUTES } from '@/utils/constants';

interface CharactersPageProps {
  searchParams?: {
    page: string;
    name: Character['name'];
    status: Character['status'];
    gender: Character['gender'];
    species: Character['species'];
    type: Character['type'];
  };
}

export const revalidate = 0;
export const dynamic = 'force-dynamic';
const CharactersPage = async ({ searchParams }: CharactersPageProps) => {
  const filters = {
    ...(searchParams?.status && { status: searchParams.status }),
    ...(searchParams?.gender && { gender: searchParams.gender }),
    ...(searchParams?.species && { species: searchParams.species }),
    ...(searchParams?.type && { type: searchParams.type }),
    ...(searchParams?.name && { name: searchParams.name })
  };
  const characterPages = (await caller.getCharactersInfo({ filters })).response.info.pages;

  const page = +(searchParams?.page ?? 1);

  const charactersResponse = await caller.getCharacters({
    params: {
      page
    },
    filters
  });

  const characters = charactersResponse.response.results;

  return (
    <>
      <Pagination
        page={page}
        pagesCount={characterPages}
        href={{ pathname: ROUTES.CHARACTERS, query: searchParams }}
      />
      <Filter
        items={[
          {
            type: 'input',
            label: 'name',
            value: searchParams?.name ?? ''
          },
          {
            type: 'toggles',
            label: 'status',
            value: searchParams?.status ?? 'all',
            options: [
              {
                label: 'all',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: undefined, page: 1 }
                }
              },
              {
                label: 'alive',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'alive', page: 1 }
                }
              },
              {
                label: 'dead',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'dead', page: 1 }
                }
              },
              {
                label: 'unknown',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, status: 'unknown', page: 1 }
                }
              }
            ]
          },
          {
            type: 'toggles',
            label: 'gender',
            value: searchParams?.gender ?? 'all',
            options: [
              {
                label: 'all',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: undefined, page: 1 }
                }
              },
              {
                label: 'female',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'female', page: 1 }
                }
              },
              {
                label: 'male',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'male', page: 1 }
                }
              },
              {
                label: 'genderless',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'genderless', page: 1 }
                }
              },
              {
                label: 'unknown',
                href: {
                  pathname: ROUTES.CHARACTERS,
                  query: { ...searchParams, gender: 'unknown', page: 1 }
                }
              }
            ]
          }
        ]}
      />
      <ul className='entities_container'>
        {characters.map((character) => (
          <li key={character.id}>
            <Characters.Card character={character} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CharactersPage;
