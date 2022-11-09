import { caller } from '@/server/routes';

interface CharactersPageProps {
  params: {
    page: string;
  };
}

const CharactersPage = async ({ params }: CharactersPageProps) => {
  const characters = await caller.getCharacters({ page: params.page });

  return (
    <section>
      <h1 className='font-bold underline'>
        {characters.response.data.results.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
      </h1>
    </section>
  );
};

export default CharactersPage;
