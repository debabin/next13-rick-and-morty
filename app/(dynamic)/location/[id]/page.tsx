import { Characters, Typography } from '@/components';
import { caller } from '@/server/routes';

export const generateStaticParams = async () => {
  const locationsCount = (await caller.getLocationsInfo()).response.info.count;

  return Array.from({ length: locationsCount }, (_: any, index: number) => index + 1).map((id) => ({
    id: id.toString()
  }));
};

interface LocationsPageProps {
  params: {
    id: string;
  };
}

export const dynamic = 'force-dynamic';
const LocationPage = async ({ params }: LocationsPageProps) => {
  const locationResponse = await caller.getLocation({ params: { id: +params.id } });
  const location = locationResponse.response;

  const characterResponse = await caller.getCharactersMultiple({
    params: {
      multiple: location.residents.map(
        (residentLink) => +residentLink.replace('https://rickandmortyapi.com/api/character/', '')
      )
    }
  });

  const characters = characterResponse.response;

  return (
    <>
      <Typography variant='title-1' tag='h1'>
        {location.name} - {location.type}
      </Typography>
      <Typography variant='title-2' tag='p'>
        Residents
      </Typography>
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

export default LocationPage;
